import * as utils from './index';
import { DAYS_OF_WEEK, MONTHS_OF_THE_YEAR } from '../constants';

describe('getStartOfMonth()', () => {
  it('Should return first day of the week', () => {
    const firstDayOfMonth = utils.getStartOfMonth(1991, MONTHS_OF_THE_YEAR.MAY);
    expect(firstDayOfMonth).toBe(DAYS_OF_WEEK.WEDNESDAY);
  });
});

describe('getMonthNumberOfDays()', () => {
  it('Should return number of days of given month', () => {
    const numberOfDays = utils.getMonthNumberOfDays(1991, MONTHS_OF_THE_YEAR.MARCH);
    expect(numberOfDays).toBe(31);
  });

  it('Should return 29 days for February in a leap-year', () => {
    const numberOfDays = utils.getMonthNumberOfDays(2020, MONTHS_OF_THE_YEAR.FEBRUARY);
    expect(numberOfDays).toBe(29);
  });

  it('Should return 28 days for February in a normal-year', () => {
    const numberOfDays = utils.getMonthNumberOfDays(1997, MONTHS_OF_THE_YEAR.FEBRUARY);
    expect(numberOfDays).toBe(28);
  });
});

describe('getDayDetails()', () => {
  it('Should get full details of a day inside a month calendar', () => {
    const dayDetails = utils.getDayDetails({
      index: 6,
      month: MONTHS_OF_THE_YEAR.MARCH,
      firstDay: DAYS_OF_WEEK.FRIDAY,
      numberOfDays: 31,
      year: 1991,
    });
    expect(dayDetails).toMatchObject({
      date: 2,
      day: DAYS_OF_WEEK.SATURDAY,
      belongingMonth: 0,
      dayString: 'Saturday',
    });
  });
});
