function nextPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(`page${pageNumber}`).classList.add('active');
}

function calculateResults() {
    let score = 0;

    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');

    score += q1 ? parseInt(q1.value) : 0;
    score += q2 ? parseInt(q2.value) : 0;
    score += q3 ? parseInt(q3.value) : 0;

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

    nextPage('result');
    document.getElementById('resultText').innerText = resultText;
}
