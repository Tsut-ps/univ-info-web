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

// メインビジュアルアプリケーション
Vue.createApp({
}).mount('#visual-app');