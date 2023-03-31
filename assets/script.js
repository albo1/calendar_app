var today = $('#currentDay')
var currentHour = dayjs().format("HH");

function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY, [at] hh:mm:ss a')
    today.text(rightNow);
}
setInterval(displayTime, 1000)

$(".time-block").each(function () {
    var hour = parseInt($(this).attr("id").split("-")[1]);

    if (hour < currentHour) {
        $(this).addClass("past");
    } else if (hour > currentHour) {
        $(this).addClass("future");
    } else {
        $(this).addClass("present");
    }
});

$(document).ready(function() {
    $('.saveBtn').on('click', function() {
        var timeBlock = $(this).parent().attr('id');
        var textArea = $(this).siblings('.description').val();
        localStorage.setItem(timeBlock, textArea);
    });
    $('.time-block').each(function() {
        var timeBlock = $(this).attr('id');
        var savedText = localStorage.getItem(timeBlock);
        if (savedText !== null) {
            $(this).find('.description').val(savedText);
        }
    })


})