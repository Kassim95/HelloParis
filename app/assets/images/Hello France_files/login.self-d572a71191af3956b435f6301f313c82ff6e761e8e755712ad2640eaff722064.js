var Login = React.createClass({
	displayName: 'Login',

	// initial values
	getInitialState: function () {
		return {
			email: '',
			password: '',
			signin: false
		};
	},
	// sign up page
	signClick: function () {
		this.setState({ signin: true });
	},
	render: function () {
		//initial style of the forms
		var signup = { display: "none" };
		var log = { display: "block" };
		//change of style of the forms
		if (this.state.signin == true) {
			signup = { display: "block" };
			log = { display: "none" };
		};
		//login and signup form
		return React.createElement(
			'div',
			{ id: 'log', className: 'form' },
			React.createElement(
				'form',
				{ style: log, className: 'login-form', action: '/sessions', method: 'post', onSubmit: this.handleSubmit },
				React.createElement('input', { className: 'input', type: 'text', placeholder: 'Email', name: '[email]', value: this.props.email }),
				React.createElement('br', null),
				React.createElement('input', { className: 'input', type: 'password', placeholder: 'Password', name: '[password]', value: this.props.password }),
				React.createElement('br', null),
				React.createElement('input', { type: 'submit', value: 'Login', className: 'btn styled-button-9' })
			),
			React.createElement('br', null),
			React.createElement('input', { style: log, className: 'btn styled-button-9 sub', type: 'submit', value: 'Sign up', onClick: this.signClick }),
			React.createElement(
				'form',
				{ style: signup, className: 'signupForm form', action: '/users', method: 'post', onSubmit: this.handleSubmit },
				React.createElement('input', { className: 'input', type: 'text', placeholder: 'First name', name: '[user][fname]', value: this.props.fname }),
				React.createElement('br', null),
				React.createElement('input', { className: 'input', type: 'text', placeholder: 'Last name', name: '[user][lname]', value: this.props.lname }),
				React.createElement('br', null),
				React.createElement('input', { className: 'input', type: 'email', placeholder: 'E-mail', name: '[user][email]', value: this.props.email }),
				React.createElement('br', null),
				React.createElement('input', { className: 'input', type: 'password', placeholder: 'Password', name: '[user][password]', value: this.props.password }),
				React.createElement('br', null),
				React.createElement('input', { className: 'input', type: 'password', placeholder: 'Password', name: '[user][password_confirmation]', value: this.props.password }),
				React.createElement('br', null),
				React.createElement('input', { type: 'hidden', name: '[user][score]', value: '0' }),
				React.createElement('input', { type: 'submit', value: 'Signup', className: 'btn styled-button-9' })
			)
		);
	}
});