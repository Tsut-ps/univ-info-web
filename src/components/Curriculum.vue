<template>
  <!-- 背景をグレーにする -->
  <div class="bg-light py-5">
    <div class="container">
      <span class="subtitle">CURRICULUM</span>
      <h2>カリキュラム</h2>
      <!-- 画面幅が広いときのみbrで改行 -->
      <p class="mb-5">
        グラフィックデザイン、3DCG、UI/UXデザイン、
        <br class="d-none d-md-inline-block">
        映像、モーショングラフィックス、アニメーションを中心としたカリキュラム構成。
      </p>
      <!-- 少し丸い枠線 -->
      <div class="bordered-card rounded-3">
        <!-- CSS側で上に移動 / 背景色をつけて枠線を上書き -->
        <span>主な就職先</span>
        <template v-for="company in companies" :key="company.id">
          <span class="subtitle">{{ company.category }}</span>
          <p>{{ company.name }} など</p>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Companies {
  id: number;
  category: string;
  name: string;
}

let id = 0
const companies = ref<Companies[]>([
  {
    id: id++,
    category: '広告・デザイン',
    name: "株式会社こーこく、株式会社デザーIN、株式会社つたわる、Yagooo!株式会社"
  },
  {
    id: id++,
    category: 'ITサービス',
    name: "株式会社アイティーS、Serviceあい株式会社、株式会社イトース、AITII株式会社"
  },
  {
    id: id++,
    category: '情報機器・メーカー',
    name: "株式会社インフォKL、株式会社エムエヌゼロ、株式会社いちにっさん、メイクR株式会社"
  }
])


</script>
