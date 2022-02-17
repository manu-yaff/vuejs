const app = Vue.createApp({
	data() {
		return {
			enteredClass: '',
			visible: true,
			enteredColor: '',
		};
	},
	computed: {
		paragraphClasses() {
			return {
				user1: this.enteredClass === 'user1',
				user2: this.enteredClass === 'user2',
				visible: this.visible,
				hidden: !this.visible,
			};
		},
	},
	methods: {
		toogleParagraph() {
			this.visible = !this.visible;
		},
	},
});
app.mount('#assignment');
