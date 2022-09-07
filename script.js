// Selection from DOM
const $ = document;
// Select clock
const clockSelector = $.querySelector("#clock");

// Select wakeup time selector
const wakeUpTimeSelector = $.getElementById("wakeUpTimeSelector");

// Select lunch time selector
const lunchTimeSelector = $.getElementById("lunchTimeSelector");

// Select nap time selector
const napTimeSelector = $.getElementById("napTimeSelector");

// Select party time button
const partyTimeButton = $.getElementById("partyTimeButton");

// Select image Item
const imgSelector = $.getElementById("lolcatImage");

// Select time event message selector
const timeEventSelector = $.getElementById("timeEvent");

let wakeUpTime = 7;
let lunchTime = 12;
let napTime = lunchTime + 2;
let noon = 12;
let evening = 18;
let meridian = "AM";
let partyTime;

// show current time in clock selector
let showTime = () => {
  const now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  // Set hour
  hour = hour > noon ? hour - 12 : hour;
  meridian = hour >= noon ? "PM" : meridian;

  minute = minute < 10 ? "0" + minute : minute;

  second = second < 10 ? "0" + second : second;

  clock.innerHTML = `${hour}:${minute}:${second} ${meridian}!`;
};

function updateEvent() {
  let src;
  let eventMessage;
  // get current time
  const currentTime = new Date().getHours();

  if (currentTime == partyTime) {
    src =
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    eventMessage = "Let's party!";
  } else if (currentTime == wakeUpTime) {
    src =
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    eventMessage = "Wake up!";
  } else if (currentTime == lunchTime) {
    src =
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    eventMessage = "Let's have some lunch!";
  } else if (currentTime == napTime) {
    src =
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    eventMessage = "Sleep tight!";
  } else if (currentTime == evening) {
    src = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
    eventMessage = "Good evening!";
  } else {
    src =
      "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    eventMessage = "Good afternoon!";
  }

  // Set correct image
  imgSelector.setAttribute("src", src);

  // Set correct message
  timeEventSelector.innerHTML = eventMessage;
  showTime();
}

updateEvent();
setInterval(updateEvent, 1000);

// Set wake up time by selector
let setwakeupTime = (e) => {
  wakeUpTime = e.target.value;
};
wakeUpTimeSelector.addEventListener("change", setwakeupTime);

// Set wake up time by selector
let setLunchTime = (e) => {
  lunchTime = e.target.value;
};
lunchTimeSelector.addEventListener("change", setLunchTime);

// Set wake up time by selector
let setNapTime = (e) => {
  napTime = e.target.value;
};
napTimeSelector.addEventListener("change", setNapTime);

// Set party time by clik on party time button
let setPartyTime = () => {
  if (partyTime < 0) {
    partyTime = new Date().getHours();
    partyTimeButton.style.backgroundColor = "#0A8DAB";
    partyTimeButton.innerHTML = "party over!";
  } else {
    partyTime = -1;
    partyTimeButton.style.backgroundColor = "#222";
    partyTimeButton.innerHTML = "party time!";
  }
};
partyTimeButton.addEventListener("click", setPartyTime);
setPartyTime();
