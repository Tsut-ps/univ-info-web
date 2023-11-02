<template>
    <!-- 上に余白 -->
    <div class="container mt-5" id="events">
        <span class="subtitle">EVENTS</span>
        <h2>イベント情報</h2>
        <!-- [Vue.js] v-forを使ってデータeventsの分だけ繰り返して表示 -->
        <template v-for="event in events">
            <!-- 横並びにする / y軸方向の外部余白 -->
            <div class="row my-5 event">
                <!-- 画面横幅に合わせて幅を調整する -->
                <div class="col-xs-12 col-sm-3 col-md-3">
                    <!-- 画像を表示 / altを取得して代入 / 横幅いっぱい / 少し丸くする / はみ出た部分を隠す / 下に外部余白 -->
                    <img :src="event.image" :alt="event.alt" class="w-100 rounded-3 overflow-hidden mb-4">
                </div>
                <div class="col-xs-12 col-sm-9 col-md-9">
                    <!-- サブタイトルを表示 / バッジ化 / 丸くする / 背景色黒 / それぞれ余白 -->
                    <p class="badge rounded-pill bg-dark px-3 py-2">{{ event.subtitle }}</p>
                    <!-- タイトルを表示 -->
                    <h2>{{ event.title }}</h2>
                    <!-- 日付や場所を表示 -->
                    <p>{{ event.text }}</p>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// 画像を読み込み
import eventImg1 from '@/img/mad-fish-digital---kXIg5yOHo-unsplash.jpg'
import eventImg2 from '@/img/paul-einerhand-Dy6a8sLrVl4-unsplash.jpg'

gsap.registerPlugin(ScrollTrigger);

const events = ref([
    {
        image: eventImg1,
        alt: '話し合っている画像',
        subtitle: '学科イベント',
        title: 'メディア意見交換会(2023)',
        text: `7/10(月)～7/13(木) ｜ 四茶キャンパス2号館2階メディアホール`
    },
    {
        image: eventImg2,
        alt: '昨年のライブイベントの画像',
        subtitle: '学園祭',
        title: '情芸祭',
        text: '10/20(金)～10/23(月) ｜ 四茶キャンパス1/2/3/4号館'
    },
])

// 要素「イベント情報」が真ん中まで来たら中身を順番に表示
onMounted(() => {
    gsap.fromTo("#events .col-xs-12", {
        x: 16,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        duration: .8,
        stagger: .05,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#events",
            start: "top center",
            toggleActions: "play none none reverse",
        },
    });
})
</script>