function isArrayLengthOdd(numbers) {
  const sizeOfArray = numbers.length;

  if (sizeOfArray % 2) {
    return true;
  } else {
    return false;
  }
}

console.log(isArrayLengthOdd([1, 2, 3, 4]));

function isArrayLengthEven(numbers) {
  if (numbers.length % 2) {
    return false;
  } else {
    return true;
  }
}
console.log(isArrayLengthEven([1, 2, 3, 4]));



console.log(isArrayLengthEven([1, 2, 3, 4]));

function addLailaToArray(instructors) {
      copy array instructors

    const newInstructors = instructors;
    add "Laila " to array
    newInstructors.push("Laila");
    return new array 
    return newInstructors;

}
 console.log(addLailaToArray(["Mishary","Hasan"])) 


function eliminateTeam(teams) {
    remove last element from teams
 
   const teams.pop();
    return teams;
    return lastTeams;
    
}
console.log(eliminateTeam(["Brazil","Germany","Italy"]));
