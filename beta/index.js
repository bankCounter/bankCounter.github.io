function obj (displayName, cost, type, spelled) {
        this.displayName    =   displayName;
        this.cost           =   cost;
        this.type           =   type;
        this.spelled        =   spelled;
}

const data            =      [
    ['00.50', '02.00', '05.00','10.00', '00.01', '00.05', '00.10', '00.25', '01.00', '05.00', '10.00', '20.00', '50.00', '100.0'],
    [.5, 2, 5, 10,0.01,0.05,0.1,0.25,1,5,10,20,50,100],
    ['roll','roll','roll','roll','coin','coin','coin','coin','cash','cash','cash','cash','cash','cash',],
    ['penny-roll','nickle-roll','dime-roll','quarter-roll','penny','nickle','dime','quarter','one','five','ten','twenty','fifty','hundred']
]

const objs            =   []

for (let a = 0; a < data[0].length; a++) {

    objs[a]         =   new obj(data[0][a], data[1][a], data[2][a], data[3][a])
}
let sumArray      =   (array) => 
                        array.reduce((accumulator, number) => 
                        number + accumulator, 0
)                      

const inputData       =   [1,1,1,1,1,1,0,0,1,1,1,0,0,0]

const totalData         =   
[
{       display:    'Total-Roll',
        array:      sumArray(inputData.slice(0,4)),
},
{       display:    'Total-Coin',
        array:      sumArray(inputData.slice(4,8)),
},
{       display:    'Total-Cash',
        array:      sumArray(inputData.slice(8,13))
},
{      display:    'Total',
        array:      sumArray(inputData),
},
]
console.log(totalData[0].array)
console.log(totalData[1].array)
console.log(totalData[2].array)

console.log(totalData[3].array)


const container     =   document.querySelector('#container')
const totalContainer    =   document.querySelector('#total-container')

for (let b = 0; b < 4; b++) {
    
    let div4        =   document.createElement('div')
    let span6       =   document.createElement('span')
    let span7       =   document.createElement('span')

    span7.id    =   totalData[b].display

    span6.innerHTML =   totalData[b].display
    span7.innerHTML =   totalData[b].array
    
    div4.appendChild(span6)
    div4.appendChild(span7)
    
    totalContainer.appendChild(div4)
    
}


for (let a = 0; a < 14; a++) {
    
    const div1     =   document.createElement('div')
    const div2     =   document.createElement('div')
    const inputel   =   document.createElement('input')
    const aside     =   document.createElement('aside')
    const span1     =   document.createElement('span')
    const span2     =   document.createElement('span')
    const span3     =   document.createElement('span')
    const objsa     =   objs[a]

    inputel.setAttribute('type', 'number')
    inputel.setAttribute('pattern', '[0-9]*')
    inputel.setAttribute('inputmode', 'decimal')

    div1.innerHTML =    objsa.displayName
    div2.appendChild(inputel)

    span1.innerHTML =   objsa.spelled
    span2.innerHTML =   objsa.cost + ' x ' + inputel.value
    span3.innerHTML =   ' = ' + (inputel.value*objsa.cost).toFixed(2)*1
    
    aside.appendChild(span1)
    aside.appendChild(span2)
    aside.appendChild(span3)
    
    container.appendChild(aside)
    container.appendChild(div1)
    container.appendChild(div2)

    let div3        =   document.createElement('div')
    let span4       =   document.createElement('span')
    let span5       =   document.createElement('span')

    span4.innerHTML =   objsa.spelled
    span5.innerHTML =   '000'

    div3.appendChild(span4)
    div3.appendChild(span5)
    totalContainer.appendChild(div3)
    
    inputel.addEventListener('focusin', function(){
        
        this.select()
        aside.style.display =   'inline-block'
        span2.innerHTML =   objsa.cost + ' x ' + inputel.value
        span3.innerHTML =   ' = $' + (inputel.value*objsa.cost).toFixed(2)*1
    })
    inputel.addEventListener('input', function(){
        
        span2.innerHTML =   data[1][a] + ' x ' + inputel.value
        let product      =   ' = $' + (inputel.value*objsa.cost).toFixed(2)*1
        span3.innerHTML =   product
        span5.innerHTML =   inputel.value

        inputData[a]    =   (inputel.value*objsa.cost).toFixed(2)*1

        console.log(inputData)

        let totalRoll   =   document.querySelector('#Total-Roll')
        let totalCoin   =   document.querySelector('#Total-Coin')
        let totalCash   =   document.querySelector('#Total-Cash')
        let BankTotal   =   document.querySelector('#Total')

        totalRoll.innerHTML =   sumArray(inputData.slice(0,4))
        totalCoin.innerHTML =   (sumArray(inputData.slice(4,8))).toFixed(2)*1
        totalCash.innerHTML =   sumArray(inputData.slice(8,13))
        BankTotal.innerHTML =   sumArray(inputData)

    })

    inputel.addEventListener('focusout', function(){
        aside.style.display =   'none'
    })
}

