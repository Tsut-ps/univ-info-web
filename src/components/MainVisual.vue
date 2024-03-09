<template>
	<!-- メインビジュアル -->
	<div id="visual-app">
		<!-- appearで初回表示時ふんわり表示 / nameでCSSの"visual"欄のアニメーションを適用 -->
		<transition appear name="visual">
			<!-- currentImageの更新をkeyとしてトリガー(画像変更時を検知する) -->
			<!-- スクリプトで画像のイメージを6秒ごとに変更(詳しい動きはscript.jsを参照) -->
			<img id="main-visual" v-bind:key="currentImage" :src="currentImage">
		</transition>
		<!-- 重要イベント表示 / メインビジュアルの右下側に -->
		<div class="message px-4 py-3 rounded">
			<span class="subtitle">重要イベント</span>
			<template v-for="message in messages" :key="message.id">
				<p class="mb-0">{{ message.day }}｜{{ message.text }}</p>
			</template>
		</div>
		<div id="scroll">
			<span class="scroll-text">SCROLL</span>
		</div>
	</div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import mainImg1 from '@/img/marvin-meyer-SYTO3xs06fU-unsplash.jpg'
import mainImg2 from '@/img/ux-indonesia-qC2n6RQU4Vw-unsplash.jpg'
import mainImg3 from '@/img/mimi-thian-tkFRFunRDbw-unsplash.jpg'
import mainImg4 from '@/img/annie-spratt-FSFfEQkd1sc-unsplash.jpg'

interface Message {
	id: number;
	day: string;
	text: string;
}

let id = 0
const messages = ref<Message[]>([
	{
		id: id++,
		day: '5/13',
		text: '2023年版の学科資料を公開しました'
	},
	{
		id: id++,
		day: '7/10',
		text: '「学科紹介ムービー」 YouTubeにて公開しました'
	},
	{
		id: id++,
		day: '7/13',
		text: '「オープンキャンパス」 研究室を先行してWeb紹介中！'
	},
])

const images = ref([
	{ src: mainImg1 },	// 画像のパス 0番目
	{ src: mainImg2 },	// 画像のパス 1番目
	{ src: mainImg3 },	   // 画像のパス 2番目
	{ src: mainImg4 },	// 画像のパス 3番目
])

const currentImage = ref(mainImg1) // デフォルトの画像のパス
const index = ref(0)    // 画像のインデックス

// setup 自体が beforeCreate / created のライフサイクルで実行されるため
// created は Vue3 では setup() の直下に書けば良い
currentImage.value = images.value[index.value].src  // 表示する画像のパス

// 画像を切り替える処理
setInterval(() => {
	index.value = (index.value + 1) % images.value.length	// 画像のインデックスを更新
	currentImage.value = images.value[index.value].src	    // 表示する画像のパスを更新
}, 6000)	                                                // 6000ミリ秒(6秒)ごとに画像を切り替える
</script>


<style scoped>
.message {
	display: flex;
	font-size: .85em;
	/* 縦に並べて表示 */
	flex-direction: column;
	position: absolute;
	right: 0;
	bottom: 100px;
	/* 画面横幅サイズで左右の余白を決める */
	margin: 0 4vw;
	/* 背景にぼかしを適用(透明感の実装) */
	backdrop-filter: blur(40px);
	-webkit-backdrop-filter: blur(40px);
	/* このままでは見えにくいので白を加える */
	background-color: rgba(255, 255, 255, 0.6);
}

/* スクロールバー */
#scroll {
	display: flex;
	justify-content: center;
	position: absolute;
	/* 背景と差をつけるために合成モードを適用 */
	mix-blend-mode: difference;
	/* 画面下部に配置 */
	bottom: 50px;
	/* 画面中央に配置 */
	left: 50%;
	/* 軸を中央にする */
	translate: -50% -50%;
	font-size: 1em;
	color: #ffffff;
}

#scroll::after {
	content: '';
	position: absolute;
	top: 0;
	margin: 2em;
	width: 1px;
	background-color: #ffffff;
	animation: scroll-an 1.5s ease-in-out infinite;
}

@keyframes scroll-an {
	0% {
		top: 0;
		height: 0;
		opacity: 0;
	}

	30% {
		height: 48px;
		opacity: 1;
	}

	100% {
		top: 104px;
		height: 0;
		opacity: 0;
	}
}
</style>
