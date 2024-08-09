let clickCount = 0;
let timerStarted = false;
let timerInterval;
let imageCount = 1; // Start with 1.png

document.getElementById('start-button').addEventListener('click', function () {
    if (!timerStarted) {
        timerStarted = true;
        let timeLeft = 30; // Set timer to 30 seconds
        document.querySelector('.timer').textContent = `00:${timeLeft < 10 ? '0' + timeLeft : timeLeft}`;

        timerInterval = setInterval(() => {
            timeLeft--;
            document.querySelector('.timer').textContent = `00:${timeLeft < 10 ? '0' + timeLeft : timeLeft}`;
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                showModal();
            }
        }, 1000);
    }
});

document.getElementById('clickable-image').addEventListener('click', function () {
    if (timerStarted) {
        clickCount++;
        document.getElementById('click-count').textContent = clickCount;

        // Change image every time clickCount is a multiple of 40
        if (clickCount % 40 === 0) {
            imageCount++;
            if (imageCount > 12) imageCount = 1; // Reset to 1.png after 5.png
            document.getElementById('clickable-image').src = `assets/${imageCount}.png`;
        }
    }
});

function showModal() {
    timerStarted = false;
    document.getElementById('final-count').textContent = clickCount;
    document.getElementById('result-modal').style.display = 'flex';

    // Reset image and counter after displaying the modal
    setTimeout(() => {
        document.getElementById('result-modal').style.display = 'none';
        clickCount = 0;
        imageCount = 1; // Reset to 1.png
        document.getElementById('clickable-image').src = `assets/1.png`;
        document.getElementById('click-count').textContent = clickCount;
        document.querySelector('.timer').textContent = '00:30';
    }, 5000); // Wait for 5 seconds before resetting
}

document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('result-modal').style.display = 'none';
    clickCount = 0;
    imageCount = 1; // Reset to 1.png
    document.getElementById('clickable-image').src = `assets/1.png`;
    document.getElementById('click-count').textContent = clickCount;
    document.querySelector('.timer').textContent = '00:30';
});

// Modal

// Get the modal
var aboutModal = document.getElementById("about-modal");

// Get the link that opens the modal
var aboutLink = document.querySelector(".nav-link[href='#about']");

// Get the <span> element that closes the modal
var closeAbout = document.getElementById("close-about");

// When the user clicks the link, open the modal 
aboutLink.addEventListener("click", function () {
    aboutModal.style.display = "flex";
});

// When the user clicks on <span> (x), close the modal
closeAbout.addEventListener("click", function () {
    aboutModal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
    if (event.target == aboutModal) {
        aboutModal.style.display = "none";
    }
});
