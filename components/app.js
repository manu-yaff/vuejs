const app = Vue.createApp({
	data() {
		return {
			friends: [
				{
					id: 1,
					name: 'Manuel Lorenz',
					phone: '4657890876',
					email: 'manuell@gmail.com',
				},
				// {
				// 	id: 2,
				// 	name: 'Julie',
				// 	phone: '1234567890',
				// 	email: 'julie@outlool.com',
				// },
			],
		};
	},
});

app.component('friend-contact', {
	template: `
  <li>
    <h2>Manuel Lorenz</h2>
    <button @click="toggleDetails">Show details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone: </strong>Manuel Lorenz</li>
      <li><strong>Email: </strong>manuel@gmail.com</li>
    </ul>
  </li>
  `,
	data() {
		return { detailsAreVisible: false };
	},
	methods: {
		toggleDetails() {
			this.detailsAreVisible = !this.detailsAreVisible;
		},
	},
});

app.mount('#app');
