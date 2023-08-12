<template>
    <div id="sub-visual" class="mt-5 py-5" :style="`background-image: url(${backVisualImg})`">
        <!-- コンテナ / フレックス要素で中心揃え / 内側に余白 / 縁を丸くする / ちょっと動くアニメーション / はみ出た部分は非表示(画像) -->
        <div class="container d-flex align-items-center p-5 rounded move overflow-hidden">
            <div class="fit-content me-3">
                <span class="subtitle pt-0">GRADUATE SCHOOL</span>
                <h2>大学院</h2>
            </div>
            <span class="right-arrow"></span>
            <!-- 画像を表示 / 画面幅が広いときのみ表示 -->
            <img :src="miniVisualImg" alt="大学院アイキャッチ" id="mini-visual"
                class="d-none d-md-inline-block">
        </div>
    </div>
</template>

<script setup lang="ts">
import miniVisualImg from '@/img/krisztian-tabori-IyaNci0CyRk-unsplash.jpg'
import backVisualImg from '@/img/marvin-meyer-SYTO3xs06fU-unsplash.jpg'
</script>

<style scoped>
/* サブビジュアル */
#sub-visual {
    width: 100%;
    background-size: cover;
}
#sub-visual .container {
    /* 背景にぼかしを適用(透明感の実装) */
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
    /* このままでは見えにくいので白を加える */
    background-color: rgba(255, 255, 255, 0.7);
}

/* 右矢印(→)を定義 */
.right-arrow {
    display: inline-block;
    width: 4em;
    height: 1em;
    margin-top: 1em;
    border-top: 1px solid #333333;
    border-right: 1px solid #333333;
    transform: skew(-45deg);
}

/* ホバー時にちょっと動かすアニメーション */
.move:hover {
    padding-left: 4rem !important;
    transition: 1s;
}
#mini-visual {
    position: absolute;
    top: -16px;
    left: 40%;
    height: 250px;
    object-fit: cover;
    clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);
}

/* 子要素の横幅に合わせる */
.fit-content {
    width: fit-content;
}
</style>