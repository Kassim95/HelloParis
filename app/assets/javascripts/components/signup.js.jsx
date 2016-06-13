var Signup = React.createClass({
	setInitialState: function(){
		return {
			fname: '',
			lname: '',
			email: '',
			password: '',
			score: ''
		}
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
		return(
			<form className="signupForm" action="/users" method="post" onSubmit={this.handleSubmit}>
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
				<input type='submit' className='btn' />
			</form>
			)
	}

})