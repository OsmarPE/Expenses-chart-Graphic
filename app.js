const items = document.querySelectorAll('.graphic__item')

const num = [
    {n:2},
    {n:3},
    {n:4},
]

fetch('data.json')
.then(res => res.json())
.then(data => {
    const numbers = data.map(d => d.amount)
    const max = Math.max(...numbers)
    data.forEach( ({day,amount},index) => {
        items[index].children[0].style.height = `${amount * 2}px`
        items[index].children[1].textContent = day
        items[index].children[2].textContent = `$${amount}`
        if (amount === max) {
            console.log(max);
            items[index].firstElementChild.classList.add('max')
        }
    });
})




