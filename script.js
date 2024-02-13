const clap = document.getElementById("clap");

const sounds = [
  "clap.wav",
  "hihat.wav",
  "kick.wav",
  "openhat.wav",
  "ride.wav",
  "snare.wav",
  "tink.wav",
  "tom.wav",
];

const keys = ["a", "s", "d", "f", "j", "k", "l", "ø"];

const keyToSound = {};

keys.forEach((key, index) => {
  keyToSound[key] = sounds[index];
});






function test() {
  const something = new Audio("./sounds/clap.wav");
  something.play();
}

clap.addEventListener("click", test);

// function playSound(sound) {
//   const audio = new Audio(sound);
//   audio.play();

// }
