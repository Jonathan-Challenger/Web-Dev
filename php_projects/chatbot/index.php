<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="bot.css">
    <title>Chatbot</title>
</head>
<body>
    <div class="container">
        <div id="dot1"></div>
        <div id="dot2"></div>
        <div id="screen">
            <div id="header">
                ONLINE CHATBOT
            </div>
            <div id="messageDisplay">
                <!-- <div class="chat botMessages">Hello there, how can I help?</div>
                <div class="messagesContainer">
                <div class="chat userMessages">I need help!</div> -->
            </div>
            <div id="userInput">
                <input type="text" name="messages" id="message" autocomplete="off" placeholder="Type Your Message Here." required>
                <input type="submit" value="Send" id="send" name="send">
            </div>
        </div>
    </div>

    <!-- Jquery CDN -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <!-- Jquery start -->
    <script>
        $(document).ready(function() {
            $("#message").on("keyup", function() {
                if ($("#message").val()) {
                    $("#send").css("display", "block");
                } else {
                    $("#send").css("display", "none");
                }
            });
        });

        // Send button clicked
        $("#send").on("click", function(e) {
            $userMessage = $("#message").val();
            $appendUserMessage = '<div class="chat userMessages">'+ $userMessage +'</div>';
            $("#messageDisplay").append($appendUserMessage);

            // AJAX start
            $.ajax({
                url: "bot.php",
                type: "POST",
                data: { messageValue: $userMessage },
                success: function(data) {
                    $appendBotResponse = '<div class="messagesContainer"><div class="chat botMessages">'+data+'</div></div>';
                    $("#messageDisplay").append($appendBotResponse);
                }
            });
            $("#message").val("");
            $("#send").css("display", "none");
        });
    </script>
</body>
</html>