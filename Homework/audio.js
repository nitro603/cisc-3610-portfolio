let currentAudio = null; // Variable to store currently playing audio object

const soundButtons = document.querySelectorAll('#sound-machine button');

soundButtons.forEach(button => {
  button.addEventListener('click', () => {
    const audioSrc = button.dataset.sound;

    // If a sound is already playing, pause it
    if (currentAudio) {
      currentAudio.pause();
    }

    // Create a new audio object and play it
    currentAudio = new Audio(audioSrc);
    currentAudio.play();
  });
});
