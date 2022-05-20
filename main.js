const cards = document.querySelectorAll('.card')

const buttons = document.querySelectorAll('.btn')

let jsonData;
fetch('./data.json')
    .then(response => {
         return response.json()
    })
    .then(data => {
        console.log(data);
        jsonData = data
    })

buttons.forEach((btn,index)=>{
    btn.addEventListener('click', (e)=>{
        let duration = e.target.id;
        
        cards.forEach((element, index) => {
            let card = element.classList[1];
            let data = jsonData[index]

            let timeframeElement = element.querySelector('h2')
            let prevtimeElement = element.querySelector('span.last')

            timeframeElement.innerText = data.timeframes[duration].current + 'hrs'
            prevtimeElement.innerText = `Last ${duration} - ${data.timeframes[duration].previous}hrs`
        })
    })
})
