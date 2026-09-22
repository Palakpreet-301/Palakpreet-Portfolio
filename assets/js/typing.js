const words = [
    "Cloud Computing Engineer",
    "Machine Learning Enthusiast",
    "Python Developer",
    "AWS Cloud Learner",
    "AI & ML Student"
];


let wordIndex = 0;
let characterIndex = 0;
let deleting = false;

const typingElement =
    document.getElementById("typing");


function typeEffect() {

    const currentWord = words[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1600);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 45 : 90
    );

}


typeEffect();