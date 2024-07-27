document.getElementById('translateBtn').addEventListener('click', async () => {
    const inputText = document.getElementById('inputText').value;
    const outputDiv = document.getElementById('outputText');

    if (inputText.trim() === "") {
        outputDiv.textContent = "Masukkan teks untuk diterjemahkan.";
        return;
    }

    try {
        const response = await axios.post('https://libretranslate.de/translate', {
            q: inputText,
            source: "id",
            target: "ja",
            format: "text"
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        outputDiv.textContent = response.data.translatedText;
    } catch (error) {
        console.error("Error translating text:", error);
        outputDiv.textContent = "Terjadi kesalahan dalam menerjemahkan.";
    }
});

document.getElementById('speakBtn').addEventListener('click', () => {
    const outputText = document.getElementById('outputText').textContent;
    if (outputText.trim() === "") {
        alert("Tidak ada teks untuk diputar.");
        return;
    }
    const utterance = new SpeechSynthesisUtterance(outputText);
    utterance.lang = 'ja-JP';
    window.speechSynthesis.speak(utterance);
});

document.getElementById('recordBtn').addEventListener('click', () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'id-ID';
    recognition.start();

    recognition.onresult = (event) => {
        document.getElementById('inputText').value = event.results[0][0].transcript;
    };
});
