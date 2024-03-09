<template>
  <header>
    <!-- ナビゲーションバー -->
    <nav class="navbar navbar-expand-md navbar-light bg-light fixed-top">
      <!-- 100%で表示するコンテナ要素 -->
      <div class="container-xxl">
        <!-- フレックス要素にして中央揃え / 外側下の余白なし / 右側余白をいっぱい(auto)に広げる -->
        <h1 class="d-flex justify-content-center mb-0 me-auto">
          <!-- ナビゲーションのリンク(トップページへ) / ブランドロゴ -->
          <RouterLink to="/" class="navbar-brand">
            <!-- ロゴ画像 -->
            <img src="@/img/logo/TIDU_logo.png">
            <!-- ロゴ大学名 / 画面横サイズが大きいときのみ表示 -->
            <img src="@/img/logo/TIDU_text-logo.png" alt="東京情芸大学" class="d-none d-md-inline-block me-1 pe-2 border-end">
            <!-- ロゴ学科名 / 左余白と縦棒(border)で区切り -->
            <img src="@/img/logo/ID-DM_logo.png" alt="情報デザイン学部デジタルメディア学科">
          </RouterLink>
        </h1>
        <!-- フレックス要素にして中央揃え -->
        <div class="d-flex justify-content-center h-52px">
          <!-- 縦幅いっぱいに表示 / 中央に表示 / 画面横サイズが大きいときのみ表示 / 黒色のリンク / 下線無効 -->
          <RouterLink to="/access" class="d-none d-md-flex align-items-center me-3 link-dark text-decoration-none">
            交通アクセス</RouterLink>
          <!-- ボタンスタイル(アウトラインあり) / location.hrefでページ遷移、スマホ表示のときのみ改行 -->
          <RouterLink to="/document">
            <button class="btn btn-dark h-100 d-flex align-items-center" role="button">資料<br
                class="d-sm-none">請求</button>
          </RouterLink>
        </div>
      </div>
    </nav>
  </header>
</template>


<style scoped>
/* ヘッダー高さ調整 */
header,
nav {
  height: 80px;
}

/* ヘッダー画像を48pxに合わせる */
header img {
  height: 48px;
}

.h-52px {
  height: 52px;
}

a {
  text-decoration: none;
}
</style>
