<script setup lang="ts">
import { onMounted } from 'vue'
import router from '@/router'
import { useRoute } from 'vue-router'

const route = useRoute()

// 5秒後にトップページを表示する
onMounted(() => {
	setTimeout(() => {
		// 今開いているページがトップページなら何もしない
		if (route.path === '/') return
		router.push('/')
	}, 5000)
})
</script>


<template>
	<main>

		<!-- 本文の要素 / 上部に外部余白 -->
		<article class="mt-5">
			<!-- コンテナを用意(横に余白) -->
			<div class="container">
				<!-- 横並びにする -->
				<div class="row">
					<!-- ヘッダー上にサブタイトルを表示 -->
					<span class="subtitle">Not Found</span>
					<h2>お探しのページは見つかりませんでした。</h2>
					<p>5秒後にトップページへ戻ります。</p>
				</div>
			</div>
		</article>

	</main>
</template>
