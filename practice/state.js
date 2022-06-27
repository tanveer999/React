const date = new Date()

console.log(date)

const hours = date.getHours()
console.log(hours)

function greeting(name) {
    let timeOfDay
    if(hours >= 4 && hours < 12) {
        timeOfDay = "morning"
    } else if(hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else if(hours >= 17 && hours < 20) {
        timeOfDay = "evening"
    } else {
        timeOfDay = "night"
    }

    console.log(`Good ${timeOfDay}, ${name}`)
}

greeting("Bob")