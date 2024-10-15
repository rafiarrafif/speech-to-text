<template>
  <div class="w-full mt-16 gap-8 flex flex-col items-center">
    <textarea
      class="w-110 px-3 py-2 rounded-lg resize-none bg-neutral-900 border border-neutral-800 focus:outline-none focus:border-neutral-500 placeholder:text-neutral-700"
      rows="10"
      readonly
      placeholder="Click on listening button and your text will be shown here"
      id="textSpeech"
      v-model="textSpeech"
    ></textarea>
    <UButton size="xl" @click="toggleListening">{{ buttonText }}</UButton>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";

const textSpeech = ref("");
const buttonText = ref("Start Listening");
let recognition: any = null;

onMounted(() => {
  if ("webkitSpeechRecognition" in window) {
    recognition = new (window as any).webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event: any) => {
      let interimTranscript = "";
      let finalTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }

      textSpeech.value = finalTranscript + interimTranscript;
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error", event.error);
    };
  } else {
    console.error("Web Speech API is not supported in this browser.");
  }
});

onUnmounted(() => {
  if (recognition) {
    recognition.stop();
  }
});

const toggleListening = () => {
  if (!recognition) {
    console.error("Speech recognition is not supported");
    return;
  }

  if (recognition.isStarted) {
    recognition.stop();
    buttonText.value = "Start Listening";
  } else {
    recognition.start();
    buttonText.value = "Stop Listening";
  }
  recognition.isStarted = !recognition.isStarted;
};
</script>
