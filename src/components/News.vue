<template>
	<!-- 背景色をグレーにして、前の項目と内容が変わったことを示す -->
	<div class="bg-light">
		<div id="news" class="container">
			<!-- 内部の背景色を白に / 四隅を丸くする / 内側の余白を十分に取る -->
			<div class="bg-white rounded-3 p-5">
				<span class="subtitle">NEWS</span>
				<h2>最新情報</h2>
				<!-- [Vue.js] v-forを使ってデータinformationsの分だけ繰り返して表示 -->
				<template v-for="news in informations">
					<!-- 横並びにする / 上下中央揃え / y軸方向の外部余白 -->
					<div class="row align-items-center my-4">
						<!-- 横幅を子要素に合わせる(auto) -->
						<span class="w-auto me-1">{{ news.date }}</span>
						<!-- カテゴリをバッジ化 / 丸くする / 背景色黒 / それぞれ余白 -->
						<span class="badge rounded-pill bg-dark me-1 px-3 py-2">{{ news.category }}</span>
						<!-- テキストを折り返さない / 文字が要素からはみ出たら三点リーダーで省略する -->
						<span class="col-xl-auto text-nowrap text-truncate my-1">{{ news.text }}</span>
					</div>
				</template>
			</div>
		</div>
	</div>
</template>


<script setup lang="ts">
import { ref } from 'vue'

const informations = ref([
	{
		date: '2023.07.13',
		category: 'イベント',
		text: `きになる研究室は？ 8月の 「オープンキャンパス」 にて一般公開される〝研究室〟をWebで先行紹介中！`
	},
	{
		date: '2023.07.10',
		category: 'イベント',
		text: '情報メディア学科をもっと知りたい！ 「学科紹介ムービー」 を YouTube にて限定公開中！'
	},
	{
		date: '2023.07.06',
		category: 'お知らせ',
		text: '情報メディア学科 佐々木さんが「Think! 2023」にて受賞'
	},
])
</script>


<style scoped>
#news .badge {
    /* 整列をするためにバッジの不揃いを調整 */
    width: 8em;
}

</style>