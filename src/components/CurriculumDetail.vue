<template>
    <!-- [Vue.js] 年次ごとに繰り返して表示(1～4年次) -->
    <div class="container" id="curriculumDetail">
        <template v-for="year in years">
            <!-- 横並びにする / y軸方向の外部余白 -->
            <div class="row my-5">
                <!-- 画面横幅に合わせて幅を調整する -->
                <div class="col-xs-12 col-sm-3 col-md-3">
                    <!-- 画像を表示 / altを取得して代入 / 横幅いっぱい / 少し丸くする / はみ出た部分を隠す / 下に外部余白 -->
                    <img :src="year.image" :alt="year.alt" class="w-100 rounded-3 overflow-hidden mb-4">
                </div>
                <div class="col-xs-12 col-sm-9 col-md-9">
                    <!-- サブタイトルを表示 / バッジ化 / 丸くする / 背景色黒 / それぞれ余白 -->
                    <p class="badge rounded-pill bg-dark px-3 py-2">{{ year.subtitle }}</p>
                    <!-- 年次で何をするのかのタイトルを表示 -->
                    <h2>{{ year.title }}</h2>
                    <!-- 年次の詳細を表示 -->
                    <p>{{ year.text }}</p>
                </div>
            </div>
        </template>
        <!-- 少し丸い枠線 -->
        <div class="bordered-card rounded-3 mb-5">
            <span>取得できる資格</span>
            <p>中学校教諭一種免許状（情報/美術）、高等学校教諭一種免許状（情報）、<br class="d-none d-md-inline-block">
                情報処理技術者試験（基本/応用）、CGクリエイター検定、CGエンジニア検定、Webデザイナー検定、マルチメディア検定</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/* 以下のように import しないと assets にバンドルされない */
import yearImg1 from '@/img/maury-page-QeJ943yEd1E-unsplash.jpg'
import yearImg2 from '@/img/marten-bjork-rH8O0FHFpfw-unsplash.jpg'
import yearImg3 from '@/img/marvin-meyer-SYTO3xs06fU-unsplash.jpg'
import yearImg4 from '@/img/libby-penner-8zsBofKrhP8-unsplash.jpg'

const years = ref([
    {
        image: yearImg1,
        alt: 'ウィンドウに図形を合わせている写真',
        subtitle: '1年生',
        title: 'デザインの基礎を学ぶ',
        text: `単にかっこいいデザインにすれば良い、ということはありません。
		どのようにして相手に伝えるか、これを考えることが大切です。
		そのために、相手の属性や使用するタイミングを考慮し、相手に伝わるようなデザインにすることから学びます。`
    },
    {
        image: yearImg2,
        alt: 'パソコンの前で作業をしている写真',
        subtitle: '2年生',
        title: 'クリエイティブな表現を学ぶ',
        text: `例えば、視覚的な表現をするためにはどうすればよいでしょうか。
		色彩やレイアウト、フォントなどの使い方、どれをとっても千差万別です。
		そこで、要素同士を「かけ合わせる」ことで、より独創的な表現を生み出していくにはどうすればよいかを学びます。`
    },
    {
        image: yearImg3,
        alt: 'チームワークで作業をしている写真',
        subtitle: '3年生',
        title: '学びを応用・実践する',
        text: `表現力を高めるためには、実際に作品を作っていくことが大切です。
		そのために、チームでの制作や、実際のクライアントからの依頼を受けての制作など、実践的な学びを行います。
		また、社会の中でデザインがどのように溶け込み、どう機能しているかを調べ、表現力を高めていきます。`
    },
    {
        image: yearImg4,
        alt: 'マルチメディア機器を操作している写真',
        subtitle: '4年生',
        title: 'プロのクリエイターへ',
        text: `卒業制作では、自分の得意な分野を活かして作品を作り上げていきます。
		ニーズに合わせて、Webデザインやグラフィックデザイン、映像制作など、自分の得意な分野を活かして作品を作り上げていきます。`
    },
])

onMounted(() => {
    gsap.fromTo("#curriculumDetail .col-xs-12", {
        x: 16,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        duration: .8,
        stagger: .05,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#curriculumDetail",
            start: "top center",
        },
    });
})
</script>