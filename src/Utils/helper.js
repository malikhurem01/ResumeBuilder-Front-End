const hyphenationCallback = word => {
  return [word];
};

const factorDate = (date, includesDay) => {
  let [year, month, day] = date.split('-');
  let monthName;
  switch (month) {
    case '01':
      monthName = 'Jan';
      break;
    case '02':
      monthName = 'Feb';
      break;
    case '03':
      monthName = 'Mar';
      break;
    case '04':
      monthName = 'Apr';
      break;
    case '05':
      monthName = 'May';
      break;
    case '06':
      monthName = 'June';
      break;
    case '07':
      monthName = 'July';
      break;
    case '08':
      monthName = 'Aug';
      break;
    case '09':
      monthName = 'Sep';
      break;
    case '10':
      monthName = 'Oct';
      break;
    case '11':
      monthName = 'Nov';
      break;
    case '12':
      monthName = 'Dec';
      break;
    default:
      monthName = 'UNDEFINED';
  }
  let string;
  if (includesDay) {
    let suffix;
    switch (day[day.length - 1]) {
      case '1':
        suffix = 'st';
        break;
      case '2':
        suffix = 'nd';
        break;
      case '3':
        suffix = 'rd';
        break;
      default:
        suffix = 'th';
    }

    if (String(day[0]) === '0') day = day.substr(1, day.length - 1);
    string = `${monthName} ${day + suffix} ${year}`;
  } else {
    string = `${monthName} ${year}`;
  }
  return string;
};

const utils = {
  hyphenationCallback,
  factorDate
};

module.exports = utils;
