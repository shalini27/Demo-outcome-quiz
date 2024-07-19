function nextPage(pageNumber, questionName) {
    const selectedOption = document.querySelector(`input[name="${questionName}"]:checked`);
    if (selectedOption) {
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            page.classList.remove('active');
        });
        document.getElementById(`page${pageNumber}`).classList.add('active');
    } else {
        alert('Please answer the question before proceeding.');
    }
}

function calculateResults() {
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');
    const q5 = document.querySelector('input[name="q5"]:checked');
    const q6 = document.querySelector('input[name="q6"]:checked');
    const q7 = document.querySelector('input[name="q7"]:checked');
    const q8 = document.querySelector('input[name="q8"]:checked');
    const q9 = document.querySelector('input[name="q9"]:checked');
    const q10 = document.querySelector('input[name="q10"]:checked');

    if (!q1 || !q2 || !q3 || !q4 || !q5 || !q6 || !q7 || !q8 || !q9 || !q10) {
        alert('Please answer all questions before submitting.');
        return;
    }

    let score = 0;
    score += parseInt(q1.value);
    score += parseInt(q2.value);
    score += parseInt(q3.value);
    score += parseInt(q4.value);
    score += parseInt(q5.value);
    score += parseInt(q6.value);
    score += parseInt(q7.value);
    score += parseInt(q8.value);
    score += parseInt(q9.value);
    score += parseInt(q10.value);

    let resultText = '';

    if (score <= 14) {
        resultText = 'You are a Lost Puppy! As a newbie, you might feel a little overwhelmed, but with some guidance, you\'ll be navigating like a pro in no time.';
    } else if (score <= 20) {
        resultText = 'You are a Secret Admirer! You prefer to observe and learn quietly. Enjoy the wealth of community resources at your own pace.';
    } else if (score <= 26) {
        resultText = 'You are a Window Shopper! You love exploring different topics and ideas. Keep soaking up new perspectives and networking.';
    } else if (score <= 32) {
        resultText = 'You are a Social Butterfly! You love participating in discussions and supporting other members.';
    } else if (score <= 37) {
        resultText = 'You are one of the Wizards! You help coordinate and manage activities, ensuring everything runs smoothly.';
    } else if (score <= 40) {
        resultText = 'You are a Cat-Herder! You are the backbone of the community, providing leadership.';
    } else if (score <= 44) {
        resultText = 'You are among The Royals! Your strategic involvement has a far-reaching impact on the community.';
    } else {
        resultText = 'You are part of The Force! Your continual engagement and support make you the grounding gurus of our community.';
    }

    document.getElementById('resultText').innerText = resultText;
    document.getElementById('resultField').value = resultText;

    document.getElementById('quizForm').submit();
}
