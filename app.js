function add(numbers) {
  // Separate numbers using delimiters
  let num_array = getNumbersFromString(numbers);
  
  // Convert the string numbers to integers and calculate the sum
  let sum = num_array.reduce((acc, x) => acc + parseInt(x), 0);
  
  // Return the sum
  return sum; 
}

add("1,2,3");

function getNumbersFromString(numbers) {
  // Split the string based on commas to extract individual number strings
  let num_array = numbers.split(",");
  return num_array;
}
