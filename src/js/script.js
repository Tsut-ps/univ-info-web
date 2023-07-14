// Vue.jsによるアプリケーションの作成

// 画像のイメージを6秒ごとに変更するApp
Vue.createApp({
	data() {
		return {	// データを返す
			images: [	// 画像のパスの配列
				"../img/AdobeStock_142976730.jpeg",	// 画像のパス 0番目
				"../img/AdobeStock_274523661.jpeg",	// 画像のパス 1番目
				"../img/AdobeStock_277272404.jpeg",	// 画像のパス 2番目
				"../img/AdobeStock_297305477.jpeg",	// 画像のパス 3番目
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