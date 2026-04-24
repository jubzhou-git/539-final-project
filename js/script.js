const dropdown = document.querySelector('.dropdown');
const menu = dropdown.querySelector('.dropdown-menu');
const toggle = dropdown.querySelector('.dropdown-toggle');

toggle.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    menu.classList.toggle('open');
});

toggle.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.stopPropagation();
        menu.classList.toggle('open');
    }
});

dropdown.addEventListener('focusout', function (e) {
    if (!dropdown.contains(e.relatedTarget)) {
        menu.classList.remove('open');
    }
});

document.addEventListener('click', function (e) {
    if (!dropdown.contains(e.target)) {
        menu.classList.remove('open');
    }
});

dropdown.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
        menu.classList.remove('open');
        toggle.focus();
    }
});

function handleSubmit(event) {
    event.preventDefault();

    const errorMsg = document.getElementById('unanswered-msg');
    errorMsg.style.display = 'none';

    const scores = {
        sunflower: 0,
        daisy: 0,
        lavender: 0,
        rose: 0,
        orchid: 0,
        tulip: 0
    };

    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);

    let answeredQuestions = 0;
    for (let key of formData.keys()) {
        answeredQuestions++;
    }

    if (answeredQuestions < 10) {
        errorMsg.style.display = 'block'; //
        return;
    }

    for (let value of formData.values()) {
        const pointsArray = value.split(',');

        pointsArray.forEach(item => {
            const parts = item.split(':');
            const flower = parts[0];
            const points = parseInt(parts[1]);

            if (scores[flower] !== undefined) {
                scores[flower] += points;
            }
        });
    }

    let highestScore = 0;
    let winningFlower = '';

    for (const flower in scores) {
        if (scores[flower] > highestScore) {
            highestScore = scores[flower];
            winningFlower = flower;
        }
    }

    if (winningFlower) {
        window.location.href = winningFlower + '.html';
    }
}

const form = document.getElementById('quiz-form');

form.addEventListener('submit', function (e) {
    const allAnswered = checkRadios();

    if (!allAnswered) {
        e.preventDefault();
        document.querySelector('.unanswered-msg').computedStyleMap.display = 'block';
    }
});