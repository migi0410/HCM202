/**
 * Hành Trình Vạn Dặm - Application JavaScript
 * Developed by Antigravity for HCM202
 */

document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initMobileNav();
    initParticleCanvas();
    initInteractiveMap();
    initTimelineObserver();
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
    
    // Simulate loading progress
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                    // Trigger hero entry animation
                    document.querySelector('.hero-content').classList.add('active');
                }, 600);
            }, 300);
        } else {
            width += Math.floor(Math.random() * 15) + 5;
            if (width > 100) width = 100;
            progress.style.width = width + '%';
        }
    }, 100);
}

/* ==========================================================================
   2. MOBILE NAVIGATION MENU
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

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.querySelector('i').className = 'fas fa-bars';
            
            // Set active class
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
   3. CINEMATIC BACKGROUND FLOATING PARTICLES (HTML5 CANVAS)
   ========================================================================== */
function initParticleCanvas() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let particlesArray = [];
    const numberOfParticles = 50;

    // Adjust canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle constructor
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2.5 + 0.5;
            this.speedX = Math.random() * 0.4 - 0.2;
            this.speedY = Math.random() * -0.5 - 0.1; // Float upwards
            this.color = `rgba(212, 175, 55, ${Math.random() * 0.3 + 0.1})`; // Gold glow
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Reset when going out of bounds
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
            // Add subtle shadow glow
            ctx.shadowBlur = 8;
            ctx.shadowColor = '#D4AF37';
            ctx.fill();
        }
    }

    // Initialize particles
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Reset shadow for performance
        ctx.shadowBlur = 0;
        
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
// Data for the 8 historical ports/milestones
const milestoneData = {
    1: {
        badge: "MỐC 1 • 05/06/1911",
        title: "Khởi Hành Tìm Đường Cứu Nước",
        place: "Bến Cảng Nhà Rồng, Sài Gòn",
        desc: "Với khát vọng độc lập cháy bỏng, người thanh niên Nguyễn Tất Thành quyết chí rời quê hương. Lấy tên Văn Ba, Người xin làm phụ bếp trên con tàu Đô đốc Latouche-Tréville để đi sang các nước phương Tây, xem họ làm thế nào rồi trở về giúp đồng bào mình giải phóng xiềng xích thực dân.",
        image: "assets/images/nha_rong_1911.png"
    },
    2: {
        badge: "MỐC 2 • 1911 - 1917",
        title: "Bôn Ba Khắp Năm Châu Bốn Biển",
        place: "Marseille & Hải cảng trên Thế giới",
        desc: "Người đi qua nhiều đại dương, đặt chân đến nhiều nước ở châu Âu, châu Phi, châu Mỹ. Bằng cuộc sống lao động gian khổ (làm phụ bếp, cào tuyết, bồi bàn, rửa ảnh...), Người nhận thức sâu sắc bản chất của chủ nghĩa đế quốc và thấu hiểu nỗi thống khổ chung của nhân dân lao động trên toàn cầu.",
        image: "assets/images/bon_ba_1911.png"
    },
    3: {
        badge: "MỐC 3 • 18/06/1919",
        title: "Yêu Sách Của Nhân Dân An Nam",
        place: "Versailles, Paris, Pháp",
        desc: "Thay mặt Hội những người An Nam yêu nước, Người lấy tên Nguyễn Ái Quốc gửi tới Hội nghị hòa bình Versailles bản 'Yêu sách của nhân dân An Nam' đòi tự do dân chủ. Sự kiện đưa tên tuổi Nguyễn Ái Quốc chấn động trường quốc tế và thức tỉnh phong trào giải phóng dân tộc trong nước.",
        image: "assets/images/yeu_sach_1919.png"
    },
    4: {
        badge: "MỐC 4 • THÁNG 07/1920",
        title: "Tìm Thấy Ánh Sáng Lý Luận Của Lenin",
        place: "Quận 17, Paris, Pháp",
        desc: "Nguyễn Ái Quốc đọc bản 'Luận cương của Lenin về vấn đề dân tộc và thuộc địa' đăng trên báo L'Humanité. Bản luận cương vạch lối chỉ đường cứu nước đúng đắn nhất: Cách mạng giải phóng dân tộc phải gắn liền với Cách mạng vô sản toàn thế giới.",
        image: "assets/images/luan_cuong_1920.png"
    },
    5: {
        badge: "MỐC 5 • 12/1920",
        title: "Sáng Lập Đảng Cộng Sản Pháp",
        place: "Đại Hội Tours, Pháp",
        desc: "Nguyễn Ái Quốc tham dự Đại hội lần thứ 18 Đảng Xã hội Pháp ở Tours. Người bỏ phiếu tán thành gia nhập Quốc tế thứ ba, tham gia sáng lập Đảng Cộng sản Pháp, trở thành chiến sĩ cộng sản Việt Nam đầu tiên, đánh dấu bước ngoặt tư tưởng lịch sử.",
        image: "assets/images/dai_hoi_tours.png"
    },
    6: {
        badge: "MỐC 6 • 1923 - 1924",
        title: "Học Tập Và Hoạt Động Tại Liên Xô",
        place: "Moscow, Liên Bang Xô Viết",
        desc: "Người đặt chân tới quê hương của Cách mạng Tháng Mười Nga vĩ đại, học tập tại Đại học Phương Đông của Quốc tế Cộng sản. Tại đây, Người tham gia tích cực các hội nghị lớn, viết nhiều sách báo tuyên truyền cách mạng thuộc địa và trực tiếp chuẩn bị đội ngũ nòng cốt cho Việt Nam.",
        image: "assets/images/lien_xo_1923.png"
    },
    7: {
        badge: "MỐC 7 • 1924 - 1930",
        title: "Thành Lập Đảng Cộng Sản Việt Nam",
        place: "Quảng Châu & Hong Kong",
        desc: "Người về gần Tổ quốc hơn, thành lập 'Hội Việt Nam Cách mạng Thanh niên' tại Quảng Châu, viết cuốn 'Đường Kách mệnh'. Vào ngày 03/02/1930, Người chủ trì Hội nghị thống nhất các tổ chức cộng sản tại Kowloon, Hong Kong, chính thức thành lập Đảng Cộng sản Việt Nam lãnh đạo toàn quân, toàn dân.",
        image: "assets/images/thanh_lap_dang.png"
    },
    8: {
        badge: "MỐC 8 • 28/01/1941",
        title: "Trở Về Đất Mẹ - Trực Tiếp Chỉ Đạo Cách Mạng",
        place: "Cột mốc 108, Pác Bó, Cao Bằng",
        desc: "Sau đúng 30 năm bôn ba vạn dặm đầy rẫy hiểm nguy gian khổ, Bác Hồ kính yêu chính thức đặt chân trở về Tổ quốc thân yêu. Người ở hang Pác Bó dựng xây căn cứ cách mạng, chèo lái con thuyền Cách mạng Tháng Tám giành thắng lợi lịch sử năm 1945, khai sinh ra nước Việt Nam độc lập.",
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
        // Setup SVG path stroke dash for drawing animation
        journeyPath.style.strokeDasharray = pathLength;
        journeyPath.style.strokeDashoffset = pathLength;
    }

    // Attach click events to nodes
    mapNodes.forEach(node => {
        node.addEventListener('click', () => {
            const milestoneId = node.getAttribute('data-id');
            selectMilestone(milestoneId);
            
            // Smooth scroll to the corresponding timeline item
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

// Function to select and display milestone data
function selectMilestone(id) {
    const data = milestoneData[id];
    if (!data) return;

    // Update active state in SVG Nodes
    mapNodes.forEach(node => {
        if (node.getAttribute('data-id') == id) {
            node.classList.add('active');
            createMapRipple(node);
        } else {
            node.classList.remove('active');
        }
    });

    // Update Info Display Card contents with animation
    const infoBox = document.getElementById('map-info-box');
    const badge = infoBox.querySelector('.milestone-badge');
    const title = infoBox.querySelector('.milestone-title');
    const place = infoBox.querySelector('.milestone-place');
    const desc = infoBox.querySelector('.milestone-desc');
    const img = infoBox.querySelector('#map-info-img');

    // Fade out
    infoBox.style.opacity = '0.3';
    infoBox.style.transform = 'translateY(10px)';

    setTimeout(() => {
        badge.textContent = data.badge;
        title.textContent = data.title;
        place.innerHTML = `<i class="fas fa-map-marker-alt text-gold"></i> ${data.place}`;
        desc.textContent = data.desc;
        img.src = data.image;
        img.alt = data.title;

        // Fade back in
        infoBox.style.opacity = '1';
        infoBox.style.transform = 'translateY(0)';
    }, 250);
}

// Draw dynamic SVG route path depending on active milestone
function drawPathUpTo(milestoneId) {
    if (!journeyPath) return;

    // Fractional steps along the path for the 8 milestones
    // Estimated percentages of path length for each point
    const milestonePercentages = {
        1: 0.0,
        2: 0.16,
        3: 0.32,
        4: 0.48,
        5: 0.60,
        6: 0.75,
        7: 0.90,
        8: 1.0
    };

    const targetPercent = milestonePercentages[milestoneId] || 0.0;
    const targetOffset = pathLength * (1.0 - targetPercent);
    
    // Animate path drawing
    journeyPath.style.transition = 'stroke-dashoffset 1s cubic-bezier(0.16, 1, 0.3, 1)';
    journeyPath.style.strokeDashoffset = targetOffset;
}

// Helper to create glowing ripple circle on map
function createMapRipple(node) {
    const pulseGroup = document.getElementById('pulse-group');
    if (!pulseGroup) return;

    // Clear previous pulses
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
   5. DÒNG THỜI GIAN DỌC & TIMELINE SCROLL SYNC
   ========================================================================== */
function initTimelineObserver() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Setup Intersection Observer for smooth reveal
    const revealOptions = {
        root: null,
        threshold: 0.25,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Retrieve current milestone ID to sync with Map
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
   6. HỌC GIẢ LỊCH SỬ - INTERACTIVE QUIZ & CERTIFICATE ENGINE
   ========================================================================== */
const quizQuestions = [
    {
        question: "Bác Hồ lấy tên là gì khi ra đi tìm đường cứu nước trên con tàu Đô đốc Latouche-Tréville vào năm 1911?",
        options: [
            { text: "Nguyễn Ái Quốc", correct: false },
            { text: "Trần Dân Tiên", correct: false },
            { text: "Văn Ba (Anh Ba)", correct: true },
            { text: "Nguyễn Tất Thành", correct: false }
        ]
    },
    {
        question: "Bác Hồ đọc bản Luận cương của Lenin về vấn đề dân tộc và thuộc địa, tìm thấy ánh sáng chân lý cứu nước vào năm nào?",
        options: [
            { text: "Năm 1911", correct: false },
            { text: "Năm 1919", correct: false },
            { text: "Năm 1920 (Tháng 7)", correct: true },
            { text: "Năm 1930", correct: false }
        ]
    },
    {
        question: "Nguyễn Tất Thành gửi bản 'Yêu sách của nhân dân An Nam' đến Hội nghị Versailles (1919) đòi quyền tự do dân chủ dưới tên ký nào?",
        options: [
            { text: "Nguyễn Ái Quốc", correct: true },
            { text: "Hồ Chí Minh", correct: false },
            { text: "Văn Ba", correct: false },
            { text: "Nguyễn Sinh Cung", correct: false }
        ]
    },
    {
        question: "Cuốn sách tập hợp các bài giảng của Nguyễn Ái Quốc tại Quảng Châu dùng để đào tạo cán bộ cách mạng Việt Nam có tên là gì?",
        options: [
            { text: "Bản án chế độ thực dân Pháp", correct: false },
            { text: "Nhật ký trong tù", correct: false },
            { text: "Đường Kách mệnh", correct: true },
            { text: "Tuyên ngôn độc lập", correct: false }
        ]
    },
    {
        question: "Ngày 28/01/1941, Bác Hồ trở về nước trực tiếp chỉ đạo cách mạng qua cột mốc nào ở biên giới Việt - Trung?",
        options: [
            { text: "Mốc 111, Lạng Sơn", correct: false },
            { text: "Mốc 108, Pác Bó, Cao Bằng", correct: true },
            { text: "Mốc 108, Tân Trào, Tuyên Quang", correct: false },
            { text: "Mốc 79, Hà Giang", correct: false }
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
            alert("Vui lòng nhập họ và tên của bạn để ban tổ chức cấp Bằng vinh danh!");
            nameInput.focus();
            return;
        }

        // Transition to quiz gameplay
        welcomePanel.classList.remove('active');
        gamePanel.classList.add('active');
        
        currentQuestionIndex = 0;
        score = 0;
        loadQuestion();
    });

    btnRestart.addEventListener('click', () => {
        resultPanel.classList.remove('active');
        // Reset perfect score classes
        document.querySelector('.quiz-wrapper').classList.remove('quiz-result-score-5');
        welcomePanel.classList.add('active');
        nameInput.value = "";
    });

    btnPrint.addEventListener('click', () => {
        window.print();
    });
}

function loadQuestion() {
    // Clear timer
    clearInterval(questionTimer);
    timerSeconds = 20;
    document.getElementById('timer-sec').textContent = timerSeconds;

    const currentQuestion = quizQuestions[currentQuestionIndex];
    
    // Update question indicator and progress bar
    document.getElementById('quiz-number-indicator').textContent = `Câu hỏi ${currentQuestionIndex + 1} / ${quizQuestions.length}`;
    const percent = ((currentQuestionIndex) / quizQuestions.length) * 100;
    document.querySelector('.quiz-progress-fill').style.width = percent + '%';

    // Set question text
    document.getElementById('quiz-question-text').textContent = currentQuestion.question;

    // Render options
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

    // Start timer
    questionTimer = setInterval(() => {
        timerSeconds--;
        document.getElementById('timer-sec').textContent = timerSeconds;
        
        if (timerSeconds <= 0) {
            clearInterval(questionTimer);
            // Timeout! Automatically reveal correct answer and move next
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
        // Find correct option to highlight
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

    // Move to next question after small delay
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
        // Perfect score! Reveal certificate
        document.querySelector('.quiz-wrapper').classList.add('quiz-result-score-5');
        resultIcon.innerHTML = `<i class="fas fa-award text-gold" style="font-size: 4rem;"></i>`;
        greeting.textContent = `Tuyệt vời, ${userName}!`;
        summaryText.innerHTML = `Bạn là một <strong>Học giả Lịch sử thực thụ</strong>! Bạn đã trả lời đúng hoàn hảo mọi câu hỏi lịch sử. Hãy nhận Giấy chứng nhận Vinh dự rực rỡ bên dưới.`;
        
        // Prepare Certificate fields
        document.getElementById('cert-recipient-name').textContent = userName.toUpperCase();
        
        // Formulate date
        const today = new Date();
        const day = today.getDate().toString().padStart(2, '0');
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const year = today.getFullYear();
        document.querySelector('.cert-date').textContent = `Ngày ${day} tháng ${month} năm ${year}`;
    } else if (score >= 3) {
        resultIcon.innerHTML = `<i class="fas fa-trophy text-gold"></i>`;
        greeting.textContent = `Làm tốt lắm, ${userName}!`;
        summaryText.innerHTML = `Bạn am hiểu lịch sử khá rõ nét về hành trình của Bác. Cố gắng trả lời đúng 5/5 câu hỏi ở lượt thi tiếp theo để được **cấp Giấy chứng nhận danh giá** nhé!`;
    } else {
        resultIcon.innerHTML = `<i class="fas fa-book-open text-muted"></i>`;
        greeting.textContent = `Đừng nản lòng, ${userName}!`;
        summaryText.innerHTML = `Lịch sử dân tộc chứa đựng nhiều điều kỳ diệu. Hãy đọc kỹ lại các cột mốc trên bản đồ tương tác và Dòng thời gian của chúng tôi để ôn tập rồi thử sức lại nhé!`;
    }
}

// Visual sound effect replacements
function playCorrectSound() {
    // Sound replacements using subtle flashes on the panel if desired
    const wrapper = document.querySelector('.quiz-wrapper');
    wrapper.style.borderColor = 'rgba(56, 161, 105, 0.4)';
    setTimeout(() => wrapper.style.borderColor = '', 500);
}

function playIncorrectSound() {
    const wrapper = document.querySelector('.quiz-wrapper');
    wrapper.style.borderColor = 'rgba(229, 62, 62, 0.4)';
    setTimeout(() => wrapper.style.borderColor = '', 500);
}

/* ==========================================================================
   7. VINTAGE VINYL AUDIO PLAYER SPACE
   ========================================================================== */
const playlist = [
    {
        title: "Dấu Chân Phía Trước",
        artist: "Hòa tấu sáo trúc & tranh bầu truyền thống",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Royalty free back sound placeholder
    },
    {
        title: "Ai Yêu Bác Hồ Chí Minh Hơn Thiếu Niên Nhi Đồng",
        artist: "Hòa tấu Đàn T'rưng mộc mạc",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
        title: "Tiếng hát giữa rừng Pác Bó",
        artist: "Hòa tấu dàn nhạc dân tộc Việt Nam",
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

    // Load track metadata
    function loadTrack(index) {
        const track = playlist[index];
        audio.src = track.src;
        trackTitle.textContent = track.title;
        trackArtist.textContent = track.artist;
        progressFill.style.width = '0%';
        currentTimeEl.textContent = "00:00";
    }

    loadTrack(currentTrackIndex);

    // Play & Pause
    function playTrack() {
        isPlaying = true;
        audio.play().catch(err => console.log("Audio play deferred until user interaction"));
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

    // Next Track
    nextBtn.addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
        loadTrack(currentTrackIndex);
        if (isPlaying) playTrack();
    });

    // Prev Track
    prevBtn.addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
        loadTrack(currentTrackIndex);
        if (isPlaying) playTrack();
    });

    // Update Progress Bar
    audio.addEventListener('timeupdate', () => {
        const currentTime = audio.currentTime;
        const duration = audio.duration || 0;
        
        if (duration > 0) {
            const progressPercent = (currentTime / duration) * 100;
            progressFill.style.width = progressPercent + '%';
            
            // Format time display
            currentTimeEl.textContent = formatTime(currentTime);
            durationEl.textContent = formatTime(duration);
        }
    });

    // Seek/Scrub on progress bar click
    progressContainer.addEventListener('click', (e) => {
        const width = progressContainer.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration || 0;
        
        if (duration > 0) {
            audio.currentTime = (clickX / width) * duration;
        }
    });

    // Auto-advance song when ended
    audio.addEventListener('ended', () => {
        nextBtn.click();
    });

    // Time Formatter
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    }
}

/* ==========================================================================
   8. INTERACTIVE QUOTES CAROUSEL
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

    // Dot navigation
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const slideIndex = parseInt(dot.getAttribute('data-slide'));
            showSlide(slideIndex);
            resetAutoSlide();
        });
    });

    // Auto rotate slide every 6 seconds
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            let nextSlide = (currentSlide + 1) % slides.length;
            showSlide(nextSlide);
        }, 6000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    startAutoSlide();
}
