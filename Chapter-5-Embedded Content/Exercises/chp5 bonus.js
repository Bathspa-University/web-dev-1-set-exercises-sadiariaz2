// Variable to store the currently playing audio
let currentAudio = null;
// Function to play a audio
function playSound(filename) {
     // Create a new Audio object with the specified filename
    const audio = new Audio(filename);
     // If there's already an audio playing, pause it
    if (currentAudio) {
        currentAudio.pause();
    }
    // Play the new created audio
    audio.play();
    // Update the currentAudio to the newly created audio
    currentAudio = audio;
}