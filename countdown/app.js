const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
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
  "December",
];

const giftText = document.querySelector(".gift");
const deadline = document.querySelector(".deadline");
const counters = document.querySelectorAll(".deadline-format h4");

console.log(counters);

const currentDate = new Date();
const tempYear = currentDate.getFullYear();
const tempMonth = currentDate.getMonth();
const tempDay = currentDate.getDate();

let comingDate = new Date(tempYear, tempMonth, tempDay + 10, 16, 15, 0);
// let comingDate = new Date(2023, 6, 27, 16, 15, 0);
const year = comingDate.getFullYear();
const hours = comingDate.getHours();
const minutes = comingDate.getMinutes();
let month = comingDate.getMonth();
const day = comingDate.getDate();
let weekDay = comingDate.getDay();
month = months[month];
weekDay = days[weekDay];
console.log(month);
giftText.textContent = `Free Course registeration ends on ${weekDay}, ${day} ${month} ${year} ${hours}:${minutes}am`;

/* *********************** Future Date *******************************
get the milli seconds of future date and current date and subtract them.
*/

// time in ms
const timeInMs = comingDate.getTime();
console.log("Future ms", timeInMs);

// get the difference
function remainingTime() {
  // put the dates iside the function so that every time we have different value while calling setInterval()
  const today = new Date();
  const todayInMs = today.getTime();
  console.log("today ms", todayInMs);
  const timeDiff = timeInMs - todayInMs;
  // console.log("milli seconds difference", timeDiff);
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSecond = 1000;
  let days = timeDiff / oneDay;
  days = Math.floor(days);
  /* converting back to whole numbers
  remainder of Math.floor(oneDay) will be exact day remaining here.
  remainder of (timeDiff % oneDay) will total number of hour remaining here
  remainder of (timeDiff % oneHour)  will be total number of minutes
  remainder of (timeDiff % oneMinute) will total number number of seconds
  */
  const hours = Math.floor((timeDiff % oneDay) / oneHour);
  const minutes = Math.floor((timeDiff % oneHour) / oneMinute);
  const seconds = Math.floor((timeDiff % oneMinute) / oneSecond);
  // console.log(days, hours, minutes, seconds);
  // get the remaining time
  values = [days, hours, minutes, seconds];
  // format the values if they are less than 10
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }
  // set the remaining time to each counter using forEach() method, we have access to indices as well
  counters.forEach(function (counter, index) {
    counter.innerHTML = format(values[index]);
  });
  if (timeDiff < 0) {
    deadline.innerHTML = `<h4>The deadline has finished</h4>`;
  }
}
// how many time we want to call our remaining function to avoid every time refreshing the page to see the remaining time
let countDown = setInterval(remainingTime, 100);

remainingTime();
