var winningCombos = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]]
var selected = []
var playerOne = []
var playerTwo = []
var counter = 0

function selectSquare(selection) {
	if(counter % 2) {
		playerOne.push(selection)
		counter++
		checkScore(playerOne, winningCombos)
	}
	else {
		playerTwo.push(selection)
		counter++
		checkScore(playerTwo, winningCombos)
	}

}

function checkScore(player, combos){
	var winning = false
	for(i=0; i < combos.length; i++) {
		winning = combos[i].every(function (value) {
    		return (player.indexOf(value) >= 0);
 		});
 		if(winning){
 			if(counter % 2){
 				$(".ticTacToe").hide()
 				$(".winnerMsg").append("X is the Winner!!")
 				$(".over").show()
 			}
 			else {
 				$(".ticTacToe").hide()
 				$(".winnerMsg").append("O is the Winner!!")
 				$(".over").show()
 			}
 			break
 		}
	}

	if(counter === 9 && winning === false) {
		$(".ticTacToe").hide()
		$(".winnerMsg").append("Tie Game!!")
		$(".over").show()
	}
}

$(function(){
	$(".over").hide()
	$('.square').on("click", function(e) {
		var id = parseInt($(this).attr('id'))
		if (selected.indexOf(id) >= 0) {
			alert("number already selected")
			return
		}
		else {
			selectSquare(id);
			selected.push(id)
			if(counter % 2) {
				$(this).append("X")
			}
			else {
				$(this).append("O")
			}
		}
	})
	$("#restart").click(function(e) {
		$(".winnerMsg").empty()
		$(".square").empty()
		$(".over").hide()
		$(".ticTacToe").show()
		selected = []
		playerOne = []
		playerTwo = []
		counter = 0
	})
})