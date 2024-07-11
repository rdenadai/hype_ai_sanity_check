<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useLanguageStore } from "@/stores/language";
import { data } from "../constants.js";

const store = useLanguageStore();
const route = useRoute();

const getData = computed(() => data?.[store.language]);
const profile = computed(
  () =>
    getData.value?.profiles?.find(
      (profile) => profile.id === route.params.id
    ) ?? {}
);

const twitterUrl = computed(() => {
  const text = `${profile?.value?.name}: ${profile?.value?.description}`
  return `https://twitter.com/intent/tweet?url=myUrl&text=${text} https://pic.twitter.com/kyQ3DWS9LH&name=medium&hashtags=ai,hype,fallacy,anthropomorphism`
});

const profileImgUrl = computed(() => `/assets/profile/${profile.value.id}.png`);

</script>

<template>
  <p class="text-left text-2xl my-10">
    <a :href="twitterUrl" target="_blank">Click to tweet</a>

    <h1 class="mb-5 font-semibold">{{ profile.name }}</h1>
    <div class="mb-5">
      <img :src="profileImgUrl" alt="{{ profile.description }}" />
    </div>
    <p class="text-justify">{{ profile.description }}</p>
  </p>
</template>
