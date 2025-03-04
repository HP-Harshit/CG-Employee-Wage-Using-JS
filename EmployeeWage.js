// UC1 - Ability to Check Employee is Present or Absent

// Constant to represent employee absence
const IS_ABSENT = 0;

// Generate a random number to simulate employee check
let empCheck = Math.floor(Math.random() * 10) % 2;

// Check if the employee is absent or present
if (empCheck === IS_ABSENT) {
  console.log("Employee is absent");
} else {
  console.log("Employee is present");

  // UC2 - Ability to Calculate Daily Employee Wage based on part-time or full-time work

  // Constants to represent part-time and full-time work
  const IS_PART_TIME = 1;
  const IS_FULL_TIME = 2;
  const PART_TIME_HOURS = 4;
  const FULL_TIME_HOURS = 8;
  const WAGE_PER_HOUR = 20;

  // UC3 - Refactor the Code to write a function to get work hours

  function getWorkingHours(empCheck) {
    switch (empCheck) {
      case IS_PART_TIME:
        return PART_TIME_HOURS;
      case IS_FULL_TIME:
        return FULL_TIME_HOURS;
      default:
        return 0;
    }
  }

  // UC6 - Store the Daily Wage along with the Total Wage

  function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
  }

  const MAX_HRS_IN_MONTH = 160;
  const NUM_OF_WORKING_DAYS = 20;
  let totalEmpHrs = 0;
  let totalWorkingDays = 0;
  let empDailyWageArr = [];

  while (
    totalEmpHrs <= MAX_HRS_IN_MONTH &&
    totalWorkingDays < NUM_OF_WORKING_DAYS
  ) {
    totalWorkingDays += 1;
    empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
  }

  let totalEmpWage = calcDailyWage(totalEmpHrs);
  console.log("Total Days: " + totalWorkingDays + " Total Hrs: " +
totalEmpHrs + " Total Emp Wage: " + totalEmpWage );
  console.log("Daily Wages: " + empDailyWageArr);

  // UC7 - Use the Daily Wage Array to perform various operations using Array Helper Functions

  // UC 7A: Calculate total Wage using Array forEach traversal or reduce method
  totalEmpWage = 0;
  empDailyWageArr.forEach((dailyWage) => (totalEmpWage += dailyWage));
  console.log(
    "Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Emp Wage: " + totalEmpWage);

  function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
  }
  console.log("Emp Wage with reduce: " + empDailyWageArr.reduce(totalWages, 0));

  // UC 7B: Show the Day along with Daily Wage using Array map helper function
  let dailyCounter = 0;
  function mapDayWithWage(dailyWage) {
    dailyCounter++;
    return dailyCounter + " = " + dailyWage;
  }
  let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
  console.log("Daily Wage Map:");
  console.log(mapDayWithWageArr);

  // UC 7C: Show Days when Full time wage of 160 were earned
  function fulltimeWage(dailyWage) {
    return dailyWage === 160;
  }
  let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
  console.log("Daily Wage Filter When Fulltime Wage Earned:");
  console.log(fullDayWageArr);

  // UC 7D: Find the first occurrence when Full Time Wage was earned using find function
  function findFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
  }
  console.log("First time Fulltime wage was earned on Day: " +
      mapDayWithWageArr.find(findFulltimeWage)
  );

  // UC 7E: Check if Every Element of Full Time Wage is truly holding Full time wage
  function isAllFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
  }
  console.log("Check All Element have Full Time Wage: " +
      fullDayWageArr.every(isAllFulltimeWage)
  );

  // UC 7F: Check if there is any Part Time Wage
  function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
  }
  console.log("Check If Any Part Time Wage: " +
      mapDayWithWageArr.some(isAnyPartTimeWage)
  );

  // UC 7G: Find the number Of days the Employee Worked
  function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) return numOfDays + 1;
    return numOfDays;
  }
  console.log("Number of Days Emp Worked: " +
      empDailyWageArr.reduce(totalDaysWorked, 0)
  );
}
