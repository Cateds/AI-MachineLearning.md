<script setup lang="ts">
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";

import GiscusComment from "./GiscusComment.vue"; // 评论模块
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-after>
      <GiscusComment />
    </template>
  </DefaultTheme.Layout>
</template>
