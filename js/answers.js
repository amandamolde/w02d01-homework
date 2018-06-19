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