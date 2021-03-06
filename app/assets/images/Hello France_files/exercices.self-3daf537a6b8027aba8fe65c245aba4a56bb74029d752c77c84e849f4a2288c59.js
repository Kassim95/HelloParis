var Exercices = React.createClass({
  displayName: 'Exercices',

  //initial values
  getInitialState: function () {
    return {
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
      guess3: '',
      error1: false,
      error2: false,
      error3: false
    };
  },
  //API ResponsiveVoice.JS
  sayIt1: function () {
    responsiveVoice.setDefaultVoice("French Female");
    responsiveVoice.speak(letter.join(''));
    console.log(indents);
  },
  sayIt2: function () {
    responsiveVoice.setDefaultVoice("French Female");
    responsiveVoice.speak(letter2.join(''));
  },
  audioexpert1: function () {
    responsiveVoice.setDefaultVoice("French Female");
    responsiveVoice.speak(this.props.exptexercice1.exercice);
  },
  audioexpert2: function () {
    responsiveVoice.setDefaultVoice("French Female");
    responsiveVoice.speak(this.props.exptexercice2.exercice);
  },
  audioexpert3: function () {
    responsiveVoice.setDefaultVoice("French Female");
    responsiveVoice.speak(this.props.exptexercice3.exercice);
  },
  // click events to start the game depending on the level
  onClick: function () {
    this.setState({ beginner: true });
  },
  onClick1: function () {
    this.setState({ intermediate: true });
  },
  onClick2: function () {
    this.setState({ expert: true });
  },
  // click events to start the hangman game after memorizing the words
  onNext: function () {
    this.setState({ pendu: true });
  },
  onNext2: function () {
    this.setState({ pendu2: true });
  },
  onNext3: function () {
    this.setState({ pendu3: true });
  },
  // display the french flag for each errors
  errorCondition: function () {
    if (errorCount == 1) {
      $('.lependu1').show();
    };
    if (errorCount == 2) {
      $('.lependu1').hide();
      $('.lependu2').show();
    };
    if (errorCount >= 3) {
      $('.lependu2').hide();
      $('.lependu3').show();
    };
  },
  // check if the letter is within the word selected
  guessLetter: function (e) {
    var rightAns = false;
    if (e.keyCode === 13) {
      for (var i = 0; i < indents.length; i++) {
        if (this.refs.guess.value.toUpperCase() == letter[i].toUpperCase()) {
          indents[i] = letter[i];
          rightAns = true;
          $('.result').html(indents);
        }
      }
      if (!rightAns) {
        errorCount++;
      };
      if (errorCount >= 3) {
        this.setState({ lost: true });
      };
      if (indents.toString() == letter.toString()) {
        this.setState({ win: true });
      };
      this.refs.guess.value = "";
    }
    this.errorCondition();
  },
  guessLetter2: function (e) {
    var rightAns = false;
    if (e.keyCode === 13) {
      for (var i = 0; i < indents2.length; i++) {
        if (this.refs.guess2.value.toUpperCase() == letter2[i].toUpperCase()) {
          indents2[i] = letter2[i];
          rightAns = true;
          $('.result').html(indents2);
        }
      }

      if (!rightAns) {
        errorCount++;
      };
      if (errorCount >= 3) {
        this.setState({ lost: true });
      };
      if (indents2.toString() == letter2.toString()) {
        this.setState({ win2: true });
      };
      this.refs.guess2.value = "";
    }
    this.errorCondition();
  },
  guessLetter3: function (e) {
    var rightAns = false;
    if (e.keyCode === 13) {
      for (var i = 0; i < indents3.length; i++) {
        if (this.refs.guess3.value.toUpperCase() == letter3[i].toUpperCase()) {
          indents3[i] = letter3[i];
          rightAns = true;
          $('.result').html(indents3);
        }
      }

      if (!rightAns) {
        errorCount++;
      }
      if (errorCount >= 3) {
        this.setState({ lost: true });
      }
      if (indents3.toString() == letter3.toString()) {
        this.setState({ win3: true });
      }
      this.refs.guess3.value = "";
    }
    this.errorCondition();
  },
  //on mousse over event that hide and show the words
  beg: function () {
    $('.beg1').show();
    $('.thisflash').css('background-image', 'none');
  },
  begout: function () {
    $('.beg1').hide();
    $('.thisflash').css('background-image', 'url(assets/paris.png)');
  },
  beg2: function () {
    $('.beg2').show();
    $('.thisflash2').css('background-image', 'none');
  },
  begout2: function () {
    $('.beg2').hide();
    $('.thisflash2').css('background-image', 'url(assets/paris.png)');
  },
  beg3: function () {
    $('.beg3').show();
    $('.thisflash3').css('background-image', 'none');
  },
  begout3: function () {
    $('.beg3').hide();
    $('.thisflash3').css('background-image', 'url(assets/paris.png)');
  },
  interm: function () {
    $('.interm1').show();
    $('.thisflash4').css('background-image', 'none');
  },
  intermout: function () {
    $('.interm1').hide();
    $('.thisflash4').css('background-image', 'url(assets/paris.png)');
  },
  interm2: function () {
    $('.interm2').show();
    $('.thisflash5').css('background-image', 'none');
  },
  intermout2: function () {
    $('.interm2').hide();
    $('.thisflash5').css('background-image', 'url(assets/paris.png)');
  },
  interm3: function () {
    $('.interm3').show();
    $('.thisflash6').css('background-image', 'none');
  },
  intermout3: function () {
    $('.interm3').hide();
    $('.thisflash6').css('background-image', 'url(assets/paris.png)');
  },
  expt: function () {
    $('.expt1').show();
    $('.thisflash7').css('background-image', 'none');
  },
  exptout: function () {
    $('.expt1').hide();
    $('.thisflash7').css('background-image', 'url(assets/paris.png)');
  },
  expt2: function () {
    $('.expt2').show();
    $('.thisflash8').css('background-image', 'none');
  },
  exptout2: function () {
    $('.expt2').hide();
    $('.thisflash8').css('background-image', 'url(assets/paris.png)');
  },
  expt3: function () {
    $('.expt3').show();
    $('.thisflash9').css('background-image', 'none');
  },
  exptout3: function () {
    $('.expt3').hide();
    $('.thisflash9').css('background-image', 'url(assets/paris.png)');
  },
  render: function () {
    errorCount = 0;
    indents = [];
    indents2 = [];
    indents3 = [];
    indentsResult = [];
    var hidden = { display: 'none' };
    var style = { display: "none" };
    var btnHide = { display: "block" };
    var next = { display: "none" };
    var youlost = { display: "none" };
    var youwin = { display: "none" };
    var youwin2 = { display: "none" };
    var youwin3 = { display: "none" };
    var checked = { display: "block" };
    var result = { display: "none" };
    var interm = { display: "none" };
    var intermlast = { display: "none" };
    var expt = { display: "none" };
    var exptlast = { display: "none" };
    var therror1 = { display: "none" };
    var therror2 = { display: "none" };
    var therror3 = { display: "none" };
    var arrayWords = [this.props.exercice1.exercice, this.props.exercice2.exercice, this.props.exercice3.exercice];
    var arrayWordstranslation = [this.props.exercice1.translation, this.props.exercice2.translation, this.props.exercice3.translation];
    var rand = Math.floor(Math.random() * arrayWords.length);
    letter = arrayWords[rand].split('');
    var tranlation1 = arrayWordstranslation[rand];
    var arrayWords2 = [this.props.intermexercice1.exercice, this.props.intermexercice2.exercice, this.props.intermexercice3.exercice];
    var arrayWordstranslation2 = [this.props.intermexercice1.translation, this.props.intermexercice2.translation, this.props.intermexercice3.translation];
    var rand2 = Math.floor(Math.random() * arrayWords2.length);
    letter2 = arrayWords2[rand2].split('');
    var tranlation2 = arrayWordstranslation2[rand2];
    var arrayWords3 = [this.props.exptexercice1.exercice, this.props.exptexercice2.exercice, this.props.exptexercice3.exercice];
    var arrayWordstranslation3 = [this.props.exptexercice1.translation, this.props.exptexercice2.translation, this.props.exptexercice3.translation];
    var rand3 = Math.floor(Math.random() * arrayWords2.length);
    letter3 = arrayWords3[rand3].split('');
    var tranlation3 = arrayWordstranslation3[rand3];
    if (this.state.beginner == true) {
      style = { display: "block" };
      btnHide = { display: "none" };
    };
    if (this.state.intermediate == true) {
      interm = { display: "block" };
      btnHide = { display: "none" };
    };
    if (this.state.expert == true) {
      expt = { display: "block" };
      btnHide = { display: "none" };
    };
    if (this.state.pendu == true) {
      style = { display: "none" };
      next = { display: "block" };
    };
    if (this.state.pendu2 == true) {
      interm = { display: "none" };
      intermlast = { display: "block" };
    };
    if (this.state.pendu3 == true) {
      expt = { display: "none" };
      exptlast = { display: "block" };
    };
    if (this.state.lost == true) {
      $('.next').hide();
      $('.intermlast').hide();
      $('.exptlast').hide();
      youlost = { display: "block" };
    };
    if (this.state.win == true) {
      $('.next').hide();
      youwin = { display: "block" };
    };
    if (this.state.win2 == true) {
      $('.intermlast').hide();
      youwin2 = { display: "block" };
    };
    if (this.state.win3 == true) {
      youwin3 = { display: "block" };
      $('.exptlast').hide();
    };
    if (this.state.check == true) {
      checked = { display: "none" };
    };
    return React.createElement(
      'div',
      { id: 'exo' },
      React.createElement(
        'div',
        { style: youlost },
        React.createElement(
          'h1',
          { className: 'center3' },
          ' You Lost! '
        ),
        React.createElement(
          'form',
          { action: '/losts', method: 'get' },
          React.createElement('input', { className: 'styled-button-9 center3', type: 'submit', value: 'Go to profile' })
        )
      ),
      React.createElement(
        'div',
        { style: youwin },
        React.createElement(
          'h1',
          { className: 'center center3' },
          'You won! '
        ),
        React.createElement(
          'form',
          { action: '/beginners', method: 'get' },
          React.createElement('input', { className: 'styled-button-9 center3', type: 'submit', value: 'Go to profile' })
        )
      ),
      React.createElement(
        'div',
        { style: youwin2 },
        React.createElement(
          'h1',
          { className: 'center3' },
          ' You won! '
        ),
        React.createElement(
          'form',
          { action: '/intermediates', method: 'get' },
          React.createElement('input', { className: 'styled-button-9 center3', type: 'submit', value: 'Go to profile' })
        )
      ),
      React.createElement(
        'div',
        { style: youwin3 },
        React.createElement(
          'h1',
          { className: 'center3' },
          ' You won! '
        ),
        React.createElement(
          'form',
          { action: '/expert', method: 'get' },
          React.createElement('input', { className: 'styled-button-9 center3', type: 'submit', value: 'Go to profile' })
        )
      ),
      React.createElement(
        'h5',
        { style: btnHide },
        'Hello France is an application based on the hangman game in order to learn French in a fun and easy way.',
        React.createElement('br', null),
        React.createElement('br', null),
        'Beginner: +10points, Pro: +20points, Expert: +30points'
      ),
      React.createElement('input', { style: btnHide, className: 'button-0', type: 'submit', value: 'Beginner', onClick: this.onClick }),
      React.createElement('br', null),
      React.createElement('input', { style: btnHide, className: 'button-0', type: 'submit', value: 'Pro', onClick: this.onClick1 }),
      React.createElement('br', null),
      React.createElement('input', { style: btnHide, className: 'button-0', type: 'submit', value: 'Expert', onClick: this.onClick2 }),
      React.createElement(
        'div',
        { style: style },
        React.createElement(
          'h5',
          null,
          'Objectif: Flip the cards and memorize the 3 words in french and their translation.You will have 3 chances to find the right letters! '
        ),
        React.createElement(
          'div',
          { className: 'flashcard thisflash', onMouseEnter: this.beg, onMouseLeave: this.begout },
          React.createElement(
            'h2',
            { style: hidden, className: 'francais beg1' },
            React.createElement(
              'span',
              { className: 'blue' },
              'French'
            ),
            React.createElement('br', null),
            React.createElement('br', null),
            ' ',
            this.props.exercice1.exercice
          ),
          React.createElement(
            'h2',
            { style: hidden, className: 'english beg1' },
            React.createElement(
              'span',
              { className: 'red' },
              'English'
            ),
            React.createElement('br', null),
            React.createElement('br', null),
            this.props.exercice1.translation
          )
        ),
        React.createElement(
          'div',
          { className: 'flashcard thisflash2', onMouseEnter: this.beg2, onMouseLeave: this.begout2 },
          React.createElement(
            'h2',
            { style: hidden, className: 'francais beg2' },
            React.createElement(
              'span',
              { className: 'blue' },
              'French'
            ),
            React.createElement('br', null),
            React.createElement('br', null),
            ' ',
            this.props.exercice2.exercice
          ),
          React.createElement(
            'h2',
            { style: hidden, className: 'english beg2' },
            React.createElement(
              'span',
              { className: 'red' },
              'English'
            ),
            React.createElement('br', null),
            React.createElement('br', null),
            this.props.exercice2.translation
          )
        ),
        React.createElement(
          'div',
          { className: 'flashcard thisflash3', onMouseEnter: this.beg3, onMouseLeave: this.begout3 },
          React.createElement(
            'h2',
            { style: hidden, className: 'francais beg3' },
            React.createElement(
              'span',
              { className: 'blue' },
              'French'
            ),
            React.createElement('br', null),
            React.createElement('br', null),
            ' ',
            this.props.exercice3.exercice
          ),
          React.createElement(
            'h2',
            { style: hidden, className: 'english beg3' },
            React.createElement(
              'span',
              { className: 'red' },
              'English'
            ),
            React.createElement('br', null),
            React.createElement('br', null),
            this.props.exercice3.translation
          )
        ),
        React.createElement('br', null),
        React.createElement('br', null),
        React.createElement('input', { className: 'next btnnext', className: 'styled-button-9', type: 'submit', value: 'Next', onClick: this.onNext })
      ),
      React.createElement(
        'div',
        { className: 'center next', style: next },
        React.createElement(
          'button',
          { className: 'help1', type: 'button', onClick: this.sayIt1 },
          React.createElement('img', { src: 'assets/speaker.png' }),
          tranlation1
        ),
        React.createElement('br', null),
        React.createElement('input', { className: 'input', type: 'text', placeholder: 'Type only 1 letter', ref: 'guess', value: this.props.guess, maxLength: '1', onKeyDown: this.guessLetter }),
        letter.map(function (letter, i) {
          indents.push("_ ");
        }),
        React.createElement(
          'h1',
          { className: 'result center2', style: checked },
          indents
        )
      ),
      React.createElement(
        'div',
        { style: interm },
        React.createElement(
          'h5',
          null,
          'Objectif: Flip the cards and memorize the 3 sentences in french and their translation.You will have 3 chances to find the right letters! '
        ),
        React.createElement(
          'div',
          { className: 'flashcard thisflash4', onMouseEnter: this.interm, onMouseLeave: this.intermout },
          React.createElement(
            'h2',
            { style: hidden, style: hidden, className: 'francais interm1' },
            React.createElement(
              'span',
              { className: 'blue' },
              'French'
            ),
            React.createElement('br', null),
            React.createElement('br', null),
            ' ',
            this.props.intermexercice1.exercice
          ),
          React.createElement(
            'h2',
            { style: hidden, stly: hidden, className: 'english interm1' },
            React.createElement(
              'span',
              { className: 'red' },
              'English'
            ),
            React.createElement('br', null),
            React.createElement('br', null),
            this.props.intermexercice1.translation
          )
        ),
        React.createElement(
          'div',
          { className: 'flashcard thisflash5', onMouseEnter: this.interm2, onMouseLeave: this.intermout2 },
          React.createElement(
            'h2',
            { style: hidden, className: 'francais interm2' },
            React.createElement(
              'span',
              { className: 'blue' },
              'French'
            ),
            React.createElement('br', null),
            React.createElement('br', null),
            ' ',
            this.props.intermexercice2.exercice
          ),
          React.createElement(
            'h2',
            { style: hidden, className: 'english interm2' },
            React.createElement(
              'span',
              { className: 'red' },
              'English'
            ),
            React.createElement('br', null),
            React.createElement('br', null),
            this.props.intermexercice2.translation
          )
        ),
        React.createElement(
          'div',
          { className: 'flashcard thisflash6', onMouseEnter: this.interm3, onMouseLeave: this.intermout3 },
          React.createElement(
            'h2',
            { style: hidden, className: 'francais interm3' },
            React.createElement(
              'span',
              { className: 'blue' },
              'French'
            ),
            React.createElement('br', null),
            React.createElement('br', null),
            ' ',
            this.props.intermexercice3.exercice
          ),
          React.createElement(
            'h2',
            { style: hidden, className: 'english interm3' },
            React.createElement(
              'span',
              { className: 'red' },
              'English'
            ),
            React.createElement('br', null),
            React.createElement('br', null),
            this.props.intermexercice3.translation
          )
        ),
        React.createElement('input', { className: 'next l', type: 'submit', value: 'Next', onClick: this.onNext2 })
      ),
      React.createElement(
        'div',
        { className: 'center intermlast', style: intermlast },
        React.createElement(
          'button',
          { className: 'help2', type: 'button', onClick: this.sayIt2 },
          React.createElement('img', { src: 'assets/speaker.png' }),
          tranlation2
        ),
        React.createElement('br', null),
        React.createElement('input', { className: 'input', type: 'text', placeholder: 'Type only 1 letter', ref: 'guess2', value: this.props.guess2, maxLength: '1', onKeyDown: this.guessLetter2 }),
        React.createElement('br', null),
        letter2.map(function (letter2, i) {
          if (letter2 == " ") {
            indents2.push(" ");
          } else {
            indents2.push(".");
          }
        }),
        React.createElement(
          'h1',
          { className: 'result center2', style: checked },
          indents2
        )
      ),
      React.createElement(
        'div',
        { style: expt },
        React.createElement(
          'h5',
          null,
          'Objectif: Flip the cards and click on the speakers and listen closely. You will have 3 chances to find the right letters! '
        ),
        React.createElement(
          'div',
          { className: 'flashcard thisflash7', onMouseEnter: this.expt, onMouseLeave: this.exptout },
          React.createElement(
            'h2',
            { style: hidden, className: 'francais expt1' },
            React.createElement(
              'span',
              { className: 'blue' },
              'French'
            )
          ),
          React.createElement(
            'button',
            { style: hidden, className: 'expt1', type: 'button', onClick: this.audioexpert1 },
            React.createElement('img', { style: hidden, className: 'expt1', src: 'assets/speaker.png' })
          ),
          ' ',
          React.createElement(
            'h4',
            { style: hidden, className: 'english expt1' },
            React.createElement(
              'span',
              { className: 'red' },
              'English'
            ),
            React.createElement('br', null),
            React.createElement('br', null),
            this.props.exptexercice1.translation
          )
        ),
        React.createElement(
          'div',
          { className: 'flashcard thisflash8', onMouseEnter: this.expt2, onMouseLeave: this.exptout2 },
          React.createElement(
            'h2',
            { style: hidden, className: 'francais expt2' },
            React.createElement(
              'span',
              { className: 'blue' },
              'French'
            )
          ),
          React.createElement(
            'button',
            { style: hidden, className: 'expt2 ', type: 'button', onClick: this.audioexpert2 },
            React.createElement('img', { style: hidden, className: 'expt2', src: 'assets/speaker.png' })
          ),
          ' ',
          React.createElement(
            'h4',
            { style: hidden, className: 'english expt2' },
            React.createElement(
              'span',
              { className: 'red' },
              'English'
            ),
            React.createElement('br', null),
            React.createElement('br', null),
            this.props.exptexercice2.translation
          )
        ),
        React.createElement(
          'div',
          { className: 'flashcard thisflash9', onMouseEnter: this.expt3, onMouseLeave: this.exptout3 },
          React.createElement(
            'h2',
            { style: hidden, className: 'francais expt3' },
            React.createElement(
              'span',
              { className: 'blue' },
              'French'
            )
          ),
          React.createElement(
            'button',
            { style: hidden, className: 'expt3', type: 'button', onClick: this.audioexpert3 },
            React.createElement('img', { style: hidden, className: 'expt3', src: 'assets/speaker.png' })
          ),
          ' ',
          React.createElement(
            'h4',
            { style: hidden, className: 'english expt3' },
            React.createElement(
              'span',
              { className: 'red' },
              'English'
            ),
            React.createElement('br', null),
            React.createElement('br', null),
            this.props.exptexercice3.translation
          )
        ),
        React.createElement('input', { className: 'next styled-button-9', type: 'submit', value: 'Next', onClick: this.onNext3 })
      ),
      React.createElement(
        'div',
        { className: 'exptlast center ', style: exptlast },
        React.createElement(
          'span',
          { className: 'help3' },
          tranlation3
        ),
        React.createElement('br', null),
        React.createElement('input', { className: 'input', type: 'text', placeholder: 'Type only 1 letter', ref: 'guess3', value: this.props.guess3, maxLength: '1', onKeyDown: this.guessLetter3 }),
        React.createElement('br', null),
        letter3.map(function (letter3, i) {
          if (letter3 == " ") {
            indents3.push(" ");
          } else {
            indents3.push(".");
          }
        }),
        React.createElement(
          'h1',
          { className: 'result center2', style: checked },
          indents3
        )
      ),
      React.createElement('img', { style: therror1, className: 'lependu lependu1 center4', src: 'assets/french-flag1.png' }),
      React.createElement('img', { style: therror2, className: 'lependu lependu2 center4', src: 'assets/french-flag2.png' }),
      React.createElement('img', { style: therror3, className: 'lependu lependu3 center4', src: 'assets/french-flag3.png' })
    );
  }
});