let autoSpinEnabled = false;

document.getElementById('autoSpinCheckbox').addEventListener('change', function() {
    autoSpinEnabled = this.checked;
    if (autoSpinEnabled) {
        autoSpin();
    }
});

document.getElementById('spinButton').addEventListener('click', spinReels);

function spinReels() {
    const symbols = ['🍒', '🍋', '🍊', '🍉', '🍇', '🍓'];
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');
    const result = document.getElementById('result');

    result.textContent = ''; // Reset result text

    // Disable button during spin
    document.getElementById('spinButton').disabled = true;

    const randomSymbol = () => symbols[Math.floor(Math.random() * symbols.length)];
    
    // Function to simulate spin animation
    const spinReel = (reel, duration) => {
        return new Promise(resolve => {
            reel.classList.add('spin');
            let count = 0;
            const interval = setInterval(() => {
                reel.textContent = randomSymbol();
                count++;
                if (count >= duration / 100) { // Duration control
                    clearInterval(interval);
                    reel.classList.remove('spin');
                    resolve();
                }
            }, 100); // Speed of spin
        });
    };

    // Spin all reels with animation
    Promise.all([
        spinReel(reel1, 2000),
        spinReel(reel2, 2500),
        spinReel(reel3, 3000)
    ]).then(() => {
        // Determine if the user wins (50% chance)
        const win = Math.random() < 0.5;

        if (win) {
            // Set all reels to the same symbol to indicate a win
            const winningSymbol = randomSymbol();
            reel1.textContent = winningSymbol;
            reel2.textContent = winningSymbol;
            reel3.textContent = winningSymbol;
            result.textContent = 'You Win!';
            result.classList.add('text-green-500');
            result.classList.remove('text-red-500');
            // Disable auto-spin if won
            autoSpinEnabled = false;
            document.getElementById('autoSpinCheckbox').checked = false;
        } else {
            result.textContent = 'Try Again!';
            result.classList.add('text-red-500');
            result.classList.remove('text-green-500');
        }

        // Re-enable button after spin
        document.getElementById('spinButton').disabled = false;

        // Continue auto-spin if enabled and not won
        if (autoSpinEnabled && !win) {
            setTimeout(autoSpin, 1000);
        }
    });
}

function autoSpin() {
    if (autoSpinEnabled) {
        spinReels();
    }
}
