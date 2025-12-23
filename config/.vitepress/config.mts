import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "../lectures",
  markdown: {
    math: true,
  },

  title: "AI & ML Lecture Notes",
  description: "AI & Machine Learning Lecture Notes At 2025~2026 Fall Semester for UoG UESTC",

  // 启用自定义主题
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "GitHub", link: "https://github.com/Cateds/AI-MachineLearning.md" },
      { text: "StudyHub", link: "https://www.study-hub.store/materials/159" },
    ],
    sidebar: [
      {
        text: '介绍',
        link: '/index'
      },
      {
        text: 'AI 介绍 (Introduction to AI)',
        items: [
          { text: 'AI 介绍', link: '/Part.0/lecture1' }
        ]
      },
      {
        text: '进化计算 (Evolutionary Computation)',
        items: [
          { text: '优化的基本概念', link: '/Part.1/lecture2' },
          { text: '遗传算法', link: '/Part.1/lecture3' },
          { text: '约束和多目标优化', link: '/Part.1/lecture4' },
          { text: '组合优化', link: '/Part.1/lecture5' }
        ]
      },
      {
        text: '机器学习 (Machine Learning)',
        items: [
          { text: '机器学习概述', link: '/Part.2/lecture7' },
          { text: '模型训练及数据预处理', link: '/Part.2/lecture8' },
          { text: '特征选择', link: '/Part.2/lecture9' },
          { text: '支持向量机', link: '/Part.2/lecture10' },
          { text: '人工神经网络入门', link: '/Part.2/lecture11' }
        ]
      },
      {
        text: 'Extra: 题目与知识点',
        items: [
          { text: 'Lec.1: AI 介绍', link: '/Addon/Introduction/introduction' },
          { text: 'Lec.2: 优化的基本概念', link: '/Addon/Evolutionary_Computation/lecture2' }
        ]
      }
    ],

    // 右侧大纲配置 - 显示更详细的标题层级
    outline: {
      level: [2, 6], // 显示 H2 和 H3 标题
      label: '本页大纲' // 大纲标题
    },

    // 启用文档标题的自动提取
    outlineTitle: 'ON THIS PAGE',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Cateds/AI-MachineLearning.md' }
    ]
  }
})
