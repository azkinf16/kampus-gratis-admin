import { TFilteredCalendar } from '../../types';
import { selector } from 'recoil';
import { dashboardDataState } from '../atoms/dashboard';

export const limitedCalendarState = selector<Array<Date>>({
  key: 'three-week-limit',
  get: () => {
    const dateTimeArray: Date[] = [];

    const today = new Date();
    const startDate = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

    for (let i = 0; i < 21; i++) {
      const currentDate = new Date(
        startDate.getTime() + i * 24 * 60 * 60 * 1000
      );
      currentDate.setHours(0, 0, 0, 0);
      dateTimeArray.push(currentDate);
    }

    return dateTimeArray;
  },
});

export const filteredCalendarState = selector<Array<TFilteredCalendar>>({
  key: 'filter-calendar-by-limited-calendar-state',
  get: ({ get }) => {
    const limitedCalendar = get(limitedCalendarState);
    const dashboardData = get(dashboardDataState);
    const newCalendarForm: Array<TFilteredCalendar> = [];

    limitedCalendar?.forEach((lim, i) => {
      const filteredCalendarByDate = dashboardData?.calendar?.filter((cal) => {
        const startAt = new Date(cal?.startAt);
        const endAt = new Date(cal?.endAt);

        return lim >= startAt && lim <= endAt;
      });

      const calendarObj: TFilteredCalendar = {
        date: lim,
        items: filteredCalendarByDate,
      };

      newCalendarForm.push(calendarObj);
    });

    return newCalendarForm;
  },
});
