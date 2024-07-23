async function detectEmotion() {
    const inputText = document.getElementById('user-input').value;
    const response = await fetch('http://127.0.0.1:5000/predict', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: inputText })
    });
    const data = await response.json();
    const emotionResult = document.getElementById('emotion-result');
    const emojiMap = {
        'anger': '😡',
        'fear': '😨',
        'joy': '😊',
        'love': '❤️',
        'sad': '😢',
        'surprise': '😲'
    };
    emotionResult.innerHTML = `${emojiMap[data.emotion]} ${data.emotion}`;
}
