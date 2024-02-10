// E1
var user = {
  name: `Dilshodbek`,
  surname: `Makhmudov`,
  age: 25,
};

// To create
user["full name"] = `${user.name} ${user.surname}`;

user.nationality = `Uzbekistan`;

user["Current city"] = `South Korea, Daejeon`;

user.nickname = `David`;

var hobby = "traveling";
user.hobby = `${hobby}`;
// console.log(user);

// To update
user.age = 26;

// To delete
delete user["Current city"];

console.log(user);

// E2
// var shopping = {
//   beef: {
//     count: 4,
//     price: 12000,
//   },
//   lamb: {
//     count: 4,
//     price: 13000,
//   },
// };

// To create
// shopping.chicken = {
//   count: 4,
//   price: 9000,
// };

// To delete
// delete shopping.beef;

// console.log(shopping);

// E3,4

// var people = {
//   person1: {
//     name: "Dilshodbek",
//     age: 25,
//     gender: "Male",
//   },
//   person2: {
//     name: "Maqsadbek",
//     age: 25,
//     gender: "Male",
//   },
//   person3: {
//     name: "Ahad",
//     age: 25,
//     gender: "Male",
//   },
// };
// Method1
// console.log(Object.entries(people.person1));

// M2
// var n = Object.keys(people);

// for (let i = 0; i < n.length; i++) console.log(n[i], people[n[i]]);

// M3
// var n = Object.keys(people.person1);

// for (let i = 0; i < n.length; i++) console.log(n[i], people.person1[n[i]]);

// M4
// var entries = Object.entries(people.person1);

// for (let i = 0; i < entries.length; i++)
// console.log(entries[i][0], entries[i][1]);

// M5
// var entries = Object.entries(people.person1);
// var i = 0;

// while (i < entries.length) {
//   console.log(entries[i][0], entries[i][1]);
//   i++;
// }

// Method6

// var entries = Object.entries(people.person1);
// var i = 0;

// do {
//   console.log(entries[i][0], entries[i][1]), i++;
// } while (i < entries.length);

// E5
// var bank = {
//   humo: {
//     balance: 20.0,
//   },
//   uzcard: {
//     balance: 15.0,
//   },
// };
// var balance = Object.values(bank.humo);
// var withdrawal = 5.0;

// if ("balance - withdrawal") {
//   console.log(balance);
// } else console.log("Error");

// for (let i = 0; i < balance.length; i++) {
//   i -= withdrawal;
//   console.log(balance);
// }
