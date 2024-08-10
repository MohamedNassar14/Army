const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const freedomDay = document.querySelector('#freedom');
const allArmyPeriod = document.querySelectorAll('#army-period');




const eidDate = new Date('Dec 1 2024').getTime();

const countDown = setInterval( ()=> 
{
    const today = new Date().getTime();

    const differenceDate = eidDate - today;

    const daysDate = Math.floor(differenceDate / (1000 * 60 * 60 * 24));

    const hoursDate = Math.floor(differenceDate % (1000 * 60 * 60 * 24) / ( 1000 * 60 * 60 ));

    const minutesDate = Math.floor(differenceDate % (1000 * 60 * 60 ) / ( 1000 * 60));
    
    const secondsDate = Math.floor(differenceDate % (1000 * 60 ) / 1000)  ;
    
    days.innerHTML = daysDate;
    hours.innerHTML = hoursDate;
    minutes.innerHTML = minutesDate;
    seconds.innerHTML = secondsDate;

    if (differenceDate < 0)
    {
        clearInterval(countDown);
        allArmyPeriod.forEach((armyDays)=>
        {
            armyDays.style.display = 'none';
        })
        freedomDay.innerHTML = 'العيــــــــــــــــــــــــــد';
    }

}, 1000)

window.addEventListener('load', ()=>
{
    allArmyPeriod.forEach((box)=>
    {
        box.classList.add('show');
    })
})

