<template>
  <div style="margin-top: 2rem">
    <Giscus
      id="comments"
      :key="route.path"
      repo="Cateds/AI-MachineLearning.md"
      repo-id="R_kgDOQjJfdw"
      category="General"
      category-id="DIC_kwDOQjJfd84CztyC"
      mapping="pathname"
      strict="0"
      reactions-enabled="1"
      emit-metadata="0"
      input-position="top"
      lang="zh-CN"
      loading="lazy"
      :theme="isDark ? 'dark_tritanopia' : 'light_tritanopia'"
    ></Giscus>
  </div>
</template>

<script setup>
import Giscus from "@giscus/vue";
import { watch } from "vue";
import { inBrowser, useData, useRoute } from "vitepress";

const { isDark } = useData();
const route = useRoute();

watch(isDark, (dark) => {
  if (!inBrowser) return;

  const iframe = document
    .querySelector("giscus-widget")
    ?.shadowRoot?.querySelector("iframe");

  iframe?.contentWindow?.postMessage(
    {
      giscus: {
        setConfig: { theme: dark ? "dark_tritanopia" : "light_tritanopia" },
      },
    },
    "https://giscus.app"
  );
});
</script>
