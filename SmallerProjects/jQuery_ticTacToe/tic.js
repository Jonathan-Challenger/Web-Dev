$(document).ready(function() {
    let play = true;
    let turn = 1;

    $('#board tr td').click(function() {
        if (play == true && $(this).text() == "") {
            if (turn % 2 == 1) {
                $(this).append("X")
                $(this).css('color','green')
            } else {
                $(this).append("O")
                $(this).css('color','red')
            }
        }
        turn++;
        if (winner() != -1 && winner() != "") {
            if (winner() == "X") {
                $('body').append("<div class='winner'>X is the winner! <button onclick='location.reload();' id='reload'>Play Again</button></div>");
                $('.winner').css("color", "green");
            } else {
                $('body').append("<div class='winner'>O is the winner! <button onclick='location.reload();' id='reload'>Play Again</button></div>");
                $('.winner').css("color", "red");
            }
            play = false;
        }
    });

    function winner() {
		var space1 = $("#board tr:nth-child(1) td:nth-child(1)").text();
		var space2 = $("#board tr:nth-child(1) td:nth-child(2)").text();
		var space3 = $("#board tr:nth-child(1) td:nth-child(3)").text();
		var space4 = $("#board tr:nth-child(2) td:nth-child(1)").text();
		var space5 = $("#board tr:nth-child(2) td:nth-child(2)").text();
		var space6 = $("#board tr:nth-child(2) td:nth-child(3)").text();
		var space7 = $("#board tr:nth-child(3) td:nth-child(1)").text();
		var space8 = $("#board tr:nth-child(3) td:nth-child(2)").text();
		var space9 = $("#board tr:nth-child(3) td:nth-child(3)").text();
		// check for win horizontally
		if ((space1 == space2) && (space2 == space3)) {
			return space3;
		} else if ((space4 == space5) && (space5 == space6)) {
			return space6;
		} else if ((space7 == space8) && (space8 == space9)) {
			return space9;
		}
		// check for win vertically
		else if ((space1 == space4) && (space4 == space7)) {
			return space7;
		} else if ((space2 == space5) && (space5 == space8)) {
			return space8;
		} else if ((space3 == space6) && (space6 == space9)) {
			return space9;
		}
		// check for win diagonally
		else if ((space1 == space5) && (space5 == space9)) {
			return space9;
		} else if ((space3 == space5) && (space5 == space7)) {
			return space7;
		}
		return -1;
	}
});