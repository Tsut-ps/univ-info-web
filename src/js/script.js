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