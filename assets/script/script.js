//setting the variables necessary for the functions
var saveBtn = $(".saveBtn");
var timeBlockEl = $(".time-block");

//setting the variables necessary for tracking the time
var currentDayEl = $("#currentDay");
currentDayEl.text (dayjs().format("dddd, MMMM DD"));

var currentHour = dayjs().hour();
console.log(currentHour);

//this function will run through each time block and set the proper class of time
$.each(timeBlockEl, function () {
  var hourBlock = $(this).attr("id").split("-")[1];

  if (hourBlock < currentHour) {
    $(this).addClass("past");
  } else if (hourBlock == currentHour) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
});

//this event listener will store the listed items
saveBtn.on("click", function() {
  var hourBlock = $(this).parent().attr("id").split("-")[1];
  var calendarItem = $(this).parent().find(".description").val();

  localStorage.setItem(hourBlock, calendarItem);
})
