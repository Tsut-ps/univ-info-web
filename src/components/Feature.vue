<template>
	<div class="container" id="feature">
		<!-- 横並びにする / 中央揃え / 下に余白 -->
		<div class="row text-center mb-5">
			<span class="subtitle">FEATURE</span>
			<h2>学科の特色</h2>
			<!-- [Vue.js] v-forを使ってデータcelsの文だけ繰り返して表示(仮変数celに.xxxxを付けることでプロパティ値にアクセスできる) -->
			<template v-for="cel in cels" :key="cel.id">
				<!-- 画面横幅に合わせて幅を調整する -->
				<div class="col-xs-12 col-sm-4 col-md-4">
					<div class="text-center">
						<!-- 画像を表示 -->
						<img :src="cel.icon" alt="アイコン">
						<!-- celのtitleの内容を表示 -->
						<h3>{{ cel.title }}</h3>
						<!-- 改行を認識させるためにv-htmlでhtmlとして、celのtextを出力 -->
						<p v-html="cel.text"></p>
					</div>
				</div>
			</template>
		</div>
	</div>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// 画像をインポート
import icon1 from '@/img/icon/624bd4fb51d7e5589581b6c2_94.png'
import icon2 from '@/img/icon/6099119905dc8225f36ebb25_69.png'
import icon3 from '@/img/icon/61bf0bf71586ad574bdea9ae_9.png'

gsap.registerPlugin(ScrollTrigger);

interface Cels {
	id: number;
	icon: string;
	title: string;
	text: string;
}

let id = 0
const cels = ref<Cels[]>([
	{
		id: id++,
		icon: icon1,
		title: 'デジタル×クリエイティブ',
		text: `情報メディアに特化し<br>創造力と表現力を伸ばす学科。`
	},
	{
		id: id++,
		icon: icon2,
		title: '演習重視',
		text: '先進的なカリキュラムでスキルを学び<br>アクティブラーニングで学びを深める。'
	},
	{
		id: id++,
		icon: icon3,
		title: '環境の充実',
		text: 'プロが現場で使っている環境を<br>自由に使える環境を構築。'
	},
])

// 要素「特色」が真ん中まで来たら中身を順番に表示
// コンポーネントがページに紐づいた後に実行(実行タイミングによっては要素が探せないため)
onMounted(() => {
	gsap.fromTo("#feature .col-xs-12", {
		y: 40,
		opacity: 0,
	}, {
		y: 0,
		opacity: 1,
		duration: .8,
		stagger: .1,
		ease: "power2.out",
		scrollTrigger: {
			trigger: "#feature",
			start: "top center",
			toggleActions: "play none none reverse",
		},
	});
})

</script>


<style scoped>
/* 画像の横幅を調整 */
img {
	/* 画像の縦横比が歪まないように */
	background-size: cover;
	width: 80%;
}
</style>
