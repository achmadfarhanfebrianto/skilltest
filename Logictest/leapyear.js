// 1904, 1908, 1912, 1916, 1920, 1924, 1928, 1932, 1936, 1940, 1944, 
// 1948, 1952, 1956, 1960, 1964, 1968, 1972, 1976,1980, 1984, 1988, 1992, 1996, 
// 2000, 2004, 2008, 2012, 2016, 2020

function leapYearArr(awal, akhir) {
  let result = [];
  while (awal < akhir) {
    awal = awal + 4;
    result.push(awal);
  }
  console.log(result);
}

leapYearArr(1900, 2020);