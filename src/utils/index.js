import { daysMap } from '../constants';

export const getStartOfMonth = (year, month) => new Date(year, month).getDay();

export const getMonthNumberOfDays = (year, month) => {
  const daysDifferenceNextMonth = new Date(year, month, 40).getDate();
  return 40 - daysDifferenceNextMonth;
};

export const getDayDetails = ({
  index,
  firstDay,
  month,
  year,
  numberOfDays,
}) => {
  const date = index - firstDay;
  const day = index % 7;
  let prevMonth = month - 1;
  let prevYear = year;
  if (prevMonth < 0) {
    prevMonth = 11;
    prevYear -= 1;
  }
  const prevMonthNumberOfDays = getMonthNumberOfDays(prevYear, prevMonth);
  const _date = (date < 0 ? prevMonthNumberOfDays + date : date % numberOfDays) + 1;
  const belongingMonth = date < 0 ? -1 : date >= numberOfDays ? 1 : 0;
  const timestamp = new Date(year, month, _date).getTime();
  return {
    date: _date,
    day,
    belongingMonth,
    timestamp,
    dayString: daysMap[day],
  };
};

export const getMonthDetails = (year, month) => {
  const firstDay = getStartOfMonth(year, month);
  const numberOfDays = getMonthNumberOfDays(year, month);
  const monthArray = [];
  const rows = 6;
  let currentDay = null;
  let index = 0;
  const cols = 7;

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      currentDay = this.getDayDetails({
        index,
        numberOfDays,
        firstDay,
        year,
        month,
      });
      monthArray.push(currentDay);
      index += 1;
    }
  }
  return monthArray;
};
