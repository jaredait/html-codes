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
const empty = Subject('', '#');
// Programacion orientada a objetos
const poo = Subject('Programación Orientada a objetos', '#');
// Redes II
const redes = Subject('Redes II', 'https://puce.zoom.us/j/88232797247');
// Base de datos
const baseDatos = Subject('Base de Datos', 'https://puce.zoom.us/j/89874957717?pwd=MTJHWFJ5czVTREJKbitNOWIydFNuQT09');
// Ing del software
const ingSoftware = Subject('Ingeniería del Software', 'https://puce.zoom.us/j/81824074567');
// Filosofia de ciancias computacionales
const filosofia = Subject('Filosofía de Ciencias Computacionales', '#');
// Infraestructura de TI
const infraestructuraTuesday = Subject('Infraestructura de TI', 'https://puce.zoom.us/j/85381938231');
const infraestructuraThursday = Subject('Infraestructura de TI', 'https://puce.zoom.us/j/84008889220');


function addSubjectsToSchedule(){
    // Monday
    week.monday.push(empty);
    week.monday.push(poo);
    week.monday.push(baseDatos);
    // Tuesday
    week.tuesday.push(ingSoftware);
    week.tuesday.push(infraestructuraTuesday);
    week.tuesday.push(redes);
    week.tuesday.push(filosofia);
    // Wednesday
    week.wednesday.push(redes);
    week.wednesday.push(poo);
    week.wednesday.push(baseDatos);
    week.wednesday.push(filosofia);
    // Thursday
    week.thursday.push(ingSoftware);
    week.thursday.push(infraestructuraThursday);
    week.thursday.push(redes);
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
    
    const subLink = document.createElement('a');
    subLink.appendChild(subCard);

    if(subject.subZoomUrl !== '#'){
        subLink.href = subject.subZoomUrl;
        subLink.classList = 'subject-link';
        subLink.target = '_blank';
    }
    else {
        subCard.classList = 'empty-link';
    }   
    
    // append the card to the day
    const currentDay = document.querySelector(`#${day}`);
    currentDay.appendChild(subLink);
}

// Driver code
createSubjects();
addSubjectsToSchedule();
displaySchedule();