// Vue.jsによるアプリケーションの作成

// テストアプリケーション
Vue.createApp({
	data() {
		return {
			messageraw: "あああ@ああ",
			name: "いいいいい"
		};
	},
	computed: {
		message() {
			return this.messageraw.split('@')[0];
		}
	},
	components: {
		'my-component': {
			template: '<p>aaa{{ name }}</p>'
		}
	}
}).mount('#app');

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
					icon: './img/icon-1.png',
					title: 'デジタル×クリエイティブ',
					text: `情報メディアに特化し<br>創造力と表現力を伸ばす学科。`
				},
				{
					icon: './img/icon-2.png',
					title: '演習重視',
					text: '先進的なカリキュラムでスキルを学び<br>アクティブラーニングで学びを深める。'
				},
				{
					icon: './img/icon-3.png',
					title: '環境の充実',
					text: 'プロが現場で使っている環境を<br>自由に使える環境を構築。'
				},
			]
		}
	}
}).mount('#feature');

