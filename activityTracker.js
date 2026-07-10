// GitHub link:

// --- WEEKLY DATA ---
let myWeek = [
    {day: "Sunday", activity: "Watching Anime", category: "Entertainment", hoursSpent: 3, enjoyment: 7, timeOfDay: "Afternoon"},
    {day: "Monday", activity: "Programming", category: "Education", hoursSpent: 4, enjoyment: 5, timeOfDay: "Morning"},
    {day: "Tuesday", activity: "Figure Drawing", category: "Creative", hoursSpent: 4, enjoyment: 6, timeOfDay: "Afternoon"},
    {day: "Wednesday", activity: "Playing Video Games", category: "Entertainment", hoursSpent: 3, enjoyment: 7, timeOfDay: "Evening"},
    {day: "Thursday", activity: "Figure Drawing", category: "Creative", hoursSpent: 4, enjoyment: 8, timeOfDay: "Afternoon"},
    {day: "Friday", activity: "Watching Anime", category: "Entertainment", hoursSpent: 3, enjoyment: 9, timeOfDay: "Evening"},
    {day: "Saturday", activity: "Jogging", category: "Physical", hoursSpent: 1, enjoyment: 5, timeOfDay: "Evening"}
]

// --- PREDICTIONS ---
// Which activity will have the highest enjoyment?
    // Looking at my scoring, I think watching anime will have the highest enjoyment score since it's an activity I do with friends.
// What category will dominate my week?
    // Entertainment is the dominant category.
// What patterns might exist around time of day?
    // It looks like most activities are done in the afternoon and evening.

// --- ANALYSIS FUNCTIONS ---

// --- FILTER BASED ON CATEGORY ---
function filterBasedOnCategory(category, weekData) {
    return weekData.filter(entry => entry.category === category);
}

//let selectedCategory = window.prompt("What category would you like to filter by? (Entertainment, Education, Creative, Physical)");
let selectedCategory = "Entertainment";
console.log(filterBasedOnCategory(selectedCategory, myWeek));

// --- HOURS SPENT ON GIVEN ACTIVITY ---
function hoursSpentOnActivity(weekData, activity) {
    return weekData.filter(entry => entry.activity === activity).reduce((totalHours, entry) => totalHours + entry.hoursSpent, 0);
}

let selectedActivity = "Watching Anime";
console.log("I spent " + hoursSpentOnActivity(myWeek, selectedActivity) + " hours " + selectedActivity + " this week.");

// --- HOURS SPENT ON PHYSICAL ACTIVITIES ---
function hoursPhysicalActivities(weekData) {
    // Filtering weekData for physical activities... then accumulating hours spent on those activities using reduce.
    return weekData.filter(entry => entry.category === "Physical").reduce((totalHours, entry) => totalHours + entry.hoursSpent, 0);
}

// --- ENJOYMENT BY TIME OF DAY ---
function enjoymentByTimeOfDay(weekData) {
    return weekData.reduce((totalHours, entry) => totalHours + entry.hoursSpent, 0);
}

// --- CUSTOM HIGHER-ORDER FUNCTION ---
console.log(enjoymentByTimeOfDay(myWeek.filter(entry => entry.timeOfDay === "Afternoon")));


// --- NOTES ---
// map – transform each element
//[1, 2, 3].map(n => n * 2); // [2, 4, 6]

// filter – keep matching elements
//[1, 2, 3, 4].filter(n => n % 2 === 0); // [2, 4]

// reduce – combine into one value
//[1, 2, 3].reduce((sum, n) => sum + n, 0); // 6