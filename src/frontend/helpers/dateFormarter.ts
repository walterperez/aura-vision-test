export function dateFormater(dateToFormat: string): string {
  let date: Date = new Date(dateToFormat);
  let monthsNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  let month = monthsNames[date.getMonth()];
  let newDate = `${date.getDate()} of ${month}`;
  return newDate;
}
