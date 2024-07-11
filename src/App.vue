<script setup>
import { ref, computed } from "vue";
import { RouterView } from "vue-router";
import { data } from "./constants.js";
import { useLanguageStore } from "@/stores/language";

const store = useLanguageStore();

const getData = computed(() => data?.[store.language]);
</script>

<template>
  <header class="text-center text-4xl font-bold my-10">
    <span>{{ getData.title }}</span>
    <div class="flex mt-10 place-content-end">
      <img
        class="mx-2 cursor-pointer"
        src="/assets/usa.png"
        alt="Flag of United States of America"
        @click="store.handleChangeLanguage('english')"
      />
      <img
        class="mx-2 cursor-pointer"
        src="/assets/brazil.png"
        alt="Flag of Brazil"
        @click="store.handleChangeLanguage('portuguese')"
      />
    </div>
  </header>
  <hr />
  <RouterView />
  <hr />
  <footer class="text-left text-2xl my-10">
    <div class="font-semibold">{{ getData.references }}</div>
    <ol>
      <li>
        <a
          class="text-blue-500 text-lg"
          href="https://link.springer.com/article/10.1007/s43681-024-00419-4?ref=quillette.com"
          >Anthropomorphism in AI: hype and fallacy</a
        >
        <p class="italic text-base">
          "Anthropomorphism has also been displayed around deep neural networks
          (DNNs). In 2022, Ilya Sutskever, co-founder and chief scientist at
          OpenAI, hyped up DNNs by declaring: “it may be that today's large
          neural networks are slightly conscious”. It is true that DNNs are one
          of the most advanced and promising fields within AI research, with DNN
          architecture applied in AlphaZero's famous win over the human Go world
          champion and a part of many AI-related applications, such as Google
          translation services, Facebook facial recognition software, and
          virtual assistants like Apple's Siri. However, in spite of the many
          accomplishments achieved using deep neural networks, parallels to the
          human brain should be resisted."
        </p>
      </li>
      <li>
        <a class="text-blue-500 text-lg" href="https://arxiv.org/abs/2404.03622"
          >Mind's Eye of LLMs: Visualization-of-Thought Elicits Spatial
          Reasoning in Large Language Models</a
        >
        <p class="italic text-base">
          "Large language models (LLMs) have exhibited impressive performance in
          language comprehension and various reasoning tasks. However, their
          abilities in spatial reasoning, a crucial aspect of human cognition,
          remain relatively unexplored. Human possess a remarkable ability to
          create mental images of unseen objects and actions through a process
          known as the Mind's Eye, enabling the imagination of the unseen world.
          Inspired by this cognitive capacity, we propose
          Visualization-of-Thought (VoT) prompting."
        </p>
      </li>
      <li>
        <a
          class="text-blue-500 text-lg"
          href="https://quillette.com/2024/07/02/superintelligence-10-years-on-nick-bostrom-ai-safety-agi/"
          >"Superintelligence," Ten Years On</a
        >
        <p class="italic text-base">
          "The idea of an AI takeover is based on the “orthogonality thesis,”
          which holds that the “final goals” of a superintelligent AI may not be
          aligned with human values. This could pose an “existential risk” to
          humanity. A superintelligent AI might, Bostrom thinks, seek to count
          the sands of Boracay, maximise the production of paperclips, or
          enumerate pi. More plausibly, given its “cognitive superpowers,” a
          superintelligent AI might seek to turn the resources of the world into
          “computronium” (whatever materials the AI needs for computation) or
          “hedonium” (whatever will maximise the AI's “reward function” which is
          the machine-learning substitute for pleasure)."
        </p>
      </li>
    </ol>
  </footer>
</template>
