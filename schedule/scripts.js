let week = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
}

// Subject factory function
let Subject = (subName, subZoomUrl, days) =>{
    return {subName, subZoomUrl}
}

function createSubjects(){
    /*
    const poo = Subject('Programación Orientada a objetos', 'WWW', ['monday', 'wednesday', 'friday']);
    const poo = Subject('Redes II', 'WWW');
    const poo = Subject('Ingeniería del Software', 'WWW');
    const poo = Subject('Filosofía de las ciencias computacionales', 'WWW');
    const poo = Subject('Infraestructura de TI', 'WWW');
    const poo = Subject('Base de Datos I', 'WWW');
    */
}

// Create the subjects per day (some of them have different url)
// Empty
const empty = Subject('', '');
// Programacion orientada a objetos
const poo = Subject('Programación Orientada a objetos', 'www');
// Redes II
const redesTuesday_Thursday = Subject('Redes II', 'www');
const redesWednesday = Subject('Redes II', 'www');
// Base de datos
const baseDatos = Subject('Base de Datos', 'www');
// Ing del software
const ingSoftware = Subject('Ingeniería del Software', 'www');
// Filosofia de ciancias computacionales
const filosofia = Subject('Filosofía de Ciencias Computacionales', 'www');
// Infraestructura de TI
const infraestructura = Subject('Infraestructura de TI', 'www');


function addSubjectsToSchedule(){
    // Monday
    week.monday.push(empty);
    week.monday.push(poo);
    week.monday.push(baseDatos);
    // Tuesday
    week.tuesday.push(ingSoftware);
    week.tuesday.push(infraestructura);
    week.tuesday.push(redesTuesday_Thursday);
    week.tuesday.push(filosofia);
    // Wednesday
    week.wednesday.push(redesWednesday);
    week.wednesday.push(poo);
    week.wednesday.push(baseDatos);
    week.wednesday.push(filosofia);
    // Thursday
    week.thursday.push(ingSoftware);
    week.thursday.push(infraestructura);
    week.thursday.push(redesTuesday_Thursday);
    //Friday
    week.friday.push(ingSoftware);
    week.friday.push(poo);
    week.friday.push(baseDatos);
}

// function that traverses the week and creates the card to display on the schedule
function displaySchedule(){
    for(let day in week){
        for(let i = 0; i < week[day].length; i++){
            createCard(week[day][i], day);
        }
    }
}

// function that creates a new html element, asign the subject's properties and appends it to its proper day in the schedule
function createCard(subject, day){
    const subCard = document.createElement('div');
    subCard.textContent = subject.subName;
    subCard.dataset.url = subject.subZoomUrl;
    subCard.classList = 'subject';

    const hlink = document.createElement('a');
    hlink.appendChild(subCard);
    hlink.href = subject.subZoomUrl;
    hlink.classList = 'subject-link';
    
    // append the card to the day
    const currentDay = document.querySelector(`#${day}`);
    currentDay.appendChild(hlink);
}

// Driver code
createSubjects();
addSubjectsToSchedule();
displaySchedule();