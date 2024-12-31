function add(numbers) {
  // Separate numbers using delimiters
  let num_array = getNumbersFromString(numbers);
  
  // Convert the string numbers to integers and calculate the sum
  let sum = num_array.reduce((acc, x) => acc + parseInt(x), 0);
  console.log(sum)
  // Return the sum
  return sum; 
}

add("2\n,2,3");

function getNumbersFromString(numbers) {
	// Clean the string
  let cleanedStr = numbers.replace(/\n/g, '');

  // Split the string based on commas to extract individual number strings
  let num_array = cleanedStr.split(",");
  
  return num_array;
}
