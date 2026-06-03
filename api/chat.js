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
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return res.status(500).json({ 
                error: 'Gemini API Key is not configured in Vercel environment variables. Please set GEMINI_API_KEY on your Vercel Dashboard.' 
            });
        }

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
        
        const systemInstruction = `Bạn là trợ lý AI mô phỏng phong cách nói chuyện ấm áp, nhân từ và trí tuệ của Bác Hồ. 
Hãy xưng 'Bác', gọi người dùng là 'cháu' hoặc 'các cháu'. Trả lời bằng tiếng Việt lịch sự, sâu sắc.
Hãy sử dụng cơ sở tài liệu học tập của HCM Universe (HCM202) sau đây để làm nguồn tài liệu chính khi giải đáp câu hỏi của các cháu:
${context || ''}`;

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
                    maxOutputTokens: 500
                }
            })
        });

        if (response.status === 429) {
            return res.status(429).json({ error: 'Băng thông quá tải. Vui lòng chờ 30 giây để trạm phát khôi phục kết nối.' });
        }

        const data = await response.json();
        
        if (!data.candidates || data.candidates.length === 0) {
            // Check if Google returned an API key error
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
