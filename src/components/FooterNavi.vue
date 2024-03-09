<template>
  <!-- [Vue.js] コンポーネント / フッター(著作)を表示 -->
  <div class="bd-footer py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-4 col-xl-3 me-3 mb-3">
          <span class="subtitle">学校法人 あいうえお学園</span>
          <h2 class="mb-4">東京情芸大学</h2>
          <p>東京四茶キャンパス<br>
            〒154-0024 東京都世田谷区四軒茶屋3<br>
            03-1234-5678</p>
        </div>
        <div class="col">
          <span class="subtitle">公式SNS</span>
          <div class="sns-icon">
            <template v-for="sns in snsLinks" :key="sns.id">
              <a :href="sns.url" class="me-1"><img :src="sns.image" alt="東京情芸大学公式SNS"></a>
            </template>
          </div>
          <span class="subtitle pt-3">学科について</span>
          <RouterLink to="/document">
            <button type="button" class="btn btn-dark me-1 px-3">資料請求</button>
          </RouterLink>
          <RouterLink to="/access">
            <button type="button" class="btn btn-outline-dark me-1 px-3">交通アクセス</button>
          </RouterLink>
          <RouterLink to="/contact">
            <button type="button" class="btn btn-outline-dark px-3">お問い合わせ</button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import snsImg1 from '@/img/sns-icon/02.svg'
import snsImg2 from '@/img/sns-icon/03.svg'
import snsImg3 from '@/img/sns-icon/01.svg'
import snsImg4 from '@/img/sns-icon/04.svg'

interface SnsLinks {
  id: number;
  name: string;
  url: string;
  image: string;
}

let id = 0
const snsLinks = ref<SnsLinks[]>([
  {
    id: id++,
    name: 'Twitter',
    url: 'https://twitter.com',
    image: snsImg1
  },
  {
    id: id++,
    name: 'Facebook',
    url: 'https://facebook.com',
    image: snsImg2
  },
  {
    id: id++,
    name: 'Instagram',
    url: 'https://instagram.com',
    image: snsImg3
  },
  {
    id: id++,
    name: 'YouTube',
    url: 'https://youtube.com',
    image: snsImg4
  }
])
</script>


<style scoped>
/* SNSアイコンの大きさを調整 */
.sns-icon img {
  height: 2.5em;
  width: 2.5em;
}

a {
  text-decoration: none;
}
</style>