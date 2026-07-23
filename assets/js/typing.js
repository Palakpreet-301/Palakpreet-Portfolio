const words = [
    "Cloud Computing Engineer",
    "Machine Learning Enthusiast",
    "Python Developer",
    "AWS Cloud Learner",
    "AI & ML Student"
];

let index = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function type() {

    const current = words[index];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(type, 1500);

            return;
        }

    }

    else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            index++;

            if (index >= words.length)

                index = 0;

        }

    }

    setTimeout(type, deleting ? 50 : 100);

}

type();