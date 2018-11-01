var score, roundScore, activePlayer, dice, gamePlaying;
var final_score = ($('#final-score').val()) ? $('#final-score').val() : 100;

init();


$('.btn-new').click(init);


function init() {	
	score = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;

	$('.dice').css('display','none');
	document.getElementById('score-0').textContent 	 = '0';
	document.getElementById('score-1').textContent 	 = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	$('#name-0').text('Player 1');
	$('#name-1').text('Player 2');
	$('.player-0-panel').removeClass('Winner').removeClass('active');
	$('.player-1-panel').removeClass('Winner').removeClass('active');
	$('.player-0-panel').addClass('active');
}


function nextPlayer(){
	activePlayer = ( activePlayer === 0 ) ? 1 :  0;
	roundScore = 0;
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	$('.player-0-panel').toggleClass('active');
	$('.player-1-panel').toggleClass('active');
	$('.dice').css('display','none');
}


document.querySelector('.btn-roll').addEventListener('click',function(){	
	if (gamePlaying)
	{
		var dice = Math.floor(Math.random() * 6) + 1;
		var diceDOM = document.querySelector('.dice');
		diceDOM.style.display = 'block';
		diceDOM.src = 'dice-' + dice + '.png';
		if ( dice !== 1 ) { 
			roundScore += dice;
			document.querySelector('#current-' + activePlayer ).textContent = roundScore;
		} else {
			nextPlayer();
		}

	}
	
});



$('.btn-hold').click(function(){
	if (gamePlaying) {
		score[activePlayer] =+ roundScore;
		$('#score-'+activePlayer).text(score[activePlayer]);
		if ( score[activePlayer] >= final_score ) 
		{
			$('#name-'+activePlayer).text('Winner!!!');
			$('.dice').css('display','none');
			$('.player-'+activePlayer+'-panel').addClass('Winner').removeClass('active');
			gamePlaying = false;

		} else {
			nextPlayer();
		}
	}


	
	
});

