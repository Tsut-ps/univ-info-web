// Vue.jsによるアプリケーションの作成

// ナビゲーションバーを定義
const HeaderNavi = {
	template: `<!-- ナビゲーションバー -->
	<nav class="navbar navbar-expand-md navbar-light bg-light fixed-top">
	<!-- 100%で表示するコンテナ要素 -->
	<div class="container-xxl">
	  <!-- フレックス要素にして中央揃え / 外側下の余白なし / 右側余白をいっぱい(auto)に広げる -->
	  <h1 class="d-flex justify-content-center mb-0 me-auto">
		<!-- ナビゲーションのリンク(トップページへ) / ブランドロゴ -->
		<a href="/" class="navbar-brand">
		  <!-- ロゴ画像 -->
		  <img src="./img/logo/TIDU_logo.png">
		  <!-- ロゴ大学名 / 画面横サイズが大きいときのみ表示 -->
		  <img src="./img/logo/TIDU_text-logo.png" alt="東京情芸大学" class="d-none d-md-inline-block me-1 pe-2 border-end">
		  <!-- ロゴ学科名 / 左余白と縦棒(border)で区切り -->
		  <img src="./img/logo/ID-DM_logo.png" alt="情報デザイン学部デジタルメディア学科">
		</a>
	  </h1>
	  <!-- フレックス要素にして中央揃え -->
	  <div class="d-flex justify-content-center" style="height: 52px;">
	  	<!-- 縦幅いっぱいに表示 / 中央に表示 / 画面横サイズが大きいときのみ表示 / 黒色のリンク / 下線無効 -->
	  	<a href="./access.html" class="d-none d-md-flex align-items-center me-3 link-dark text-decoration-none">交通アクセス</a>
		<!-- ボタンスタイル(アウトラインあり) / location.hrefでページ遷移、スマホ表示のときのみ改行 -->
		<button class="btn btn-dark h-100 d-flex align-items-center" onclick="location.href='document.html'" role="button">資料<br class="d-sm-none">請求</button>
	  </div>
	</div>
  </nav>`
}

// 大学の連絡先などの情報を定義
const FooterInfo = {
	template: `<!-- フッター(情報) -->
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
					<a href="https://twitter.com" class="me-1"><img src="./img/sns-icon/01.svg" alt="東京情芸大学公式SNS"></a>
					<a href="https://twitter.com" class="me-1"><img src="./img/sns-icon/02.svg" alt="東京情芸大学公式SNS"></a>
					<a href="https://twitter.com" class="me-1"><img src="./img/sns-icon/03.svg" alt="東京情芸大学公式SNS"></a>
					<a href="https://twitter.com" class="me-1"><img src="./img/sns-icon/04.svg" alt="東京情芸大学公式SNS"></a>
				</div>
				<span class="subtitle pt-3">学科について</span>
				<button type="button" class="btn btn-dark me-1 px-3" onclick="location.href='document.html'">資料請求</button>
				<button type="button" class="btn btn-outline-dark px-3" onclick="location.href='contact.html'">お問い合わせ</button>
			</div>
		</div>
	</div>`
}

// 著作者情報を定義
const copyright = {
	template: `<!-- フッター(著作) -->
	<div class="container-fluid py-5 bg-light">
		<!-- フレックス要素にして中央揃え -->
		<div class="d-flex justify-content-center">
			<span>Copyright © Tokyo Information Design University.</span>
		</div>
	</div>`
}

// ヘッダーの表示
Vue.createApp({
	components: {
		'header-navi': HeaderNavi
	}
}).mount('#header');

// フッター(情報)の表示
Vue.createApp({
	components: {
		'footer-info': FooterInfo
	}
}).mount('#footer-info');

// フッター(著作)の表示
Vue.createApp({
	components: {
		'copyright': copyright
	}
}).mount('#footer');

// 画像のイメージを6秒ごとに変更するApp
Vue.createApp({
	data() {
		return {	// データを返す
			images: [	// 画像のパスの配列
				"./img/AdobeStock_142976730.jpeg",	// 画像のパス 0番目
				"./img/AdobeStock_274523661.jpeg",	// 画像のパス 1番目
				"./img/AdobeStock_277272404.jpeg",	// 画像のパス 2番目
				"./img/AdobeStock_297305477.jpeg",	// 画像のパス 3番目
			],
			currentImage: "../img/AdobeStock_142976730.jpeg",	// デフォルトの画像のパス
			index: 0,	// 画像のインデックス(初回は0番目を表示)
		};
	},
	created() {
		this.currentImage = this.images[this.index];	// 表示する画像のパス
		setInterval(() => {	// 画像を切り替える
			this.index = (this.index + 1) % this.images.length;	// 画像のインデックスを更新
			this.currentImage = this.images[this.index];	// 表示する画像のパスを更新
		}, 6000);	// 6000ミリ秒(6秒)ごとに画像を切り替える
	},
}).mount('#visual-app');	// visual-appというidを持つ要素に適用する

// 学科の特色の3つのアイコン表示
Vue.createApp({
	data() {
		return {
			cels: [
				{
					icon: './img/icon/624bd4fb51d7e5589581b6c2_94.png',
					title: 'デジタル×クリエイティブ',
					text: `情報メディアに特化し<br>創造力と表現力を伸ばす学科。`
				},
				{
					icon: './img/icon/6099119905dc8225f36ebb25_69.png',
					title: '演習重視',
					text: '先進的なカリキュラムでスキルを学び<br>アクティブラーニングで学びを深める。'
				},
				{
					icon: './img/icon/61bf0bf71586ad574bdea9ae_9.png',
					title: '環境の充実',
					text: 'プロが現場で使っている環境を<br>自由に使える環境を構築。'
				},
			]
		}
	}
}).mount('#feature');

// お知らせの表示
Vue.createApp({
	data() {
		return {
			informations: [
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
			]
		}
	}
}).mount('#news');

// イベントの表示
Vue.createApp({
	data() {
		return {
			events: [
				{
					image: './img/AdobeStock_274523661.jpeg',
					subtitle: '学科イベント',
					title: 'メディア意見交換会(2023)',
					text: `7/10(月)～7/13(木) ｜ 四茶キャンパス2号館2階メディアホール`
				},
				{
					image: './img/paul-einerhand-Dy6a8sLrVl4-unsplash.jpg',
					subtitle: '学園祭',
					title: '情芸祭',
					text: '10/20(金)～10/23(月) ｜ 四茶キャンパス1/2/3/4号館'
				},
			]
		}
	}
}).mount('#events');

// 年次の授業内容を表示
Vue.createApp({
	data() {
		return {
			years: [
				{
					image: './img/AdobeStock_178578342.jpeg',
					alt: 'ウィンドウに図形を合わせている写真',
					subtitle: '1年生',
					title: 'デザインの基礎を学ぶ',
					text: `単にかっこいいデザインにすれば良い、ということはありません。
					どのようにして相手に伝えるか、これを考えることが大切です。
					そのために、相手の属性や使用するタイミングを考慮し、相手に伝わるようなデザインにすることから学びます。`
				},
				{
					image: './img/AdobeStock_297305477.jpeg',
					alt: 'パソコンの前で作業をしている写真',
					subtitle: '2年生',
					title: 'クリエイティブな表現を学ぶ',
					text: `例えば、視覚的な表現をするためにはどうすればよいでしょうか。
					色彩やレイアウト、フォントなどの使い方、どれをとっても千差万別です。
					そこで、要素同士を「かけ合わせる」ことで、より独創的な表現を生み出していくにはどうすればよいかを学びます。`
				},
				{
					image: './img/marvin-meyer-SYTO3xs06fU-unsplash.jpg',
					alt: 'チームワークで作業をしている写真',
					subtitle: '3年生',
					title: '学びを応用・実践する',
					text: `表現力を高めるためには、実際に作品を作っていくことが大切です。
					そのために、チームでの制作や、実際のクライアントからの依頼を受けての制作など、実践的な学びを行います。
					また、社会の中でデザインがどのように溶け込み、どう機能しているかを調べ、表現力を高めていきます。`
				},
				{
					image: './img/libby-penner-8zsBofKrhP8-unsplash.jpg',
					alt: 'マルチメディア機器を操作している写真',
					subtitle: '4年生',
					title: 'プロのクリエイターへ',
					text: `卒業制作では、自分の得意な分野を活かして作品を作り上げていきます。
					ニーズに合わせて、Webデザインやグラフィックデザイン、映像制作など、自分の得意な分野を活かして作品を作り上げていきます。`
				},
			]
		}
	}
}).mount('#year');