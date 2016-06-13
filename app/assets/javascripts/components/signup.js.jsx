var Signup = React.createClass({
	setInitialState: function(){
		return {
			fname: '',
			lname: '',
			email: '',
			password: '',
			score: 0
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
		e.preventDefault();
		$.post('',
           { signup: this.state },
           'JSON'
    );
	},

	render: function(){
		return(
			<form className="signupForm" onSubmit={this.handleSubmit}>
				<input type="text" placeholder="First name" value={this.props.fname}/>
				<br/>
				<input type="text" placeholder="Last name" value={this.props.lname}/>
				<br/>
				<input type="text" placeholder="E-mail" value={this.props.email}/>
				<br/>
				<input type="text" placeholder="Password" value={this.props.password}/>
				<br/>
				<input type='submit' className='btn'/>
			</form>
			)
	}

})