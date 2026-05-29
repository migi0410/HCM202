/* ==========================================================================
   HCM UNIVERSE - JAVASCRIPT CONTROLLER V4 (MASTERPIECE SPACE HUD & GLASSORBS)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================================
    // 1. ACADEMIC COURSE CONTENT DATABASE (5 PLANETS & LESSONS IN VIETNAMESE)
    // ==========================================================================
    const UNIVERSE_DATA = {
        1: {
            title: "Cơ Sở Hình Thành",
            sector: "SECTOR // 01 // FOUNDATIONS",
            coords: "18.90° N // 19.11° E",
            colorClass: "preview-p1",
            hudClass: "hud-p1",
            moons: {
                1: {
                    title: "Truyền thống yêu nước và đoàn kết dân tộc",
                    content: `
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
            }
        },
        2: {
            title: "Vai Trò Chiến Lược",
            sector: "SECTOR // 02 // STRATEGIC ROLE",
            coords: "19.30° N // 19.45° E",
            colorClass: "preview-p2",
            hudClass: "hud-p2",
            moons: {
                1: {
                    title: "Ý nghĩa chiến lược sống còn",
                    content: `
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
                        <p>Đại đoàn kết không chỉ là phương thức tập hợp lực lượng mà còn là mục tiêu cao cả, nhiệm vụ chính trị hàng đầu của Đảng Cộng sản và của toàn dân tộc.</p>
                        <h4>Nguyên tắc triển khai:</h4>
                        <ul>
                            <li><strong>Nhiệm vụ hàng đầu của Đảng:</strong> Phải được quán triệt sâu sắc trong mọi lĩnh vực, từ cương lĩnh, đường lối đến các chính sách kinh tế - xã hội.</li>
                            <li><strong>Sự nghiệp của quần chúng:</strong> Cách mạng là do quần chúng, vì quần chúng. Đảng chỉ đóng vai trò giáo dục, định hướng để nhân dân tự giác đoàn kết đấu tranh tự giải phóng.</li>
                            <li><strong>Đòi hỏi khách quan của nhân dân:</strong> Đoàn kết chính là nguyện vọng thiết tha nhất của nhân dân trong cuộc đấu tranh giành lại tự do, hòa bình.</li>
                        </ul>
                    `
                }
            }
        },
        3: {
            title: "Lực Lượng Quy Tụ",
            sector: "SECTOR // 03 // FORCES & FRONT",
            coords: "19.41° N // 19.76° E",
            colorClass: "preview-p3",
            hudClass: "hud-p3",
            moons: {
                1: {
                    title: "Chủ thể của khối đại đoàn kết",
                    content: `
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
                        <p>Việc xây dựng Mặt trận dân tộc thống nhất phải dựa trên các nguyên tắc bất di bất dịch:</p>
                        <ul>
                            <li><strong>Nền tảng liên minh vững chắc:</strong> Phải dựa trên khối liên minh Công nhân – Nông dân – Trí thức làm gốc vững chắc của khối đoàn kết.</li>
                            <li><strong>Dưới sự lãnh đạo của Đảng:</strong> Đảng là hạt nhân lãnh đạo Mặt trận bằng uy tín, sự gương mẫu của đảng viên và đường lối chính sách đúng đắn.</li>
                            <li><strong>Lấy mục tiêu tối cao vì độc lập dân tộc:</strong> Giải quyết hài hòa lợi ích cá nhân, giai tầng vì sự sống còn của đất nước.</li>
                        </ul>
                    `
                }
            }
        },
        4: {
            title: "Phương Pháp Củng Cố",
            sector: "SECTOR // 04 // METHODS OF UNITY",
            coords: "20.12° N // 20.25° E",
            colorClass: "preview-p4",
            hudClass: "hud-p4",
            moons: {
                1: {
                    title: "Ba phương pháp chính",
                    content: `
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
                        <p>Đưa nhân dân vào các tổ chức quần chúng có kỷ cương và định hướng thống nhất là bí quyết tạo nên sức mạnh dời non lấp biển:</p>
                        <ul>
                            <li><strong>Đoàn thể quần chúng:</strong> Là nơi sinh hoạt, đoàn kết hỗ trợ lẫn nhau của các giai cấp, vùng miền, giới tính.</li>
                            <li><strong>Chỉ đạo thống nhất:</strong> Các tổ chức tuy độc lập nhưng liên kết chặt chẽ trong Mặt trận dân tộc dưới định hướng khoa học để ngăn chặn sự rời rạc, cát cứ.</li>
                        </ul>
                    `
                }
            }
        },
        5: {
            title: "Kết Nối Thời Đại",
            sector: "SECTOR // 05 // CONNECTIONS & TODAY",
            coords: "20.45° N // 20.88° E",
            colorClass: "preview-p5",
            hudClass: "hud-p5",
            moons: {
                1: {
                    title: "Quan hệ với đoàn kết quốc tế",
                    content: `
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
                    `
                }
            }
        }
    };

    // ==========================================================================
    // 2. CANVAS STARFIELD ENGINE (60 FPS DEEP SPACE DRIFT)
    // ==========================================================================
    const canvas = document.getElementById('starfield-canvas');
    let ctx = null;
    let stars = [];
    const numStars = 120;
    let width = window.innerWidth;
    let height = window.innerHeight;

    if (canvas) {
        ctx = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;

        class Star {
            constructor() {
                this.reset();
            }
            
            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.z = Math.random() * width;
                this.size = Math.random() * 1.0 + 0.2;
                
                const colors = ['#ffffff', '#ecefff', '#fdfdf5', '#fff1f4'];
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.speed = Math.random() * 0.2 + 0.05;
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
                    
                    if (this.size > 0.8) {
                        ctx.shadowBlur = size * 2.0;
                        ctx.shadowColor = this.color;
                    } else {
                        ctx.shadowBlur = 0;
                    }
                    ctx.fill();
                }
            }
        }

        function initStars() {
            stars = [];
            for (let i = 0; i < numStars; i++) {
                stars.push(new Star());
            }
        }

        function animateStars() {
            ctx.clearRect(0, 0, width, height);
            ctx.shadowBlur = 0;
            
            const grad = ctx.createRadialGradient(width / 2, height / 2, 10, width / 2, height / 2, width * 0.9);
            grad.addColorStop(0, '#030308');
            grad.addColorStop(1, '#010103');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, width, height);
            
            for (let i = 0; i < stars.length; i++) {
                stars[i].update();
                stars[i].draw();
            }
            requestAnimationFrame(animateStars);
        }

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initStars();
        });

        initStars();
        animateStars();
    }

    // ==========================================================================
    // 3. RESPONSIVE MOBILE ACCORDION STACK DASHBOARD GENERATOR (<768px)
    // ==========================================================================
    const universeSection = document.getElementById('universe-section');
    
    function injectMobileDashboard() {
        if (!universeSection) return;
        
        const prevStack = document.getElementById('mobile-dash-stack');
        if (prevStack) prevStack.remove();

        const stackContainer = document.createElement('div');
        stackContainer.className = 'mobile-dash-stack';
        stackContainer.id = 'mobile-dash-stack';
        
        Object.keys(UNIVERSE_DATA).forEach(planetId => {
            const planet = UNIVERSE_DATA[planetId];
            
            const card = document.createElement('div');
            card.className = `mobile-planet-card p${planetId}`;
            card.dataset.planet = planetId;
            
            card.innerHTML = `
                <div class="mobile-card-header">
                    <div class="mobile-card-title-group">
                        <span>${planet.sector}</span>
                        <h3>${planetId}. ${planet.title}</h3>
                    </div>
                    <div class="mobile-chevron"><i class="fas fa-chevron-right"></i></div>
                </div>
                <div class="mobile-card-body">
                    <div class="mobile-satellite-tabs">
                        ${Object.keys(planet.moons).map(moonId => `
                            <button class="satellite-tab" data-planet="${planetId}" data-moon="${moonId}">
                                <span>${planet.moons[moonId].title}</span>
                                <i class="fas fa-satellite"></i>
                            </button>
                        `).join('')}
                    </div>
                </div>
            `;
            
            stackContainer.appendChild(card);
        });
        
        universeSection.appendChild(stackContainer);
        
        // Collapsible Accordion Logic
        const headers = stackContainer.querySelectorAll('.mobile-card-header');
        headers.forEach(header => {
            header.addEventListener('click', (e) => {
                const parent = header.parentElement;
                const isActive = parent.classList.contains('active');
                
                stackContainer.querySelectorAll('.mobile-planet-card').forEach(c => c.classList.remove('active'));
                
                if (!isActive) {
                    parent.classList.add('active');
                }
            });
        });
        
        // Moon Tabs Inside Accordion Logic
        const mobileTabs = stackContainer.querySelectorAll('.satellite-tab');
        mobileTabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.stopPropagation();
                const pId = tab.dataset.planet;
                const mId = tab.dataset.moon;
                openSpaceConsole(pId, mId);
            });
        });
    }
    
    injectMobileDashboard();
    
    window.addEventListener('resize', () => {
        injectMobileDashboard();
    });

    // ==========================================================================
    // 4. HEADER NAVIGATION CONTROLS
    // ==========================================================================
    const btnNavToggle = document.getElementById('btn-nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (btnNavToggle && navMenu) {
        btnNavToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = btnNavToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
    }

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (navMenu) {
                navMenu.classList.remove('active');
            }
            if (btnNavToggle) {
                const icon = btnNavToggle.querySelector('i');
                if (icon) icon.className = 'fas fa-bars';
            }
            
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Smooth jumps to sections from navbar links
    const homeLink = document.getElementById('nav-home');
    const galaxyLink = document.getElementById('nav-galaxy');
    
    if (homeLink) {
        homeLink.addEventListener('click', (e) => {
            e.preventDefault();
            const el = document.getElementById('hero');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    if (galaxyLink) {
        galaxyLink.addEventListener('click', (e) => {
            e.preventDefault();
            const el = document.getElementById('universe-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        });
    }

    const btnStartVoyage = document.getElementById('btn-start-voyage');
    if (btnStartVoyage) {
        btnStartVoyage.addEventListener('click', (e) => {
            e.preventDefault();
            const el = document.getElementById('universe-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // ==========================================================================
    // 5. TRIGONOMETRIC REALTIME ORBITS & CINEMATIC CAMERA SYSTEM
    // ==========================================================================
    const galaxyContainer = document.getElementById('galaxy-container');
    const galaxyViewport = document.getElementById('galaxy-viewport');
    const spaceConsole = document.getElementById('space-console');
    const btnCloseConsole = document.getElementById('btn-close-console');
    
    const hudSector = document.getElementById('hud-sector');
    const hudWarp = document.getElementById('hud-warp');
    const hudSystem = document.getElementById('hud-system');
    
    const consoleSector = document.getElementById('console-sector');
    const consoleTitle = document.getElementById('console-title');
    const consoleCoords = document.getElementById('console-coords');
    const previewPlanetIcon = document.getElementById('preview-planet-icon');
    const satelliteTabs = document.getElementById('satellite-tabs');
    
    const docActiveTitle = document.getElementById('doc-active-title');
    const docActiveContent = document.getElementById('doc-active-content');
    
    let activePlanet = null;
    let activeMoon = null;

    // Web Audio Synthesizer for Retro-Futuristic Hologram SFX
    const StellarAudio = {
        ctx: null,
        muted: false,
        
        init() {
            if (this.ctx) return;
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (AudioContextClass) {
                this.ctx = new AudioContextClass();
            }
        },
        
        toggleMute() {
            this.muted = !this.muted;
            const muteBtn = document.getElementById('btn-mute-hud');
            if (muteBtn) {
                muteBtn.innerHTML = this.muted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
                muteBtn.classList.toggle('muted', this.muted);
            }
            return this.muted;
        },
        
        playTick() {
            if (this.muted) return;
            this.init();
            if (!this.ctx) return;
            
            try {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                
                osc.type = 'sine';
                osc.frequency.setValueAtTime(1200, this.ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.04);
                
                gain.gain.setValueAtTime(0.02, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
                
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                
                osc.start();
                osc.stop(this.ctx.currentTime + 0.05);
            } catch (e) {}
        },
        
        playBeep() {
            if (this.muted) return;
            this.init();
            if (!this.ctx) return;
            
            try {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(880, this.ctx.currentTime);
                osc.frequency.setValueAtTime(1760, this.ctx.currentTime + 0.03);
                
                gain.gain.setValueAtTime(0.015, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);
                
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                
                osc.start();
                osc.stop(this.ctx.currentTime + 0.11);
            } catch (e) {}
        },
        
        playWarp() {
            if (this.muted) return;
            this.init();
            if (!this.ctx) return;
            
            try {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                const filter = this.ctx.createBiquadFilter();
                
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(110, this.ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.45);
                
                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(300, this.ctx.currentTime);
                filter.frequency.exponentialRampToValueAtTime(2000, this.ctx.currentTime + 0.45);
                
                gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.5);
                
                osc.connect(filter);
                filter.connect(gain);
                gain.connect(this.ctx.destination);
                
                osc.start();
                osc.stop(this.ctx.currentTime + 0.55);
            } catch (e) {}
        },
        
        playClose() {
            if (this.muted) return;
            this.init();
            if (!this.ctx) return;
            
            try {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                
                osc.type = 'sine';
                osc.frequency.setValueAtTime(440, this.ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(55, this.ctx.currentTime + 0.35);
                
                gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);
                
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                
                osc.start();
                osc.stop(this.ctx.currentTime + 0.45);
            } catch (e) {}
        }
    };

    // Bind Mute button in UI
    const btnMuteHud = document.getElementById('btn-mute-hud');
    if (btnMuteHud) {
        btnMuteHud.addEventListener('click', (e) => {
            e.stopPropagation();
            StellarAudio.toggleMute();
            StellarAudio.playTick();
        });
    }

    // Typewriter Effect - sleek character-by-character typing animation
    function decryptText(element, targetText, speed = 12) {
        if (!element) return;
        
        clearInterval(element.decryptInterval);
        
        element.textContent = "";
        const length = targetText.length;
        let index = 0;
        
        element.decryptInterval = setInterval(() => {
            if (index < length) {
                element.textContent += targetText[index];
                index++;
            } else {
                clearInterval(element.decryptInterval);
                element.textContent = targetText;
            }
        }, speed);
    }

    // Generate dynamic 3D star dust inside galaxy-container
    if (galaxyContainer) {
        for (let j = 0; j < 80; j++) {
            const dust = document.createElement('div');
            dust.className = 'star-dust';
            
            const angle = Math.random() * Math.PI * 2;
            const radius = 60 + Math.random() * 480; 
            
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            const size = 1 + Math.random() * 2.5;
            const opacity = 0.15 + Math.random() * 0.45;
            
            let color = 'rgba(223, 186, 107, ';
            if (radius > 160 && radius <= 340) {
                color = Math.random() > 0.5 ? 'rgba(0, 217, 255, ' : 'rgba(188, 19, 254, ';
            } else if (radius > 340) {
                color = 'rgba(77, 250, 220, ';
            }
            
            dust.style.width = `${size}px`;
            dust.style.height = `${size}px`;
            dust.style.background = color + opacity + ')';
            dust.style.boxShadow = `0 0 ${size * 3}px ${color + (opacity + 0.2) + ')'}`;
            dust.style.transform = `translate3d(${x}px, ${y}px, ${-15 + Math.random() * 30}px)`;
            
            const rotationSpeed = 40 + Math.random() * 140;
            const rotateDirection = Math.random() > 0.35 ? 'rotateRingClockwise' : 'rotateRingCounterClockwise';
            dust.style.animation = `${rotateDirection} ${rotationSpeed}s linear infinite`;
            
            galaxyContainer.appendChild(dust);
        }
    }

    // 3D Mouse Parallax Effect variables
    let targetTiltX = 0;
    let targetTiltY = 0;
    let currentTiltX = 0;
    let currentTiltY = 0;
    const tiltEasing = 0.07;
    
    if (galaxyViewport) {
        galaxyViewport.addEventListener('mousemove', (e) => {
            if (activePlanet !== null) {
                targetTiltX = 0;
                targetTiltY = 0;
                return;
            }
            
            const rect = galaxyViewport.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            targetTiltX = (x / (rect.width / 2)) * 5; 
            targetTiltY = -(y / (rect.height / 2)) * 5;
        });
        
        galaxyViewport.addEventListener('mouseleave', () => {
            targetTiltX = 0;
            targetTiltY = 0;
        });
    }

    // Realtime orbital paths translations configuration
    let orbitAngles = { 1: 0, 2: 1.2, 3: 2.4, 4: 3.6, 5: 4.8 };
    const orbitSpeeds = { 1: 0.0035, 2: 0.0028, 3: 0.0020, 4: 0.0015, 5: 0.0010 };
    const orbitRadii = { 1: 130, 2: 220, 3: 310, 4: 400, 5: 490 };

    function updatePlanetPositions() {
        if (activePlanet === null) {
            // Apply mouse tilt with smooth easing
            currentTiltX += (targetTiltX - currentTiltX) * tiltEasing;
            currentTiltY += (targetTiltY - currentTiltY) * tiltEasing;
            
            if (galaxyContainer) {
                galaxyContainer.style.transform = `rotateX(${72 + currentTiltY}deg) rotateY(${-12 + currentTiltX}deg)`;
            }
            
            for (let i = 1; i <= 5; i++) {
                orbitAngles[i] += orbitSpeeds[i];
                if (orbitAngles[i] >= Math.PI * 2) {
                    orbitAngles[i] -= Math.PI * 2;
                }
                
                const wrap = document.getElementById(`wrap-p${i}`);
                if (wrap) {
                    const x = Math.cos(orbitAngles[i]) * orbitRadii[i];
                    const y = Math.sin(orbitAngles[i]) * orbitRadii[i];
                    wrap.style.transform = `translate3d(${x}px, ${y}px, 20px)`;
                }
            }
        }
        requestAnimationFrame(updatePlanetPositions);
    }
    
    requestAnimationFrame(updatePlanetPositions);

    // Expand moons radially as text-free glowing visual particles around focused planet
    function expandMoons(planetElement, planetId) {
        let moonsGroup = planetElement.querySelector('.moons-group');
        if (!moonsGroup) {
            moonsGroup = document.createElement('div');
            moonsGroup.className = 'moons-group';
            planetElement.appendChild(moonsGroup);
        }
        moonsGroup.innerHTML = '';
        
        const moonsData = UNIVERSE_DATA[planetId].moons;
        const keys = Object.keys(moonsData);
        const totalMoons = keys.length;
        const radius = 80;
        
        keys.forEach((key, index) => {
            const angle = (index * 2 * Math.PI) / totalMoons;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            const moon = document.createElement('div');
            moon.className = 'moon-body';
            moon.style.transform = `translate3d(${x}px, ${y}px, 0) rotateX(72deg)`;
            moon.dataset.moon = key;
            
            // Note: We completely omit the .moon-label text elements to avoid text clutter!
            // The satellites are pure, clean, glowing specular spheres.
            
            moon.addEventListener('click', (e) => {
                e.stopPropagation();
                openSpaceConsole(planetId, key);
            });
            
            moonsGroup.appendChild(moon);
        });
    }

    // Camera cinematic zoom
    function zoomPlanet(planetId) {
        StellarAudio.playWarp();
        const planetBody = document.getElementById(`planet-${planetId}`);
        const planetWrapper = document.getElementById(`wrap-p${planetId}`);
        
        if (!planetBody || !planetWrapper || !galaxyContainer || !galaxyViewport) return;

        document.querySelectorAll('.planet-body').forEach(p => {
            p.classList.remove('focused');
            const mg = p.querySelector('.moons-group');
            if (mg) mg.innerHTML = '';
        });
        
        activePlanet = planetId;
        
        planetBody.classList.add('focused');
        expandMoons(planetBody, planetId);
        
        const currentAngle = orbitAngles[planetId];
        const planetX = Math.cos(currentAngle) * orbitRadii[planetId];
        const planetY = Math.sin(currentAngle) * orbitRadii[planetId];
        
        planetWrapper.style.transform = `translate3d(${planetX}px, ${planetY}px, 20px)`;
        
        // Translate view focal point
        let targetX = -planetX * 1.4;
        let targetY = -planetY * 1.4 + 80; // Shift down by 80px to center vertically on screen
        let scale = 1.6;
        
        galaxyContainer.style.transform = `rotateX(52deg) rotateY(-5deg) translate3d(${targetX}px, ${targetY}px, 140px) scale(${scale})`;
        galaxyViewport.classList.add('zoomed-in');
        
        if (hudSector) hudSector.textContent = UNIVERSE_DATA[planetId].sector;
        if (hudWarp) hudWarp.textContent = "WARPED";
        if (hudSystem) hudSystem.textContent = UNIVERSE_DATA[planetId].coords;
        
        setTimeout(() => {
            openSpaceConsole(planetId, 1);
        }, 500);
    }

    function openSpaceConsole(planetId, moonId) {
        activePlanet = planetId;
        activeMoon = moonId;
        
        const data = UNIVERSE_DATA[planetId];
        const moon = data.moons[moonId];
        
        if (consoleSector) decryptText(consoleSector, data.sector);
        if (consoleTitle) decryptText(consoleTitle, `${planetId}. ${data.title}`);
        if (consoleCoords) decryptText(consoleCoords, `COORD: ${data.coords}`);
        
        if (previewPlanetIcon) {
            previewPlanetIcon.className = 'planet-icon-preview';
            previewPlanetIcon.classList.add(data.colorClass);
        }
        
        const hudCard = document.getElementById('planet-hud-card');
        if (hudCard) {
            hudCard.className = 'planet-hud-card';
            hudCard.classList.add(data.hudClass);
        }
        
        if (satelliteTabs) {
            satelliteTabs.innerHTML = '';
            Object.keys(data.moons).forEach(mKey => {
                const mData = data.moons[mKey];
                const tab = document.createElement('button');
                tab.className = 'satellite-tab';
                if (mKey == moonId) tab.classList.add('active');
                tab.dataset.moon = mKey;
                tab.innerHTML = `
                    <span>${mData.title}</span>
                    <i class="fas fa-satellite"></i>
                `;
                
                tab.addEventListener('click', () => {
                    StellarAudio.playBeep();
                    satelliteTabs.querySelectorAll('.satellite-tab').forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    if (docActiveTitle) decryptText(docActiveTitle, mData.title);
                    if (docActiveContent) {
                        docActiveContent.innerHTML = mData.content;
                        docActiveContent.classList.remove('scanning');
                        void docActiveContent.offsetWidth; // Trigger reflow
                        docActiveContent.classList.add('scanning');
                    }
                });
                
                satelliteTabs.appendChild(tab);
            });
        }
        
        if (docActiveTitle) decryptText(docActiveTitle, moon.title);
        if (docActiveContent) {
            docActiveContent.innerHTML = moon.content;
            docActiveContent.classList.remove('scanning');
            void docActiveContent.offsetWidth; // Trigger reflow
            docActiveContent.classList.add('scanning');
        }
        
        if (spaceConsole) {
            spaceConsole.classList.add('active');
            document.documentElement.classList.add('console-open'); // Lock html scroll
            document.body.classList.add('console-open'); // Lock body scroll to prevent any background drifts
        }
        
        document.querySelectorAll('.jump-btn').forEach(btn => btn.classList.remove('active'));
        const activeJumpBtn = document.querySelector(`.jump-btn[data-planet="${planetId}"]`);
        if (activeJumpBtn) activeJumpBtn.classList.add('active');
    }

    function resetCamera() {
        StellarAudio.playClose();
        activePlanet = null;
        activeMoon = null;
        
        document.querySelectorAll('.planet-body').forEach(p => {
            p.classList.remove('focused');
            const moonsGroup = p.querySelector('.moons-group');
            if (moonsGroup) moonsGroup.innerHTML = '';
        });
        
        if (galaxyContainer) {
            galaxyContainer.style.transform = `rotateX(72deg) rotateY(-12deg)`;
        }
        if (galaxyViewport) {
            galaxyViewport.classList.remove('zoomed-in');
        }
        if (spaceConsole) {
            spaceConsole.classList.remove('active');
            document.documentElement.classList.remove('console-open'); // Unlock html scroll
            document.body.classList.remove('console-open'); // Unlock body scroll
        }
        
        if (hudSector) hudSector.textContent = "SYSTEM READY";
        if (hudWarp) hudWarp.textContent = "STABLE";
        if (hudSystem) hudSystem.textContent = "1911 - 1941";
        
        document.querySelectorAll('.jump-btn').forEach(btn => btn.classList.remove('active'));
    }

    // Attach click listeners to 5 planets
    for (let i = 1; i <= 5; i++) {
        const planet = document.getElementById(`planet-${i}`);
        if (planet) {
            planet.addEventListener('click', (e) => {
                e.stopPropagation();
                zoomPlanet(i);
            });
            planet.addEventListener('mouseenter', () => {
                StellarAudio.playTick();
            });
        }
    }

    // Attach click listeners to Quick Jump buttons
    const jumpButtons = document.querySelectorAll('.jump-btn');
    jumpButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const planetId = btn.dataset.planet;
            zoomPlanet(planetId);
        });
        btn.addEventListener('mouseenter', () => {
            StellarAudio.playTick();
        });
    });

    // Attach click listeners to footer planet links for smooth scrolls and automatic zooms
    document.querySelectorAll('.footer-link-item[data-id]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const planetId = link.dataset.id;
            const targetSection = document.getElementById('universe-section');
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => {
                    zoomPlanet(planetId);
                }, 600); // 600ms delay to let scroll finish perfectly
            }
        });
        link.addEventListener('mouseenter', () => {
            StellarAudio.playTick();
        });
    });

    if (btnCloseConsole) {
        btnCloseConsole.addEventListener('click', resetCamera);
    }

    // Click outside Space Console to close it
    document.addEventListener('click', (e) => {
        if (spaceConsole && spaceConsole.classList.contains('active')) {
            if (!spaceConsole.contains(e.target) && 
                !e.target.closest('.planet-body') && 
                !e.target.closest('.jump-btn') &&
                !e.target.closest('.mobile-planet-card') &&
                !e.target.closest('.nav-toggle') &&
                !e.target.closest('.main-header')) {
                resetCamera();
            }
        }
    });

    // ==========================================================================
    // 6. INITIAL LOADING SCREEN PROGRESS SIMULATOR
    // ==========================================================================
    const loader = document.getElementById('loader');
    if (loader) {
        const loaderProgressBar = loader.querySelector('.progress');
        let loadPercent = 0;
        const loadInterval = setInterval(() => {
            loadPercent += Math.floor(Math.random() * 20) + 5;
            if (loadPercent >= 100) {
                loadPercent = 100;
                clearInterval(loadInterval);
                
                setTimeout(() => {
                    loader.style.opacity = 0;
                    setTimeout(() => {
                        loader.style.display = 'none';
                    }, 800);
                }, 400);
            }
            if (loaderProgressBar) {
                loaderProgressBar.style.width = `${loadPercent}%`;
            }
        }, 80);
    }

});
