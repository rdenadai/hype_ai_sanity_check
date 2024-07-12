<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useLanguageStore } from "@/stores/language";
import { data } from "../constants.js";

const store = useLanguageStore();
const router = useRouter()

const profile = ref(null);
const answers = ref({});
const showError = ref(false);

const getData = computed(() => data?.[store.language]);

const handleQuestionSelection = (idx, score) => {
  answers.value[idx + 1] = score;
}

const handleQuestionaireSubmit = () => {
  const totalScore = Object.values(answers.value).reduce((acc, curr) => acc + curr, 0);
  if (Object.keys(answers.value).length == 10 && totalScore > 0) {
    profile.value = getData.value.profiles.find(profile => {
      if (totalScore >= profile.min_score && totalScore <= profile.max_score) {
        return profile;
      }
    });
    router.push({ name: 'profile', params: { id: profile.value.id, score: totalScore } });
  } else {
    showError.value = true;
  }
}
</script>

<template>
  <p class="text-center text-2xl my-10">
    <form action="#">
      <div v-for="question, idx in getData.questionnaire" :key="idx">
        <div class="mt-10">
          <span class="flex mb-5 text-left font-semibold">{{ idx + 1 }}. {{ question.question }}</span>
          <div class="flex" v-for="answer, aidx in question.answers" :key="`${idx}-${aidx}`">
            <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="blue">
              <input type="radio" :id="`${idx}-${aidx}`" :name="idx" :value="answer.score" @click="handleQuestionSelection(idx, answer.score)" class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-blue-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
              id="blue" />
              <span
                class="absolute text-blue-500 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </span>
            </label>
            &nbsp;
            <label class="text-left mt-1 cursor-pointer" :for="`${idx}-${aidx}`">{{ answer.text }}</label>
          </div>
        </div>
      </div>
      <div v-if="showError" class="mt-20">
        <span class="text-red-500 font-semibold">{{ getData.errorMessage }}</span>
      </div>
      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded mt-20" @click.prevent="handleQuestionaireSubmit">
        {{ getData.submitButtonText }}
      </button>
    </form>
  </p>
</template>