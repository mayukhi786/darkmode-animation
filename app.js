//const anime = require("animejs");
const moonPath =
    "M32.5 32C32.5 45.8071 43 57 43 57C29.1929 57 18 45.8071 18 32C18 18.1929 29.1929 7 43 7C43 8 32.5 18.1929 32.5 32Z";
const sunPath =
    "M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z";

const darkMode = document.querySelector("#darkMode");
const mode = document.querySelector("#mode");
const text = document.querySelector("#text");

let toggle = false;

darkMode.addEventListener("click", () => {
    const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo",
    });
    timeline
        .add({
            targets: ".sun",
            d: [{ value: toggle ? sunPath : moonPath }],
        })
        .add({
                targets: "#darkMode",
                rotate: toggle ? 0 : 320,
            },
            "-=360"
        )
        .add({
                targets: "#mode",
                update: (changeText = () => {
                    mode.innerHTML = toggle ? "Dark Mode." : "Light Mode.";
                }),
            },
            "-=700"
        )
        .add({
                targets: "#text",
                color: toggle ? "rgb(71, 85, 198)" : "rgb(249, 160, 227)",
            },
            "-=700"
        )
        .add({
                targets: "section",
                backgroundColor: toggle ? "rgb(255, 255, 255)" : "rgb(22, 22, 22)",
                color: toggle ? "rgb(22,22,22)" : "rgb(255, 255, 255)",
            },
            "-=700"
        );

    if (!toggle) {
        toggle = true;
    } else {
        toggle = false;
    }
});