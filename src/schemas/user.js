export default {
	name: 'User',
	slug: 'user',
	ui: ['username', 'email', 'admin'],
	fields: [
		{
			label: 'Username',
			name:'username',
			type: 'text',
			required: true
		},
		{
			label: 'Email',
			name: 'email',
			type: 'text',
			required: true
		},
		{
			label: 'Password',
			name: 'password',
			type: 'password',
			required: true
		}
	]
};