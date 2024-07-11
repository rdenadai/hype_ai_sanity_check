import { ref } from "vue";
import { defineStore } from "pinia";

export const useLanguageStore = defineStore("language", () => {
  const language = ref("english");

  const handleChangeLanguage = (lang) => {
    language.value = lang ?? "english";
  };

  return { language, handleChangeLanguage };
});
