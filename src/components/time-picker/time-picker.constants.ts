export const TIME_HASH_MAP = {
  in_the_morning: {
    min: 5,
    max: 11,
  },
  at_lunch: {
    min: 11,
    max: 15,
  },
  after_work: {
    min: 15,
    max: 24,
  },
};

export const timeString12hr = (timeFromDatePicker: Date) => {
  const hours = timeFromDatePicker.getHours();
  const minutes = timeFromDatePicker.getMinutes();
  const timeString = `${hours < 10 ? '0' + hours : hours}:${
    minutes === 0 ? '00' : minutes < 10 ? '0' + minutes : minutes
  }:00`;

  let time = timeString.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [timeString];

  if (time.length > 1) {
    time = time.slice(1);
    time.pop();
    time[5] = +time[0] < 12 ? ' AM' : ' PM';
    if (time[0] !== '12') {
      time[0] = `${+time[0] % 12}`;
    }
  }
  return time.join('');
};
