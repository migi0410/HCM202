/* ==========================================================================
   HCM UNIVERSE - SHARED GAME DATA & LOCALSTORAGE CONTROLLER (HCM202)
   ========================================================================== */

// 1. ACADEMIC COURSE CONTENT DATABASE (5 PLANETS & LESSONS IN VIETNAMESE)
const UNIVERSE_DATA = {
    1: {
        title: "Cơ Sở Hình Thành",
        sector: "SECTOR // 01 // FOUNDATIONS",
        coords: "1890 - 1920 // BẢN ĐỊA & PHƯƠNG ĐÔNG",
        colorClass: "preview-p1",
        hudClass: "hud-p1",
        academicFooter: "Giáo trình Tư tưởng Hồ Chí Minh - Chương V: Cơ sở hình thành khối Đại đoàn kết dân tộc.",
        moons: {
            1: {
                title: "Truyền thống yêu nước và đoàn kết dân tộc",
                content: `
                    <img src="assets/images/phan_boi_chau.jpg" alt="Phan Bội Châu" class="doc-embed-img" />
                    <p>Dân tộc Việt Nam có lịch sử hàng nghìn năm dựng nước và giữ nước. Trong suốt quá trình đấu tranh kiên cường đầy gian khổ đó, tinh thần gắn bó, tương trợ và yêu nước đã kết tụ sâu sắc, trở thành giá trị truyền thống tối thượng của đất nước.</p>
                    <div class="doc-quote-block">
                        "Lá lành đùm lá rách"<br>
                        "Một cây làm chẳng nên non, ba cây chụm lại nên hòn núi cao"
                        <span class="doc-quote-author">— Khái quát ý chí quần chúng qua ca dao tục ngữ</span>
                    </div>
                    <h4>Các đặc trưng tiêu biểu:</h4>
                    <ul>
                        <li><strong>Tinh thần tương thân tương ái:</strong> Sự gắn bó chặt chẽ, đùm bọc mật thiết trong đời sống sinh hoạt nông nghiệp tại làng bản, dòng họ.</li>
                        <li><strong>Đoàn kết chống ngoại xâm:</strong> Mỗi khi bờ cõi bị đe dọa, tinh thần đoàn kết lập tức bùng cháy mãnh liệt thành làn sóng nhấn chìm bè lũ cướp nước.</li>
                        <li><strong>Gắn kết giữa các dân tộc:</strong> Các dân tộc anh em sống hòa hợp trên dải đất hình chữ S, chung sức chung lòng giữ gìn biên cương non sông.</li>
                    </ul>
                    <p>Hồ Chí Minh đã kế thừa trọn vẹn giá trị tinh thần này, phát triển và chuyển hóa từ tự phát thành lý luận khoa học, làm bệ đỡ vững chắc cho cách mạng.</p>
                `
            },
            2: {
                title: "Chủ nghĩa Mác – Lênin về vai trò quần chúng nhân dân",
                content: `
                    <img src="assets/images/vi_lenin.jpg" alt="V.I. Lenin" class="doc-embed-img" />
                    <p>Chủ nghĩa Mác – Lênin là cơ sở lý luận trực tiếp và quyết định bản chất cách mạng của Tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc.</p>
                    <h4>Nội dung cốt lõi:</h4>
                    <ul>
                        <li><strong>Quần chúng nhân dân là người sáng tạo ra lịch sử:</strong> Nhân dân chính là chủ thể chân chính thúc đẩy sự phát triển bền vững của xã hội, là lực lượng sản xuất vật chất và tinh thần to lớn.</li>
                        <li><strong>Cách mạng là sự nghiệp của quần chúng:</strong> Sự nghiệp giải phóng dân tộc, giải phóng giai cấp phải do chính quần chúng thực hiện dưới sự lãnh đạo của Đảng tiên phong.</li>
                        <li><strong>Muốn cách mạng thành công phải tập hợp lực lượng:</strong> Muốn có lực lượng mạnh mẽ phải tập hợp quần chúng đông đảo, đoàn kết thống nhất chặt chẽ.</li>
                    </ul>
                    <p>Người chỉ rõ: <em>"Cách mạng là sự nghiệp của quần chúng nhân dân chứ không phải của cá nhân anh hùng nào. Muốn cách mạng thành công thì phải tập hợp quần chúng thành một khối đại đoàn kết thống nhất."</em></p>
                `
            },
            3: {
                title: "Tiếp thu tinh hoa văn hóa nhân loại",
                content: `
                    <img src="assets/images/yeu_sach_1919.png" alt="Bản Yêu Sách 1919" class="doc-embed-img" />
                    <p>Trải qua 30 năm bôn ba khắp các đại lục, Nguyễn Ái Quốc đã tiếp thu có chọn lọc những tư tưởng tiến bộ của nhân loại để làm giàu cho học thuyết đoàn kết toàn dân.</p>
                    <h4>Các nguồn văn hóa tinh hoa:</h4>
                    <ul>
                        <li><strong>Tư tưởng nhân văn phương Đông:</strong> Tiếp thu tinh thần hòa mục, nhân nghĩa của Nho giáo; lòng từ bi hỷ xả, cứu khổ cứu nạn của Phật giáo để áp dụng vào đạo đức cách mạng dân tộc.</li>
                        <li><strong>Tinh thần dân chủ phương Tây:</strong> Tiếp thu lý luận tự do, bình đẳng, bác ái từ Cách mạng Pháp và Tuyên ngôn Độc lập Mỹ nhằm hướng tới quyền tự quyết của các dân tộc.</li>
                        <li><strong>Tự do và bình đẳng:</strong> Hướng tới xây dựng một xã hội tự do, bình đẳng giữa con người với con người, giữa các giai cấp và quốc gia trên thế giới.</li>
                    </ul>
                `
            },
            4: {
                title: "Tổng kết thực tiễn cách mạng",
                content: `
                    <img src="assets/images/nha_rong_1911.png" alt="Bến cảng Nhà Rồng 1911" class="doc-embed-img" />
                    <p>Tư tưởng Đại đoàn kết dân tộc của Hồ Chí Minh là kết quả của sự kết hợp nhuần nhuyễn giữa lý luận với thực tiễn đấu tranh anh dũng của phong trào cứu nước trong nước và phong trào cách mạng thế giới.</p>
                    <h4>Bài học thực tiễn:</h4>
                    <ul>
                        <li><strong>Thất bại của các phong trào trước:</strong> Phong trào Cần Vương, Đông Du hay khởi nghĩa Yên Thế thất bại do chưa quy tụ được toàn dân, thiếu lực lượng lãnh đạo và khối đoàn kết thống nhất bền vững.</li>
                        <li><strong>Thắng lợi rực rỡ cách mạng:</strong> Cách mạng Tháng Tám (1945), kháng chiến chống thực dân Pháp và đế quốc Mỹ thắng lợi nhờ tập hợp đông đảo quần chúng toàn dân tộc chung sức chung lòng đấu tranh.</li>
                    </ul>
                    <div class="doc-quote-block">
                        "Đoàn kết là sức mạnh, là then chốt của thành công."
                        <span class="doc-quote-author">— Hồ Chí Minh</span>
                    </div>
                `
            }
        },
        transmissions: [
            {
                quote: "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công.",
                source: "Hồ Chí Minh, Báo cáo tại Đại hội II của Đảng, 1951"
            },
            {
                quote: "Dân ta có một lòng nồng nàn yêu nước. Đó là một truyền thống quý báu của ta.",
                source: "Hồ Chí Minh, Tinh thần yêu nước của nhân dân ta, 1951"
            },
            {
                quote: "Non sông Việt Nam có trở nên tươi đẹp hay không... chính là nhờ một phần lớn ở công học tập của các em.",
                source: "Hồ Chí Minh, Thư gửi học sinh, 1945"
            }
        ]
    },
    2: {
        title: "Vai Trò Chiến Lược",
        sector: "SECTOR // 02 // STRATEGIC ROLE",
        coords: "1930 - 1945 // CHIẾN LƯỢC CÁCH MẠNG",
        colorClass: "preview-p2",
        hudClass: "hud-p2",
        academicFooter: "Giáo trình Tư tưởng Hồ Chí Minh - Chương V: Vai trò chiến lược của Đại đoàn kết dân tộc.",
        moons: {
            1: {
                title: "Ý nghĩa chiến lược sống còn",
                content: `
                    <img src="assets/images/luan_cuong_1920.png" alt="Luận cương Lênin 1920" class="doc-embed-img" />
                    <p>Hồ Chí Minh khẳng định Đại đoàn kết toàn dân tộc là một vấn đề có ý nghĩa chiến lược lâu dài, nhất quán xuyên suốt tiến trình cách mạng Việt Nam.</p>
                    <h4>Các khía cạnh cốt lõi:</h4>
                    <ul>
                        <li><strong>Chiến lược lâu dài, nhất quán:</strong> Không phải là một thủ đoạn chính trị nhất thời hay mị dân tạm bợ, mà là kim chỉ nam trong mọi thời kỳ lịch sử.</li>
                        <li><strong>Vấn đề mang tính sống còn:</strong> Quyết định trực tiếp sự thành bại của cách mạng dân tộc dân chủ nhân dân và cách mạng xã hội chủ nghĩa.</li>
                    </ul>
                    <div class="doc-quote-block">
                        "Đoàn kết là sức mạnh của chúng ta"<br><br>
                        "Đoàn kết, đoàn kết, đại đoàn kết;<br>
                        Thành công, thành công, đại thành công"
                        <span class="doc-quote-author">— Chân lý lịch sử bất hủ của Hồ Chí Minh</span>
                    </div>
                `
            },
            2: {
                title: "Mục tiêu và nhiệm vụ hàng đầu",
                content: `
                    <img src="assets/images/thanh_lap_dang.png" alt="Thành lập Đảng Cộng sản Việt Nam 1930" class="doc-embed-img" />
                    <p>Đại đoàn kết không chỉ là phương thức tập hợp lực lượng mà còn là mục tiêu cao cả, nhiệm vụ chính trị hàng đầu của Đảng Cộng sản và của toàn dân tộc.</p>
                    <h4>Nguyên tắc triển khai:</h4>
                    <ul>
                        <li><strong>Nhiệm vụ hàng đầu của Đảng:</strong> Phải được quán triệt sâu sắc trong mọi lĩnh vực, từ cương lĩnh, đường lối đến các chính sách kinh tế - xã hội.</li>
                        <li><strong>Sự nghiệp của quần chúng:</strong> Cách mạng là do quần chúng, vì quần chúng. Đảng chỉ đóng vai trò giáo dục, định hướng để nhân dân tự giác đoàn kết đấu tranh tự giải phóng.</li>
                        <li><strong>Đoàn kết chính là nguyện vọng thiết tha nhất của nhân dân trong cuộc đấu tranh giành lại tự do, hòa bình.</strong></li>
                    </ul>
                `
            }
        },
        transmissions: [
            {
                quote: "Đoàn kết là sức mạnh, là then chốt của thành công.",
                source: "Hồ Chí Minh, Lời kêu gọi toàn quốc kháng chiến, 1946"
            },
            {
                quote: "Đoàn kết là điểm mẹ. Điểm này mà thực hiện tốt thì đẻ ra con cháu đều tốt.",
                source: "Hồ Chí Minh, Bài nói chuyện tại Hội nghị cán bộ, 1962"
            },
            {
                quote: "Nước lấy dân làm gốc... Gốc có vững cây mới bền, xây lầu thắng lợi trên nền nhân dân.",
                source: "Hồ Chí Minh, Rễ của dân chủ, 1945"
            }
        ]
    },
    3: {
        title: "Lực Lượng Quy Tụ",
        sector: "SECTOR // 03 // FORCES & FRONT",
        coords: "1941 - 1954 // MẶT TRẬN TOÀN DÂN",
        colorClass: "preview-p3",
        hudClass: "hud-p3",
        academicFooter: "Giáo trình Tư tưởng Hồ Chí Minh - Chương V: Lực lượng và hình thức tổ chức Mặt trận.",
        moons: {
            1: {
                title: "Chủ thể của khối đại đoàn kết",
                content: `
                    <img src="assets/images/nhan_dan_cao_bang.jpg" alt="Nhân dân Cao Bằng" class="doc-embed-img" />
                    <p>Hồ Chí Minh có quan điểm hết sức rộng mở và bao dung về lực lượng tham gia cách mạng. Người quy tụ mọi lực lượng yêu nước Việt Nam:</p>
                    <div class="visual-tag-grid">
                        <div class="visual-tag"><i class="fas fa-users"></i> Toàn thể nhân dân</div>
                        <div class="visual-tag"><i class="fas fa-heart"></i> Người VN yêu nước</div>
                        <div class="visual-tag"><i class="fas fa-briefcase"></i> Các giai cấp xã hội</div>
                        <div class="visual-tag"><i class="fas fa-user-friends"></i> Các tầng lớp, giới</div>
                        <div class="visual-tag"><i class="fas fa-baby-carriage"></i> Mọi lứa tuổi</div>
                        <div class="visual-tag"><i class="fas fa-globe-asia"></i> Các dân tộc</div>
                        <div class="visual-tag"><i class="fas fa-church"></i> Đồng bào tôn giáo</div>
                        <div class="visual-tag"><i class="fas fa-flag"></i> Các đảng phái dân tộc</div>
                        <div class="visual-tag"><i class="fas fa-passport"></i> Kiều bào nước ngoài</div>
                    </div>
                    <p>Bao gồm toàn thể nhân dân Việt Nam, bất kỳ ai mang dòng máu Lạc Hồng và mong muốn bảo vệ tổ quốc, không phân biệt giai cấp, giới tính, tôn giáo hay tuổi tác.</p>
                `
            },
            2: {
                title: "Đặc điểm khối đại đoàn kết",
                content: `
                    <p>Khối đại đoàn kết toàn dân tộc mang các tính chất khoa học, cấu trúc bền vững và bền chặt:</p>
                    <div class="badge-row">
                        <div class="characteristic-badge">Rộng Rãi</div>
                        <div class="characteristic-badge">Lâu Dài</div>
                        <div class="characteristic-badge">Bền Vững</div>
                        <div class="characteristic-badge">Có Tổ Chức</div>
                    </div>
                    <p>Khối đoàn kết toàn dân được gắn kết chặt chẽ thông qua Mặt trận thống nhất, hoạt động tự giác dưới sự lãnh đạo của Đảng và tự nguyện cống hiến vì đất nước.</p>
                `
            },
            3: {
                title: "Mặt trận qua các thời kỳ",
                content: `
                    <img src="assets/images/pac_bo_1941.png" alt="Hang Pác Bó" class="doc-embed-img" />
                    <p>Hệ thống Mặt trận dân tộc thống nhất được thành lập để cụ thể hóa sức mạnh đoàn kết toàn dân qua từng thời kỳ lịch sử đấu tranh cứu nước:</p>
                    <div class="timeline-flow">
                        <div class="timeline-step">
                            <span class="timeline-year">1930</span>
                            <div class="timeline-desc">Hội Phản đế đồng minh — Mặt trận đầu tiên tập hợp nhân dân chống đế quốc</div>
                        </div>
                        <div class="timeline-step">
                            <span class="timeline-year">1936</span>
                            <div class="timeline-desc">Mặt trận dân chủ Đông Dương — Đấu tranh đòi tự do, dân sinh dân chủ</div>
                        </div>
                        <div class="timeline-step">
                            <span class="timeline-year">1939</span>
                            <div class="timeline-desc">Mặt trận nhân dân phản đế — Chống chiến tranh, ách thống trị thực dân</div>
                        </div>
                        <div class="timeline-step">
                            <span class="timeline-year">1941</span>
                            <div class="timeline-desc">Mặt trận Việt Minh — Giành chính quyền trong Cách mạng Tháng Tám hào hùng</div>
                        </div>
                        <div class="timeline-step">
                            <span class="timeline-year">1951</span>
                            <div class="timeline-desc">Mặt trận Liên Việt — Hợp nhất Việt Minh đẩy mạnh kháng chiến chống Pháp</div>
                        </div>
                        <div class="timeline-step">
                            <span class="timeline-year">1955/1976</span>
                            <div class="timeline-desc">Mặt trận Tổ quốc Việt Nam — Đưa cả nước xây dựng XHCN & bảo vệ độc lập</div>
                        </div>
                        <div class="timeline-step">
                            <span class="timeline-year">1960</span>
                            <div class="timeline-desc">Mặt trận dân tộc giải phóng miền Nam VN — Đấu tranh thống nhất non sông</div>
                        </div>
                    </div>
                `
            },
            4: {
                title: "Nguyên tắc xây dựng Mặt trận",
                content: `
                    <img src="assets/images/vo_nguyen_giap.jpg" alt="Đại tướng Võ Nguyên Giáp" class="doc-embed-img" />
                    <p>Việc xây dựng Mặt trận dân tộc thống nhất phải dựa trên các nguyên tắc bất di bất dịch:</p>
                    <ul>
                        <li><strong>Nền tảng liên minh vững chắc:</strong> Phải dựa trên khối liên minh Công nhân – Nông dân – Trí thức làm gốc vững chắc của khối đoàn kết.</li>
                        <li><strong>Dưới sự lãnh đạo của Đảng:</strong> Đảng là hạt nhân lãnh đạo Mặt trận bằng uy tín, sự gương mẫu của đảng viên và đường lối chính sách đúng đắn.</li>
                        <li><strong>Lấy mục tiêu tối cao vì độc lập dân tộc:</strong> Giải quyết hài hòa lợi ích cá nhân, giai tầng vì sự sống còn của đất nước.</li>
                    </ul>
                `
            }
        },
        transmissions: [
            {
                quote: "Trong bầu trời không gì quý bằng nhân dân. Trong thế giới không gì mạnh bằng lực lượng đoàn kết của nhân dân.",
                source: "Hồ Chí Minh, Tuyên ngôn Độc lập, 1945"
            },
            {
                quote: "Công nông là gốc cách mệnh; còn học trò, nhà buôn nhỏ, điền chủ nhỏ... là bầu bạn cách mệnh của công nông.",
                source: "Hồ Chí Minh, Đường Kách mệnh, 1927"
            },
            {
                quote: "Đồng bào Kinh hay Tày, Mường hay Mán... đều là con Rồng cháu Tiên, đều là anh em ruột thịt.",
                source: "Hồ Chí Minh, Thư gửi Đại hội các dân tộc thiểu số, 1946"
            }
        ]
    },
    4: {
        title: "Phương Pháp Củng Cố",
        sector: "SECTOR // 04 // METHODS OF UNITY",
        coords: "1954 - 1975 // ĐOÀN THỂ & HIỆP THƯƠNG",
        colorClass: "preview-p4",
        hudClass: "hud-p4",
        academicFooter: "Giáo trình Tư tưởng Hồ Chí Minh - Chương V: Phương pháp củng cố và xây dựng Mặt trận.",
        moons: {
            1: {
                title: "Ba phương pháp chính",
                content: `
                    <img src="assets/images/phan_van_truong.png" alt="Luật sư Phan Văn Trường" class="doc-embed-img" />
                    <p>Để củng cố và củng cố khối đại đoàn kết toàn dân vững chắc, Hồ Chí Minh đề ra ba phương pháp cốt lõi mang tính khoa học thực tiễn:</p>
                    <div class="card-grid-3">
                        <div class="card-item">
                            <span class="card-num">①</span>
                            <h4 class="card-title">Vận động quần chúng</h4>
                            <p class="card-desc">Tuyên truyền, giáo dục, hướng dẫn giúp đỡ quần chúng hiểu rõ quyền lợi và nghĩa vụ. Phù hợp tâm lý, văn hóa địa phương.</p>
                        </div>
                        <div class="card-item">
                            <span class="card-num">②</span>
                            <h4 class="card-title">Thành lập đoàn thể</h4>
                            <p class="card-desc">Tổ chức quần chúng vào các hội đoàn phù hợp giới tính, lứa tuổi: Công đoàn, Hội Nông dân, Hội Phụ nữ, Đoàn Thanh niên...</p>
                        </div>
                        <div class="card-item">
                            <span class="card-num">③</span>
                            <h4 class="card-title">Mặt trận thống nhất</h4>
                            <p class="card-desc">Tập hợp các đoàn thể nhân dân dưới sự định hướng, hoạt động có tổ chức và phối hợp nhịp nhàng vì mục tiêu chung.</p>
                        </div>
                    </div>
                `
            },
            2: {
                title: "Chi tiết Vận động quần chúng",
                content: `
                    <img src="assets/images/o_mandenxtam.jpeg" alt="Osip Mandelstam" class="doc-embed-img" />
                    <p>Vận động quần chúng đòi hỏi sự tinh tế, tôn trọng và gần gũi thực tiễn đời sống nhân dân:</p>
                    <ul>
                        <li><strong>Giáo dục, tuyên truyền, hướng dẫn:</strong> Giúp nhân dân nhận thức rõ quyền lợi đi đôi với nghĩa vụ công dân đối với tương lai tổ quốc.</li>
                        <li><strong>Phù hợp tâm tư trình độ:</strong> Tuyên truyền phải xuất phát từ thực tế, tôn trọng phong tục tập quán lành mạnh và văn hóa đa dạng của từng giai tầng xã hội.</li>
                    </ul>
                `
            },
            3: {
                title: "Chi tiết Đoàn thể & Mặt trận",
                content: `
                    <img src="assets/images/borodin.jpg" alt="Mikhail Borodin" class="doc-embed-img" />
                    <p>Đưa nhân dân vào các tổ chức quần chúng có kỷ cương và định hướng thống nhất là bí quyết tạo nên sức mạnh dời non lấp biển:</p>
                    <ul>
                        <li><strong>Đoàn thể quần chúng:</strong> Là nơi sinh hoạt, đoàn kết hỗ trợ lẫn nhau của các giai cấp, vùng miền, giới tính.</li>
                        <li><strong>Chỉ đạo thống nhất:</strong> Các tổ chức tuy độc lập nhưng liên kết chặt chẽ trong Mặt trận dân tộc dưới định hướng khoa học để ngăn chặn sự rời rạc, cát cứ.</li>
                    </ul>
                `
            }
        },
        transmissions: [
            {
                quote: "Phải đặt lợi ích của Đảng, của Tổ quốc, của nhân dân lên trên hết, trước hết.",
                source: "Hồ Chí Minh, Di chúc, 1969"
            },
            {
                quote: "Muốn đoàn kết thực sự phải có lòng thương yêu nhau, giúp đỡ nhau như anh em trong một nhà.",
                source: "Hồ Chí Minh, Bài nói tại Đại hội Mặt trận, 1955"
            },
            {
                quote: "Cán bộ là cái gốc của mọi công việc... Muôn việc thành công hoặc thất bại, đều do cán bộ tốt hoặc kém.",
                source: "Hồ Chí Minh, Sửa đổi lối làm việc, 1947"
            }
        ]
    },
    5: {
        title: "Kết Nối Thời Đại",
        sector: "SECTOR // 05 // CONNECTIONS & TODAY",
        coords: "1975 - NAY // ĐOÀN KẾT QUỐC TẾ",
        colorClass: "preview-p5",
        hudClass: "hud-p5",
        academicFooter: "Giáo trình Tư tưởng Hồ Chí Minh - Chương V: Đoàn kết dân tộc kết hợp đoàn kết quốc tế.",
        moons: {
            1: {
                title: "Quan hệ với đoàn kết quốc tế",
                content: `
                    <img src="assets/images/tong_khanh_linh.jpg" alt="Tống Khánh Linh" class="doc-embed-img" />
                    <p>Đại đoàn kết dân tộc và đoàn kết quốc tế có mối quan hệ biện chứng chặt chẽ, tạo nên sức mạnh vĩ đại của cách mạng:</p>
                    <ul>
                        <li><strong>Nội lực là nền tảng:</strong> Đại đoàn kết dân tộc là cơ sở cho đoàn kết quốc tế. Ta có đoàn kết đấu tranh tự lập tự cường thì thế giới mới trân quý và ủng hộ.</li>
                    </ul>
                    <div class="doc-quote-block">
                        "Muốn người ta giúp cho, thì trước hết mình phải tự giúp lấy mình"
                        <span class="doc-quote-author">— Hồ Chí Minh nhấn mạnh độc lập tự chủ</span>
                    </div>
                    <ul>
                        <li><strong>Các lực lượng quốc tế cần đoàn kết:</strong> Giai cấp công nhân quốc tế, các dân tộc bị áp bức và lực lượng tiến bộ yêu chuộng hòa bình.</li>
                        <li><strong>Sức mạnh tổng hợp:</strong> Kết hợp hài hòa sức mạnh yêu nước nội sinh của dân tộc với sức mạnh thời đại tiến bộ thế giới.</li>
                    </ul>
                `
            },
            2: {
                title: "Vận dụng trong giai đoạn hiện nay",
                content: `
                    <img src="assets/images/dai_hoi_tours.png" alt="Đại hội Tours 1920" class="doc-embed-img" />
                    <p>Tư tưởng Hồ Chí Minh về Đại đoàn kết dân tộc là chìa khóa vàng đưa đất nước đi lên phát triển hiện đại và hội nhập:</p>
                    <div class="card-grid-2x2">
                        <div class="apply-card">
                            <h5>1. Phát huy sức mạnh toàn dân</h5>
                            <p>Huy động công nhân, nông dân, trí thức, thanh niên, doanh nhân và kiều bào cùng đóng góp sức lực, tài lực, trí lực phát triển đất nước bền vững.</p>
                        </div>
                        <div class="apply-card">
                            <h5>2. Tăng cường đoàn kết dân tộc & tôn giáo</h5>
                            <p>Tôn trọng tự do tín ngưỡng lành mạnh, bình đẳng thực tế giữa các dân tộc anh em, hỗ trợ đồng bào biên giới phát triển toàn diện.</p>
                        </div>
                        <div class="apply-card">
                            <h5>3. Giải quyết các vấn đề xã hội</h5>
                            <p>Cả nước chung lòng ứng phó biến đổi khí hậu, hỗ trợ đồng bào thiên tai lũ lụt, thiện nguyện hiến máu bảo vệ đa dạng môi trường sinh thái.</p>
                        </div>
                        <div class="apply-card">
                            <h5>4. Hội nhập kinh tế quốc tế</h5>
                            <p>Mở rộng hữu nghị đa phương hóa, đón nhận chuyển giao khoa học công nghệ hiện đại quốc tế để số hóa sản xuất nội địa.</p>
                        </div>
                    </div>
                    <p style="margin-top: 12px; font-size: 0.9rem; line-height: 1.5; color: var(--text-muted);"><strong>Minh chứng hiện thực sinh động:</strong> Lãnh đạo Đảng và Nhà nước luôn bám sát quần chúng nhân dân. Điển hình như Tổng Bí thư Tô Lâm trực tiếp xuống vùng ngập lụt xã Trường Sinh (Tuyên Quang) động viên, trao quà cứu trợ cho bà con bị ảnh hưởng bởi siêu bão Yagi (9/2024); Thủ tướng Chính phủ Phạm Minh Chinh quyết liệt chỉ đạo, trực tiếp thăm hỏi và triển khai phong trào thi đua cả nước chung tay "Xóa nhà tạm, nhà dột nát" hoàn thành vào năm 2025. Về mặt quốc tế, Việt Nam đã tích cực hội nhập kinh tế thế giới khi chính thức gia nhập WTO vào năm 2007 và khẳng định trách nhiệm nhân đạo toàn cầu khi tham gia tích cực vào phái bộ Gìn giữ hòa bình Liên Hợp Quốc từ năm 2014 đến nay tại Nam Sudan và Abyei.</p>
                `
            }
        },
        transmissions: [
            {
                quote: "Việt Nam muốn làm bạn với tất cả mọi nước dân chủ và không gây thù oán với một ai.",
                source: "Hồ Chí Minh, Trả lời nhà báo Mỹ S. Éli Mâysi, 1947"
            },
            {
                quote: "Giúp bạn là tự giúp mình.",
                source: "Hồ Chí Minh, Chỉ thị gửi bộ đội đi làm nhiệm vụ quốc tế ở Lào, 1949"
            },
            {
                quote: "Bốn phương vô sản đều là anh em.",
                source: "Hồ Chí Minh, Diễn văn khai mạc Đại hội III của Đảng, 1960"
            }
        ]
    }
};

// 2. QUESTION DATABASE (VIETNAMESE STUDIES FOR HCM202)
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
    { type: 'parking', value: '1 lượt', label: 'Miễn phí 1 lượt gửi xe 🏍️' },
    { type: 'parking', value: '1 lượt', label: 'Miễn phí 1 lượt gửi xe 🏍️' },
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
        
        // Auto-migration: Upgrade any old '4k' prizes to 'parking'
        if (parsed.shuffledPrizes) {
            let migrated = false;
            parsed.shuffledPrizes = parsed.shuffledPrizes.map(p => {
                if (p && p.value === '4k') {
                    migrated = true;
                    return { type: 'parking', value: '1 lượt', label: 'Miễn phí 1 lượt gửi xe 🏍️' };
                }
                return p;
            });
            if (parsed.claimedPrizes) {
                parsed.claimedPrizes = parsed.claimedPrizes.map(p => {
                    if (p && p.value === '4k') {
                        migrated = true;
                        return { type: 'parking', value: '1 lượt', label: 'Miễn phí 1 lượt gửi xe 🏍️' };
                    }
                    return p;
                });
            }
            if (migrated) {
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(parsed));
            }
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
        let savedMute = localStorage.getItem('hcm_audio_muted');
        if (savedMute !== null) {
            return savedMute === 'true';
        }
        // Fallback to DOM class if not in localStorage
        const globalMuteBtn = document.getElementById('btn-mute-hud');
        if (globalMuteBtn) {
            return globalMuteBtn.classList.contains('muted');
        }
        return false;
    },

    getVolume() {
        if (this.isMuted()) return 0;
        let savedVolume = localStorage.getItem('hcm_audio_volume');
        return savedVolume !== null ? parseFloat(savedVolume) : 0.5;
    },

    setVolume(vol) {
        localStorage.setItem('hcm_audio_volume', vol);
        if (vol === 0) {
            localStorage.setItem('hcm_audio_muted', 'true');
        } else {
            localStorage.setItem('hcm_audio_muted', 'false');
        }
        
        if (globalAudio) {
            globalAudio.volume = vol;
            globalAudio.muted = (vol === 0);
        }
        
        this.syncMuteUI();
    },

    toggleMute() {
        let currentMute = this.isMuted();
        let nextMute = !currentMute;
        localStorage.setItem('hcm_audio_muted', nextMute ? 'true' : 'false');
        
        this.syncMuteUI();
        return nextMute;
    },

    syncMuteUI() {
        const muteBtn = document.getElementById('btn-mute-hud');
        const volumeSlider = document.getElementById('hud-volume-slider');
        if (muteBtn) {
            let muted = this.isMuted();
            let savedVolume = localStorage.getItem('hcm_audio_volume');
            let vol = savedVolume !== null ? parseFloat(savedVolume) : 0.5;
            
            if (volumeSlider) {
                volumeSlider.value = muted ? 0 : vol;
            }
            
            let iconClass = 'fa-volume-up';
            if (muted || vol === 0) {
                iconClass = 'fa-volume-mute';
            } else if (vol < 0.3) {
                iconClass = 'fa-volume-off';
            } else if (vol < 0.7) {
                iconClass = 'fa-volume-down';
            }
            
            muteBtn.innerHTML = `<i class="fas ${iconClass}"></i>`;
            muteBtn.classList.toggle('muted', muted || vol === 0);
            
            if (globalAudio) {
                globalAudio.muted = muted;
                globalAudio.volume = muted ? 0 : vol;
            }
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

            const vol = this.getVolume();
            gain.gain.setValueAtTime(0.04 * vol, now);
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

            const vol = this.getVolume();
            gain.gain.setValueAtTime(0.04 * vol, now);
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

            const vol = this.getVolume();
            gain.gain.setValueAtTime(0.02 * vol, now);
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
            const vol = this.getVolume();
            frequencies.forEach((freq, idx) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, now + idx * 0.07);
                
                gain.gain.setValueAtTime(0, now + idx * 0.07);
                gain.gain.linearRampToValueAtTime(0.02 * vol, now + idx * 0.07 + 0.02);
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

            const vol = this.getVolume();
            gain.gain.setValueAtTime(0.03 * vol, now);
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
    const isHomePage = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');
    if (canvas && !isHomePage) {
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

    // 3. Mute Toggle Button & Volume Slider
    const muteBtn = document.getElementById('btn-mute-hud');
    if (muteBtn) {
        // Wrap muteBtn in a volume container
        const container = document.createElement('div');
        container.className = 'hud-volume-container';
        
        muteBtn.parentNode.insertBefore(container, muteBtn);
        container.appendChild(muteBtn);
        
        const sliderWrapper = document.createElement('div');
        sliderWrapper.className = 'hud-volume-slider-wrapper';
        sliderWrapper.innerHTML = `
            <input type="range" id="hud-volume-slider" min="0" max="1" step="0.05" value="0.5" class="hud-volume-slider" title="Điều chỉnh âm lượng" />
        `;
        container.appendChild(sliderWrapper);
        
        const volumeSlider = sliderWrapper.querySelector('#hud-volume-slider');
        
        // Load initial volume
        let savedVolume = localStorage.getItem('hcm_audio_volume');
        let currentVolume = savedVolume !== null ? parseFloat(savedVolume) : 0.5;
        volumeSlider.value = currentVolume;
        
        GameSFX.syncMuteUI();
        
        muteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            GameSFX.toggleMute();
            GameSFX.playClick();
        });
        
        volumeSlider.addEventListener('input', (e) => {
            const vol = parseFloat(e.target.value);
            GameSFX.setVolume(vol);
        });
        
        volumeSlider.addEventListener('click', (e) => {
            e.stopPropagation();
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
window.UNIVERSE_DATA = UNIVERSE_DATA;
window.QUESTIONS_DATA = QUESTIONS_DATA;
window.ORIGINAL_PRIZES = ORIGINAL_PRIZES;
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

    // Bypass passcode lock for Home page and Minh chứng thực tiễn page
    const pathname = window.location.pathname;
    const isHome = pathname === '/' || pathname.endsWith('index.html') || pathname === '';
    const isThucTien = pathname.includes('thuctien');
    if (isHome || isThucTien) return;

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

// 12. GLOBAL CONFETTI ENGINE
window.triggerConfetti = function(durationMs = 2500) {
    let canvas = document.getElementById('global-confetti-canvas');
    if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.id = 'global-confetti-canvas';
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100vw';
        canvas.style.height = '100vh';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '999999';
        document.body.appendChild(canvas);
    }
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const colors = [
        '#FFD700', // Gold
        '#FFA500', // Orange
        '#FF4500', // Red-Orange
        '#00CED1', // Neon Teal
        '#00FF7F', // Spring Green
        '#FF69B4', // Pink
        '#9400D3'  // Dark Violet
    ];

    let particles = [];
    let active = true;

    class Particle {
        constructor(x, y, direction) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 8 + 6;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            
            const angle = direction === 'left' 
                ? (Math.random() * 30 + 120) * Math.PI / 180 
                : direction === 'right'
                ? (Math.random() * 30 + 30) * Math.PI / 180  
                : (Math.random() * 180 + 180) * Math.PI / 180; 
                
            const speed = Math.random() * 15 + 10;
            this.vx = Math.cos(angle) * speed;
            this.vy = -Math.sin(angle) * speed;
            
            this.gravity = 0.4;
            this.drag = 0.98;
            this.rotation = Math.random() * 360;
            this.rotationSpeed = Math.random() * 10 - 5;
            this.opacity = 1;
        }

        update() {
            this.vx *= this.drag;
            this.vy *= this.drag;
            this.vy += this.gravity;
            this.x += this.vx;
            this.y += this.vy;
            this.rotation += this.rotationSpeed;
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation * Math.PI / 180);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.opacity;
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
            ctx.restore();
        }
    }

    function burst(x, y, direction, count = 50) {
        for (let i = 0; i < count; i++) {
            particles.push(new Particle(x, y, direction));
        }
    }

    burst(0, height, 'right', 60);
    burst(width, height, 'left', 60);

    const flowInterval = setInterval(() => {
        if (!active) {
            clearInterval(flowInterval);
            return;
        }
        burst(0, height, 'right', 3);
        burst(width, height, 'left', 3);
    }, 100);

    let animationFrameId;
    function render() {
        if (!active && particles.length === 0) {
            ctx.clearRect(0, 0, width, height);
            canvas.remove();
            return;
        }
        ctx.clearRect(0, 0, width, height);

        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.update();
            p.draw();

            if (p.y > height || p.x < 0 || p.x > width) {
                particles.splice(i, 1);
            } else if (!active) {
                p.opacity -= 0.02;
                if (p.opacity <= 0) {
                    particles.splice(i, 1);
                }
            }
        }

        animationFrameId = requestAnimationFrame(render);
    }

    render();

    const handleResize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    setTimeout(() => {
        active = false;
        clearInterval(flowInterval);
        setTimeout(() => {
            window.removeEventListener('resize', handleResize);
        }, 1000);
    }, durationMs);
};

// 13. GLOBAL AI CHATBOT DYNAMIC INJECTION
function initGlobalChatbot() {
    if (document.getElementById('chatbot-bubble')) return;

    // Create HTML elements
    const bubble = document.createElement('div');
    bubble.id = 'chatbot-bubble';
    bubble.className = 'chatbot-bubble';
    bubble.setAttribute('aria-label', 'Hỏi Bác Hồ AI');
    bubble.setAttribute('title', 'Hỏi Bác Hồ AI Portal');
    bubble.innerHTML = `
        <div class="bubble-glow"></div>
        <div class="bubble-inner">
            <i class="fas fa-robot"></i>
        </div>
        <span class="bubble-tooltip">HỎI BÁC HỒ AI</span>
    `;

    const panel = document.createElement('div');
    panel.id = 'chatbot-panel';
    panel.className = 'chatbot-panel';
    panel.innerHTML = `
        <div class="chatbot-header">
            <div class="chatbot-title-group">
                <span class="chatbot-status" id="chatbot-status-indicator">[ TRANSMISSION OFFLINE ]</span>
                <h3 class="chatbot-title"><i class="fas fa-broadcast-tower"></i> CỔNG TRUYỀN TIN AI</h3>
            </div>
            <button class="chatbot-close-btn" id="btn-close-chatbot" aria-label="Close Chatbot"><i class="fas fa-times"></i></button>
        </div>
        
        <div class="chatbot-messages" id="chatbot-messages-container">
            <div class="message system-message">
                <div class="message-text">Chào cháu! Bác là trợ lý AI mô phỏng học liệu HCM Universe. Cháu có thể hỏi Bác bất kỳ câu hỏi nào về Tư tưởng Hồ Chí Minh hoặc tài liệu học tập của các hành tinh.</div>
            </div>
        </div>

        <form class="chatbot-input-area" id="chatbot-form">
            <input type="text" id="chatbot-input" placeholder="Nhập câu hỏi tại đây..." required autocomplete="off" />
            <button type="submit" id="btn-send-chat" aria-label="Gửi tin nhắn"><i class="fas fa-paper-plane"></i></button>
        </form>
    `;

    document.body.appendChild(bubble);
    document.body.appendChild(panel);

    const chatbotBubble = document.getElementById('chatbot-bubble');
    const chatbotPanel = document.getElementById('chatbot-panel');
    const btnCloseChatbot = document.getElementById('btn-close-chatbot');
    const chatbotForm = document.getElementById('chatbot-form');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotMessagesContainer = document.getElementById('chatbot-messages-container');
    const chatbotStatusIndicator = document.getElementById('chatbot-status-indicator');

    let chatHistory = [];
    let isWaitingForAI = false;

    function tokenize(text) {
        if (!text) return [];
        return text
            .toLowerCase()
            .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, " ")
            .split(/\s+/)
            .filter(w => w.length > 1);
    }

    function findRelevantContext(question, limit = 2) {
        const docs = [];
        if (typeof UNIVERSE_DATA === 'undefined') return "";
        
        Object.keys(UNIVERSE_DATA).forEach(planetId => {
            const planet = UNIVERSE_DATA[planetId];
            Object.keys(planet.moons).forEach(moonId => {
                const moon = planet.moons[moonId];
                const cleanContent = moon.content.replace(/<\/?[^>]+(>|$)/g, " ").replace(/\s+/g, " ").trim();
                docs.push({
                    title: `Hành tinh ${planetId} (${planet.title}) - Phân mục "${moon.title}"`,
                    content: cleanContent,
                    keywords: `hành tinh ${planetId} ${planet.title} ${moon.title} ${cleanContent}`
                });
            });
            if (planet.transmissions) {
                planet.transmissions.forEach((t, i) => {
                    docs.push({
                        title: `Hành tinh ${planetId} (${planet.title}) - Trích dẫn gốc #${i+1}`,
                        content: `"${t.quote}" (${t.source})`,
                        keywords: `hành tinh ${planetId} ${planet.title} trích dẫn ${t.quote} ${t.source}`
                    });
                });
            }
        });

        const queryTokens = tokenize(question);
        if (queryTokens.length === 0) {
            return "CƠ SỞ DỮ LIỆU HỌC TẬP (HCM202):\n\n" + docs.slice(0, limit).map(d => `[NGUỒN: ${d.title}]\n${d.content}`).join("\n\n");
        }

        const scoredDocs = docs.map(doc => {
            const docTokens = tokenize(doc.keywords);
            let score = 0;
            queryTokens.forEach(token => {
                if (docTokens.includes(token)) score += 1;
            });
            return { doc, score };
        });

        scoredDocs.sort((a, b) => b.score - a.score);
        let relevant = scoredDocs.filter(item => item.score > 0).slice(0, limit).map(item => item.doc);
        if (relevant.length === 0) {
            relevant = [scoredDocs[0].doc];
        }

        let contextText = "CƠ SỞ DỮ LIỆU HỌC TẬP HCM202 (TRÍCH XUẤT PHÙ HỢP):\n\n";
        relevant.forEach(doc => {
            contextText += `[NGUỒN: ${doc.title}]\nNội dung: ${doc.content}\n\n`;
        });
        return contextText;
    }

    async function checkApiConnection() {
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question: 'ping_test_connection' })
            });
            if (response.ok) {
                chatbotStatusIndicator.textContent = "[ TRANSMISSION ONLINE ]";
                chatbotStatusIndicator.classList.add('online');
            } else {
                chatbotStatusIndicator.textContent = "[ TRANSMISSION OFFLINE ]";
                chatbotStatusIndicator.classList.remove('online');
            }
        } catch (e) {
            chatbotStatusIndicator.textContent = "[ TRANSMISSION OFFLINE ]";
            chatbotStatusIndicator.classList.remove('online');
        }
    }

    checkApiConnection();

    if (chatbotBubble) {
        chatbotBubble.addEventListener('click', () => {
            if (typeof GameSFX !== 'undefined') GameSFX.playClick();
            chatbotPanel.classList.toggle('active');
            checkApiConnection();
            if (chatbotPanel.classList.contains('active')) {
                setTimeout(() => chatbotInput.focus(), 300);
            }
        });
    }

    if (btnCloseChatbot) {
        btnCloseChatbot.addEventListener('click', () => {
            if (typeof GameSFX !== 'undefined') GameSFX.playClick();
            chatbotPanel.classList.remove('active');
        });
    }

    function appendUserMessage(text) {
        const msg = document.createElement('div');
        msg.className = 'message user-message';
        msg.innerHTML = `<div class="message-text"></div>`;
        msg.querySelector('.message-text').textContent = text;
        chatbotMessagesContainer.appendChild(msg);
        scrollToBottom();
    }

    function appendSystemMessage(text) {
        const msg = document.createElement('div');
        msg.className = 'message system-message';
        msg.innerHTML = `<div class="message-text"></div>`;
        msg.querySelector('.message-text').textContent = text;
        chatbotMessagesContainer.appendChild(msg);
        scrollToBottom();
    }

    function parseMarkdown(text) {
        if (!text) return "";
        let html = text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
        html = html.replace(/^(?:\s*[-*]\s+)(.+)$/gm, '<li>$1</li>');
        html = html.replace(/^(?:\s*\d+\.\s+)(.+)$/gm, '<li>$1</li>');
        return html;
    }

    function appendAiMessage(text) {
        const msg = document.createElement('div');
        msg.className = 'message ai-message';
        msg.innerHTML = `<div class="message-text"></div>`;
        const textContainer = msg.querySelector('.message-text');
        chatbotMessagesContainer.appendChild(msg);
        scrollToBottom();
        
        let i = 0;
        textContainer.textContent = "";
        const speed = 10;
        const interval = setInterval(() => {
            if (i < text.length) {
                textContainer.textContent += text[i];
                i++;
                if (i % 5 === 0) scrollToBottom();
            } else {
                clearInterval(interval);
                textContainer.innerHTML = parseMarkdown(text);
                scrollToBottom();
            }
        }, speed);
    }

    function showTypingIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'message ai-message typing-indicator';
        indicator.id = 'chat-typing-indicator';
        indicator.innerHTML = `
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        `;
        chatbotMessagesContainer.appendChild(indicator);
        scrollToBottom();
    }

    function removeTypingIndicator() {
        const el = document.getElementById('chat-typing-indicator');
        if (el) el.remove();
    }

    function scrollToBottom() {
        chatbotMessagesContainer.scrollTop = chatbotMessagesContainer.scrollHeight;
    }

    if (chatbotForm) {
        chatbotForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (isWaitingForAI) return;

            const text = chatbotInput.value.trim();
            if (!text) return;

            chatbotInput.value = "";
            appendUserMessage(text);
            if (typeof GameSFX !== 'undefined') GameSFX.playClick();

            isWaitingForAI = true;
            showTypingIndicator();

            try {
                let aiReply = "";
                const response = await fetch('/api/chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        question: text,
                        history: chatHistory,
                        context: findRelevantContext(text, 2)
                    })
                });

                if (!response.ok) {
                    throw new Error("Không phản hồi hoặc cổng dịch vụ ngoại tuyến.");
                }
                const data = await response.json();
                aiReply = data.reply;

                removeTypingIndicator();
                appendAiMessage(aiReply);

                chatHistory.push({ role: 'user', text: text });
                chatHistory.push({ role: 'model', text: aiReply });
                if (chatHistory.length > 6) {
                    chatHistory.splice(0, 2);
                }
            } catch (err) {
                removeTypingIndicator();
                appendSystemMessage(`LỖI TRUYỀN TIN // ${err.message}`);
                console.error(err);
            } finally {
                isWaitingForAI = false;
            }
        });
    }
}

// 14. GLOBAL BACKGROUND MUSIC WIDGET
const MUSIC_PLAYLIST = [
    {
        title: "Dấu Chân Phía Trước",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
        title: "Ai Yêu Bác Hồ Chí Minh Hơn Thiếu Niên Nhi Đồng",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
        title: "Tiếng hát giữa rừng Pác Bó",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    }
];

let globalAudio = null;
let currentMusicIndex = 0;
let isMusicPlaying = false;

function initGlobalMusicPlayer() {
    const headerContainer = document.querySelector('.header-container');
    if (!headerContainer) return;

    if (!globalAudio) {
        globalAudio = new Audio();
        globalAudio.preload = "none";
        
        currentMusicIndex = parseInt(localStorage.getItem('hcm_music_index')) || 0;
        const savedTime = parseFloat(localStorage.getItem('hcm_music_time')) || 0;
        isMusicPlaying = localStorage.getItem('hcm_music_playing') === 'true';

        globalAudio.src = MUSIC_PLAYLIST[currentMusicIndex].src;
        globalAudio.currentTime = savedTime;
        globalAudio.loop = false;
        
        // Sync initial mute and volume state
        globalAudio.muted = GameSFX.isMuted();
        let savedVol = localStorage.getItem('hcm_audio_volume');
        globalAudio.volume = savedVol !== null ? parseFloat(savedVol) : 0.5;
        
        globalAudio.addEventListener('ended', () => {
            playNextTrack();
        });
    }

    const widget = document.createElement('div');
    widget.className = 'global-music-widget';
    widget.innerHTML = `
        <button class="music-btn" id="btn-music-prev" title="Bài trước"><i class="fas fa-step-backward"></i></button>
        <button class="music-btn" id="btn-music-play" title="Phát/Tạm dừng"><i class="fas fa-play"></i></button>
        <button class="music-btn" id="btn-music-next" title="Bài tiếp"><i class="fas fa-step-forward"></i></button>
        <div class="music-info">
            <span id="music-track-title">Đang tải...</span>
        </div>
    `;

    const insertBeforeEl = document.querySelector('.hud-volume-container') || document.getElementById('btn-mute-hud');
    if (insertBeforeEl && insertBeforeEl.parentNode === headerContainer) {
        headerContainer.insertBefore(widget, insertBeforeEl);
    } else {
        headerContainer.appendChild(widget);
    }

    const playBtn = document.getElementById('btn-music-play');
    const prevBtn = document.getElementById('btn-music-prev');
    const nextBtn = document.getElementById('btn-music-next');

    playBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (typeof GameSFX !== 'undefined') GameSFX.playClick();
        if (isMusicPlaying) {
            pauseMusic();
        } else {
            playMusic();
        }
    });

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (typeof GameSFX !== 'undefined') GameSFX.playClick();
        playPrevTrack();
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (typeof GameSFX !== 'undefined') GameSFX.playClick();
        playNextTrack();
    });

    updateMusicUI();

    const resumePlay = () => {
        if (isMusicPlaying && globalAudio.paused) {
            globalAudio.play().then(() => {
                updateMusicUI();
            }).catch(err => {
                console.log("Audio play postponed", err);
            });
        }
        document.removeEventListener('click', resumePlay);
        document.removeEventListener('keydown', resumePlay);
    };
    document.addEventListener('click', resumePlay);
    document.addEventListener('keydown', resumePlay);

    window.addEventListener('beforeunload', () => {
        localStorage.setItem('hcm_music_index', currentMusicIndex);
        localStorage.setItem('hcm_music_time', globalAudio ? globalAudio.currentTime : 0);
        localStorage.setItem('hcm_music_playing', isMusicPlaying);
    });
}

function playMusic() {
    isMusicPlaying = true;
    globalAudio.play().then(() => {
        updateMusicUI();
    }).catch(err => {
        console.log("Autoplay blocked, waiting for user gesture.");
    });
    localStorage.setItem('hcm_music_playing', 'true');
}

function pauseMusic() {
    isMusicPlaying = false;
    globalAudio.pause();
    updateMusicUI();
    localStorage.setItem('hcm_music_playing', 'false');
}

function playNextTrack() {
    const nextIndex = (currentMusicIndex + 1) % MUSIC_PLAYLIST.length;
    currentMusicIndex = nextIndex;
    globalAudio.src = MUSIC_PLAYLIST[currentMusicIndex].src;
    globalAudio.currentTime = 0;
    playMusic();
}

function playPrevTrack() {
    const prevIndex = (currentMusicIndex - 1 + MUSIC_PLAYLIST.length) % MUSIC_PLAYLIST.length;
    currentMusicIndex = prevIndex;
    globalAudio.src = MUSIC_PLAYLIST[currentMusicIndex].src;
    globalAudio.currentTime = 0;
    playMusic();
}

function updateMusicUI() {
    const playBtn = document.getElementById('btn-music-play');
    const trackTitle = document.getElementById('music-track-title');
    
    if (playBtn) {
        playBtn.innerHTML = isMusicPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
    }
    if (trackTitle) {
        trackTitle.innerHTML = `<span>Hòa tấu — ${MUSIC_PLAYLIST[currentMusicIndex].title}</span>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    checkAndEnforcePasscode();
    initGlobalSharedVisuals();
    checkAndEnforceStudyDeckLock();
    initGlobalChatbot();
    initGlobalMusicPlayer();
});

