const app = Vue.createApp({
	data() {
		return {
			tasks: [],
			enteredTask: '',
			isListVisible: true,
		};
	},
	computed: {
		buttonCaption() {
			return this.isListVisible ? 'Hide List' : 'Show List';
		},
	},
	methods: {
		addTask() {
			this.tasks.push(this.enteredTask);
			this.enteredTask = '';
		},
		toggleList() {
			this.isListVisible = !this.isListVisible;
		},
	},
});

app.mount('#assignment');
