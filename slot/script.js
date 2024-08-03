document.getElementById('spinButton').addEventListener('click', function() {
    const symbols = ['🍒', '🍋', '🍊', '🍉', '🍇', '🍓'];
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');
    const result = document.getElementById('result');

    // Spin the reels
    reel1.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    reel2.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    reel3.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    // Check for a win
    if (reel1.textContent === reel2.textContent && reel2.textContent === reel3.textContent) {
        result.textContent = 'You Win!';
        result.classList.add('text-green-500');
        result.classList.remove('text-red-500');
    } else {
        result.textContent = 'Try Again!';
        result.classList.add('text-red-500');
        result.classList.remove('text-green-500');
    }
});
