// ES6 let and const
let name = "Kobb Civic Center"; // let allows re-assignment within its scope
const location = "Enugu"; // const is block-scoped and cannot be re-assigned

console.log(`Name: ${name}`);
console.log(`Location: ${location}`);

// Arrow Function
const greet = (person) => `Welcome to ${person}`;
console.log(greet(name));

// Array methods (map, filter, reduce, forEach)
const events = [
  { name: "Wedding", attendees: 200, type: "private" },
  { name: "Conference", attendees: 500, type: "corporate" },
  { name: "Birthday Party", attendees: 100, type: "private" },
  { name: "Workshop", attendees: 300, type: "corporate" },
];

// Using forEach to log each event
console.log("Event Details (forEach):");
events.forEach((event) =>
  console.log(`${event.name} with ${event.attendees} attendees`)
);

// Using map to create an array of event names
const eventNames = events.map((event) => event.name);
console.log("Event Names (map):", eventNames);

// Using filter to get private events
const privateEvents = events.filter((event) => event.type === "private");
console.log("Private Events (filter):", privateEvents);

// Using reduce to calculate total attendees
const totalAttendees = events.reduce(
  (total, event) => total + event.attendees,
  0
);
console.log("Total Attendees (reduce):", totalAttendees);

// Object manipulation
const civicCenter = {
  name: "Kobb Civic Center",
  location: "Enugu",
  capacity: 1000,
  getInfo() {
    return `${this.name} located in ${this.location} can hold up to ${this.capacity} people.`;
  },
};

console.log(civicCenter.getInfo());
