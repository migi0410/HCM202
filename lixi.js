/* ==========================================================================
   HCM UNIVERSE - LÌ XÌ MÀN 2 JAVASCRIPT CONTROLLER (HCM202)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. CACHING DOM ELEMENTS
    const gridLixi = document.getElementById('grid-lixi');
    const hudScore = document.getElementById('hud-score-value');
    const hudTokens = document.getElementById('hud-tokens-value');
    const hudLixiClaimed = document.getElementById('hud-lixi-claimed-value');
    const inventoryList = document.getElementById('inventory-list');
    const btnResetGame = document.getElementById('btn-reset-game');

    const gameHUDSystem = document.getElementById('game-hud-sys-msg');
    
    let state = loadGameState();

    function logSystemHUD(message, type = 'success') {
        if (!gameHUDSystem) return;
        gameHUDSystem.textContent = `// ${message.toUpperCase()}`;
        gameHUDSystem.className = `hud-system-log ${type}`;
        
        gameHUDSystem.style.animation = 'none';
        void gameHUDSystem.offsetHeight; // Trigger Reflow
        gameHUDSystem.style.animation = null;
    }

    // 2. INITIATOR & HUD STATS UPDATER
    function initLixiPage() {
        state = loadGameState();
        updateHUD();
        renderLixiGrid();
        
        // Handle Auto-Pulse Guiding for Flow 1 (Transition from tracnghiem.html)
        const urlParams = new URLSearchParams(window.location.search);
        const autoPulse = urlParams.get('autoPulse');
        
        if (autoPulse === 'true') {
            logSystemHUD("Hệ thống giải mã tọa độ lì xì thành công! Hãy chọn bao lì xì nhấp nháy!", "success");
            
            // Wait slightly for layout loading then trigger pulse guide
            setTimeout(() => {
                const firstUnopened = document.querySelector('.lixi-card-item:not(.opened)');
                if (firstUnopened) {
                    firstUnopened.classList.add('guide-pulse');
                    firstUnopened.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    
                    // Clear the pulse class after 3.5s
                    setTimeout(() => {
                        firstUnopened.classList.remove('guide-pulse');
                    }, 3500);
                }
            }, 600);
        } else {
            if (state.tokens > 0) {
                logSystemHUD(`Tọa độ đã ổn định. Bạn đang có ${state.tokens} lượt mở lì xì!`, "success");
            } else {
                logSystemHUD("Kho lì xì tinh vân. Giải đúng trắc nghiệm ở Màn 1 để nhận lượt!", "success");
            }
        }
    }

    function updateHUD() {
        if (hudScore) hudScore.textContent = `${state.score}/9`;
        if (hudTokens) {
            hudTokens.textContent = state.tokens;
            if (state.tokens > 0) {
                hudTokens.parentElement.classList.add('pulse-glow');
            } else {
                hudTokens.parentElement.classList.remove('pulse-glow');
            }
        }
        
        let openedCount = state.opened.filter(x => x).length;
        if (hudLixiClaimed) hudLixiClaimed.textContent = `${openedCount}/9`;
        
        if (inventoryList) {
            inventoryList.innerHTML = '';
            if (state.claimedPrizes.length === 0) {
                inventoryList.innerHTML = '<li class="empty-inv">// Rỗng. Trả lời đúng để tích lũy lì xì.</li>';
            } else {
                state.claimedPrizes.forEach((prize, idx) => {
                    const li = document.createElement('li');
                    li.className = `inv-item ${prize.type}`;
                    li.innerHTML = `
                        <span class="inv-num">#${idx + 1}</span>
                        <span class="inv-label">${prize.label}</span>
                    `;
                    inventoryList.appendChild(li);
                });
            }
        }
    }

    // 3. RENDER 9 ENVELOPES GRID
    function renderLixiGrid() {
        if (!gridLixi) return;
        gridLixi.innerHTML = '';
        
        for (let i = 0; i < 9; i++) {
            const envelope = document.createElement('div');
            envelope.className = 'lixi-card-item';
            envelope.dataset.index = i;
            
            const isOpen = state.opened[i];
            const prize = state.shuffledPrizes[i];
            
            if (isOpen) {
                envelope.classList.add('opened');
            }
            
            envelope.innerHTML = `
                <div class="lixi-inner">
                    <div class="lixi-front">
                        <div class="lixi-pattern"></div>
                        <div class="lixi-glow"></div>
                        <div class="lixi-star">✦</div>
                        <div class="lixi-number">#${i + 1}</div>
                        <div class="lixi-label">THỬ THÁCH VŨ TRỤ</div>
                    </div>
                    <div class="lixi-back">
                        <div class="prize-sparkles"></div>
                        <div class="prize-content ${isOpen ? (prize ? prize.type : '') : ''}">
                            <div class="prize-icon">${isOpen ? (prize.type === 'cash' ? '💸' : (prize.type === 'parking' ? '🏍️' : '🥨')) : ''}</div>
                            <div class="prize-title">${isOpen ? (prize.type === 'cash' ? 'TIỀN MẶT' : (prize.type === 'parking' ? 'GỬI XE' : 'BÁNH OSHI')) : ''}</div>
                            <div class="prize-value">${isOpen ? prize.value.toUpperCase() : ''}</div>
                            <div class="prize-full-label">${isOpen ? prize.label : ''}</div>
                        </div>
                    </div>
                </div>
            `;
            
            envelope.addEventListener('click', () => {
                if (state.opened[i]) {
                    GameSFX.playWarning();
                    logSystemHUD("Bao lì xì này đã được mở rồi!", "error");
                    return;
                }
                
                state = loadGameState(); // Always read freshest state
                
                if (state.tokens <= 0) {
                    GameSFX.playWarning();
                    logSystemHUD("Chưa đủ lượt bốc! Hãy giải đúng trắc nghiệm ở Màn 1!", "error");
                    
                    const tokenContainer = document.querySelector('.hud-stat-box.tokens-stat');
                    if (tokenContainer) {
                        tokenContainer.classList.add('error-shake');
                        setTimeout(() => tokenContainer.classList.remove('error-shake'), 600);
                    }
                    return;
                }
                
                openEnvelope(i, envelope);
            });
            
            gridLixi.appendChild(envelope);
        }
    }

    // 4. OPEN RED ENVELOPE CONTROLLER
    function openEnvelope(idx, envelopeElement) {
        GameSFX.playClaim();
        
        state.opened[idx] = true;
        state.tokens--;
        
        const prize = state.shuffledPrizes[idx];
        state.claimedPrizes.push(prize);
        
        envelopeElement.classList.add('opened');
        
        const prizeContent = envelopeElement.querySelector('.prize-content');
        if (prizeContent) {
            prizeContent.className = `prize-content ${prize.type}`;
            prizeContent.innerHTML = `
                <div class="prize-icon">${prize.type === 'cash' ? '💸' : (prize.type === 'parking' ? '🏍️' : '🥨')}</div>
                <div class="prize-title">${prize.type === 'cash' ? 'TIỀN MẶT' : (prize.type === 'parking' ? 'GỬI XE' : 'BÁNH OSHI')}</div>
                <div class="prize-value">${prize.value.toUpperCase()}</div>
                <div class="prize-full-label">${prize.label}</div>
            `;
        }
        
        saveGameState(state);
        updateHUD();
        
        logSystemHUD(`Đã mở bao lì xì #${idx + 1}: Nhận ${prize.label.toUpperCase()}!`, "success");
        
        if (prize.type === 'cash' || prize.type === 'parking') {
            triggerSparkleBlast(envelopeElement);
            if (typeof window.triggerConfetti === 'function') {
                window.triggerConfetti(2000);
            }
        }
    }

    function triggerSparkleBlast(el) {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'gold-sparkle-particle';
            document.body.appendChild(particle);
            
            const angle = Math.random() * Math.PI * 2;
            const distance = 30 + Math.random() * 80;
            const destX = centerX + Math.cos(angle) * distance;
            const destY = centerY + Math.sin(angle) * distance;
            
            particle.style.left = `${centerX}px`;
            particle.style.top = `${centerY}px`;
            particle.style.transform = 'translate(-50%, -50%) scale(1)';
            particle.style.boxShadow = '0 0 10px #dfba6b';
            
            setTimeout(() => {
                particle.style.transition = 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
                particle.style.left = `${destX}px`;
                particle.style.top = `${destY}px`;
                particle.style.transform = 'translate(-50%, -50%) scale(0)';
                particle.style.opacity = '0';
                
                setTimeout(() => {
                    particle.remove();
                }, 600);
            }, 10);
        }
    }

    // 5. RESET GAME
    if (btnResetGame) {
        btnResetGame.addEventListener('click', () => {
            const msg = "Hệ thống sẽ tái thiết lập toàn bộ bao lì xì ngẫu nhiên mới, làm trống túi đồ và làm sạch các câu hỏi đã trả lời. Bạn chắc chắn chứ?";
            if (typeof showCustomConfirm === 'function') {
                showCustomConfirm(msg, () => {
                    state = resetGameState();
                    updateHUD();
                    renderLixiGrid();
                    logSystemHUD("Hệ thống đã reset. Hãy quay lại giải trắc nghiệm!", "success");
                });
            } else {
                if (confirm(msg)) {
                    GameSFX.playClaim();
                    state = resetGameState();
                    updateHUD();
                    renderLixiGrid();
                    logSystemHUD("Hệ thống đã reset. Hãy quay lại giải trắc nghiệm!", "success");
                }
            }
        });
    }

    // 6. RUN
    initLixiPage();

});
