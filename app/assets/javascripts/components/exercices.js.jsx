var Exercices = React.createClass({
	getInitialState: function(){
		return{ exercices: this.props.data};
	},
	getDefaultState: function(){
		return{ exercices: []};
	},

  render: function(){

  	return(
  		<div>{this.state.exercices.map(function(exercice){
  			return <Exercice key={exercice.id} exercice={exercice} />
  		})}</div>
  	);
  }
})