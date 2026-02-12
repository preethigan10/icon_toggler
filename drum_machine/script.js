

const drumPads = document.querySelectorAll(".drum-pad");


drumPads.forEach((pad) => {
    pad.addEventListener("click", (e) => {
        console.log(e.target.innerText);
        document.getElementById(e.target.innerText).play();
        document.getElementById("display").textContent = `${e.target.innerText} sound played.`;
    });    
});


document.addEventListener("keydown", (e) => {
    const keyPressed = e.key.toUpperCase();
    const audioElement = document.getElementById(keyPressed);
    if (audioElement) {
        audioElement.play();
        document.getElementById("display").textContent = `${keyPressed} sound played.`;
    }
});