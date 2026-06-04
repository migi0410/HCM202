/* ==========================================================================
   HCM UNIVERSE - SHARED GAME DATA & LOCALSTORAGE CONTROLLER (HCM202)
   ========================================================================== */

// 1. QUESTION DATABASE (VIETNAMESE STUDIES FOR HCM202)
const QUESTIONS_DATA = [
    {
        id: 1,
        question: "Theo tư tưởng Hồ Chí Minh, lực lượng nào là nền tảng của khối đại đoàn kết toàn dân tộc?",
        options: [
            { key: "A", text: "Liên minh công nhân – nông dân – trí thức" },
            { key: "B", text: "Giai cấp công nhân" },
            { key: "C", text: "Giai cấp nông dân" },
            { key: "D", text: "Đội ngũ trí thức" }
        ],
        correct: "A",
        explanation: "Hồ Chí Minh khẳng định khối đại đoàn kết toàn dân tộc phải được xây dựng trên nền tảng liên minh giữa công nhân, nông dân và trí thức dưới sự lãnh đạo của Đảng."
    },
    {
        id: 2,
        question: "Để thực hiện đoàn kết dân tộc, Đảng ta và Chủ tịch Hồ Chí Minh đã đề ra chính sách gì?",
        options: [
            { key: "A", text: "Mặt trận" },
            { key: "B", text: "Tôn giáo" },
            { key: "C", text: "Dân Tộc" },
            { key: "D", text: "Xã Hội" }
        ],
        correct: "A",
        explanation: "Trong tư tưởng Hồ Chí Minh, để tập hợp và phát huy sức mạnh của toàn dân tộc, cần có một hình thức tổ chức phù hợp. Vì vậy, Người chủ trương xây dựng Mặt trận dân tộc thống nhất nhằm quy tụ mọi giai cấp, tầng lớp, dân tộc, tôn giáo và những người Việt Nam yêu nước vào một khối đoàn kết chung. Qua từng thời kỳ cách mạng, Mặt trận dân tộc thống nhất được tổ chức dưới nhiều hình thức khác nhau như Mặt trận Việt Minh, Mặt trận Liên Việt và Mặt trận Tổ quốc Việt Nam."
    },
    {
        id: 3,
        question: "Tư tưởng đại đoàn kết dân tộc của Hồ Chí Minh là sự kế thừa quan điểm nào của Chủ nghĩa Mác - Lênin?",
        options: [
            { key: "A", text: "\"Cách mạng là sự nghiệp của quần chúng\"." },
            { key: "B", text: "\"Khoan thư sức dân là kế sâu rễ bền gốc\"." },
            { key: "C", text: "\"Chở thuyền là dân, lật thuyền cũng là dân\"." },
            { key: "D", text: "\"Liên Nga, thân Cộng, ủng hộ công nông\"." }
        ],
        correct: "A",
        explanation: "Tư tưởng đại đoàn kết dân tộc của Hồ Chí Minh được hình thành trên cơ sở kế thừa và vận dụng sáng tạo quan điểm của chủ nghĩa Mác - Lênin về vai trò của quần chúng nhân dân trong lịch sử. Chủ nghĩa Mác - Lênin khẳng định: Quần chúng nhân dân là người sáng tạo ra lịch sử, cách mạng là sự nghiệp của quần chúng. Từ quan điểm đó, Hồ Chí Minh cho rằng cách mạng muốn thành công phải dựa vào sức mạnh của nhân dân, tập hợp được đông đảo các tầng lớp nhân dân vào khối đại đoàn kết dân tộc."
    },
    {
        id: 4,
        question: "Một trong những quan điểm cơ bản của tư tưởng Hồ Chí Minh: Đại đoàn kết dân tộc là:",
        options: [
            { key: "A", text: "Vấn đề chiến lược, quyết định thành công của cách mạng." },
            { key: "B", text: "Mục tiêu, nhiệm vụ cần quan tâm đúng mức của cách mạng." },
            { key: "C", text: "Vấn đề sách lược, có ý nghĩa trong từng giai đoạn cách mạng." }
        ],
        correct: "A",
        explanation: "Hồ Chí Minh luôn khẳng định đại đoàn kết dân tộc là vấn đề có ý nghĩa chiến lược, quyết định sự thành công của cách mạng Việt Nam. Đây không phải là giải pháp tạm thời hay chỉ áp dụng trong một giai đoạn nhất định mà là nhiệm vụ xuyên suốt trong toàn bộ tiến trình cách mạng."
    },
    {
        id: 5,
        question: "Theo Hồ Chí Minh, mục đích cao nhất của đại đoàn kết dân tộc là gì?",
        options: [
            { key: "A", text: "Tập hợp lực lượng để phát triển kinh tế." },
            { key: "B", text: "Đảm bảo quyền lợi cho từng giai cấp riêng biệt." },
            { key: "C", text: "Phục vụ sự nghiệp cách mạng vì độc lập dân tộc, thống nhất đất nước và hạnh phúc của nhân dân." },
            { key: "D", text: "Tăng cường vai trò của các tổ chức chính trị - xã hội." }
        ],
        correct: "C",
        explanation: "Đại đoàn kết dân tộc không phải mục đích tự thân mà nhằm huy động sức mạnh toàn dân để thực hiện các mục tiêu của cách mạng: độc lập dân tộc, thống nhất đất nước, xây dựng đất nước và đem lại hạnh phúc cho nhân dân."
    },
    {
        id: 6,
        question: "Chọn phương án đúng nhất theo tư tưởng Hồ Chí Minh: Mặt trận dân tộc thống nhất là .......... .",
        options: [
            { key: "A", text: "nơi diễn ra cuộc đấu tranh giải phóng dân tộc, thống nhất đất nước" },
            { key: "B", text: "tổ chức chính trị - xã hội quy tụ mọi tổ chức và cá nhân yêu nước" },
            { key: "C", text: "tổ chức hợp thành từ Mặt trận Việt minh và Hội Liên Việt" },
            { key: "D", text: "tổ chức có tên gọi Mặt trận Tổ quốc Việt Nam" }
        ],
        correct: "B",
        explanation: "Mặt trận dân tộc thống nhất là hình thức tổ chức của khối đại đoàn kết toàn dân, tập hợp các giai cấp, tầng lớp xã hội, dân tộc, tôn giáo và mọi người Việt Nam yêu nước để thực hiện mục tiêu chung của dân tộc."
    },
    {
        id: 7,
        question: "Theo tư tưởng Hồ Chí Minh, đại đoàn kết toàn dân tộc mang tính chất gì đối với tiến trình cách mạng Việt Nam?",
        options: [
            { key: "A", text: "Là một thủ đoạn chính trị nhất thời để tập hợp lực lượng." },
            { key: "B", text: "Là vấn đề có ý nghĩa chiến lược, mang tính lâu dài, nhất quán và xuyên suốt." },
            { key: "C", text: "Chỉ là một khẩu hiệu chiến lược được áp dụng trong thời kỳ kháng chiến chống Pháp." },
            { key: "D", text: "Là mục tiêu chỉ dành riêng cho giai cấp công nhân và nông dân" }
        ],
        correct: "B",
        explanation: "Đại đoàn kết toàn dân tộc là vấn đề lâu dài, nhất quán và xuyên suốt tiến trình cách mạng Việt Nam. Khác với cách mạng tư sản coi đoàn kết là thủ đoạn chính trị, trong tư tưởng Hồ Chí Minh, đoàn kết không phải là một thủ đoạn chính trị nhất thời mang tính sách lược mà là một vấn đề lâu dài xuyên suốt."
    },
    {
        id: 8,
        question: "Yếu tố nào sau đây KHÔNG phải là một trong đóng bốn điều kiện cốt lõi để xây dựng khối đại đoàn kết dân tộc?",
        options: [
            { key: "A", text: "Kế thừa truyền thống yêu nước, nhân nghĩa, đoàn kết của dân tộc." },
            { key: "B", text: "Có lòng khoan dung, độ lượng với con người." },
            { key: "C", text: "Triệt tiêu mọi lợi ích cá biệt của cá nhân để phục vụ hoàn toàn cho lợi ích chung." },
            { key: "D", text: "Có niềm tin vào nhân dân" }
        ],
        correct: "C",
        explanation: "Điều kiện thứ ba để xây dựng khối đại đoàn kết là phải lấy lợi ích chung làm điểm quy tụ, đồng thời tôn trọng các lợi ích khác biệt chính đáng. Cần phải tôn trọng những điểm khác biệt của các cá nhân và bộ phận xã hội nếu những khác biệt đó không trái với lợi ích chung của quốc gia - dân tộc. Việc triệt tiêu mọi lợi ích cá nhân là sai với tư tưởng của Người."
    },
    {
        id: 9,
        question: "Trong tư tưởng Hồ Chí Minh, đại đoàn kết dân tộc cần đảm bảo nguyên tắc nào để đạt được sự bền vững lâu dài?",
        options: [
            { key: "A", text: "Cân bằng lợi ích của mọi tầng lớp và xây dựng lòng tin từ nhân dân." },
            { key: "B", text: "Tăng cường giáo dục chính trị cho tất cả các tầng lớp xã hội." },
            { key: "C", text: "Tăng cường tính kỷ luật trong quân đội và công an." },
            { key: "D", text: "Tập trung vào việc xây dựng cơ sở vật chất cho đất nước." }
        ],
        correct: "A",
        explanation: "Theo Hồ Chí Minh, muốn xây dựng khối đại đoàn kết bền vững phải bảo đảm hài hòa lợi ích giữa các giai cấp, tầng lớp trong xã hội, đồng thời phải tin dân, dựa vào dân và phát huy quyền làm chủ của nhân dân. Đây là cơ sở để tạo nên sự đồng thuận và đoàn kết lâu dài."
    },
    {
        id: 10,
        question: "Theo Hồ Chí Minh, đại đoàn kết dân tộc phải kết hợp với yếu tố nào để tạo nên sức mạnh tổng hợp?",
        options: [
            { key: "A", text: "Đoàn kết quốc tế (Sức mạnh thời đại)" },
            { key: "B", text: "Phát triển kinh tế thị trường tự do" },
            { key: "C", text: "Tăng cường hiện đại hóa vũ khí quân sự" },
            { key: "D", text: "Mở rộng hệ thống trường học chính trị" }
        ],
        correct: "A",
        explanation: "Hồ Chí Minh khẳng định sức mạnh của dân tộc phải kết hợp chặt chẽ với sức mạnh của thời đại, đại đoàn kết dân tộc luôn gắn liền với đoàn kết quốc tế để cô lập kẻ thù và tạo thế thượng phong cho cách mạng."
    },
    {
        id: 11,
        question: "Khẩu hiệu chiến lược nổi tiếng nào đúc kết cô đọng tinh thần đại đoàn kết dân tộc của Hồ Chí Minh?",
        options: [
            { key: "A", text: "\"Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công\"" },
            { key: "B", text: "\"Không có gì quý hơn độc lập, tự do\"" },
            { key: "C", text: "\"Không sợ thiếu, chỉ sợ không công bằng\"" },
            { key: "D", text: "\"Quyết tử cho Tổ quốc quyết sinh\"" }
        ],
        correct: "A",
        explanation: "Đây là câu phát biểu bất hủ của Người tại Đại hội thống nhất Việt Minh - Liên Việt năm 1951, đúc kết chân lý lịch sử: Có đoàn kết mới có thành công, đoàn kết càng rộng rãi thành công càng to lớn."
    },
    {
        id: 12,
        question: "Để khối đại đoàn kết dân tộc lâu bền, lực lượng nào đóng vai trò hạt nhân lãnh đạo?",
        options: [
            { key: "A", text: "Đảng Cộng sản Việt Nam" },
            { key: "B", text: "Mặt trận Tổ quốc Việt Nam" },
            { key: "C", text: "Tổng liên đoàn Lao động Việt Nam" },
            { key: "D", text: "Hội liên hiệp Phụ nữ Việt Nam" }
        ],
        correct: "A",
        explanation: "Đảng Cộng sản Việt Nam vừa là một thành viên của Mặt trận dân tộc thống nhất, vừa là hạt nhân lãnh đạo tối cao của toàn khối đại đoàn kết toàn dân tộc nhờ đường lối cách mạng đúng đắn."
    },
    {
        id: 13,
        question: "Đảng Cộng sản Việt Nam lãnh đạo Mặt trận dân tộc thống nhất theo nguyên tắc ứng xử nào?",
        options: [
            { key: "A", text: "Thuyết phục, thương lượng, hiệp thương dân chủ, không áp đặt gò ép" },
            { key: "B", text: "Áp dụng mệnh lệnh hành chính tuyệt đối" },
            { key: "C", text: "Để Mặt trận hoạt động tự phát hoàn toàn độc lập" },
            { key: "D", text: "Hợp nhất toàn bộ cơ cấu Mặt trận vào các ban ngành của Đảng" }
        ],
        correct: "A",
        explanation: "Hồ Chí Minh chỉ rõ Đảng lãnh đạo Mặt trận bằng uy tín chính trị, tính gương mẫu và đường lối thuyết phục, tuyệt đối không được gò ép, áp đặt chuyên quyền hành chính."
    },
    {
        id: 14,
        question: "Tổ chức nào đại diện rộng rãi nhất cho khối đại đoàn kết dân tộc theo tư tưởng Hồ Chí Minh?",
        options: [
            { key: "A", text: "Mặt trận dân tộc thống nhất" },
            { key: "B", text: "Quốc hội dân chủ" },
            { key: "C", text: "Chính phủ liên hiệp kháng chiến" },
            { key: "D", text: "Liên minh công - nông - binh" }
        ],
        correct: "A",
        explanation: "Mặt trận dân tộc thống nhất chính là hình thức tổ chức rộng rãi nhất, tập hợp quy tụ mọi lực lượng, đảng phái, tôn giáo, dân tộc yêu nước hành động vì mục tiêu chung của Tổ quốc."
    },
    {
        id: 15,
        question: "Dưới sự chỉ đạo của Hồ Chí Minh, tổ chức Mặt trận nào thành lập ngày 19/5/1941 đã lãnh đạo Cách mạng Tháng Tám thành công?",
        options: [
            { key: "A", text: "Mặt trận Việt Minh (Việt Nam Độc lập Đồng minh)" },
            { key: "B", text: "Mặt trận Liên Việt" },
            { key: "C", text: "Mặt trận Tổ quốc Việt Nam" },
            { key: "D", text: "Mặt trận dân chủ Đông Dương" }
        ],
        correct: "A",
        explanation: "Mặt trận Việt Minh thành lập năm 1941 dưới ngọn cờ của Hồ Chí Minh đã tập hợp toàn dân tộc chuẩn bị lực lượng, phát động tổng khởi nghĩa lật đổ ách phát xít, thực dân giành lại độc lập năm 1945."
    },
    {
        id: 16,
        question: "Thái độ đối với những người lầm đường lạc lối nhưng đã giác ngộ quay về với nhân dân trong tư tưởng Hồ Chí Minh là:",
        options: [
            { key: "A", text: "Khoan dung, độ lượng, cảm hóa và tin tưởng" },
            { key: "B", text: "Nghiêm trị triệt để để răn đe tuyệt đối" },
            { key: "C", text: "Tẩy chay, xa lánh vĩnh viễn khỏi tổ chức chính trị" },
            { key: "D", text: "Bắt buộc họ đóng phạt tài chính nặng nề" }
        ],
        correct: "A",
        explanation: "Người chủ trương khoan dung, độ lượng với những người có khuyết điểm nhưng đã nhận ra sai lầm để đoàn kết tối đa mọi lực lượng yêu nước, bớt đi một kẻ thù là thêm một người bạn cách mạng."
    },
    {
        id: 17,
        question: "Đại đoàn kết toàn dân tộc không phải là thủ đoạn chính trị nhất thời mà là:",
        options: [
            { key: "A", text: "Chính sách chiến lược lâu dài, xuyên suốt toàn bộ tiến trình cách mạng" },
            { key: "B", text: "Sách lược ứng phó trong giai đoạn chiến tranh" },
            { key: "C", text: "Giải pháp hỗ trợ kinh tế tạm thời" },
            { key: "D", text: "Công cụ đối ngoại tạm thời trong đàm phán quốc tế" }
        ],
        correct: "A",
        explanation: "Đoàn kết là bài học sống còn xuyên suốt tiến trình cách mạng từ khởi nghĩa vũ trang, kháng chiến chống ngoại xâm cho đến xây dựng CNXH thời bình."
    },
    {
        id: 18,
        question: "Mặt trận dân tộc thống nhất hoạt động dựa trên nguyên tắc cơ bản nhất nào?",
        options: [
            { key: "A", text: "Hiệp thương dân chủ, thống nhất hành động trên cơ sở lợi ích chung" },
            { key: "B", text: "Tập trung dân chủ quyết định theo đa số tuyệt đối" },
            { key: "C", text: "Chấp hành mệnh lệnh độc tôn của Đảng bộ" },
            { key: "D", text: "Để các thành viên tự do hoạt động không ràng buộc" }
        ],
        correct: "A",
        explanation: "Mặt trận hoạt động trên nguyên tắc hiệp thương dân chủ, mọi quyết định đều được thảo luận bình đẳng để đi đến đồng thuận thống nhất hành động vì lợi ích dân tộc cao nhất."
    },
    {
        id: 19,
        question: "Khối đại đoàn kết toàn dân tộc theo tư tưởng Hồ Chí Minh bao gồm những ai?",
        options: [
            { key: "A", text: "Mọi người Việt Nam yêu nước, không phân biệt giai cấp, tôn giáo, dân tộc" },
            { key: "B", text: "Chỉ gồm công nhân, nông dân và binh lính cách mạng" },
            { key: "C", text: "Chỉ gồm những người đang làm việc trong các cơ quan nhà nước" },
            { key: "D", text: "Mọi công dân có lý lịch trong sạch từ 3 đời trở lên" }
        ],
        correct: "A",
        explanation: "Tư tưởng Hồ Chí Minh mang tính nhân văn sâu sắc, đại đoàn kết toàn dân tộc có biên độ rộng lớn nhất, ôm trọn mọi người con đất Việt có lòng yêu nước và khát vọng độc lập dân tộc."
    },
    {
        id: 20,
        question: "Để giữ vững khối đại đoàn kết dân tộc bền chặt, chúng ta cần kiên quyết chống lại tư tưởng gì?",
        options: [
            { key: "A", text: "Tư tưởng cục bộ, địa phương, bản vị, hẹp hòi, kỳ thị dân tộc" },
            { key: "B", text: "Tư tưởng tự lực tự cường và độc lập tự chủ" },
            { key: "C", text: "Tư tưởng giữ gìn bản sắc văn hóa dân tộc truyền thống" },
            { key: "D", text: "Tư tưởng mong muốn hợp tác kinh tế quốc tế sâu rộng" }
        ],
        correct: "A",
        explanation: "Các tư tưởng ích kỷ hẹp hòi, cục bộ địa phương là những virus gây chia rẽ lòng dân, phá hoại khối đoàn kết thống nhất nên cần triệt tiêu đấu tranh."
    },
    {
        id: 21,
        question: "Chọn vế còn thiếu của câu nói nổi tiếng: \"Nước Việt Nam là một, dân tộc Việt Nam là một. Sông có thể cạn, núi có thể mòn, song...\"",
        options: [
            { key: "A", text: "\"...chân lý ấy không bao giờ thay đổi.\"" },
            { key: "B", text: "\"...khối đoàn kết dân tộc của chúng ta mãi trường tồn.\"" },
            { key: "C", text: "\"...độc lập tự do của Tổ quốc phải được giữ vững.\"" },
            { key: "D", text: "\"...quân đội ta nhất định sẽ giành chiến thắng.\"" }
        ],
        correct: "A",
        explanation: "Câu nói bất hủ khẳng định ý chí sắt đá về sự thống nhất đất nước toàn vẹn chủ quyền lãnh thổ quốc gia và sự keo sơn của dân tộc Việt Nam."
    },
    {
        id: 22,
        question: "Động lực tinh thần mạnh mẽ nhất để xây dựng đại đoàn kết toàn dân tộc là gì?",
        options: [
            { key: "A", text: "Lòng yêu nước nồng nàn và ý thức tự tôn dân tộc sâu sắc" },
            { key: "B", text: "Chính sách thưởng tiền tài chính lớn cho người tham gia cách mạng" },
            { key: "C", text: "Sự viện trợ kinh tế dồi dào từ các quốc gia đồng minh" },
            { key: "D", text: "Các văn bản quy định xử phạt vi phạm hành chính của chính quyền" }
        ],
        correct: "A",
        explanation: "Lòng yêu nước nồng nàn luôn là nguồn nhiên liệu thắp sáng tinh thần xả thân vì nghĩa lớn, kết dính đồng bào trăm họ vượt qua gian nguy lịch sử."
    },
    {
        id: 23,
        question: "Đại đoàn kết toàn dân tộc trong thực tiễn cách mạng phải được thể hiện bằng cách nào?",
        options: [
            { key: "A", text: "Bằng hành động thực tiễn thông qua các phong trào thi đua yêu nước và tổ chức Mặt trận" },
            { key: "B", text: "Bằng các biểu ngữ khẩu hiệu viết trên tường khẩu hiệu" },
            { key: "C", text: "Bằng các bài viết nghiên cứu lý luận học thuật thuần túy" },
            { key: "D", text: "Bằng các buổi mít tinh tự phát không có tổ chức lãnh đạo" }
        ],
        correct: "A",
        explanation: "Đoàn kết phải biến thành lực lượng vật chất thực tiễn, thông qua các tổ chức quần chúng để cống hiến sức người sức của cho độc lập dân tộc."
    },
    {
        id: 24,
        question: "Mối quan hệ bản chất giữa Đảng Cộng sản và Nhân dân trong tư tưởng Hồ Chí Minh là gì?",
        options: [
            { key: "A", text: "Đảng phục vụ nhân dân, Nhân dân tin yêu và ủng hộ Đảng lãnh đạo cách mạng" },
            { key: "B", text: "Đảng đứng trên cai quản và nhân dân tuân thủ mệnh lệnh hành chính" },
            { key: "C", text: "Mối quan hệ mang tính đối trọng hành chính lạnh lùng" },
            { key: "D", text: "Mối quan hệ kinh tế sòng phẳng trao đổi quyền lợi" }
        ],
        correct: "A",
        explanation: "Đảng không có lợi ích riêng nào khác ngoài lợi ích của nhân dân. Mối quan hệ máu thịt giữ Đảng và Dân là cốt lõi làm nên sức mạnh cách mạng vô biên."
    },
    {
        id: 25,
        question: "Theo Hồ Chí Minh, lòng khoan dung độ lượng xuất phát từ nét đẹp nhân văn cổ truyền nào của Việt Nam?",
        options: [
            { key: "A", text: "Lòng nhân ái, nghĩa đồng bào keo sơn \"thương người như thể thương thân\"" },
            { key: "B", text: "Tinh thần hiếu học vượt khó thi cử đỗ đạt khoa bảng" },
            { key: "C", text: "Tập quán sinh hoạt làng xã nông nghiệp lúa nước" },
            { key: "D", text: "Ý chí đấu tranh vũ trang anh dũng chống ngoại xâm liên tục" }
        ],
        correct: "A",
        explanation: "Lòng khoan dung độ lượng bắt nguồn sâu xa từ đạo lý nhân nghĩa, coi trọng tình nghĩa đồng bào cùng chung bọc trứng Âu Cơ của dân tộc ta."
    },
    {
        id: 26,
        question: "Trong chính sách tôn giáo, để đoàn kết các giai tầng lành mạnh, Hồ Chí Minh chủ trương:",
        options: [
            { key: "A", text: "Tôn trọng tự do tín ngưỡng, thực hiện đoàn kết lương - giáo bền chặt" },
            { key: "B", text: "Ưu tiên xóa bỏ tôn giáo để thống nhất một tư tưởng chính trị" },
            { key: "C", text: "Cấm hoàn toàn các nghi lễ thờ cúng linh đình" },
            { key: "D", text: "Thành lập một tôn giáo nhà nước độc quyền duy nhất" }
        ],
        correct: "A",
        explanation: "Hồ Chí Minh tôn trọng niềm tin tôn giáo của nhân dân, đồng thời hướng lòng yêu kính chúa, yêu kính phật vào việc giải phóng dân tộc, đoàn kết lương giáo toàn diện."
    },
    {
        id: 27,
        question: "Sức mạnh của khối đại đoàn kết toàn dân tộc mang ý nghĩa quyết định thắng lợi đối với nhiệm vụ nào?",
        options: [
            { key: "A", text: "Cả công cuộc kháng chiến giải phóng dân tộc và sự nghiệp xây dựng kiến thiết đất nước giàu mạnh" },
            { key: "B", text: "Chỉ phục vụ trong kháng chiến chống quân xâm lược cứu nước" },
            { key: "C", text: "Chủ yếu phục vụ hoạt động phát triển kinh tế thương mại tự do" },
            { key: "D", text: "Chỉ để làm tăng uy tín chính trị trong đối ngoại bang giao quốc tế" }
        ],
        correct: "A",
        explanation: "Hồ Chí Minh khẳng định có đoàn kết toàn dân tộc mới giải phóng đất nước thành công, và có đoàn kết toàn dân tộc mới xây dựng kiến thiết đất nước phồn vinh bền vững."
    },
    {
        id: 28,
        question: "Tác nhân quyết định hàng đầu để nhân dân tuyệt đối tin tưởng và gia nhập Mặt trận đoàn kết dân tộc là:",
        options: [
            { key: "A", text: "Sự gương mẫu, trong sạch, trung thành và vì dân của đội ngũ cán bộ, đảng viên" },
            { key: "B", text: "Hệ thống loa phát thanh truyền thông quy mô lớn rầm rộ" },
            { key: "C", text: "Các điều luật bắt buộc toàn dân ký cam kết gia nhập Mặt trận" },
            { key: "D", text: "Việc trợ cấp vật chất liên tục cho toàn bộ hộ gia đình tham gia" }
        ],
        correct: "A",
        explanation: "Người chỉ ra cán bộ đảng viên phải thực sự là công bộc trung thành của nhân dân, gương mẫu \"đảng viên đi trước, làng nước theo sau\" để nhân dân vững niềm tin cống hiến."
    },
    {
        id: 29,
        question: "Về mối quan hệ giữa sức mạnh dân tộc và sức mạnh thời đại (đối ngoại), Hồ Chí Minh ví von như thế nào?",
        options: [
            { key: "A", text: "Đoàn kết dân tộc là gốc/nội lực quyết định; đoàn kết quốc tế là nhân tố hỗ trợ cực kỳ quan trọng" },
            { key: "B", text: "Đoàn kết quốc tế quyết định tuyệt đối thắng lợi cách mạng trong nước" },
            { key: "C", text: "Đoàn kết quốc tế là thứ yếu và không có vai trò thực tiễn" },
            { key: "D", text: "Đoàn kết dân tộc phải dựa dẫm hoàn toàn vào viện trợ của nước ngoài" }
        ],
        correct: "A",
        explanation: "Người nêu rõ: Một dân tộc không tự lực cánh sinh thì không xứng đáng được độc lập. Nội lực đại đoàn kết dân tộc là gốc rễ vững bền quyết định thắng bại."
    },
    {
        id: 30,
        question: "Hiện nay, tổ chức kế thừa trung thành của Mặt trận dân tộc thống nhất có tên gọi chính thức là:",
        options: [
            { key: "A", text: "Mặt trận Tổ quốc Việt Nam" },
            { key: "B", text: "Mặt trận liên hiệp dân tộc độc lập" },
            { key: "C", text: "Liên minh các lực lượng dân chủ Việt Nam" },
            { key: "D", text: "Mặt trận dân tộc thống nhất cách mạng" }
        ],
        correct: "A",
        explanation: "Mặt trận Tổ quốc Việt Nam kế thừa hoàn hảo sứ mệnh đoàn kết và tập hợp sức mạnh toàn dân tộc trong thời kỳ đẩy mạnh công nghiệp hóa, hiện đại hóa và hội nhập quốc tế hiện nay."
    }
];

// 2. GUARANTEED REWARD POOL FOR 9 CELLS
const ORIGINAL_PRIZES = [
    { type: 'cash', value: '4k', label: 'Lì Xì 4.000đ 💸' },
    { type: 'cash', value: '4k', label: 'Lì Xì 4.000đ 💸' },
    { type: 'cash', value: '8k', label: 'Lì Xì 8.000đ 💰' },
    { type: 'cash', value: '8k', label: 'Lì Xì 8.000đ 💰' },
    { type: 'cash', value: '12k', label: 'Lì Xì Cực Đỉnh 12.000đ 👑' },
    { type: 'oshi', value: 'oshi', label: 'Bánh Oshi Oishi 🥨' },
    { type: 'oshi', value: 'oshi', label: 'Bánh Oshi Thơm Ngon 🥨' },
    { type: 'oshi', value: 'oshi', label: 'Bánh Oshi Giòn Rụm 🥨' },
    { type: 'oshi', value: 'oshi', label: 'Bánh Oshi Cay Nồng 🥨' }
];

const LOCAL_STORAGE_KEY = 'hcm_universe_game_state';

// 3. FISHER-YATES SHUFFLE ALGORITHM
function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;
    const result = [...array];
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [result[currentIndex], result[randomIndex]] = [
            result[randomIndex], result[currentIndex]];
    }
    return result;
}

// 4. LOAD STATE FROM LOCALSTORAGE
function loadGameState() {
    let raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) {
        // Initialize state with 9 randomly shuffled questions from the 30-question bank
        const allIndices = Array.from({length: QUESTIONS_DATA.length}, (_, i) => i);
        const shuffledIndices = shuffleArray(allIndices);
        const selectedIndices = shuffledIndices.slice(0, 9);

        let newState = {
            answered: Array(9).fill(null), // null: untouched, 'correct', 'incorrect'
            opened: Array(9).fill(false),
            tokens: 0,
            claimedPrizes: [],
            shuffledPrizes: shuffleArray(ORIGINAL_PRIZES),
            score: 0,
            selectedQuestionIndices: selectedIndices
        };
        saveGameState(newState);
        return newState;
    }
    try {
        let parsed = JSON.parse(raw);
        // Backward compatibility: If an old state lacks selectedQuestionIndices, initialize it
        if (!parsed.selectedQuestionIndices || parsed.selectedQuestionIndices.length !== 9) {
            const allIndices = Array.from({length: QUESTIONS_DATA.length}, (_, i) => i);
            const shuffledIndices = shuffleArray(allIndices);
            parsed.selectedQuestionIndices = shuffledIndices.slice(0, 9);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(parsed));
        }
        return parsed;
    } catch (e) {
        console.error("Lỗi parse game state, reset về mặc định.");
        const allIndices = Array.from({length: QUESTIONS_DATA.length}, (_, i) => i);
        const shuffledIndices = shuffleArray(allIndices);
        const selectedIndices = shuffledIndices.slice(0, 9);

        let newState = {
            answered: Array(9).fill(null),
            opened: Array(9).fill(false),
            tokens: 0,
            claimedPrizes: [],
            shuffledPrizes: shuffleArray(ORIGINAL_PRIZES),
            score: 0,
            selectedQuestionIndices: selectedIndices
        };
        saveGameState(newState);
        return newState;
    }
}

// 5. SAVE STATE TO LOCALSTORAGE
function saveGameState(state) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
    if (typeof checkAndEnforceStudyDeckLock === 'function') {
        checkAndEnforceStudyDeckLock();
    }
}

// 6. CLEAR/RESET LOCALSTORAGE STATE
function resetGameState() {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    return loadGameState();
}

// ==========================================================================
// 7. SHARED PORTABLE SFX PLAYER (WEB AUDIO SYNTH)
// ==========================================================================
const GameSFX = {
    ctx: null,
    
    init() {
        if (this.ctx) return;
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
            this.ctx = new AudioContextClass();
        }
    },

    isMuted() {
        // Check if there is an active class 'muted' on the local toggle button, or check localStorage for mute config
        const globalMuteBtn = document.getElementById('btn-mute-hud');
        if (globalMuteBtn) {
            return globalMuteBtn.classList.contains('muted');
        }
        let savedMute = localStorage.getItem('hcm_audio_muted');
        return savedMute === 'true';
    },

    toggleMute() {
        let currentMute = this.isMuted();
        let nextMute = !currentMute;
        localStorage.setItem('hcm_audio_muted', nextMute ? 'true' : 'false');
        
        const muteBtn = document.getElementById('btn-mute-hud');
        if (muteBtn) {
            muteBtn.innerHTML = nextMute ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
            muteBtn.classList.toggle('muted', nextMute);
        }
        return nextMute;
    },

    syncMuteUI() {
        const muteBtn = document.getElementById('btn-mute-hud');
        if (muteBtn) {
            let muted = this.isMuted();
            muteBtn.innerHTML = muted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
            muteBtn.classList.toggle('muted', muted);
        }
    },

    playCorrect() {
        if (this.isMuted()) return;
        this.init();
        if (!this.ctx) return;

        try {
            const now = this.ctx.currentTime;
            const osc1 = this.ctx.createOscillator();
            const osc2 = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc1.type = 'triangle';
            osc1.frequency.setValueAtTime(523.25, now); // C5
            osc1.frequency.setValueAtTime(659.25, now + 0.1); // E5
            osc1.frequency.setValueAtTime(783.99, now + 0.2); // G5
            osc1.frequency.setValueAtTime(1046.50, now + 0.3); // C6

            osc2.type = 'sine';
            osc2.frequency.setValueAtTime(261.63, now); // C4
            osc2.frequency.setValueAtTime(329.63, now + 0.1); // E4
            osc2.frequency.setValueAtTime(392.00, now + 0.2); // G4
            osc2.frequency.setValueAtTime(523.25, now + 0.3); // C5

            gain.gain.setValueAtTime(0.04, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

            osc1.connect(gain);
            osc2.connect(gain);
            gain.connect(this.ctx.destination);

            osc1.start(now);
            osc1.stop(now + 0.7);
            osc2.start(now);
            osc2.stop(now + 0.7);
        } catch (e) {}
    },

    playWrong() {
        if (this.isMuted()) return;
        this.init();
        if (!this.ctx) return;

        try {
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(180, now);
            osc.frequency.linearRampToValueAtTime(90, now + 0.3);

            gain.gain.setValueAtTime(0.04, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.4);
        } catch (e) {}
    },

    playClick() {
        if (this.isMuted()) return;
        this.init();
        if (!this.ctx) return;

        try {
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(1000, now);
            osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);

            gain.gain.setValueAtTime(0.02, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.07);
        } catch (e) {}
    },

    playClaim() {
        if (this.isMuted()) return;
        this.init();
        if (!this.ctx) return;

        try {
            const now = this.ctx.currentTime;
            const frequencies = [587.33, 659.25, 880.00, 1174.66, 1318.51, 1760.00];
            frequencies.forEach((freq, idx) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, now + idx * 0.07);
                
                gain.gain.setValueAtTime(0, now + idx * 0.07);
                gain.gain.linearRampToValueAtTime(0.02, now + idx * 0.07 + 0.02);
                gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.4);
                
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                
                osc.start(now + idx * 0.07);
                osc.stop(now + idx * 0.07 + 0.5);
            });
        } catch (e) {}
    },

    playWarning() {
        if (this.isMuted()) return;
        this.init();
        if (!this.ctx) return;

        try {
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(220, now);
            osc.frequency.setValueAtTime(293.66, now + 0.08);
            osc.frequency.setValueAtTime(220, now + 0.16);

            gain.gain.setValueAtTime(0.03, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.3);
        } catch (e) {}
    }
};

// ==========================================================================
// 8. UNIFIED CANVAS STARFIELD & MOBILE NAV INITS FOR INDEPENDENT PAGES
// ==========================================================================
function initGlobalSharedVisuals() {
    // 1. Starfield Canvas
    const canvas = document.getElementById('starfield-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        let stars = [];
        const numStars = 90;

        class Star {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.z = Math.random() * width;
                this.size = Math.random() * 0.9 + 0.1;
                this.color = '#ecefff';
                this.speed = Math.random() * 0.18 + 0.02;
            }
            update() {
                this.z -= this.speed * 2.0;
                if (this.z <= 0) {
                    this.reset();
                    this.z = width;
                }
            }
            draw() {
                const px = (this.x - width / 2) * (width / this.z) + width / 2;
                const py = (this.y - height / 2) * (width / this.z) + height / 2;
                const size = this.size * (width / this.z);
                
                if (px >= 0 && px <= width && py >= 0 && py <= height) {
                    ctx.beginPath();
                    ctx.arc(px, py, size, 0, Math.PI * 2);
                    ctx.fillStyle = this.color;
                    ctx.fill();
                }
            }
        }

        for (let i = 0; i < numStars; i++) stars.push(new Star());

        function animate() {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = '#010103';
            ctx.fillRect(0, 0, width, height);
            
            for (let i = 0; i < stars.length; i++) {
                stars[i].update();
                stars[i].draw();
            }
            requestAnimationFrame(animate);
        }

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        animate();
    }

    // 2. Mobile Nav Toggle
    const btnNavToggle = document.getElementById('btn-nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (btnNavToggle && navMenu) {
        btnNavToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = btnNavToggle.querySelector('i');
            if (icon) {
                icon.className = navMenu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
            }
        });
    }

    // 3. Mute Toggle Button
    const muteBtn = document.getElementById('btn-mute-hud');
    if (muteBtn) {
        GameSFX.syncMuteUI();
        muteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            GameSFX.toggleMute();
            GameSFX.playClick();
        });
    }
}

// 9. ENFORCE STUDY DECK LOCK (REVIEW SECTION UNLOCKED ONLY AFTER COMPLETING THE GAME)
function checkAndEnforceStudyDeckLock() {
    const state = loadGameState();
    const isFinished = state.answered && state.answered.every(a => a !== null);

    // If we are currently on the review page, but the game is NOT finished, redirect immediately!
    if (window.location.pathname.endsWith('ontap.html')) {
        if (!isFinished) {
            alert("🔒 Phần Ôn Tập chỉ mở khóa sau khi bạn hoàn thành toàn bộ 9 câu hỏi của Thử Thách Vũ Trụ!");
            window.location.href = 'tracnghiem.html';
            return;
        }
    }

    // Hide or show the "Ôn Tập" nav-link and tab-btn elements
    // 1. Header Nav Menu Link for Ôn Tập
    const navLinks = document.querySelectorAll('.nav-menu a[href="ontap.html"]');
    navLinks.forEach(link => {
        const li = link.closest('li');
        if (li) {
            li.style.display = isFinished ? '' : 'none';
        } else {
            link.style.display = isFinished ? '' : 'none';
        }
    });

    // 2. Tab Toggle Buttons for Ôn Tập
    const tabBtns = document.querySelectorAll('.game-tab-toggle-container a[href="ontap.html"]');
    tabBtns.forEach(btn => {
        btn.style.display = isFinished ? '' : 'none';
    });
}

// Expose globally
window.checkAndEnforceStudyDeckLock = checkAndEnforceStudyDeckLock;

// 10. FUTURISTIC SCI-FI CUSTOM CONFIRM POPUP (REPLACES NATIVE CONFIRM)
function showCustomConfirm(message, onConfirm) {
    // Remove existing confirm modal if any
    const existing = document.getElementById('custom-confirm-modal');
    if (existing) existing.remove();

    // Play caution/warning SFX
    if (typeof GameSFX !== 'undefined') {
        GameSFX.playWarning();
    }

    const modal = document.createElement('div');
    modal.id = 'custom-confirm-modal';
    modal.className = 'custom-confirm-overlay';

    modal.innerHTML = `
        <div class="custom-confirm-content">
            <div class="confirm-corner top-left"></div>
            <div class="confirm-corner top-right"></div>
            <div class="confirm-corner bottom-left"></div>
            <div class="confirm-corner bottom-right"></div>
            
            <div class="confirm-header">
                <span class="confirm-badge">[ SYSTEM WARNING // RESET CHANNELS ]</span>
                <h3>CẢNH BÁO TÁI THIẾT LẬP</h3>
            </div>
            
            <div class="confirm-body">
                <p>${message}</p>
            </div>
            
            <div class="confirm-actions">
                <button class="btn btn-outline" id="btn-confirm-cancel">HỦY BỎ</button>
                <button class="btn btn-neon btn-danger-neon" id="btn-confirm-accept">XÁC NHẬN RESET</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Active state with tiny delay to trigger CSS transition scaling
    setTimeout(() => {
        modal.classList.add('active');
        document.documentElement.classList.add('console-open');
        document.body.classList.add('console-open');
    }, 10);

    const btnCancel = modal.querySelector('#btn-confirm-cancel');
    const btnAccept = modal.querySelector('#btn-confirm-accept');

    function closeModal() {
        modal.classList.remove('active');
        document.documentElement.classList.remove('console-open');
        document.body.classList.remove('console-open');
        setTimeout(() => modal.remove(), 350);
    }

    btnCancel.addEventListener('click', () => {
        if (typeof GameSFX !== 'undefined') GameSFX.playClick();
        closeModal();
    });

    btnAccept.addEventListener('click', () => {
        if (typeof GameSFX !== 'undefined') GameSFX.playClaim();
        closeModal();
        if (onConfirm) onConfirm();
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

window.showCustomConfirm = showCustomConfirm;

// 11. CONCURRENT PASSCODE LOCK PROTECTION
function checkAndEnforcePasscode() {
    const isUnlocked = sessionStorage.getItem('hcm_universe_unlocked') === 'true';
    if (isUnlocked) return;

    // Build the Passcode Lock Overlay HTML
    const overlay = document.createElement('div');
    overlay.id = 'passcode-overlay';
    overlay.className = 'passcode-overlay';
    overlay.innerHTML = `
        <div class="passcode-container">
            <div class="passcode-corner top-left"></div>
            <div class="passcode-corner top-right"></div>
            <div class="passcode-corner bottom-left"></div>
            <div class="passcode-corner bottom-right"></div>
            
            <div class="passcode-header">
                <span class="passcode-badge">[ SECURE ARCHIVE ACCESS ]</span>
                <h3>MÃ SÁT HẠCH PHI HÀNH GIA</h3>
                <p>Khu vực thử thách vũ trụ bị khóa. Vui lòng nhập mã bảo mật của nhóm để tiếp tục giải mã tín hiệu lý luận.</p>
            </div>
            
            <div class="passcode-form">
                <input type="password" id="passcode-input" placeholder="Nhập mã bảo mật..." autocomplete="off" />
                <span id="passcode-error" class="passcode-error-msg"></span>
                <button class="btn btn-neon btn-passcode-submit" id="btn-passcode-submit">GIẢI MÃ KHÓA</button>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);
    
    // Prevent scrolling behind the passcode overlay
    document.documentElement.classList.add('console-open');
    document.body.classList.add('console-open');

    const input = overlay.querySelector('#passcode-input');
    const submitBtn = overlay.querySelector('#btn-passcode-submit');
    const errorMsg = overlay.querySelector('#passcode-error');
    const container = overlay.querySelector('.passcode-container');

    if (input) {
        input.focus();
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                validate();
            }
        });
    }

    if (submitBtn) {
        submitBtn.addEventListener('click', validate);
    }

    function validate() {
        const passcode = input.value.trim().toLowerCase();
        const correctPasscode = 'hcm202';
        
        if (passcode === correctPasscode) {
            // Play success SFX if GameSFX is defined
            if (typeof GameSFX !== 'undefined') {
                GameSFX.playClaim();
            }
            
            // Set session storage to unlock all game pages for this session
            sessionStorage.setItem('hcm_universe_unlocked', 'true');
            
            // Decrypt fade-out animation
            overlay.classList.add('unlocked');
            
            // Restore body scroll and clean up
            document.documentElement.classList.remove('console-open');
            document.body.classList.remove('console-open');
            
            setTimeout(() => {
                overlay.remove();
            }, 450);
        } else {
            // Play incorrect/wrong SFX if GameSFX is defined
            if (typeof GameSFX !== 'undefined') {
                GameSFX.playWrong();
            }
            
            // Trigger Shake effect
            container.classList.remove('shake');
            void container.offsetWidth; // trigger reflow
            container.classList.add('shake');
            
            errorMsg.textContent = '[ DECRYPTION ERROR // INVALID PASSCODE ]';
            
            input.value = '';
            input.focus();
            
            setTimeout(() => {
                container.classList.remove('shake');
            }, 500);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    checkAndEnforcePasscode();
    initGlobalSharedVisuals();
    checkAndEnforceStudyDeckLock();
});
