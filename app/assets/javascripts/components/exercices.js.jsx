var Exercices = React.createClass({
  getInitialState: function(){
    return{ 
      beginner: false,
      intermediate: false,
      expert: false,
      pendu: false,
      update: false,
      lost: false,
      win: false,
      check: false,
      guess: ''
    };
  },
  onClick: function(){
    this.setState({beginner: true});
  },
  onClick1: function(){
    this.setState({intermediate: true});
  },
  onClick2: function(){
    this.setState({z: true});
  },
  onNext: function(){
    this.setState({pendu: true});
  },
  guessLetter: function(){
    var rightAns = false;
    console.log(letter);
    for(var i=0; i<indents.length;i++){
      if(this.refs.guess.value.toUpperCase() == letter[i].toUpperCase() ){
        indents[i]= letter[i] ;
        rightAns = true;
        $('.result').html(indents);
        console.log(indents);
      } 
    }
    $
    if (!rightAns){
      errorCount ++;
    }

    if (errorCount >= 3){
      this.setState({lost: true})
    } else if(indents.toString() == letter.toString()){
      this.setState({win: true});
    }
    this.refs.guess.value = "";
    console.log(errorCount);
  },

  render: function(){
    errorCount = 0
    indents = [];
    indentsResult = [];
    var style = {display: "none"};
    var btnHide = {display: "block"};
    var next = {display: "none"};
    var youlost = {display: "none"};
    var youwin = {display: "none"};
    var checked = {display: "block"};
    var result = {display: "none"}
    var arrayWords = [this.props.exercice1.exercice,this.props.exercice2.exercice, this.props.exercice3.exercice];
    letter = arrayWords[Math.floor(Math.random()*arrayWords.length)].split('');
    if (this.state.beginner == true) {
      style = {display: "block"};
      btnHide = {display: "none"};
    };
    if (this.state.intermediate == true) {
      interm = {display: "block"};
      btnHide = {display: "none"};
    };
    if (this.state.expert == true) {
      expt = {display: "block"};
      btnHide = {display: "none"};
    };
    if (this.state.pendu == true){
      style = {display: "none"};
      next = {display: "block"};
    };
    if(this.state.lost == true){
      next = {display: "none"};
      youlost = {display: "block"};
    };
    if(this.state.win == true){
      next = {display: "none"};
      youwin = {display: "block"};
    };
    if (this.state.check == true){
      checked = {display: "none"};
    }
    return(
      <div id="exo">
      <input style={btnHide} type="submit" value="Beginner" onClick={this.onClick} />
      <br/>
      <input style={btnHide} type="submit" value="Intermediate" onClick={this.onClick1} />
      <br/>
      <input style={btnHide} type="submit" value="Expert" onClick={this.onClick2} />
        <div style={style}>
          <h1 >{this.props.exercice1.exercice} : {this.props.exercice1.translation}</h1>
          <h1 >{this.props.exercice2.exercice} : {this.props.exercice2.translation}</h1>
          <h1>{this.props.exercice3.exercice} : {this.props.exercice3.translation}</h1>
          <input type="submit" value="Next" onClick={this.onNext} />
        </div>
        <div style={next}>
          <h1>We are getting there</h1>
          <input type="text" placehodler="Enter a letter" ref="guess" value={this.props.guess} maxLength="1" />
          <input type="submit" onClick={this.guessLetter} />
          <br/>
            {letter.map(function(letter, i){
              indents.push("_ ")
            })}

            <h1 className="result" style={checked}>{indents}</h1>
            <input type="submit" value="help" />
                          
        </div>
        <div style={youlost}>
          <h1> You Lost! </h1>
          <form  action="/lessons" method='get' >
            <input type="submit" value="Go to profil" />
          </form>
        </div>

        <div style={youwin}>
          <h1> You won! </h1>
          <form  action="/sessions" method='get' >
            <input type="submit" value="Go to profil" />
          </form>
        </div>
      </div>

  	);
  }
})