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
    isDone: false,
    taskText: "test",
    time: "2020/12/12 13:20",
    dateSplit: {
      year: 0,
      month: 0,
      day: 0,
      hour: 0,
      min: 0,
    },
    isBookmark: false,
  },
];

function plus() {
  let addNewTaskText = document.getElementById("task-text").value;
  let newTaskDateAndTime = document.getElementById("dateAndTime").value;
  let isDone, taskText, time, isBookmark, dateSplit;

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
    let taskDate = newTaskDateAndTime.split("T");

    let date = new Date(
      taskDate[0].split("-")[0],
      taskDate[0].split("-")[1],
      taskDate[0].split("-")[2],
      taskDate[1].split(":")[0],
      taskDate[1].split(":")[1]
    );

    time = `${findWeekDay(date.getDay())}, ${findmonth(date.getMonth())} ${
      taskDate[0].split("-")[2]
    } ${taskDate[1].split(":")[0]}:${taskDate[1].split(":")[1]}`;

    dateSplit = {
      year: taskDate[0].split("-")[0],
      month: taskDate[0].split("-")[1],
      day: taskDate[0].split("-")[2],
      hour: taskDate[1].split(":")[0],
      min: taskDate[1].split(":")[1],
    };
  }
}

function bookmark() {}

//   function makeTaskHtml(task){
//     //   let li = `<div class="task-line"><div style="display: flex; align-items: center;"><button id="check"><i class="far fa-circle"></i></button><div style="font-size:  1.2vmax; margin-left: 10px;">${task}</div></div><div><div style="display: flex; align-items: center;"><div style="margin-right: 20px; font-size:  1.2vmax;">Wednesday, April 20 23:10</div><button id="bookmark"><i class="far fa-bookmark"></i></button></div></div></div>`
//   }
