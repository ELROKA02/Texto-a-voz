// Elementos del DOM
const textInput = document.getElementById("text-input");
const voiceSelect = document.getElementById("voice-select");
const speedSlider = document.getElementById("speed-slider");
const pitchSlider = document.getElementById("pitch-slider");
const speedValue = document.getElementById("speed-value");
const pitchValue = document.getElementById("pitch-value");
const speakBtn = document.getElementById("speak-btn");
const stopBtn = document.getElementById("stop-btn");
const charCount = document.getElementById("char-count");
const status = document.getElementById("status");
const statusText = document.getElementById("status-text");

// Web Speech API
const synth = window.speechSynthesis;
let voces = [];

// Step 3: Load available voices
// Get voices from the browser and populate the dropdown
function loadVoices() {
  // TODO: Get voices using synth.getVoices()
  voces = synth.getVoices();

  // TODO: Check if voices array is empty (async loading)
  if (voces.length == 0) {
    return;
  }

  // TODO: Clear the dropdown
  voiceSelect.innerHTML = "";

  // TODO: Loop through voices and create option elements
  // TODO: Set option value to index, text to voice name and language
  voces.forEach((voz, index) => {
    const opcion = document.createElement("option");
    opcion.value = index;
    opcion.textContent = `${voz.name} (${voz.lang})`;
    voiceSelect.appendChild(opcion);
  });

  console.log(`Cargado ${voces.length} voces`);

}

// Step 4: Update character counter
// Show how many characters the user has typed
function updateCharCount() {
  // TODO: Get the length of textInput.value
  const contador_caracteres = textInput.value.length;

  // TODO: Update charCount.textContent with the count
  charCount.textContent = contador_caracteres;
}

function updateSlidersValue(){
    speedValue.textContent = speedSlider.value;
    pitchValue.textContent = pitchSlider.value;
}

// Step 5: Implement speech synthesis
// The main speak() function that converts text to speech
function speak() {
  // TODO: Call synth.speak(utterance) to start speaking
  if (synth.speaking) {
    synth.cancel();
  }

  // TODO: Get text from input and trim whitespace
  const texto = textInput.value.trim();

  // TODO: Validate that text is not empty
  if(!texto){
    alert("Por favor introduzca texto para escucharlo");
    return;
  }

  // TODO: Create new SpeechSynthesisUtterance with the text
  const utterance = new SpeechSynthesisUtterance(texto);

  // TODO: Set utterance.voice from selected dropdown index
  const voz_seleccionada = voiceSelect.value;
  if (voz_seleccionada !== "") {
    utterance.voice = voces[voz_seleccionada];
  }
  // TODO: Set utterance.rate from speed slider
  utterance.rate = parseFloat(speedSlider.value);

  // TODO: Set utterance.pitch from pitch slider
  utterance.pitch = parseFloat(pitchSlider.value);
  utterance.volume = 1.0;

  // TODO: Add onstart handler to update UI (add 'speaking' class, disable speak button)
  utterance.onstart = () => {
    status.classList.add("Hablando");
    statusText.textContent = "Hablando...";
    speakBtn.disabled = true;
    stopBtn.disabled = false;
  };

  // TODO: Add onend handler to reset UI (remove 'speaking' class, enable speak button)
  utterance.onend = () => {
    status.classList.remove("Hablando");
    statusText.textContent = "Listo";
    speakBtn.disabled = false;
    stopBtn.disabled = true;
  }; 

  // TODO: Add onerror handler for error cases
  utterance.onerror = (event) => {
    console.error("Speech error:", event);
    statusText.textContent = "Error encontrado";
    speakBtn.disabled = false;
    stopBtn.disabled = true;
  };

  synth.speak(utterance);

  console.log("Hablando: " + texto)
}

// Stop speaking
// Cancel any ongoing speech
function stop() {
  // TODO: Call synth.cancel()
  synth.cancel();

  // TODO: Update status text to 'Stopped'
  status.classList.remove("Hablando");
  statusText.textContent = "Pausado";

  // TODO: Reset button states
  speakBtn.disabled = false;
  stopBtn.disabled = true;
}

// Initialize the app
// Set up all event listeners when DOM is ready
function init() {
  // TODO: Call loadVoices() initially
  // TODO: Listen for 'voiceschanged' event (for Chrome async loading)
  loadVoices();
  synth.addEventListener("voiceschanged", loadVoices);

  // TODO: Add 'input' listener on textInput for character counter
  textInput.addEventListener("input", updateCharCount);

  // TODO: Add 'input' listeners on sliders to update value displays
  speedSlider.addEventListener("input", updateSlidersValue);
  pitchSlider.addEventListener("input", updateSlidersValue);

  // TODO: Add 'click' listener on speakBtn
  speakBtn.addEventListener("click", speak);

  // TODO: Add 'click' listener on stopBtn
  stopBtn.addEventListener("click", stop);

  // TODO: Initialize displays (call updateCharCount)
  // TODO: Disable stop button initially


  
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", init);
