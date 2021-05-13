// define the months and weeks names arrays
const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday"
];

// define the dom elements......
const promo = document.querySelector("#promo");
const deadlineCon = document.querySelector(".deadlineFormat");
const timeLeft = document.querySelectorAll(".deadlineTime");

// define the year,months and date
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
// Note--->months are ZERO index based;
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// define the futureDate = new Date(year, month, date/day, hours, mins, secs);
const futureDate = new Date(tempYear, tempMonth, tempDay + 03, 11, 30, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
promo.textContent = `promo ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

// define function to get remaining time

function getRemaindingTime() {
  const futureTime = futureDate.getTime();
  const today = new Date().getTime();

  const duration = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // values in miliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate the values days, hours, mins and secs left
  let days = duration / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((duration % oneDay) / oneHour);
  let minutes = Math.floor((duration % oneHour) / oneMinute);
  let seconds = Math.floor((duration % oneMinute) / 1000);

  // set values array on the count time containers
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  timeLeft.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  // check if the duration has expired
  if (duration < 0) {
    clearInterval(countdown);
    timeCont.innerHTML = `<h5 class="expired">Sorry, this promo has expired!<br>
     it ends on ${futureDate}</h5>`;
  }
}
// countdown in every seconds;
let countdown = setInterval(getRemaindingTime, 1000);
//set initial values
getRemaindingTime();