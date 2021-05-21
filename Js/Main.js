function create_UUID() {
  var dt = new Date().getTime();
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
}
// var upgradeTime = 222801;
function findmonth(count) {
  var months = [
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
  ];
  return months[count];
}
function findWeekDay(count) {
  var days = [
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
  ];
  return days[count];
}
var alltasks = [
  {
    id: 0,
    isDone: false,
    taskText: "Lets Start 😊",
    time: "...",
    dateSplit: {
      year: 2021,
      month: 4,
      day: 25,
      hour: 23,
      min: 10,
    },
    isBookmark: false,
  },
];
alltasks.forEach(enterTasksToPage);
function plus() {
  var addNewTaskText = document.getElementById("task-text").value;
  var newTaskDateAndTime = document.getElementById("dateAndTime").value;
  console.log(newTaskDateAndTime);
  var id, isDone, taskText, time, isBookmark, dateSplit;
  id = create_UUID();
  isDone = false;
  taskText = addNewTaskText;
  isBookmark = false;
  if (newTaskDateAndTime === "") {
    time = "not set";
    dateSplit = {
      year: 0,
      month: 0,
      day: 0,
      hour: 0,
      min: 0,
    };
  } else {
    var taskDate = newTaskDateAndTime.split("T");
    var date = new Date(
      taskDate[0].split("-")[0],
      taskDate[0].split("-")[1],
      taskDate[0].split("-")[2],
      taskDate[1].split(":")[0],
      taskDate[1].split(":")[1]
    );
    time =
      findWeekDay(date.getDay()) +
      ", " +
      findmonth(date.getMonth()) +
      " " +
      taskDate[0].split("-")[2] +
      " " +
      taskDate[1].split(":")[0] +
      ":" +
      taskDate[1].split(":")[1];
    dateSplit = {
      year: taskDate[0].split("-")[0],
      month: taskDate[0].split("-")[1],
      day: taskDate[0].split("-")[2],
      hour: taskDate[1].split(":")[0],
      min: taskDate[1].split(":")[1],
    };
  }
  alltasks.push({
    id: id,
    isDone: isDone,
    taskText: taskText,
    time: time,
    dateSplit: dateSplit,
    isBookmark: isBookmark,
  });
  alltasks.forEach(enterTasksToPage);
}
function bookmark() {}
function enterTasksToPage(item) {
  var taskList = document.getElementById("task-list");
  var li = document.createElement("li");
  var insideLi =
    '<div class="hiddenId">' +
    item.id +
    '</div><div class="task-line"><div style="display: flex; align-items: center;"><button id="check"><i class="far fa-circle"></i></button><div style="font-size:  1.2vmax; margin-left: 10px;">' +
    item.taskText +
    '</div></div><div><div style="display: flex; align-items: center;"><div style="margin-right: 20px; font-size:  1.2vmax;">' +
    item.time +
    '</div><button id="bookmark"><i class="far fa-bookmark"></i></button></div></div></div>';
  li.innerHTML = insideLi;
  //   taskList.remove();
  taskList.appendChild(li);
  // console.log(li);
}
var today = new Date();
console.log(today);
function timeBetween(item) {
  var time = new Date(
    item[0].dateSplit.year,
    item[0].dateSplit.month,
    item[0].dateSplit.day,
    item[0].dateSplit.hour,
    item[0].dateSplit.min
  );
  var fffff = (time.getTime() - today.getTime()) / 1000;
  console.log(fffff);
  return Math.round((time.getTime() - today.getTime()) / 1000);
}
var seconds = timeBetween(alltasks);
function timer() {
  var days = Math.floor(seconds / 24 / 60 / 60);
  var hoursLeft = Math.floor(seconds - days * 86400);
  var hours = Math.floor(hoursLeft / 3600);
  var minutesLeft = Math.floor(hoursLeft - hours * 3600);
  var minutes = Math.floor(minutesLeft / 60);
  var remainingSeconds = seconds % 60;
  function pad(n) {
    return n < 10 ? "0" + n : n;
  }
  document.getElementById("test").innerHTML =
    pad(days) +
    ":" +
    pad(hours) +
    ":" +
    pad(minutes) +
    ":" +
    pad(remainingSeconds);
  if (seconds == 0) {
    clearInterval(countdownTimer);
    document.getElementById("test").innerHTML = "Completed";
  } else {
    seconds--;
  }
}
var countdownTimer = setInterval("timer()", 1000);
//   function makeTaskHtml(task){
//     //   let li = `<div class="task-line"><div style="display: flex; align-items: center;"><button id="check"><i class="far fa-circle"></i></button><div style="font-size:  1.2vmax; margin-left: 10px;">${task}</div></div><div><div style="display: flex; align-items: center;"><div style="margin-right: 20px; font-size:  1.2vmax;">Wednesday, April 20 23:10</div><button id="bookmark"><i class="far fa-bookmark"></i></button></div></div></div>`
//   }
