var Login = React.createClass({
	getInitialState: function(){
		return {
			email: '',
			password: '',
			signin: false
		}
	},
	signClick: function(){
		this.setState({signin: true});
	},
	handleChange: function(e) {
	  var name = e.target.name;
	  var obj = {};
	  obj[name] = e.target.value;
	  this.setState(obj);
  },

	valid: function(){
		return(this.state.fname && this.state.lname && this.state.email && this.state.password)
	},

	handleSubmit: function(e){

	},

	render: function(){
		var signup = {display: "none"};
		var log = {display: "block"};
		if (this.state.signin == true){
			signup = {display: "block"};
			log = {display: "none"}
		};
		return (
			<div id="log">
				<form  style={log} className="login-form" action="/sessions" method='post' onSubmit={this.handleSubmit}>
				<input type="text" placeholder="Email" name="[email]" value={this.props.email} />
				<br/>
				<input type="password" placeholder="Password" name="[password]" value={this.props.password} />
				<br/>
				<input type="submit" value="Login" className="btn"/>
				</form>
				<br/>
				<input style={log} type="submit" value="Sign up" onClick={this.signClick} />

				<form style={signup} className="signupForm" action="/users" method="post" onSubmit={this.handleSubmit}>
					<input type="text" placeholder="First name" name="[user][fname]" value={this.props.fname}/>
					<br/>
					<input type="text" placeholder="Last name" name='[user][lname]' value={this.props.lname}/>
					<br/>
					<input type="email" placeholder="E-mail" name="[user][email]" value={this.props.email}/>
					<br/>
					<input type="password" placeholder="Password" name="[user][password]" value={this.props.password}/>
					<br/>
					<input type="password" placeholder="Password" name="[user][password_confirmation]" value={this.props.password}/>
					<br/>
					<input type="hidden"  name="[user][score]" value='0'/>
					<input type='submit' value="Signup" className='btn' />
				</form>
			</div>

		)
	}
})