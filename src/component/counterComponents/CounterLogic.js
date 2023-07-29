import dayjs from "dayjs";

export const getRemainingTimeStampMs = (timeStampMs) => {
     const timeStamp = dayjs(timeStampMs);
     const currentTimeStamp = dayjs();

     return {
          hours: getRemainingHours(currentTimeStamp, timeStamp),
          minutes: getRemainingMinutes(currentTimeStamp, timeStamp),
          seconds: getRemainingSeconds(currentTimeStamp, timeStamp),
     };
};

//Three functions to get the remaining seconds , hours and minutes

const getRemainingSeconds = (currentTimeStamp, timeStamp) => {
     // diff function will the seconds remaining
     const seconds = timeStamp.diff(currentTimeStamp, "seconds") % 60;
     return padWithZero(seconds);
};

const getRemainingMinutes = (currentTimeStamp, timeStamp) => {
     // diff function will the minute remaining
     const minutes = timeStamp.diff(currentTimeStamp, "minutes") % 60;
     return padWithZero(minutes);
};

const getRemainingHours = (currentTimeStamp, timeStamp) => {
     // diff function will the hoursremaining
     const hours = timeStamp.diff(currentTimeStamp, "hours");
     return padWithZero(hours);
};

const padWithZero = (num) => {
     if (num == 0) {
          return "00";
     }

     if (num < 10) {
          return "0" + num;
     }

     return num;
};
