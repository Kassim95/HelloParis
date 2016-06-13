var Login = React.createClass({
	setInitialState: function(){
		return {
			email: '',
			password: ''
		}
	},
	render: function(){
		return (
			<form className="login-form" action="/sessions" method='post' onSubmit={this.handleSubmit}>
			<input type="text" placeholder="Email" name="[email]" value={this.props.email} />
			<br/>
			<input type="password" placeholder="Password" name="[password]" value={this.props.password} />
			<br/>
			<input type="submit" className="btn"/>
			</form>
		)
	}
})