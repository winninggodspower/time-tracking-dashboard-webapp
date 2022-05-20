const cards = document.querySelectorAll('.card')

const buttons = document.querySelectorAll('.btn')

const timeRef = {
    daily : "Yesterday",
    weekly : "Last Week",
    monthly : "Last Month" ,
}

let jsonData;
fetch('./data.json')
    .then(response => {
         return response.json()
    })
    .then(data => {
        console.log(data);
        jsonData = data
    })

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
        // document.querySelector('.active').classList -= 'active'
        e.target.classList += ' active'
        ChangeTimeDuration(duration)
    })
})

// window.onload = ChangeTimeDuration('weekly')