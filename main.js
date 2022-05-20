const cards = document.querySelectorAll('.card')
const buttons = document.querySelectorAll('.btn')
const weekLink = document.getElementById('weekly')

let activeClass;

const timeRef = {
    daily : "Yesterday",
    weekly : "Last Week",
    monthly : "Last Month" ,
}

let jsonData;
const request = async () => {
    const response = await fetch('./data.json');
    const json = await response.json();
    jsonData = json
}
request();
console.log(jsonData);

function ChangeTimeDuration(duration) {
    cards.forEach((element, index) => {
        let card = element.classList[1];
        let data = jsonData[index]

        let timeframeElement = element.querySelector('h2')
        let prevtimeElement = element.querySelector('span.last')

        timeframeElement.innerText = data.timeframes[duration].current + 'hrs'
        prevtimeElement.innerText = `${timeRef[duration]} - ${data.timeframes[duration].previous}hrs`
    })
}

buttons.forEach((btn,index)=>{
    btn.addEventListener('click', (e)=>{
        let duration = e.target.id;
        handleClass(e.target)
        ChangeTimeDuration(duration)
    })
})

handleClass(weekLink)
window.onload = ChangeTimeDuration('weekly')

function handleClass(newActiveLink){
    if(activeClass){
        activeClass.classList.remove('active')
    }
    newActiveLink.classList += ' active';
    activeClass = newActiveLink
}