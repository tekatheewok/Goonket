function isLeapYear(year) {
    if (year%4==0 & year%100 !== 0 & year%400==0){
        console.log(year + "is a leap year.")
    }
    return year + " is not a leap year."
}