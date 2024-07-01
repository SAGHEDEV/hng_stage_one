const daySpan = document.querySelector("#today");
const timeSpan = document.querySelector("#time");

const getTodaysDate = () => {
  let today = new Date();

  let todayDay = today.getDay();
  let todayTime = today.getTime();
  let hour = today.getUTCHours();
  let minute = today.getUTCMinutes();
  let second = today.getUTCSeconds();

  const dayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  hour = hour > 12 ? hour - 12 : hour;
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;

  daySpan.textContent = dayList[todayDay];
  timeSpan.textContent = hour + ":" + minute + ":" + second;
};

setInterval(() => {
  getTodaysDate();
}, 1000);
