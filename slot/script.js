document.getElementById('spinButton').addEventListener('click', function() {
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
    const spinReel = (reel) => {
        return new Promise(resolve => {
            let count = 0;
            const interval = setInterval(() => {
                reel.textContent = randomSymbol();
                count++;
                if (count >= 20) { // Number of spins
                    clearInterval(interval);
                    resolve();
                }
            }, 100); // Speed of spin
        });
    };

    // Spin all reels with animation
    Promise.all([spinReel(reel1), spinReel(reel2), spinReel(reel3)]).then(() => {
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
        } else {
            result.textContent = 'Try Again!';
            result.classList.add('text-red-500');
            result.classList.remove('text-green-500');
        }

        // Re-enable button after spin
        document.getElementById('spinButton').disabled = false;
    });
});
