<template>
	<main class="h-40vh">
		<div>
			<transition appear name="visual">
				<img src="@/img/2h-media-spScdgWY-_c-unsplash.jpg" id="main-visual">
			</transition>
		</div>
		<div></div>
		<article>
			<div class="container">
				<!-- ヘッダー上にサブタイトルを表示 -->
				<span class="subtitle">DOCUMENT</span>
				<h2>資料請求（ダウンロード）</h2>
				<p>2021年度から資料を直接ダウンロードできるようになりました。<br>現在、学科別の資料は郵送での配布をしていません。
					当学科（デジタルメディア学科）の資料は、以下からダウンロードしてください。</p>
				<h3 class="mt-5">2023年度 - デジタルメディア学科</h3>
				<a :href="pdfPath">
					<button type="button" class="btn btn-dark me-1 px-3">資料ダウンロード</button>
				</a>
			</div>
		</article>
	</main>
</template>

<script setup lang="ts">
import pdfPath from '@/pdf/tidu-iddm-document.pdf'
</script>
