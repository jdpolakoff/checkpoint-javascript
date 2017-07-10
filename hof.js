// NOTE: Make sure to use the `var` keyword for ALL variable declarations

var people = [
  {name: 'Jane', age: 32},
  {name: 'Jessica', age: 34},
  {name: 'Jasmine', age: 39}
]

// Use the `map` array method to create a new array containing the ages of each
// person in the `people` array. Assign the returned array to a variable
// called `peoplesAges`.

var getAges = function () {
  var person = people[i]
  return person.age
}

function map (people, getAges) {
  var peoplesAges = []
  for (i = 0; i < people.length; i++) {
    peoplesAges.push(getAges(person))
    return peoplesAges
  }
}

people.map(getAges)
// Use the `filter` array method to create a new, filtered array containing only
// persons from the `people` array who are older than 35. Assign the returned array
// to a variable called `peopleOlderThan35`.

var filterAge = function () {
  return people.age > 35
}

function filter (people, filterAge) {
  var olderThan35 = []
  for (i = 0; i < people.length; i++) {
    if (filterAge(people[i])) {
      olderThan35.push(people[i])
    }
  }
}
