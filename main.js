const h2 = document.querySelector("h2");

const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  
  // for(let i = 0; i < companies.length; i++) {
  //   console.log(companies[i]);
  // }
  
  // forEach
  
  // companies.forEach(function(company) {
  //   console.log(company.name);
  // });
  
  //  ----- FILTER - FILTER ANY STATEMENT THAT IS TRUE
  
  // -------Get 21 and older-------
  
  // let canDrink = [];
  // for(let i = 0; i < ages.length; i++) {
  //   if(ages[i] >= 21) {
  //     canDrink.push(ages[i]);
  //   }
  // }
  
//   const canDrink = ages.filter(function(age) {
//     if(age >= 21) {
//       return true;
//     }
//   });

//   const cantDrink = ages.filter(age => age < 21);

//   console.log(cantDrink);

//   ------filter all retail companies------

// ES5
// const retailCompanies = companies.filter(function(company) {
//     if(company.category === "Retail") {
//         return true;
//     }
// })

// ES6 - arrow functions
// const retailCompanies = companies.filter(company => company.category === "Retail");

// console.log(retailCompanies);

// -----companies from the 80's----

// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start <= 1990));

// console.log(eightiesCompanies);

// ----companies longer than 10 years

// const tenYearCompanies = companies.filter(company => (company.end - company.start >= 10));

// console.log(tenYearCompanies);

// ----- MAP ------- 
// create array of company names 

// ES5
// const companyNames = companies.map(function(company) {
//     return company.name;
// })

// ES6
// const companyNames = companies.map(company => company.name);

// console.log(companyNames);

// square root of every nunber in ages array

// const agesSquare = ages.map(age => Math.sqrt(age));

// console.log(agesSquare);

// ------- SORT --------

// sort companies by start year
// ES5
// const sortedCompanies = companies.sort(function(company1, company2) {
//      if(company1.start > company2.start) {
//          return 1;
//      } else {
//          return -1;
//      }
// });

// ES6
// const sortedCompanies = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1));

// console.log(sortedCompanies);

//  sort ages

const sortAges = ages.sort((ages1, ages2) => ages2 - ages1);
h2.innerText = sortAges;

// console.log(sortAges);


// ------- REDUCE --------
// for loop example
// let ageSum = 0;
//  for( let i = 0; i < ages.length; i++) {
//      ageSum += ages[i];
//  };

//  const ageSum = ages.reduce((total, age) => total + age, 0);

//  console.log(ageSum)

// get total years for all companies
// ES5
// const totalCompanyYears = companies.reduce(function(total, company) { 
//     return total + (company.end - company.start);
// }, 0);

// ES6
// const totalCompanyYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

// console.log(totalCompanyYears);

// Combine Methods

// multiply all ages by 2 and filter those that are over 40 after you multiply them 
// then sort them from highest to lowest
// then use reduce to add the sum
// const combined = ages
//     .map(age => age * 2)
//     .filter(age => age > 40)
//     .sort((age1, age2) => age2 - age1)
//     .reduce((total, age) => total + age, 0);

// h2.innerText = combined;

// console.log(combined);