const { isAfter, isBefore } = require("date-fns");
function validateDate(userData) {
  const formattedDate = userData.split("/");
  const day = parseInt(`${formattedDate[0]}`);
  const month = parseInt(`${formattedDate[1]}`);
  const year = parseInt(`${formattedDate[2]}`);
  const inputDate = new Date(year, month, day);

  return validate(isAfter, inputDate) && !validate(isBefore, inputDate);
}
function validate(fun, inputDate) {
  return fun(inputDate, new Date());
}
module.exports = validateDate;
