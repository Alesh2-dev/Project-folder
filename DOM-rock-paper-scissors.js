    let score = JSON.parse(localStorage.getItem('score')) || {
			win: 0,
			lose: 0,
			draw: 0
		};

    updateScoreElement();
 
		// if (score === null) {
		// 	score = {
		// 		win: 0,
		// 		lose: 0,
		// 		draw: 0
		// 	};
		// }

		// if (!score) {
		// 	score = {
		// 		win: 0,
		// 		lose: 0,
		// 		draw: 0
		// 	};
		// }


		function playGame(playerMove) {
			const computerMove = pickcomputerMove();

		 let result = '';

		 if (playerMove === 'Scissors') {
				if (computerMove === 'rock') {
						result = 'You lose'
						} else if (computerMove === 'Paper') {
						result = 'You win';
						} else if (computerMove === 'Scissors') {
						result = 'Draw';
						}

		 } else if (playerMove === 'paper') {
		 	 if (computerMove === 'rock') {
				 	result = 'You win'
				 } else if (computerMove === 'Paper') {
				 	result = 'Draw';
				 } else if (computerMove === 'Scissors') {
				 	result = 'You lose';
				 }

		 } else if (playerMove === 'rock') {
		 		 if (computerMove === 'rock') {
					 	result = 'Draw'
					 } else if (computerMove === 'Paper') {
					 	result = 'You lose';
					 } else if (computerMove === 'Scissors') {
					 	result = 'You win';
					 }
		 }

		if (result === 'You win') {
			score.win += 1;
		} else if (result === 'You lose') {
			score.lose += 1;
		} else if (result === 'Draw') {
			score.draw += 1;
		}

		localStorage.setItem('score', JSON.stringify(score));
		// localStorage only support strings

    updateScoreElement();

		 document.querySelector('.js-move').innerHTML = `You picked ${playerMove}. Computer picked ${computerMove}. ${result}`;
		}
		
    function updateScoreElement() {
      document.querySelector('.js-score').innerHTML = `win: ${score.win}, lose: ${score.lose}, Draw: ${score.draw}`;
    }

		function pickcomputerMove() {

			let computerMove = '';

			const randomNumber = Math.random();

		 if (randomNumber >= 0 && randomNumber < 1 / 3) {
		 	computerMove = 'rock';
		 } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
		 	computerMove ='Paper';
		 } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
		 	computerMove = 'Scissors';
		 }
		 return computerMove; 
		}