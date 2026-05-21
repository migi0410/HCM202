/**
 * Bản Đồ Nhân Tâm: Những Dấu Chân Song Hành - Application JavaScript
 * Developed by Antigravity for HCM202 (Môn học Tư tưởng Hồ Chí Minh)
 */

// Automatically handle image extension mismatches (PNG, JPG, JPEG) to support a mix of extensions
window.addEventListener('error', function(e) {
    if (e.target && e.target.tagName === 'IMG') {
        const img = e.target;
        const attempts = parseInt(img.dataset.attempts || '0', 10);
        if (attempts >= 2) return; // Allow trying up to two times
        
        img.dataset.attempts = (attempts + 1).toString();
        const currentSrc = img.src;
        if (currentSrc.endsWith('.jpg')) {
            img.src = currentSrc.replace(/\.jpg$/, '.png');
        } else if (currentSrc.endsWith('.png')) {
            img.src = currentSrc.replace(/\.png$/, '.jpeg');
        } else if (currentSrc.endsWith('.jpeg')) {
            img.src = currentSrc.replace(/\.jpeg$/, '.jpg');
        }
    }
}, true);

document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initMobileNav();
    initParticleCanvas();
    initInteractiveMap();
    initTimelineObserver();
    initCharacterModals();
    initQuizGame();
    initAudioPlayer();
    initQuoteCarousel();
    initHeaderScroll();
});

/* ==========================================================================
   1. LOADING SCREEN & INTRO ANIMATION
   ========================================================================== */
function initLoader() {
    const loader = document.getElementById('loader');
    const progress = loader.querySelector('.progress');
    
    // Simulate loading archival dossier files
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                    // Trigger hero typography entry animation
                    document.querySelector('.hero-content').classList.add('active');
                }, 600);
            }, 300);
        } else {
            width += Math.floor(Math.random() * 15) + 5;
            if (width > 100) width = 100;
            progress.style.width = width + '%';
        }
    }, 80);
}

/* ==========================================================================
   2. MOBILE NAVIGATION MENU & HEADER
   ========================================================================== */
function initMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = navToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
    });

    // Close menu when clicking navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.querySelector('i').className = 'fas fa-bars';
            
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
}

function initHeaderScroll() {
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/* ==========================================================================
   3. FLOATING GOLD DUST PARTICLES (HTML5 CANVAS)
   ========================================================================== */
function initParticleCanvas() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let particlesArray = [];
    const numberOfParticles = 40;

    // Adjust canvas size to fit window
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle constructor (floating gold leaf dust particles)
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.6;
            this.speedX = Math.random() * 0.3 - 0.15;
            this.speedY = Math.random() * -0.3 - 0.05; // Float upwards slowly
            this.color = `rgba(212, 175, 55, ${Math.random() * 0.25 + 0.05})`; // Faint gold leaf glow
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Reset particle at bottom if it drifts out of view
            if (this.y < 0) {
                this.y = canvas.height;
                this.x = Math.random() * canvas.width;
            }
            if (this.x < 0 || this.x > canvas.width) {
                this.speedX = -this.speedX;
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.shadowBlur = 4;
            ctx.shadowColor = '#D4AF37';
            ctx.fill();
        }
    }

    // Initialize particles array
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.shadowBlur = 0; // Disable shadows during updates for performance
        
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        requestAnimationFrame(animate);
    }
    animate();
}

/* ==========================================================================
   4. INTERACTIVE SVG WORLD MAP & ROUTE DRAWING
   ========================================================================== */
const milestoneData = {
    1: {
        badge: "CHƯƠNG 1 • TRƯỚC 1911",
        title: "Khởi Hành & Những người Thầy",
        place: "Việt Nam (Nghệ An - Huế - Sài Gòn)",
        desc: "Trước khi ra đi tìm đường cứu nước, người thanh niên Nguyễn Tất Thành lớn lên trong gia đình nho học yêu nước, sớm tiếp thu chí khí bất khuất từ cha mình cùng những bậc thầy yêu nước lỗi lạc khắp miền Trung và Nam Kỳ.",
        image: "assets/images/nha_rong_1911.png"
    },
    2: {
        badge: "CHƯƠNG 2 • 1911 - 1923",
        title: "Ánh sáng phương Tây",
        place: "Pháp, Anh, Mỹ",
        desc: "Quyết chí dấn thân ra nước ngoài, Bác đi qua nhiều châu lục, lao động cực nhọc để tìm hiểu xã hội phương Tây, từ đó hoạt động trong phong trào công nhân Pháp và cùng các chí sĩ yêu nước viết bản Yêu sách chấn động thế giới.",
        image: "assets/images/yeu_sach_1919.png"
    },
    3: {
        badge: "CHƯƠNG 3 • 1923 - 1924",
        title: "Cội nguồn Ánh sáng",
        place: "Liên Xô (Moscow)",
        desc: "Bác đặt chân tới đất nước của Cách mạng Tháng Mười Nga vĩ đại, học tập lý luận chủ nghĩa Mác-Lenin và Quốc tế Cộng sản, chuẩn bị đắc lực cơ sở khoa học cách mạng giải phóng dân tộc thuộc địa.",
        image: "assets/images/lien_xo_1923.png"
    },
    4: {
        badge: "CHƯƠNG 4 • 1924 - 1941",
        title: "Gieo hạt giống Cách mạng",
        place: "Quảng Châu (Trung Quốc) & Thái Lan",
        desc: "Bác trở về gần Tổ quốc, sáng lập Hội Việt Nam Cách mạng Thanh niên tại Quảng Châu, trực tiếp huấn luyện chiến sĩ trẻ và chủ trì thành lập Đảng Cộng sản Việt Nam thống nhất lãnh đạo đấu tranh.",
        image: "assets/images/thanh_lap_dang.png"
    },
    5: {
        badge: "CHƯƠNG 5 • 1941",
        title: "Trở về & Khởi nghĩa",
        place: "Mốc 108, Pác Bó, Cao Bằng",
        desc: "Sau 30 năm bôn ba vạn dặm đầy rẫy hiểm nguy gian khổ, Bác Hồ chính thức đặt chân trở về Tổ quốc thân yêu. Người dựng lán, làm việc trong hang Pác Bó bên đồng bào Cao Bằng hết lòng đùm bọc.",
        image: "assets/images/pac_bo_1941.png"
    }
};

let mapNodes = [];
let journeyPath = null;
let pathLength = 0;

function initInteractiveMap() {
    mapNodes = document.querySelectorAll('.map-node');
    journeyPath = document.getElementById('journey-path');
    
    if (journeyPath) {
        pathLength = journeyPath.getTotalLength();
        journeyPath.style.strokeDasharray = pathLength;
        journeyPath.style.strokeDashoffset = pathLength;
    }

    // Attach click events to nodes
    mapNodes.forEach(node => {
        node.addEventListener('click', () => {
            const milestoneId = node.getAttribute('data-id');
            selectMilestone(milestoneId);
            
            // Smooth scroll to timeline chapter block
            const timelineItem = document.querySelector(`.timeline-item[data-id="${milestoneId}"]`);
            if (timelineItem) {
                timelineItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });

    // Default select first milestone
    selectMilestone(1);
    drawPathUpTo(1);
}

// Select waypoint pin on map
function selectMilestone(id) {
    const data = milestoneData[id];
    if (!data) return;

    // Update active class state on SVG nodes
    mapNodes.forEach(node => {
        if (node.getAttribute('data-id') == id) {
            node.classList.add('active');
            createMapRipple(node);
        } else {
            node.classList.remove('active');
        }
    });

    // Update Info Display Card with animation
    const infoBox = document.getElementById('map-info-box');
    const badge = infoBox.querySelector('.milestone-badge');
    const title = infoBox.querySelector('.milestone-title');
    const place = infoBox.querySelector('.milestone-place');
    const desc = infoBox.querySelector('.milestone-desc');
    const img = infoBox.querySelector('#map-info-img');

    infoBox.style.opacity = '0.3';
    infoBox.style.transform = 'translateY(10px)';

    setTimeout(() => {
        badge.textContent = data.badge;
        title.textContent = data.title;
        place.innerHTML = `<i class="fas fa-map-marker-alt text-red"></i> ${data.place}`;
        desc.textContent = data.desc;
        img.src = data.image;
        img.alt = data.title;

        infoBox.style.opacity = '1';
        infoBox.style.transform = 'translateY(0)';
    }, 250);
}

// Draw dynamic SVG route path depending on active milestone
function drawPathUpTo(milestoneId) {
    if (!journeyPath) return;

    // Fractional steps along the path for the 5 milestones (chapters)
    const milestonePercentages = {
        1: 0.0,
        2: 0.35,
        3: 0.60,
        4: 0.85,
        5: 1.0
    };

    const targetPercent = milestonePercentages[milestoneId] || 0.0;
    const targetOffset = pathLength * (1.0 - targetPercent);
    
    journeyPath.style.transition = 'stroke-dashoffset 1s cubic-bezier(0.16, 1, 0.3, 1)';
    journeyPath.style.strokeDashoffset = targetOffset;
}

// Create pulsing coordinates rings on map
function createMapRipple(node) {
    const pulseGroup = document.getElementById('pulse-group');
    if (!pulseGroup) return;

    pulseGroup.innerHTML = '';

    const transformAttr = node.getAttribute('transform');
    if (!transformAttr) return;

    const coords = transformAttr.match(/translate\(([^,]+),\s*([^)]+)\)/);
    if (!coords) return;

    const cx = coords[1];
    const cy = coords[2];

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("class", "map-pulse");
    
    pulseGroup.appendChild(circle);
}

/* ==========================================================================
   5. VERTICAL TIMELINE CHAPTERS SCROLL-SYNC
   ========================================================================== */
function initTimelineObserver() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const revealOptions = {
        root: null,
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                const milestoneId = entry.target.getAttribute('data-id');
                if (milestoneId) {
                    selectMilestone(milestoneId);
                    drawPathUpTo(milestoneId);
                }
            }
        });
    }, revealOptions);

    timelineItems.forEach(item => {
        revealObserver.observe(item);
    });
}

/* ==========================================================================
   6. PORTRAIT POLAROID COMPANION CARDS & DOSSIER MODALS
   ========================================================================== */
const charactersData = {
    phan_boi_chau: {
        name: "Phan Bội Châu",
        lifespan: "1867 - 1940",
        role: "Sĩ phu yêu nước tiên phong",
        quote: "Nguyễn Tất Thành chí khí rất lớn, tư tưởng rất rộng, sau này sẽ là một nhân vật xoay vần thế sự.",
        quoteAuthor: "Phan Bội Châu chép lại trong bút ký",
        bio: "Phan Bội Châu là thủ lĩnh của phong trào Đông Du yêu nước đầu thế kỷ XX. Nhận ra tài trí phi thường của chàng thanh niên Nguyễn Tất Thành, cụ Phan từng đề nghị Bác sang Nhật hoạt động. Tuy nhiên, với nhãn quan chính trị sắc bén, Nguyễn Tất Thành đã khéo léo chối từ vì nhận ra con đường đi sang phương Đông cũ kỹ không thể cứu nước triệt để. Dẫu có sự khác biệt về phương pháp, Nguyễn Ái Quốc luôn tôn kính và học hỏi tinh thần tận hiến của cụ Phan, coi cụ là tấm gương ái quốc tiêu biểu.",
        photo: "https://placehold.co/400x500/efead8/2b2b2b?text=Phan+Boi+Chau"
    },
    truong_cong_dinh: {
        name: "Trương Công Định",
        lifespan: "1820 - 1864",
        role: "Ngọn cờ ái quốc Nam Kỳ",
        quote: "Triều đình bãi binh, nhưng lòng dân không chịu bãi binh. Ta nguyện cùng nhân dân chiến đấu bảo vệ đất mẹ đến cùng.",
        quoteAuthor: "Lời hịch của Bình Tây Đại Nguyên Soái",
        bio: "Bình Tây Đại Nguyên Soái Trương Công Định hy sinh anh dũng trước khi Nguyễn Tất Thành chào đời. Tuy nhiên, chí khí kiên trung lẫm liệt đứng về phía nhân dân chống Pháp của cụ Định tại vùng Gò Công - Gia Định đã tạo tiếng vang ngàn đời. Khi Bác Hồ đặt chân vào miền Nam học tập và khởi hành tại Bến cảng Nhà Rồng năm 1911, tấm gương quả cảm của Trương Công Định và nghĩa quân Nam Kỳ chính là ngọn lửa thiêng cổ vũ mãnh liệt quyết tâm ra khơi tìm đường cứu nước của Người.",
        photo: "https://placehold.co/400x500/efead8/2b2b2b?text=Truong+Cong+Dinh"
    },
    phan_van_truong: {
        name: "Phan Văn Trường",
        lifespan: "1876 - 1933",
        role: "Luật sư yêu nước tại Paris",
        quote: "Anh Nguyễn là linh hồn của phong trào. Tài trí và tinh thần cống hiến của anh ấy làm thức tỉnh đồng bào tại Pháp.",
        quoteAuthor: "Luật sư Phan Văn Trường viết về Nguyễn Ái Quốc",
        bio: "Luật sư Phan Văn Trường là Tiến sĩ Luật đầu tiên của Việt Nam, một trí thức yêu nước lỗi lạc tại Pháp. Tại căn nhà số 6 Villa des Gobelins (Paris), ông đã chở che, hỗ trợ Nguyễn Tất Thành về cả chỗ ở và pháp lý trong những ngày đầu hoạt động cách mạng đầy khó khăn. Với kiến thức pháp lý sắc sảo, Luật sư Trường chính là người đã trực tiếp cộng tác và giúp Nguyễn Ái Quốc dịch bản 'Yêu sách của nhân dân An Nam' sang tiếng Pháp cực kỳ đanh thép để gửi đến Hội nghị hòa bình Versailles năm 1919.",
        photo: "https://placehold.co/400x500/efead8/2b2b2b?text=Phan+Van+Truong"
    },
    o_mandenxtam: {
        name: "O. Mandenxtam",
        lifespan: "1891 - 1938",
        role: "Nhà thơ & Nhà báo quốc tế",
        quote: "Từ Nguyễn Ái Quốc tỏa ra một thứ ánh sáng của văn hóa, không phải văn hóa châu Âu, mà có lẽ là một nền văn hóa của tương lai.",
        quoteAuthor: "Osip Mandelstam viết trên tạp chí Ngọn Lửa Nhỏ (1923)",
        bio: "Osip Mandelstam là một trong những nhà thơ vĩ đại nhất của nước Nga thế kỷ XX. Khi gặp và phỏng vấn Nguyễn Ái Quốc tại Paris vào cuối năm 1923, nhà thơ Nga lập tức bị thu hút bởi cốt cách tao nhã, phong thái điềm tĩnh và tầm nhìn uyên bác của Người. Bài báo lịch sử mang tựa đề 'Thăm một chiến sĩ Quốc tế Cộng sản' đăng trên tạp chí Ogonyok của ông đã khắc họa hình tượng Nguyễn Ái Quốc như một biểu tượng văn hóa Á Đông kiệt xuất, dự báo Người chính là lãnh tụ tương lai thúc đẩy cách mạng thuộc địa toàn cầu.",
        photo: "https://placehold.co/400x500/efead8/2b2b2b?text=Osip+Mandelstam"
    },
    vi_lenin: {
        name: "V.I. Lenin",
        lifespan: "1870 - 1924",
        role: "Lãnh tụ Cách mạng Vô sản",
        quote: "Chỉ có giải phóng các dân tộc bị áp bức mới là nền móng vững chắc cho cách mạng thế giới.",
        quoteAuthor: "V.I. Lenin viết trong Luận cương dân tộc",
        bio: "Bản 'Luận cương của Lenin về vấn đề dân tộc và thuộc địa' đọc năm 1920 tại Paris chính là bước ngoặt làm thay đổi cuộc đời hoạt động cách mạng của Nguyễn Ái Quốc, giúp Người bật khóc vui mừng vì tìm ra con đường cứu nước thực tiễn: Cách mạng giải phóng dân tộc thuộc địa gắn liền với cách mạng vô sản. Khi sang Moscow cuối năm 1923, khát khao lớn nhất của Bác là được gặp Lenin bằng xương bằng thịt. Nhưng đau buồn thay, Lenin qua đời đột ngột đầu năm 1924 trước khi hai người kịp hội ngộ. Nguyễn Ái Quốc đã nghẹn ngào viếng linh cữu và viết bài tri ân Lenin sâu sắc.",
        photo: "https://placehold.co/400x500/efead8/2b2b2b?text=V.I.+Lenin"
    },
    manuilsky: {
        name: "D. Manuilsky",
        lifespan: "1883 - 1959",
        role: "Ủy viên Quốc tế Cộng sản",
        quote: "Đồng chí Nguyễn Ái Quốc là tiếng nói sắc bén, đại diện quả cảm nhất cho các dân tộc bị thuộc địa hóa.",
        quoteAuthor: "Dmitry Manuilsky tuyên bố tại Đại hội V",
        bio: "Dmitry Manuilsky là một nhà cách mạng kỳ cựu của Bolshevik và là Ủy viên uy tín hàng đầu trong Ban Chấp hành Quốc tế Cộng sản (Comintern). Ông chính là người bạn lớn của Bác tại Moscow, nhận thấy ngọn lửa cách mạng mạnh mẽ từ Người nên đã trực tiếp nâng đỡ Nguyễn Ái Quốc tại Đại hội V Quốc tế Cộng sản (1924). Manuilsky tạo điều kiện tối đa để Bác bước lên diễn đàn phát biểu đanh thép, nhắc nhở các đồng chí châu Âu không được lãng quên phong trào vô sản và nỗi đau của các dân tộc thuộc địa Á - Phi.",
        photo: "https://placehold.co/400x500/efead8/2b2b2b?text=D.+Manuilsky"
    },
    borodin: {
        name: "Mikhail Borodin",
        lifespan: "1884 - 1951",
        role: "Cố vấn chính trị Liên Xô",
        quote: "Nguyễn Ái Quốc là một nhà hoạt động phi thường, sắc sảo trong tổ chức và uyên thâm trong lý luận cách mạng.",
        quoteAuthor: "Borodin viết báo cáo gửi Moscow (1925)",
        bio: "Mikhail Borodin là đại diện ngoại giao, cố vấn chính trị cấp cao của Liên Xô bên cạnh chính phủ Tôn Trung Sơn tại Trung Quốc. Khi Nguyễn Ái Quốc đến Quảng Châu cuối năm 1924, Borodin đã tạo mọi điều kiện thuận lợi, sắp xếp vỏ bọc ngoại giao vững chắc cho Bác hoạt động dưới bí danh 'Lý Thụy'. Nhờ sự che chở ngoại giao tầm cỡ của Borodin, Bác Hồ dễ dàng tiếp cận lực lượng thanh niên Việt Nam yêu nước để thành lập Hội Việt Nam Cách mạng Thanh niên và xuất bản báo Thanh Niên.",
        photo: "https://placehold.co/400x500/efead8/2b2b2b?text=M.+Borodin"
    },
    tong_khanh_linh: {
        name: "Tống Khánh Linh",
        lifespan: "1893 - 1981",
        role: "Biểu tượng nhân đạo Trung Hoa",
        quote: "Tình hữu nghị giữa chúng tôi và Chủ tịch Hồ Chí Minh được xây dựng trên sự thấu hiểu sâu sắc và lý tưởng cách mạng cao cả.",
        quoteAuthor: "Phu nhân Tống Khánh Linh tri ân Bác",
        bio: "Bà Tống Khánh Linh (phu nhân của nhà cách mạng vĩ đại Tôn Trung Sơn) là một người bạn quốc tế đặc biệt thân thiết của Chủ tịch Hồ Chí Minh trong suốt cuộc đời. Trong giai đoạn Bác hoạt động cách mạng bí mật tại Quảng Châu và Thượng Hải trước muôn vàn vòng vây mật thám, phu nhân Tống Khánh Linh đã dùng uy tín xã hội to lớn và các mối quan hệ của mình để bí mật tài trợ tài chính, quyên góp thuốc men và hỗ trợ pháp lý đắc lực giải cứu nhiều chiến sĩ Việt Minh khỏi nhà lao phong kiến.",
        photo: "https://placehold.co/400x500/efead8/2b2b2b?text=Soong+Ching+ling"
    },
    vo_nguyen_giap: {
        name: "Võ Nguyên Giáp",
        lifespan: "1911 - 2013",
        role: "Đại tướng của Nhân dân",
        quote: "Gặp Bác lần đầu tiên tại Côn Minh năm 1940, tôi lập tức bị thu hút bởi sự giản dị vô ngần và tầm nhìn vĩ đại của Người.",
        quoteAuthor: "Đại tướng Võ Nguyên Giáp ghi lại trong hồi ký",
        bio: "Được Bác Hồ trực tiếp huấn luyện và dìu dắt từ những ngày ở Côn Minh (Trung Quốc) năm 1940, Võ Nguyên Giáp là người học trò xuất sắc, người đồng chí thân cận nhất của Người. Nhận thấy tài năng quân sự tiềm ẩn trong người trí thức trẻ này, Bác Hồ đã giao trọng trách thành lập Đội Việt Nam Tuyên truyền Giải phóng quân năm 1944. Dưới sự chỉ dẫn của Bác, Đại tướng Võ Nguyên Giáp đã chèo lái quân đội cách mạng lập nên những kỳ tích chấn động địa cầu, giành độc lập tự do cho Tổ quốc.",
        photo: "https://placehold.co/400x500/efead8/2b2b2b?text=Vo+Nguyen+Giap"
    },
    nhan_dan_cao_bang: {
        name: "Nhân dân Cao Bằng",
        lifespan: "Nôi hồng Cách mạng",
        role: "Lòng dân che chở cách mạng",
        quote: "Bác về nước, lòng dân Cao Bằng rộn rã vui tươi. Dù đói cơm rách áo, quyết một lòng giấu Bác, nuôi cán bộ chờ ngày khởi nghĩa.",
        quoteAuthor: "Lời ca đồng bào các dân tộc thiểu số Cao Bằng",
        bio: "Ngày 28/01/1941, Bác Hồ đặt chân trở về Tổ quốc thân yêu tại cột mốc 108 biên giới Việt - Trung. Trong những ngày tháng hoạt động cách mạng hiểm nguy gian khổ nhất tại hang lán Pác Bó, đồng bào các dân tộc Tày, Nùng, Dao tại Cao Bằng đã hết lòng đùm bọc, nuôi giấu Bác. Dù nghèo đói cơm áo, đồng bào quyết không hé răng nửa lời khai báo mật thám Pháp, âm thầm tiếp tế ngô, gạo măng rừng cho Bác. Lòng dân Cao Bằng son sắt chính là pháo đài vững chắc bảo vệ an toàn cho đầu não cách mạng Việt Nam hồi sinh.",
        photo: "https://placehold.co/400x500/efead8/2b2b2b?text=Nhan+Dan+Cao+Bang"
    }
};

function initCharacterModals() {
    const modal = document.getElementById('character-modal');
    const closeBtn = document.getElementById('btn-close-modal');
    const cards = document.querySelectorAll('.polaroid-card');

    const modalPhoto = document.getElementById('modal-photo');
    const modalLifespan = document.getElementById('modal-lifespan');
    const modalName = document.getElementById('modal-name');
    const modalRole = document.getElementById('modal-role');
    const modalQuote = document.getElementById('modal-quote');
    const modalQuoteAuthor = document.getElementById('modal-quote-author');
    const modalBio = document.getElementById('modal-bio');

    // Click Polaroid Card to open dossier modal with data
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const charKey = card.getAttribute('data-character');
            const data = charactersData[charKey];
            
            if (data) {
                modalPhoto.src = data.photo;
                modalPhoto.alt = data.name;
                modalLifespan.textContent = data.lifespan;
                modalName.textContent = data.name;
                modalRole.textContent = data.role;
                modalQuote.textContent = `"${data.quote}"`;
                modalQuoteAuthor.textContent = `— ${data.quoteAuthor}`;
                modalBio.textContent = data.bio;

                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Lock body scroll
            }
        });
    });

    // Close buttons & Click outside modal to close
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // ESC key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Unlock scroll
    }
}

/* ==========================================================================
   7. HỌC GIẢ TƯ TƯỞNG - VINTAGE HISTORICAL QUIZ ENGINE
   ========================================================================== */
const quizQuestions = [
    {
        question: "Phan Bội Châu muốn đưa Nguyễn Tất Thành sang Nhật Bản để tham gia phong trào cách mạng yêu nước nào?",
        options: [
            { text: "Phong trào Cần Vương", correct: false },
            { text: "Phong trào Đông Du", correct: true },
            { text: "Phong trào Duy Tân", correct: false },
            { text: "Khởi nghĩa Yên Thế", correct: false }
        ]
    },
    {
        question: "Ai là luật sư yêu nước đã giúp đỡ, chở che và dịch bản 'Yêu sách của nhân dân An Nam' sang tiếng Pháp sắc sảo tại Paris năm 1919?",
        options: [
            { text: "Phan Văn Trường", correct: true },
            { text: "Phan Châu Trinh", correct: false },
            { text: "Huỳnh Thúc Kháng", correct: false },
            { text: "Nguyễn Thế Truyền", correct: false }
        ]
    },
    {
        question: "Bài phỏng vấn lịch sử chấn động thế giới năm 1923, phác họa hình tượng lãnh tụ Nguyễn Ái Quốc được viết bởi nhà thơ vĩ đại nào người Nga?",
        options: [
            { text: "V. Mayakovsky", correct: false },
            { text: "Alexander Pushkin", correct: false },
            { text: "Osip Mandelstam (O. Mandenxtam)", correct: true },
            { text: "Maxim Gorky", correct: false }
        ]
    },
    {
        question: "Bản Luận cương vĩ đại của ai vào năm 1920 đã giúp Nguyễn Ái Quốc tìm thấy con đường giải phóng dân tộc thuộc địa thực tế?",
        options: [
            { text: "Karl Marx", correct: false },
            { text: "Friedrich Engels", correct: false },
            { text: "V.I. Lenin", correct: true },
            { text: "D. Manuilsky", correct: false }
        ]
    },
    {
        question: "Khi Bác Hồ trở về nước năm 1941 tại cột mốc biên giới 108, đồng bào nhân dân tỉnh nào đã hết lòng đùm bọc cách mạng ở hang Pác Bó?",
        options: [
            { text: "Nhân dân Tuyên Quang", correct: false },
            { text: "Nhân dân Cao Bằng", correct: true },
            { text: "Nhân dân Lạng Sơn", correct: false },
            { text: "Nhân dân Hà Giang", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;
let userName = "";
let questionTimer = null;
let timerSeconds = 20;

function initQuizGame() {
    const welcomePanel = document.getElementById('quiz-welcome');
    const gamePanel = document.getElementById('quiz-game');
    const resultPanel = document.getElementById('quiz-result');
    const nameInput = document.getElementById('user-name-input');
    const btnStart = document.getElementById('btn-start-quiz');
    const btnRestart = document.getElementById('btn-restart-quiz');
    const btnPrint = document.getElementById('btn-print-cert');

    btnStart.addEventListener('click', () => {
        userName = nameInput.value.trim();
        if (userName === "") {
            alert("Vui lòng nhập họ và tên của bạn để Hội đồng Sáng tạo Lịch sử cấp Bằng vinh danh!");
            nameInput.focus();
            return;
        }

        welcomePanel.classList.remove('active');
        gamePanel.classList.add('active');
        
        currentQuestionIndex = 0;
        score = 0;
        loadQuestion();
    });

    btnRestart.addEventListener('click', () => {
        resultPanel.classList.remove('active');
        document.querySelector('.quiz-wrapper').classList.remove('quiz-result-score-5');
        welcomePanel.classList.add('active');
        nameInput.value = "";
    });

    btnPrint.addEventListener('click', () => {
        window.print();
    });
}

function loadQuestion() {
    clearInterval(questionTimer);
    timerSeconds = 20;
    document.getElementById('timer-sec').textContent = timerSeconds;

    const currentQuestion = quizQuestions[currentQuestionIndex];
    
    // Progress fill update
    document.getElementById('quiz-number-indicator').textContent = `Câu hỏi ${currentQuestionIndex + 1} / ${quizQuestions.length}`;
    const percent = ((currentQuestionIndex) / quizQuestions.length) * 100;
    document.querySelector('.quiz-progress-fill').style.width = percent + '%';

    document.getElementById('quiz-question-text').textContent = currentQuestion.question;

    const optionsContainer = document.getElementById('quiz-options-container');
    optionsContainer.innerHTML = '';

    const labels = ['A', 'B', 'C', 'D'];
    currentQuestion.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-opt-btn';
        btn.innerHTML = `<span class="quiz-opt-badge">${labels[idx]}</span> <span class="opt-text">${opt.text}</span>`;
        
        btn.addEventListener('click', () => selectAnswer(btn, opt.correct));
        optionsContainer.appendChild(btn);
    });

    // Question Timer loop
    questionTimer = setInterval(() => {
        timerSeconds--;
        document.getElementById('timer-sec').textContent = timerSeconds;
        
        if (timerSeconds <= 0) {
            clearInterval(questionTimer);
            revealCorrectAnswer();
            setTimeout(() => {
                moveToNextQuestion();
            }, 1500);
        }
    }, 1000);
}

function selectAnswer(selectedBtn, isCorrect) {
    clearInterval(questionTimer);
    
    // Disable all option buttons
    const buttons = document.querySelectorAll('.quiz-opt-btn');
    buttons.forEach(btn => {
        btn.disabled = true;
        const optText = btn.querySelector('.opt-text').textContent;
        const matchingOpt = quizQuestions[currentQuestionIndex].options.find(o => o.text === optText);
        if (matchingOpt && matchingOpt.correct) {
            btn.classList.add('correct');
        }
    });

    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
        playCorrectSound();
    } else {
        selectedBtn.classList.add('incorrect');
        playIncorrectSound();
    }

    setTimeout(() => {
        moveToNextQuestion();
    }, 1500);
}

function revealCorrectAnswer() {
    const buttons = document.querySelectorAll('.quiz-opt-btn');
    buttons.forEach(btn => {
        btn.disabled = true;
        const optText = btn.querySelector('.opt-text').textContent;
        const matchingOpt = quizQuestions[currentQuestionIndex].options.find(o => o.text === optText);
        if (matchingOpt && matchingOpt.correct) {
            btn.classList.add('correct');
        }
    });
}

function moveToNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-game').classList.remove('active');
    
    const resultPanel = document.getElementById('quiz-result');
    const resultIcon = document.getElementById('result-icon');
    const greeting = document.getElementById('result-greeting');
    const scoreText = document.getElementById('result-score-text');
    const summaryText = document.getElementById('result-summary-text');
    
    resultPanel.classList.add('active');

    // Sync progress fill to 100%
    document.querySelector('.quiz-progress-fill').style.width = '100%';

    scoreText.textContent = `Bạn đã trả lời đúng ${score} / ${quizQuestions.length} câu hỏi.`;

    if (score === 5) {
        // Perfect score reveals landscape merit diploma
        document.querySelector('.quiz-wrapper').classList.add('quiz-result-score-5');
        resultIcon.innerHTML = `<i class="fas fa-scroll" style="font-size: 3.5rem; color: #D4AF37;"></i>`;
        greeting.textContent = `Tuyệt vời, ${userName}!`;
        summaryText.innerHTML = `Bạn đã xuất sắc trả lời đúng **5/5 câu hỏi sát hạch lịch sử**. Dưới đây là Bằng khen học giả danh giá tôn vinh tư tưởng và lòng tri ân của bạn đối với cách mạng Việt Nam.`;
        
        // Prepare Certificate fields
        document.getElementById('cert-recipient-name').textContent = userName.toUpperCase();
        
        const today = new Date();
        const day = today.getDate().toString().padStart(2, '0');
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const year = today.getFullYear();
        document.querySelector('.cert-date').textContent = `Ngày ${day} tháng ${month} năm ${year}`;
    } else if (score >= 3) {
        resultIcon.innerHTML = `<i class="fas fa-award text-red"></i>`;
        greeting.textContent = `Làm tốt lắm, ${userName}!`;
        summaryText.innerHTML = `Bạn có nền tảng kiến thức lịch sử rất vững chắc về những người đồng hành cùng Bác. Hãy ôn tập lại các hồ sơ nhân vật ở trên và thử sức lần nữa để **đạt điểm tuyệt đối 5/5 và nhận Bằng khen Học giả** nhé!`;
    } else {
        resultIcon.innerHTML = `<i class="fas fa-feather-alt text-muted"></i>`;
        greeting.textContent = `Cần cố gắng thêm, ${userName}!`;
        summaryText.innerHTML = `Lịch sử cách mạng Việt Nam chứa đựng nhiều tư liệu vô giá. Bạn hãy kéo lên đọc lại các hồ sơ Polaroid nhân vật và các mốc trên bản đồ để làm bài thi tốt hơn nhé!`;
    }
}

// Flash color feedback on quiz panel
function playCorrectSound() {
    const wrapper = document.querySelector('.quiz-wrapper');
    wrapper.style.borderColor = '#38A169';
    setTimeout(() => wrapper.style.borderColor = '', 500);
}

function playIncorrectSound() {
    const wrapper = document.querySelector('.quiz-wrapper');
    wrapper.style.borderColor = '#E53E3E';
    setTimeout(() => wrapper.style.borderColor = '', 500);
}

/* ==========================================================================
   8. VINTAGE GRAMOPHONE AUDIO TURNTABLE PLAYER
   ========================================================================== */
const playlist = [
    {
        title: "Dấu Chân Phía Trước",
        artist: "Hòa tấu sáo trúc & tranh bầu truyền thống",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
        title: "Ai Yêu Bác Hồ Chí Minh Hơn Thiếu Niên Nhi Đồng",
        artist: "Hòa tấu đàn T'rưng mộc mạc",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
        title: "Tiếng hát giữa rừng Pác Bó",
        artist: "Hòa tấu đàn nhị & nhạc cụ dân tộc",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    }
];

let currentTrackIndex = 0;
let isPlaying = false;

function initAudioPlayer() {
    const audio = document.getElementById('main-audio');
    const playBtn = document.getElementById('btn-play-pause');
    const prevBtn = document.getElementById('btn-prev-song');
    const nextBtn = document.getElementById('btn-next-song');
    const trackTitle = document.getElementById('audio-track-title');
    const trackArtist = document.getElementById('audio-track-artist');
    const vinylDisc = document.getElementById('vinyl-record');
    const progressFill = document.getElementById('audio-progress-fill');
    const progressContainer = document.getElementById('audio-progress-container');
    const currentTimeEl = document.getElementById('audio-current-time');
    const durationEl = document.getElementById('audio-duration');

    function loadTrack(index) {
        const track = playlist[index];
        audio.src = track.src;
        trackTitle.textContent = track.title;
        trackArtist.textContent = track.artist;
        progressFill.style.width = '0%';
        currentTimeEl.textContent = "00:00";
    }

    loadTrack(currentTrackIndex);

    function playTrack() {
        isPlaying = true;
        audio.play().catch(err => console.log("Audio play postponed until user gesture"));
        playBtn.innerHTML = `<i class="fas fa-pause"></i>`;
        vinylDisc.classList.add('playing');
    }

    function pauseTrack() {
        isPlaying = false;
        audio.pause();
        playBtn.innerHTML = `<i class="fas fa-play"></i>`;
        vinylDisc.classList.remove('playing');
    }

    playBtn.addEventListener('click', () => {
        if (isPlaying) {
            pauseTrack();
        } else {
            playTrack();
        }
    });

    nextBtn.addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
        loadTrack(currentTrackIndex);
        if (isPlaying) playTrack();
    });

    prevBtn.addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
        loadTrack(currentTrackIndex);
        if (isPlaying) playTrack();
    });

    audio.addEventListener('timeupdate', () => {
        const currentTime = audio.currentTime;
        const duration = audio.duration || 0;
        
        if (duration > 0) {
            const progressPercent = (currentTime / duration) * 100;
            progressFill.style.width = progressPercent + '%';
            
            currentTimeEl.textContent = formatTime(currentTime);
            durationEl.textContent = formatTime(duration);
        }
    });

    progressContainer.addEventListener('click', (e) => {
        const width = progressContainer.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration || 0;
        
        if (duration > 0) {
            audio.currentTime = (clickX / width) * duration;
        }
    });

    audio.addEventListener('ended', () => {
        nextBtn.click();
    });

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    }
}

/* ==========================================================================
   9. INTERACTIVE VINTAGE QUOTES SLIDER
   ========================================================================== */
function initQuoteCarousel() {
    const slides = document.querySelectorAll('.quote-slide');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    let currentSlide = 0;
    let autoSlideInterval = null;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const slideIndex = parseInt(dot.getAttribute('data-slide'));
            showSlide(slideIndex);
            resetAutoSlide();
        });
    });

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            let nextSlide = (currentSlide + 1) % slides.length;
            showSlide(nextSlide);
        }, 5500);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    startAutoSlide();
}
