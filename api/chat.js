export default async function handler(req, res) {
    // Set CORS headers for local/cross-origin testing
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { question, history, context } = req.body;
        const provider = process.env.AI_PROVIDER || 'gemini';

        // Read Ollama configs
        const ollamaUrl = process.env.OLLAMA_URL || 'http://localhost:11434';
        const ollamaModel = process.env.OLLAMA_MODEL || 'llama3';

        // Check connection ping
        if (question === 'ping_test_connection') {
            if (provider === 'ollama') {
                try {
                    const pingRes = await fetch(`${ollamaUrl}/api/tags`);
                    if (pingRes.ok) {
                        return res.status(200).json({ reply: 'pong' });
                    } else {
                        return res.status(500).json({ error: 'Ollama is running but returned error state.' });
                    }
                } catch (e) {
                    return res.status(500).json({ error: `Không thể kết nối đến Ollama tại ${ollamaUrl}. Đảm bảo Ollama đã chạy.` });
                }
            } else {
                // Gemini is cloud based, if ping is requested we just return pong assuming internet is up
                return res.status(200).json({ reply: 'pong' });
            }
        }

        const systemInstruction = `Bạn là trợ lý AI mô phỏng phong cách nói chuyện ấm áp, nhân từ và trí tuệ của Bác Hồ. 
Hãy xưng 'Bác', gọi người dùng là 'cháu' hoặc 'các cháu'. Trả lời bằng tiếng Việt lịch sự, sâu sắc.

QUY TẮC QUAN TRỌNG:
1. Độ dài câu trả lời: Ở mức vừa phải và đầy đủ ý nghĩa (khoảng 150 đến 220 từ), chia làm 2-3 đoạn văn rõ ràng. Tránh viết quá ngắn cụt lủn và cũng không viết dài dòng lê thê.
2. Định dạng văn bản: Hỗ trợ sử dụng Markdown cơ bản (dùng ** để in đậm từ khóa quan trọng, dùng dấu gạch đầu dòng - hoặc đánh số 1., 2. để liệt kê các ý). Tuyệt đối không viết thẻ HTML.
3. Xuống dòng bình thường để chia các đoạn văn hoặc các ý liệt kê cho rõ ràng, dễ đọc.
4. Quy tắc chào hỏi: Chỉ chào hỏi xã giao (như 'Chào các cháu', 'Bác rất vui khi...', v.v.) ở lượt hội thoại đầu tiên. Từ lượt hội thoại thứ hai trở đi (đã có lịch sử hội thoại), tuyệt đối KHÔNG chào hỏi lặp lại nữa mà hãy bắt đầu thẳng vào câu trả lời một cách tự nhiên, thân tình.
5. Quốc tịch và Ngôn ngữ thuần Việt: Tuyệt đối chỉ nói về lịch sử, đất nước, con người và khối đại đoàn kết của VIỆT NAM (Tư tưởng Hồ Chí Minh). Nghiêm cấm tuyệt đối nhầm lẫn hoặc nói sang quốc gia khác (như Trung Quốc, Cộng hòa Nhân dân Trung Hoa, Mao Trạch Đông, Đặng Tiểu Bình, v.v.). Không sử dụng bất kỳ chữ Hán, chữ Trung Quốc hay từ ngữ pha trộn nào (ví dụ: cấm dùng 'chủ义'). Viết 100% bằng tiếng Việt chuẩn, tự nhiên, ấm áp, sâu sắc. Ghi rõ 'Đảng Cộng sản Việt Nam' hoặc 'Đảng ta' thay vì dùng tên tiếng Anh/viết tắt (như CPV).
6. Toàn bộ thông tin về cuộc đời và hành trình cứu nước của Bác:
- Quê quán: Tên thật là Nguyễn Sinh Cung, sinh ngày 19/05/1890 tại quê ngoại làng Hoàng Trù (quê nội làng Sen), xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An.
- Ngày 05/06/1911: Bác lấy tên là Văn Ba, lên tàu Amiral Latouche-Tréville rời bến cảng Nhà Rồng (Sài Gòn) ra đi tìm đường cứu nước. Bác bôn ba qua nhiều châu lục (Âu, Phi, Mỹ, Á), làm nhiều nghề gian khổ để quan sát thế giới và rút ra chân lý: "Nhân dân lao động ở đâu cũng bị bóc lột, chủ nghĩa đế quốc ở đâu cũng tàn bạo".
- Ngày 18/06/1919: Lấy tên Nguyễn Ái Quốc, gửi Bản yêu sách của nhân dân An Nam tới Hội nghị Versailles (Pháp).
- Tháng 07/1920: Đọc 'Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa' của V.I. Lênin, tìm thấy con đường cứu nước giải phóng dân tộc là con đường cách mạng vô sản.
- Tháng 12/1920: Tham gia Đại hội Tours, bỏ phiếu tán thành Quốc tế 3 và đồng sáng lập Đảng Cộng sản Pháp.
- Năm 1921 - 1924: Lập Hội Liên hiệp thuộc địa, ra báo Le Paria (Người Cùng Khổ) ở Paris; sang Liên Xô dự Hội nghị Quốc tế Nông dân và Đại hội V Quốc tế Cộng sản.
- Năm 1924 - 1927: Về Quảng Châu (Trung Quốc), lập Hội Việt Nam Cách mạng Thanh niên (1925), ra báo Thanh Niên, huấn luyện cán bộ và xuất bản tác phẩm "Đường Kách mệnh" (1927).
- Ngày 03/02/1930: Chủ trì Hội nghị thành lập Đảng Cộng sản Việt Nam tại Hương Cảng (Trung Quốc).
- Ngày 28/01/1941: Về nước sau 30 năm bôn ba, vượt mốc 108 tại Pác Bó (Cao Bằng), trực tiếp lãnh đạo cách mạng, lập mặt trận Việt Minh.
- Ngày 02/09/1945: Đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình, khai sinh ra nước Việt Nam Dân chủ Cộng hòa.
7. Hãy sử dụng cơ sở tài liệu học tập của HCM Universe (HCM202) sau đây để làm nguồn tài liệu chính khi giải đáp câu hỏi của các cháu:
${context || ''}`;

        // ----------------------------------------------------
        // PROVIDER: OLLAMA
        // ----------------------------------------------------
        if (provider === 'ollama') {
            const ollamaMessages = [];
            ollamaMessages.push({
                role: 'system',
                content: systemInstruction
            });

            if (history && Array.isArray(history)) {
                history.forEach(item => {
                    ollamaMessages.push({
                        role: item.role === 'user' ? 'user' : 'assistant',
                        content: item.text
                    });
                });
            }

            ollamaMessages.push({
                role: 'user',
                content: question
            });

            const response = await fetch(`${ollamaUrl}/api/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: ollamaModel,
                    messages: ollamaMessages,
                    stream: false,
                    options: {
                        temperature: 0.2
                    }
                })
            });

            if (!response.ok) {
                const errData = await response.json().catch(() => ({}));
                return res.status(response.status).json({ error: errData.error || `Lỗi từ Ollama (Model: ${ollamaModel})` });
            }

            const data = await response.json();
            if (!data.message || !data.message.content) {
                return res.status(500).json({ error: 'Mô hình Ollama không phản hồi kết quả hợp lệ.' });
            }

            const reply = data.message.content;
            return res.status(200).json({ reply });
        }

        // ----------------------------------------------------
        // PROVIDER: GEMINI
        // ----------------------------------------------------
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return res.status(500).json({ 
                error: 'Gemini API Key is not configured in Vercel environment variables. Please set GEMINI_API_KEY on your Vercel Dashboard.' 
            });
        }

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
        
        // Format history for Gemini API
        const contents = [];
        if (history && Array.isArray(history)) {
            history.forEach(item => {
                contents.push({
                    role: item.role === 'user' ? 'user' : 'model',
                    parts: [{ text: item.text }]
                });
            });
        }
        
        // Add current question
        contents.push({
            role: 'user',
            parts: [{ text: question }]
        });

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents,
                systemInstruction: {
                    parts: [{ text: systemInstruction }]
                },
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 2048
                }
            })
        });

        if (response.status === 429) {
            return res.status(429).json({ error: 'Băng thông quá tải. Vui lòng chờ 30 giây để trạm phát khôi phục kết nối.' });
        }

        const data = await response.json();
        
        if (!data.candidates || data.candidates.length === 0) {
            if (data.error) {
                return res.status(response.status).json({ error: data.error.message || 'Lỗi API từ Google.' });
            }
            return res.status(500).json({ error: 'Mô hình không trả về kết quả hợp lệ.' });
        }

        const reply = data.candidates[0].content.parts[0].text;
        return res.status(200).json({ reply });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: 'Mất kết nối hệ thống vô tuyến: ' + e.message });
    }
}
