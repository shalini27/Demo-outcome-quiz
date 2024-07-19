function calculateResults() {
    const form = document.getElementById('quizForm');
    let score = 0;

    const q1 = form.elements['q1'].value;
    const q2 = form.elements['q2'].value;
    const q3 = form.elements['q3'].value;

    score += parseInt(q1) || 0;
    score += parseInt(q2) || 0;
    score += parseInt(q3) || 0;

    let resultText = '';

    if (score <= 6) {
        resultText = 'You are a Lost Puppy! As a newbie, you might feel a little overwhelmed, but with some guidance, you\'ll be navigating like a pro in no time.';
    } else if (score <= 9) {
        resultText = 'You are a Secret Admirer! You prefer to observe and learn quietly. Enjoy the wealth of community resources at your own pace.';
    } else if (score <= 12) {
        resultText = 'You are a Window Shopper! You love exploring different topics and ideas. Keep soaking up new perspectives and networking.';
    } else {
        resultText = 'You are a seasoned member of the RDA community!';
    }

    document.getElementById('result').innerText = resultText;
}
