// DATATYPES

// 1. A light switch that can be either on or off.
// datatype: boolean

const lightSwitch = {
	isOn: true,
}

// 2. A user's email address.
// datatype: string

const userInfo = {
	email: 'example@fake.com',
}

// 3. A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// datatype: object

const spaceshipParts = ['hull', 'laser blasters', 'tractor beam', 'warp drive'];

// 4. A list of student names from our class.
// datatype: array

const studentNames = ['Nate', 'Alex', 'Amanda', 'Sergio', 'Patrick'];

// 5. A list of student names from our class, each with a location.
// datatype: array of objects

const studentNameAndLocation = [
	{name: 'Nate', location: 'Conference Room',},
	{name: 'Alex', location: 'Kitchen',},
	{name: 'Amanda', location: 'Home',}
]

// 6. A list of student names from our class, each with a location and each with a list of favorite tv shows.
// datatype: array of objects

const studentInfo = [
	{name: 'Alex', location: 'Conference Room', favoriteShows: ['cool show 1', 'cool show 2'],},
	{name: 'Amanda', location: 'Home', favoriteShows: ["Timeless", "Handmaid's Tale"],}
];

console.log(studentInfo[1].name);
console.log(studentInfo[1].location);
console.log(studentInfo[1].favoriteShows);





// TAKE IT EASY

// 1. Make an array that holds all of the colors of the rainbow.

const colorsOfRainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

console.log(colorsOfRainbow);

// 2. Write code that will access "blue" from the rainbow array.

colorsOfRainbow[4];

console.log(colorsOfRainbow[4]);

// 3. Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.

const amanda = {
	favoriteFood: 'tacos',
	hobby: 'homebrewing',
	currentTown: 'Highlands Ranch aka unincorporated Douglas County',
	favoriteDatatype: 'booleans',
}

console.log(amanda);

// 4. Write code that will access your hobby from the object that you just created. 

amanda.hobby;

console.log(amanda.hobby);





// CRAZY OBJECT!

const crazyObject = {
  taco: [{meat: 'steak',
         cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
        ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [{
      name: "Jeff",
      occupation: "manager"
    },
    {
      name: "funkhauser",
      occupation: "tv dude"
    },
    {
      name: "susie",
      occupation: "jeffs wife",
      favourtieHobby: "Swearing at Larry and Jeff"
    },
    ]
  }
}

// Use crazy Object to log the following.

// 1. "omg my mouth is burning"

console.log(crazyObject.taco[1].salsa[5]);

// 2. "Pretty pretty prettayyyyy good"

console.log(crazyObject.larry.quotes[0]);

// 3. "Swearing at Larry and Jeff"

console.log(crazyObject.larry.characters[2].favourtieHobby);

// 4. "Chicken Teriyaki Boyyyyyy"

console.log(crazyObject.larry.nicknames[1]);

// 5. The object the contains the name funkhauser

console.log(crazyObject.larry.characters[1]);





// OBJECT-CEPTION

const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}


inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;

console.log(inception);





// BOND FILMS

const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];

// Yikes. Well, copy the bondFilms array of objects above into your js file. Use for loops and conditionals and methods in order to complete the below:

// Create a new array called bondTitles with only the titles of the Bond films, and console.log the new array.

const bondTitles = [];

for (let i = 0; i < bondFilms.length; i++) {
	bondTitles.push(bondFilms[i].title);
}

console.log(bondTitles);

// Create a new array oddBonds, of only the Bond films released on odd-numbered years.

const oddBonds = [];

for (let i = 0; i < bondFilms.length; i++) {
	if (bondFilms[i].year % 2 === 1) {
		oddBonds.push(bondFilms[i].year);
	}
}

console.log(oddBonds);

// Determine the total cumulative gross of the Bond franchise, and console.log the result. hint To make the grosses into usable numbers, look into the .replace Javascript method (there are many ways to do this, however). Look into parseInt also.

let cumulativeGross = 0;

for (let i = 0; i < bondFilms.length; i++) {
	bondFilms[i].gross = bondFilms[i].gross.replace(/\$/, "");
	bondFilms[i].gross = bondFilms[i].gross.replace(/,/g, "");
	bondFilms[i].gross = parseInt(bondFilms[i].gross, 10);
	cumulativeGross += bondFilms[i].gross; 
}

console.log(bondFilms);

console.log(cumulativeGross); // --> 13821621224


// OR

// Ryan showed us the following approach on Wednesday morning.

// let moneyList = [];

// for (let i = 0; i < bondFilms.length; i++) {
//   let gross = bondFilms[i].gross;
//   console.log(bondFilms[i].gross);
//   moneyList.push(gross);
// }

// const changeStringToNum = (numString) => {
//   let result = '';
//   for (let i = 0; i < numString.length; i++) {
//     if (!isNaN(numString[i])) {
//       result += numString[i];
//     }
//   }
//   result = parseInt(result);
//   return result;  
// }

// let goodMoneyList = [];

// for (let i = 0; i < moneyList.length; i++) {
//   let goodMoney = changeStringToNum(moneyList[i]);
//   goodMoneyList.push(goodMoney);
// }

// console.log(goodMoneyList);
// let sum = 0;

// for (let i = 0; i < goodMoneyList.length; i++) {
//   sum += goodMoneyList[i];
// }

// console.log(sum); // --> 13821621224




// HUNGRY FOR MORE?

// bondFilms again!

// Console log the single movie object that contains the actor who starred in the least number of films

