$(document).ready(function() {
    let thisValue = 0;
    let valueOne = 0;
    let valueTwo = 0;

    $('.x1').click(function(e) {
        $('.symbol').css({"pointer-events": "auto"});
        if ($('.x1').hasClass('first-active')) {
            thisValue = $(this).text();
            $('.valueOne').append(thisValue);
            valueOne = $('.valueOne').text();
        } else if ($('.x1').hasClass('second-active')){
            thisValue = $(this).text();
            $('.valueTwo').append(thisValue);
            valueTwo = $('.valueTwo').text();
        }
    });

    $('.symbol').click(function() {
        let symbol = $(this).html();
        $('.valueSymbol').text(symbol);
        symbol = $('.valueSymbol').text();
        $('.x1').removeClass('first-active').addClass('second-active');
    });

    $('#equal').click(function() {
        symbol = $('.valueSymbol').text();
        valueOne = parseFloat(valueOne);
        valueTwo = parseFloat(valueTwo);
        if (symbol == "+") {
            valueOne += valueTwo
        } else if (symbol == "-") {
            valueOne -= valueTwo
        } else if (symbol == "×") {
            valueOne *= valueTwo
        } else if (symbol == "÷") {
            valueOne /= valueTwo
        } 
        $('.valueOne').text(valueOne);
        $('.valueSymbol').text('');
        $('.valueTwo').text('');
    });

    $('.cancel').click(function() {
        $('.x1').addClass('first-active');
        $('.symbol').css({"pointer-events":"none"});
        $('.valueOne').text('');
        $('.valueSymbol').text('');
        $('.valueTwo').text('');
    })
});