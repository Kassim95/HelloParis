var Exercices = React.createClass({
  getInitialState: function(){
    return{ 
      beginner: false,
      intermediate: false,
      expert: false,
      pendu: false,
      pendu2: false,
      pendu3: false,
      update: false,
      lost: false,
      win: false,
      win2: false,
      win3: false,
      check: false,
      guess: '',
      guess2: '',
      guess3: ''
    };
  },
  sayIt1: function(){
    responsiveVoice.setDefaultVoice("French Female");
    responsiveVoice.speak(letter.join(''));
    console.log(indents)
  },
  sayIt2: function(){
    responsiveVoice.setDefaultVoice("French Female");
    responsiveVoice.speak(letter2.join(''));
  },
  audioexpert1: function(){
    responsiveVoice.setDefaultVoice("French Female");
    responsiveVoice.speak(this.props.exptexercice1.exercice);
  },
  audioexpert2: function(){
    responsiveVoice.setDefaultVoice("French Female");
    responsiveVoice.speak(this.props.exptexercice2.exercice);
  },
  audioexpert3: function(){
    responsiveVoice.setDefaultVoice("French Female");
    responsiveVoice.speak(this.props.exptexercice3.exercice);
  },
  onClick: function(){
    this.setState({beginner: true});
  },
  onClick1: function(){
    this.setState({intermediate: true});
  },
  onClick2: function(){
    this.setState({expert: true});
  },
  onNext: function(){
    this.setState({pendu: true});
  },
  onNext2: function(){
    this.setState({pendu2: true});
  },
  onNext3: function(){
    this.setState({pendu3: true});
  },
  guessLetter: function(e){
    var rightAns = false;
    if(e.keyCode === 13){
      console.log(letter);
      console.log(indents);
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
      } 
      if(indents.toString() == letter.toString()){
        this.setState({win: true});
      }
      this.refs.guess.value = "";
      console.log(errorCount);
    }
  },
  guessLetter2: function(e){
    var rightAns = false;
    console.log(indents2);
    if(e.keyCode === 13){
      console.log(letter2);
      for(var i=0; i<indents2.length;i++){
        if(this.refs.guess2.value.toUpperCase() == letter2[i].toUpperCase() ){
          indents2[i]= letter2[i] ;
          rightAns = true;
          $('.result').html(indents2);
          console.log(indents2);
        } 
      }
  
      if (!rightAns){
        errorCount ++;
      }
      if (errorCount >= 3){
        this.setState({lost: true})
      }
      if(indents2.toString() == letter2.toString()){
        this.setState({win2: true});
      }
      this.refs.guess2.value = "";
      console.log(errorCount);
    }
  },
  guessLetter3: function(e){
    var rightAns = false;
    if(e.keyCode === 13){
      console.log(letter3);
      for(var i=0; i<indents3.length;i++){
        if(this.refs.guess3.value.toUpperCase() == letter3[i].toUpperCase() ){
          indents3[i]= letter3[i] ;
          rightAns = true;
          $('.result').html(indents3);
          console.log(indents3);
        } 
      }
      $
      if (!rightAns){
        errorCount ++;
      }
      if (errorCount >= 3){
        this.setState({lost: true})
      } 
      if(indents3.toString() == letter3.toString()){
        this.setState({win3: true});
      }
      this.refs.guess3.value = "";
      console.log(errorCount);
    }
  },

  render: function(){
    errorCount = 0
    indents = [];
    indents2 = [];
    indents3 = [];
    indentsResult = [];
    var style = {display: "none"};
    var btnHide = {display: "block"};
    var next = {display: "none"};
    var youlost = {display: "none"};
    var youwin = {display: "none"};
    var youwin2 = {display: "none"};
    var youwin3 = {display: "none"};
    var checked = {display: "block"};
    var result = {display: "none"};
    var interm = {display: "none"};
    var intermlast = {display: "none"};
    var expt = {display: "none"};
    var exptlast = {display: "none"};
    var arrayWords = [this.props.exercice1.exercice,this.props.exercice2.exercice, this.props.exercice3.exercice];
    letter = arrayWords[Math.floor(Math.random()*arrayWords.length)].split('');
    var arrayWords2 = [this.props.intermexercice1.exercice,this.props.intermexercice2.exercice, this.props.intermexercice3.exercice]
    var arrayWords3 = [this.props.exptexercice1.exercice,this.props.exptexercice2.exercice, this.props.exptexercice3.exercice]
    letter2 = arrayWords2[Math.floor(Math.random()*arrayWords2.length)].split('');
    letter3 = arrayWords3[Math.floor(Math.random()*arrayWords3.length)].split('');
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
    if (this.state.pendu2 == true){
      interm = {display: "none"};
      intermlast = {display: "block"};
    };
    if (this.state.pendu3 == true){
      expt = {display: "none"};
      exptlast = {display: "block"};
    };
    if(this.state.lost == true){
      next = {display: "none"};
      exptlast = {display: "none"};
      intermlast = {display: "none"};
      youlost = {display: "block"};
    };
    if(this.state.win == true){
      next = {display: "none"};
      youwin = {display: "block"};
    };
    if(this.state.win2 == true){
      intermlast = {display: "none"};
      youwin2 = {display: "block"};
    };
    if(this.state.win3 == true){  
      exptlast = {display: "none"};
      youwin3 = {display: "block"};
    };
    if (this.state.check == true){
      checked = {display: "none"};
    };
    return(
      <div id="exo">
        <div style={youlost}>
          <h1> You Lost! </h1>
          <form  action="/lessons" method='get' >
            <input type="submit" value="Go to profil" />
          </form>
        </div>

        <div style={youwin}>
          <h1>You won! </h1>
          <form  action="/beginners" method='get' >
            <input type="submit" value="Go to profil" />
          </form>
        </div>

        <div style={youwin2}>
          <h1> You won! </h1>
          <form  action="/intermediates" method='get' >
            <input type="submit" value="Go to profil" />
          </form>
        </div>

        <div style={youwin3}>
          <h1> You won! </h1>
          <form  action="/expert" method='get' >
            <input type="submit" value="Go to profil" />
          </form>
        </div>
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
          <input type="text" placehodler="Enter a letter" ref="guess" value={this.props.guess} maxLength="1" onKeyDown={this.guessLetter} />
          <br/>
            {letter.map(function(letter, i){
              indents.push("_ ")
            })}

            <h1 className="result" style={checked}>{indents}</h1>
            <input  type='button' onClick={this.sayIt1} value='audio' />                      
        </div>


        <div style={interm}>
          <h1 >{this.props.intermexercice1.exercice} : {this.props.intermexercice1.translation}</h1>
          <h1 >{this.props.intermexercice2.exercice} : {this.props.intermexercice2.translation}</h1>
          <h1>{this.props.intermexercice3.exercice} : {this.props.intermexercice3.translation}</h1>
          <input type="submit" value="Next" onClick={this.onNext2} />
        </div>

        <div style={intermlast}>
          <input type="text" placehodler="Enter a letter" ref="guess2" value={this.props.guess2} maxLength="1" onKeyDown={this.guessLetter2}  />
          <br/>
            {letter2.map(function(letter2, i){
              if (letter2 == " "){
                indents2.push(" ")
              }else{
                indents2.push(".")
              }
            })}

            <h1 className="result" style={checked}>{indents2}</h1>
            <input type='button' onClick={this.sayIt2} value='audio' />                         
        </div>

        <div style={expt}>
          <input  type='button' onClick={this.audioexpert1} value='audio' /> 
          <h1> : {this.props.exptexercice1.translation} </h1>
          <br/>
          <input  type='button' onClick={this.audioexpert2} value='audio' />
          <h1> : {this.props.exptexercice2.translation} </h1>
          <br/>
          <input  type='button' onClick={this.audioexpert3} value='audio' />
          <h1> : {this.props.exptexercice3.translation} </h1>
          <br/>
          <input type="submit" value="Next" onClick={this.onNext3} />
        </div>

        <div style={exptlast}>
          <input type="text" placehodler="Enter a letter" ref="guess3" value={this.props.guess3} maxLength="1" onKeyDown={this.guessLetter3}  />
          <br/>
            {letter3.map(function(letter3, i){
              if (letter3 == " "){
                indents3.push(" ")
              }else{
                indents3.push(".")
              }
            })}

            <h1 className="result" style={checked}>{indents3}</h1>                      
        </div>
      </div>

  	);
  }
})