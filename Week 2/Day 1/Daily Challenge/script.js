// Exercise 1
// Remove Banana from the array.
// Sort the array in alphabetical order.
// Add “Kiwi” to the end of the array.
// Remove “Apples” from the array. Don’t use the same method as in part 1.
// Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
// At the end you should see this outcome:

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.shift()
fruits.sort()
fruits.push('Kiwi')
fruits.shift()
fruits
fruits.reverse()
console.log(fruits)

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1][0])