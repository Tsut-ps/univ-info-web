<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderNavi from './components/HeaderNavi.vue'
import FooterNavi from './components/FooterNavi.vue'
import Copyright from './components/Copyright.vue'
</script>


<template>
  <!-- [Vue.js] コンポーネント化したナビゲーションバーを表示(使いまわしが可能に) -->
  <HeaderNavi></HeaderNavi>

  <!-- URLに応じて表示するものを切り替え -->
  <RouterView />

  <FooterNavi></FooterNavi>
  <Copyright></Copyright>
</template>


<style>
/* メインビジュアル */
#main-visual {
  /* 端末の画面の高さに合わせてメインビジュアルの高さを調整 */
  height: calc(100svh - 80px);
  /* 画面横いっぱいに表示 */
  width: 100%;
  /* 画像の縦横比が歪まないように */
  object-fit: cover;
}

/* "visual" メインビジュアル ふんわり表示アニメーション */
.visual-enter-active,
.visual-leave-active {
  transition: opacity 1s;
}

.visual-leave-active {
  position: absolute;
}

.visual-enter-from,
.visual-leave-to {
  opacity: 0.0;
}

/* ----- 資料請求ページ等に適用されるCSS ----- */
.h-40vh #main-visual {
  height: 40vh;
}
</style>
