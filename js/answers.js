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
// datatype: string

const spaceshipParts = ['hull', 'laser blasters', 'tractor beam', 'warp drive'];

// 4. A list of student names from our class.
// datatype: string;

const studentNames = ['Nate', 'Alex', 'Amanda', 'Sergio', 'Patrick'];

// 5. A list of student names from our class, each with a location.
// datatype: string;

const studentNameAndLocation = [['Nate', 'Conference Room'], ['Alex', 'Kitchen'], ['Amanda', 'Home']];

// 6. A list of student names from our class, each with a location and each with a list of favorite tv shows.
// datatype: string

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