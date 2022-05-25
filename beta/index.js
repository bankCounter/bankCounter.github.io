function obj (displayName, cost, type, spelled) {
        this.displayName    =   displayName;
        this.cost           =   cost;
        this.type           =   type;
        this.spelled        =   spelled;
}

let data            =      [
    ['00.50', '02.00', '05.00','10.00', '00.01', '00.05', '00.10', '00.25', '01.00', '05.00', '10.00', '20.00', '50.00', '100.0'],
    [.5, 2, 5, 10,0.01,0.05,0.1,0.25,1,5,10,20,50,100],
    ['roll','roll','roll','roll','coin','coin','coin','coin','cash','cash','cash','cash','cash','cash',],
    ['penny-roll','nickle-roll','dime-roll','quarter-roll','penny','nickle','dime','quarter','one','five','ten','twenty','fifty','hundred']
]

let objs            =   []

for (let a = 0; a < data[0].length; a++) {

    objs[a]         =   new obj(data[0][a], data[1][a], data[2][a], data[3][a])
}
let sumArray      =   (array) => 
                        array.reduce((accumulator, number) => 
                        number + accumulator, 0
)

let inputAmount     =   [0,0,0,0,0,0,0,0,0,0,0,0,0,0]

// let loan            =   document.querySelector('#loan-input').value

let divHeader       =   document.querySelector('#header')
let divInput        =   document.querySelector('#input')
let divTotal        =   document.querySelector('#total')
let inputHeader  =   document.querySelector('#input-header')

let inputTable      =   document.createElement('table')
inputTable.id       =   'inputTable'
let headerTable     =   document.createElement('table')
headerTable.id      =   'headerTable'

let thead           =   document.createElement('thead')
let tr              =   document.createElement('tr')
let h1              =   document.createElement('th')
let h2              =   document.createElement('th')

h1.innerHTML        =   'amount'
h2.innerHTML        =   'denomination'
h1.id               =   'amount'
h2.id               =   'denomination'
tr.appendChild(h1)
tr.appendChild(h2)
thead.appendChild(tr)
headerTable.appendChild(thead)

let tbody       =   document.createElement('tbody')
inputTable.appendChild(tbody)

inputHeader.appendChild(headerTable)
divInput.appendChild(inputTable)

let calculate   =   document.querySelector('#amount')      
let answer      =   document.querySelector('#denomination') 

let divfooter       =   document.querySelector('#footer')
let tableReceipt    =   document.createElement('table')
tableReceipt.id     =   'receipt'
divfooter.appendChild(tableReceipt)

let counter0    =   0
let counter1    =   1
let counter2    =   2
let counter3    =   3

for (let a = 0; a < 7; a++) {
    
    let rTr         =   document.createElement('tr')
    let rTd1        =   document.createElement('td')
    let rTd2        =   document.createElement('td')
    let rTd3        =   document.createElement('td')
    let rTd4        =   document.createElement('td')
    let b           =   a * 2
    
    rTr.classList.add(objs[b].type)

    rTd1.id         =   objs[b].spelled
    rTd2.id         =   objs[b].spelled + '-input-value'
    rTd3.id         =   objs[counter1].spelled
    rTd4.id         =   objs[counter1].spelled + '-input-value'
    
    counter1 += 2
    counter2 += 2
    counter3 += 2
    rTr.appendChild(rTd1)
    rTr.appendChild(rTd2)
    rTr.appendChild(rTd3)
    rTr.appendChild(rTd4)

    tableReceipt.appendChild(rTr)
    
}


for (let a = 0; a < objs.length; a++) {
    
    const b = objs[a];
    
    let tr          =   document.createElement('tr')
    let tdR         =   document.createElement('td')
    let tdL         =   document.createElement('td')
    let input       =   document.createElement('input')
    
    input.setAttribute('id', b.spelled + '-input')
    input.setAttribute('name', b.spelled)
    input.setAttribute('placeholder', b.type)
    input.setAttribute('type', 'text')
    input.setAttribute('pattern', '[0-9]{3}')
    
    tdL.appendChild(input)
    tdR.innerHTML   =   `<label for="${b.displayName}-input">${b.displayName}`
    
    tr.appendChild(tdL)
    tr.appendChild(tdR)
    tbody.appendChild(tr)

    // receipt table
    let eleId       =   b.spelled
    let eleIdInput  =   b.spelled + '-input-value'
    let rTd1        =   document.getElementById(eleId)
    let rTd3        =   document.getElementById(eleIdInput)
    
    rTd1.innerHTML  =   b.spelled
    rTd3.innerHTML  =   0
    
    input.addEventListener('click', function(){
        
        this.select()
        let product         =   (b.cost*input.value).toFixed(2)*1
        divHeader.innerHTML =   b.spelled
        calculate.innerHTML =   `${input.value} x ${b.cost}`
        answer.innerHTML    =   product
        
    })
    input.addEventListener('focus', function(){
        
        this.select()
        this.scrollIntoView()
        let product         =   (b.cost*input.value).toFixed(2)*1
        divHeader.innerHTML =   b.spelled
        calculate.innerHTML =   `${input.value} x ${b.cost}`
        answer.innerHTML    =   product

    })
    input.addEventListener('input', function(){
        
        let product         =   (b.cost*input.value).toFixed(2)*1
        answer.innerHTML    =   product
        inputAmount[a]      =   product
        let rollSum         =   sumArray(inputAmount.slice(0,4)).toFixed(2)*1
        let coinSum         =   sumArray(inputAmount.slice(4, 8)).toFixed(2)*1
        let cashSum         =   sumArray(inputAmount.slice(8, 14)).toFixed(2)*1
        let totalBank       =   sumArray(inputAmount).toFixed(2)*1
        calculate.innerHTML =   `${input.value} x ${b.cost}`
        divHeader.innerHTML =   b.spelled
        
        
        divTotal.innerHTML  =   `Total= ${totalBank} roll= ${rollSum} coin= ${coinSum} cash= ${cashSum}`
        console.log(inputAmount)
        let eleId       =   b.spelled
        let eleIdInput  =   b.spelled + '-input-value'
        let rTd1        =   document.getElementById(eleId)
        let rTd3        =   document.getElementById(eleIdInput)
        
        rTd1.innerHTML  =   b.spelled
        rTd3.innerHTML  =   input.value
    })
    
    input.addEventListener('focusout', function(){

        divHeader.innerHTML =   'bank counter'
        calculate.innerHTML =   'amount'
        answer.innerHTML    =   'denomination'
    })
    
}


