Vue.createApp({
	data() {
		return {
			messageraw: "あああ@ああ"
		};
	},
	computed: {
		message() {
			return this.messageraw.split('@')[0];
		}
	}
}).mount('#app');