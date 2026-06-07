/* ==========================================================================
   HCM UNIVERSE - JAVASCRIPT CONTROLLER V4 (MASTERPIECE SPACE HUD & GLASSORBS)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // Note: UNIVERSE_DATA is now loaded globally from game_shared.js

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
        get muted() {
            return typeof GameSFX !== 'undefined' ? GameSFX.isMuted() : false;
        },
        get volume() {
            if (this.muted) return 0;
            return typeof GameSFX !== 'undefined' && typeof GameSFX.getVolume === 'function' ? GameSFX.getVolume() : 0.5;
        },
        
        init() {
            if (this.ctx) return;
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (AudioContextClass) {
                this.ctx = new AudioContextClass();
            }
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
                
                const vol = this.volume;
                gain.gain.setValueAtTime(0.02 * vol, this.ctx.currentTime);
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
                
                const vol = this.volume;
                gain.gain.setValueAtTime(0.015 * vol, this.ctx.currentTime);
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
                
                const vol = this.volume;
                gain.gain.setValueAtTime(0.04 * vol, this.ctx.currentTime);
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
                
                const vol = this.volume;
                gain.gain.setValueAtTime(0.05 * vol, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);
                
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                
                osc.start();
                osc.stop(this.ctx.currentTime + 0.45);
            } catch (e) {}
        }
    };

    // Note: Mute button binding is handled globally by game_shared.js

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

    function trackPlanetDiscovery(planetId) {
        let explored = JSON.parse(localStorage.getItem('hcm_explored_planets') || '[]');
        if (!explored.includes(planetId)) {
            explored.push(planetId);
            localStorage.setItem('hcm_explored_planets', JSON.stringify(explored));
        }
        updateProgressUI(explored.length);
    }
    
    function updateProgressUI(count) {
        const textEl = document.getElementById('hud-progress-text');
        const fillEl = document.getElementById('hud-progress-fill');
        if (textEl) {
            textEl.textContent = `ĐÃ KHÁM PHÁ: ${count}/5 HÀNH TINH`;
        }
        if (fillEl) {
            fillEl.style.width = `${(count / 5) * 100}%`;
        }
    }

    // Initialize progress on load
    updateProgressUI(JSON.parse(localStorage.getItem('hcm_explored_planets') || '[]').length);
    // --------------------------------------------------------------------------
    // TRANSMISSION RECEIVED FEATURE
    // --------------------------------------------------------------------------
    function getTransmissionsHTML(planetId) {
        const transmissions = UNIVERSE_DATA[planetId].transmissions;
        if (!transmissions || transmissions.length === 0) return '';

        let html = `
            <div class="transmission-divider">// TRANSMISSION RECEIVED //</div>
            <div class="transmission-container">
        `;

        transmissions.forEach((t, index) => {
            html += `
                <div class="transmission-box">
                    <div class="transmission-header-row">
                        <span class="transmission-signal-tag">DEEP SPACE SIGNAL #[0${planetId}-${index + 1}]</span>
                        <span class="transmission-signal-icon"><i class="fas fa-satellite-dish"></i></span>
                    </div>
                    <div class="transmission-quote">"${t.quote}"</div>
                    <div class="transmission-source">— ${t.source}</div>
                </div>
            `;
        });

        html += `</div>`;
        return html;
    }

    function animateTransmissions(planetId) {
        if (!docActiveContent) return;
        
        const transBoxes = docActiveContent.querySelectorAll('.transmission-box');
        setTimeout(() => {
            transBoxes.forEach(box => {
                box.classList.add('animate-show');
            });
        }, 50);
    }

    function openSpaceConsole(planetId, moonId) {
        trackPlanetDiscovery(planetId);
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
                        docActiveContent.innerHTML = mData.content + getTransmissionsHTML(planetId);
                        animateTransmissions(planetId);
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
            docActiveContent.innerHTML = moon.content + getTransmissionsHTML(planetId);
            animateTransmissions(planetId);
            docActiveContent.classList.remove('scanning');
            void docActiveContent.offsetWidth; // Trigger reflow
            docActiveContent.classList.add('scanning');
        }
        
        const docActiveTip = document.getElementById('doc-active-tip');
        if (docActiveTip) {
            decryptText(docActiveTip, data.academicFooter || "Sử dụng các tab bên trái để đọc các phần nội dung tiếp theo.");
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

    // Note: Chatbot portal is now dynamically injected and managed globally by game_shared.js


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
