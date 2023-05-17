

function getDaysBetweenDates(dateFirst, dateSecond = new Date()) {
    console.log(dateFirst, dateSecond);
    const date1 = new Date(dateFirst);
    return (dateSecond - date1) / (1000 * 60 * 60 * 24);
}

function hoursToDecimal(time) {
  return time.seconds / 3600 + time.minutes / 60 + time.hours;
}

function decimalToHours(time, RoundTo = 2) {
  const minutes = (time - Math.floor(time)) * 60;
  const seconds = (minutes - Math.floor(minutes)) * 60;

  return {
    hours: Math.floor(time),
    minutes: Math.floor(minutes),
    seconds: +seconds.toFixed(RoundTo),
  };
}

function timeFormatCheck(time) {
  if (
    typeof time === 'object' &&
    'hours' in time &&
    'minutes' in time &&
    'seconds' in time
  ) {
    return hoursToDecimal(time);
  }
  if (!isNaN(+time)) {
    // !!! Добавить рекурсию !!!
    if (time > 24) {
      return time - 24;
    } else if (time < 0) {
      return time + 24;
    } else {
      console.log(`Возврат time = ${time}`);
      return time;
    }
  }
  console.log('Ошибка ввода');
  return;
}

const time = { hours: 6, minutes: 31, seconds: 25 };

function greenwichMeanTimeToGreenwichSiderealTime(time) {
  console.log('Перевод гринвичского среднего времени GST в гринвичское звёздное время GMT');
  console.log(`Переданное время ${time}`);
  const timeDecimal = timeFormatCheck(time);
  console.log(timeDecimal);
  if (timeDecimal === undefined) {
    console.log('Ошибка ввода');
    return;
  }
}

greenwichMeanTimeToGreenwichSiderealTime(time);
