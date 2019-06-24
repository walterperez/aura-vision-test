function dateFormater(dateToFormat) {
  let date = new Date(dateToFormat);
  let DateWithoutMinutes = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );

  return DateWithoutMinutes.toString();
}

module.exports = dateFormater;
