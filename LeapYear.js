function findLeapYears(startYear, endYear) {
  let leapYears = [];

  for (let year = startYear; year <= endYear; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      leapYears.push(year);
    }
  }

  return leapYears;
}

// Example usage:
let startYear = 2000;
let endYear = 2024;
let leapYearsInRange = findLeapYears(startYear, endYear);
console.log(`Leap years between ${startYear} and ${endYear}:`, leapYearsInRange);
