/* ==========================================================================
   HCM UNIVERSE - QUIZ MÀN 1 JAVASCRIPT CONTROLLER (HCM202)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. CACHING DOM ELEMENTS
    const gridQuiz = document.getElementById('grid-quiz');
    const hudScore = document.getElementById('hud-score-value');
    const hudTokens = document.getElementById('hud-tokens-value');
    const hudLixiClaimed = document.getElementById('hud-lixi-claimed-value');
    const inventoryList = document.getElementById('inventory-list');
    const btnResetGame = document.getElementById('btn-reset-game');

    const modalQuestion = document.getElementById('modal-question');
    const modalClose = document.getElementById('modal-question-close');
    const modalBody = document.getElementById('modal-question-body');

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
    function initTracnghiemPage() {
        state = loadGameState();
        updateHUD();
        renderQuizGrid();
        logSystemHUD("Hệ thống thi đấu đã sẵn sàng. Hãy nhấp chọn 1 Ô Tín Hiệu!", "success");
        checkCompletion();
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

    // 3. RENDER 9 CELL GRID
    function renderQuizGrid() {
        if (!gridQuiz) return;
        gridQuiz.innerHTML = '';
        
        for (let i = 0; i < 9; i++) {
            const card = document.createElement('div');
            card.className = 'quiz-card-item';
            card.dataset.index = i;
            
            const cellState = state.answered[i];
            let iconHTML = '<i class="fas fa-satellite-dish"></i>';
            
            if (cellState === 'correct') {
                card.classList.add('solved');
                iconHTML = '<i class="fas fa-check-circle"></i>';
            } else if (cellState === 'incorrect') {
                card.classList.add('failed');
                iconHTML = '<i class="fas fa-times-circle"></i>';
            }
            
            card.innerHTML = `
                <div class="card-inner">
                    <div class="card-front">
                        <div class="card-corner top-left"></div>
                        <div class="card-corner top-right"></div>
                        <div class="card-corner bottom-left"></div>
                        <div class="card-corner bottom-right"></div>
                        <div class="card-signal-icon">${iconHTML}</div>
                        <div class="card-number">${i + 1}</div>
                        <div class="card-number-sub">TÍN HIỆU ${i + 1}</div>
                    </div>
                </div>
            `;
            
            card.addEventListener('click', () => {
                GameSFX.playClick();
                openQuestionModal(i);
            });
            
            gridQuiz.appendChild(card);
        }
    }

    // 4. HOLOGRAM MODAL DISPLAY
    function openQuestionModal(idx) {
        if (!modalQuestion || !modalBody) return;
        
        const qData = QUESTIONS_DATA[state.selectedQuestionIndices[idx]];
        const cellState = state.answered[idx];
        const isDone = cellState !== null;
        
        let optionsHTML = qData.options.map(opt => {
            let addClass = '';
            if (isDone) {
                if (opt.key === qData.correct) {
                    addClass = 'correct-highlight';
                }
            }
            return `
                <label class="opt-container ${addClass}">
                    <input type="radio" name="cosmic-opt" value="${opt.key}" ${isDone ? 'disabled' : ''}>
                    <span class="opt-indicator">${opt.key}</span>
                    <span class="opt-text">${opt.text}</span>
                </label>
            `;
        }).join('');
        
        let feedbackHTML = '';
        if (cellState === 'correct') {
            feedbackHTML = `
                <div class="feedback-block correct">
                    <div class="feedback-title"><i class="fas fa-check-circle"></i> ĐÃ GIẢI MÃ THÀNH CÔNG</div>
                    <p class="feedback-desc"><strong>Giải thích:</strong> ${qData.explanation}</p>
                </div>
            `;
        } else if (cellState === 'incorrect') {
            feedbackHTML = `
                <div class="feedback-block wrong">
                    <div class="feedback-title"><i class="fas fa-times-circle"></i> TỌA ĐỘ ĐÃ BỊ KHÓA</div>
                    <p class="feedback-desc">Ô câu hỏi này đã trả lời sai và bị khóa vĩnh viễn trong lượt này. <strong>Giải thích đáp án đúng:</strong> ${qData.explanation}</p>
                </div>
            `;
        }
        
        modalBody.innerHTML = `
            <div class="modal-question-header">
                <span class="q-badge">// TÍN HIỆU SỐ ${idx + 1} // CHẾ ĐỘ THI ĐẤU (1 LƯỢT DUY NHẤT)</span>
                <h3 class="q-title">${qData.question}</h3>
            </div>
            <div class="modal-options-list">
                ${optionsHTML}
            </div>
            
            <div class="modal-feedback-pane" id="modal-feedback-pane">
                ${feedbackHTML}
            </div>

            <div class="modal-actions">
                ${isDone ? `
                    <button class="btn btn-outline btn-modal-close" id="btn-close-modal-done">Đóng Tọa Độ</button>
                ` : `
                    <button class="btn btn-neon btn-modal-submit" id="btn-submit-answer" data-index="${idx}">Xác Nhận Tín Hiệu</button>
                `}
            </div>
        `;
        
        modalQuestion.classList.add('active');
        document.documentElement.classList.add('console-open');
        document.body.classList.add('console-open');
        
        // Modal Event Bindings
        const btnSubmit = document.getElementById('btn-submit-answer');
        if (btnSubmit) {
            btnSubmit.addEventListener('click', () => {
                const checkedRadio = document.querySelector('input[name="cosmic-opt"]:checked');
                if (!checkedRadio) {
                    GameSFX.playWarning();
                    alert("Vui lòng chọn phương án trước khi xác nhận!");
                    return;
                }
                const selectedVal = checkedRadio.value;
                submitAnswer(idx, selectedVal);
            });
        }
        
        const btnCloseDone = document.getElementById('btn-close-modal-done');
        if (btnCloseDone) {
            btnCloseDone.addEventListener('click', closeQuestionModal);
        }
    }

    function submitAnswer(idx, selectedVal) {
        const qData = QUESTIONS_DATA[state.selectedQuestionIndices[idx]];
        const feedbackPane = document.getElementById('modal-feedback-pane');
        const optionsList = document.querySelector('.modal-options-list');
        const actionsPane = document.querySelector('.modal-actions');
        
        if (!feedbackPane || !optionsList || !actionsPane) return;
        
        const isCorrect = selectedVal === qData.correct;
        
        // Disable choices
        const radios = optionsList.querySelectorAll('input[type="radio"]');
        radios.forEach(r => r.disabled = true);
        
        // Bôi xanh đáp án đúng
        const correctLabel = optionsList.querySelector(`input[value="${qData.correct}"]`).parentElement;
        correctLabel.classList.add('correct-highlight');
        
        state = loadGameState(); // Get latest state
        
        if (isCorrect) {
            GameSFX.playCorrect();
            state.answered[idx] = 'correct';
            state.tokens++;
            state.score++;
            
            correctLabel.classList.add('pulse-success');
            
            feedbackPane.innerHTML = `
                <div class="feedback-block correct fade-in-up">
                    <div class="feedback-title"><i class="fas fa-check-circle"></i> ĐÃ GIẢI MÃ CHÍNH XÁC (+1 LƯỢT LÌ XÌ)</div>
                    <p class="feedback-desc"><strong>Giải thích:</strong> ${qData.explanation}</p>
                </div>
            `;
            
            actionsPane.innerHTML = `
                <button class="btn btn-neon btn-go-claim" id="btn-go-lixi">Nhận Lì Xì Ngay <i class="fas fa-arrow-right"></i></button>
            `;
            
            logSystemHUD(`Tín hiệu số ${idx + 1} giải mã thành công! Nhận 1 lượt mở lì xì!`, "success");
            
            // Redirect with autoPulse guide trigger
            const btnGoLixi = document.getElementById('btn-go-lixi');
            if (btnGoLixi) {
                btnGoLixi.addEventListener('click', () => {
                    closeQuestionModal();
                    window.location.href = 'lixi.html?autoPulse=true';
                });
            }
            
        } else {
            // Wrong attempt: Permanent failed lock!
            GameSFX.playWrong();
            state.answered[idx] = 'incorrect';
            
            const wrongLabel = optionsList.querySelector(`input[value="${selectedVal}"]`).parentElement;
            wrongLabel.classList.add('wrong-highlight');
            
            feedbackPane.innerHTML = `
                <div class="feedback-block wrong fade-in-up">
                    <div class="feedback-title"><i class="fas fa-times-circle"></i> THẤT BẠI // LỖI GIẢI MÃ TỌA ĐỘ</div>
                    <p class="feedback-desc">Bạn đã trả lời sai và bị khóa ô này vĩnh viễn (mất cơ hội nhận lì xì). Bối cảnh lịch sử đáp án đúng: <strong>${qData.explanation}</strong></p>
                </div>
            `;
            
            actionsPane.innerHTML = `
                <button class="btn btn-outline" id="btn-close-modal-failed">Đóng Tọa Độ</button>
            `;
            
            logSystemHUD(`Thất bại tại tín hiệu số ${idx + 1}! Tọa độ bị khóa vĩnh viễn!`, "error");
            
            const btnCloseFailed = document.getElementById('btn-close-modal-failed');
            if (btnCloseFailed) {
                btnCloseFailed.addEventListener('click', closeQuestionModal);
            }
        }
        
        saveGameState(state);
        renderQuizGrid();
        updateHUD();
        
        const isFinished = state.answered.every(a => a !== null);
        if (isFinished) {
            setTimeout(() => {
                closeQuestionModal();
                checkCompletion();
            }, 2500);
        }
    }

    function closeQuestionModal() {
        if (!modalQuestion) return;
        modalQuestion.classList.remove('active');
        document.documentElement.classList.remove('console-open');
        document.body.classList.remove('console-open');
    }

    if (modalClose) {
        modalClose.addEventListener('click', closeQuestionModal);
    }

    if (modalQuestion) {
        modalQuestion.addEventListener('click', (e) => {
            if (e.target === modalQuestion) {
                closeQuestionModal();
            }
        });
    }

    // Completion Modal Controls
    const modalCompletion = document.getElementById('modal-completion');
    const modalCompletionClose = document.getElementById('modal-completion-close');
    const completionTokensVal = document.getElementById('completion-tokens-val');

    function checkCompletion() {
        const isFinished = state.answered && state.answered.every(a => a !== null);
        if (isFinished) {
            if (modalCompletion) {
                if (completionTokensVal) {
                    completionTokensVal.textContent = state.tokens;
                }
                modalCompletion.classList.add('active');
                document.documentElement.classList.add('console-open');
                document.body.classList.add('console-open');
            }
        }
    }

    function closeCompletionModal() {
        if (!modalCompletion) return;
        modalCompletion.classList.remove('active');
        document.documentElement.classList.remove('console-open');
        document.body.classList.remove('console-open');
    }

    if (modalCompletionClose) {
        modalCompletionClose.addEventListener('click', closeCompletionModal);
    }

    if (modalCompletion) {
        modalCompletion.addEventListener('click', (e) => {
            if (e.target === modalCompletion) {
                closeCompletionModal();
            }
        });
    }

    // 5. RESET GAME
    if (btnResetGame) {
        btnResetGame.addEventListener('click', () => {
            const msg = "Hệ thống sẽ tái thiết lập toàn bộ ô câu hỏi, làm trống túi đồ và xáo trộn lại lì xì ngẫu nhiên. Bạn chắc chắn chứ?";
            if (typeof showCustomConfirm === 'function') {
                showCustomConfirm(msg, () => {
                    state = resetGameState();
                    updateHUD();
                    renderQuizGrid();
                    closeCompletionModal();
                    logSystemHUD("Hệ thống đã reset. Hãy chọn lại Ô Tín Hiệu!", "success");
                });
            } else {
                if (confirm(msg)) {
                    GameSFX.playClaim();
                    state = resetGameState();
                    updateHUD();
                    renderQuizGrid();
                    closeCompletionModal();
                    logSystemHUD("Hệ thống đã reset. Hãy chọn lại Ô Tín Hiệu!", "success");
                }
            }
        });
    }

    // 6. RUN
    initTracnghiemPage();

});
