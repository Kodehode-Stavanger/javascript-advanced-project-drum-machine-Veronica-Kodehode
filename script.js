const clap = document.getElementById("clap");

  const sounds = [
    "sounds/clap.wav",
    "sounds/hihat.wav",
    "sounds/kick.wav",
    "sounds/openhat.wav",
    "sounds/ride.wav",
    "sounds/snare.wav",
    "sounds/tink.wav",
    "sounds/tom.wav",
  ];

const keys = ["a", "s", "d", "f", "j", "k", "l", "ø"];

const keyToSound = {};

keys.forEach((key, index) => {
  keyToSound[key] = sounds[index];
});


function playSound(sound) {
  const audio = new Audio(sound);
  audio.play();
}

const drumElements = document.querySelectorAll('.drum');

for (let index in drumElements) {
  if (drumElements.hasOwnProperty(index)) {
    drumElements[index].addEventListener('click', () => {
      playSound(sounds[index]);
      drumElements[index].classList.toggle("animation");
      
      drumElements[index].addEventListener("animationend", () => {
        drumElements[index].classList.remove("animation");
      })
    });
  }
}

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  if (keys.includes(key)) {
    playSound(keyToSound[key]);
    const index = keys.indexOf(key);
    drumElements[index].classList.toggle("animation");
    
    drumElements[index].addEventListener("animationend", () => {
      drumElements[index].classList.remove("animation");
    })
  }
});