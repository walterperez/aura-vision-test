import { dateFormater } from './dateFormarter';

describe('Date Formater', () => {
  it('Pass a valid string Date', () => {
    let validDate = '2019-06-01T10:25:00Z';
    let result = dateFormater(validDate);
    expect(result).toBe('1 of June');
  });
});
