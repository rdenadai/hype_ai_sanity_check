<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useLanguageStore } from "@/stores/language";
import { data } from "../constants.js";

const store = useLanguageStore();
const route = useRoute();

const domain = computed(() => window.location.host);
const getData = computed(() => data?.[store.language]);
const profile = computed(
  () =>
    getData.value?.profiles?.find(
      (profile) => profile.id === route.params.id
    ) ?? {}
);
const score = computed(() => route.params.score);
const twitterUrl = computed(() => {
  const text = `${profile?.value?.name} (${score.value} pts): ${profile?.value?.description}`
  return `https://twitter.com/intent/tweet?url=https://www.aihypesanitycheck.tech/${profile?.value?.id}/${score.value}&text=${text}&hashtags=ai,hype,fallacy,anthropomorphism`
});

const profileImgUrl = computed(() => `/assets/profile/${profile.value.id}.png`);
</script>

<template>
  <p class="text-left text-2xl my-10">
    <div class="flex flex-col lg:flex-row">
      <div class="grid place-content-center mb-5 lg:mb-0 lg:mr-5">
        <span class="font-semibold text-4xl text-white bg-blue-900 p-5 rounded-lg">{{ score }}</span>
      </div>
      <div>
        <h1 class="font-semibold"><span class="text-4xl">{{ profile.name }}</span> ({{ profile.min_score }} - {{ profile.max_score }} pts)</h1>
        <p class="text-justify">{{ profile.description }}</p>
      </div>
    </div>
    <div class="flex place-content-center mt-5">
      <img :src="profileImgUrl" :alt="profile.description" />
    </div>
    <div class="flex mt-5 place-content-end">
      <a :href="twitterUrl" target="_blank" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded">{{ getData.tweeterButton }}</a>
    </div>
  </p>
</template>
