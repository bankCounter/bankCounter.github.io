let     denomination        =   [
{
    name:       '00.50',
    spelled:    'penny-roll',
    type:       'roll',
    rate:       .5,
    array:  0,
    sumArray:   0,
},
{
    name:       '02.00',
    spelled:    'nickle-roll',
    type:       'roll',
    rate:       2,
    array:  1,
    sumArray:   0,
},
{
    name:       '05.00',
    spelled:    'dime-roll',
    type:       'roll',
    rate:       5,
    array:  2,
    sumArray:   0,
},
{
    name:       '10.00',
    spelled:    'quarter-roll',
    type:       'roll',
    rate:       10,
    array:  3,
    sumArray:   0,
},
{
    name:       '00.01',
    spelled:    'penny',
    type:       'coin',
    rate:       .01,
    array:  0,
    sumArray:   1,
},
{
    name:       '00.05',
    spelled:    'nickle',
    type:       'coin',
    rate:       .05,
    array:  1,
    sumArray:   1,
},
{
    name:       '00.10',
    spelled:    'dime',
    type:       'coin',
    rate:       .10,
    array:  2,
    sumArray:   1,
},
{
    name:       '00.25',
    spelled:    'quarter',
    type:       'coin',
    rate:       .25,
    array:  3,
    sumArray:   1,
},
{
    name:       '01.00',
    spelled:    'one',
    type:       'cash',
    rate:       1,
    array:  0,
    sumArray:   2,
},
{
    name:       '05.00',
    spelled:    'five',
    type:       'cash',
    rate:       5,
    array:  1,
    sumArray:   2,
},
{
    name:       '10.00',
    spelled:    'ten',
    type:       'cash',
    rate:       10,
    array:  2,
    sumArray:   2,
},
{
    name:       '20.00',
    spelled:    'twenty',
    type:       'cash',
    rate:       20,
    array:  3,
    sumArray:   2,
},
{
    name:       '50.00',
    spelled:    'fifty',
    type:       'cash',
    rate:       50,
    array:  4,
    sumArray:   2,
},
{
    name:       '100.00',
    spelled:    'hundred',
    type:       'cash',
    rate:       100,
    array:  5,
    sumArray:   2,
},
]

let     array               =   {

    array:      [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0]],
    total:  0
}

let     total               =   [
{
    name:       'deposit',
    total:      '0'
},
{
    name:       'total',
    total:      sumArr(array.array[3]),
},
{
    name:       'roll',
    total:      sumArr(array.array[0]),
},
{
    name:       'coin',
    total:      sumArr(array.array[1]),
},
{
    name:       'cash',
    total:      sumArr(array.array[2]),
},
]

let theader                 =   document.getElementById('table-calculate-header')
let example                 =   document.getElementById('table-calculate-calculate')
let exaAnswer               =   document.getElementById('table-calculate-answer')
let loanInput               =   document.getElementById('loan-input')

function sumArr(arr) {
    
    let sum               =   0

    for (let a = 0; a < arr.length; a++) {

        const b = arr[a];
        sum  +=   b
    }
    sum         =   sum.toFixed(2)*1
    return sum
}

for (let a = 0; a < total.length; a++) {

    const b = total[a];

    let tbody               =   document.getElementById('table-total-tbody')
    let tr                  =   document.createElement('tr')
    let tdL                 =   document.createElement('td')
    let tdR                 =   document.createElement('td')

    tdL.classList.add(b.name)
    tdR.classList.add('denomination')
    tdR.id                  =   b.name + '-total'
    
    tdL.innerHTML           =   b.name
    tdR.innerHTML           =   b.total
    
    tr.appendChild(tdL)
    tr.appendChild(tdR)
    tbody.appendChild(tr)
    
}

for (let a = 0; a < denomination.length; a++) {
    
    const b                 = denomination[a];
    
    let tbody               =   document.getElementById('tbody')
    let tr                  =   document.createElement('tr')
    let tdL                 =   document.createElement('td')
    let tdR                 =   document.createElement('td')
    let denInput            =   document.createElement('input')
    let totalTd             =   document.getElementById(b.type + '-total')
    
    tr.id                  =   b.name + 'Tr'
    tr.classList.add(b.type)
    tdL.classList.add('denomination')
    
    tdL.innerHTML           =   `<label for="${b.spelled}-input">${b.name}`

    denInput.setAttribute('id', `${b.spelled}-input`)
    denInput.setAttribute('name', b.spelled)
    denInput.setAttribute('type', 'number')
    denInput.setAttribute('pattern', '[0-9]{3}')
    denInput.setAttribute('placeholder', b.type)
    denInput.setAttribute('tab-index', a+1)
    denInput.setAttribute('required', '')

    tr.appendChild(tdL)
    tdR.appendChild(denInput)
    tr.appendChild(tdR)
    tbody.appendChild(tr)
    
    denInput.addEventListener('click', function(){
        this.select()
    })
    denInput.addEventListener('focus', function(){
        
        this.select()
        this.scrollIntoView({behavior:'smooth',block:'start',inline:'nearest'})

        let answer          =   b.rate*denInput.value
        product             =   answer.toFixed(2) * 1

        theader.innerHTML   =   b.spelled
        example.innerHTML   =   `${b.rate} x ${denInput.value}`
        exaAnswer.innerHTML =   product
        
        array.array[b.sumArray][b.array]    =   product

        let sum             =   sumArr(array.array[b.sumArray])


        totalTd.innerHTML   =   sum

        array.array[3][b.sumArray]      =   sum


        array.total        =   sumArr(array.array[3])


        document.getElementById('total-total').innerHTML    =   array.total


        let fixedSum  =   array.total-loanInput.value

        fixedSum            =   fixedSum.toFixed(2)*1

        document.getElementById('deposit-total').innerHTML  =   fixedSum
    })
    
    denInput.addEventListener('input', function () {
        
        let product         =   b.rate*denInput.value

        example.innerHTML   =   `${b.rate} x ${denInput.value}`
        exaAnswer.innerHTML =   product
        
        array.array[b.sumArray][b.array]    =   product

        let sum             =   sumArr(array.array[b.sumArray])


        totalTd.innerHTML   =   sum

        array.array[3][b.sumArray]      =   sum


        array.total        =   sumArr(array.array[3])


        document.getElementById('total-total').innerHTML    =   array.total


        let fixedSum  =   array.total-loanInput.value

        fixedSum            =   fixedSum.toFixed(2)*1

        document.getElementById('deposit-total').innerHTML  =   fixedSum
        
    })

    denInput.addEventListener('focusout', function () {
        theader.innerHTML   =   'bank counter'
        example.innerHTML   =   'calculate here'
        exaAnswer.innerHTML =   'answer here'
    })

}

loanInput.addEventListener('focus', function () {
    this.select()
})
loanInput.addEventListener('input', function () {
    let deposit             =   0
    deposit                 =   array.total-loanInput.value
    deposit                 =   deposit.toFixed(2)*1
    document.getElementById('deposit-total').innerHTML    =   deposit
})

function display_ct7() {
    let x = new Date()
    let ampm = x.getHours( ) >= 12 ? 'PM' : 'AM';
    hours = x.getHours( ) % 12;
    hours = hours ? hours : 12;
    hours=hours.toString().length==1? 0+hours.toString() : hours;
    
    let minutes=x.getMinutes().toString()
    minutes=minutes.length==1 ? 0+minutes : minutes;
    
    let seconds=x.getSeconds().toString()
    seconds=seconds.length==1 ? 0+seconds : seconds;
    
    let month=(x.getMonth() +1).toString();
    month=month.length==1 ? 0+month : month;
    
    let dt=x.getDate().toString();
    dt=dt.length==1 ? 0+dt : dt;
    
    let x1=month + "/" + dt + "/" + x.getFullYear(); 
    x1 = x1 + ` ${hours}:${minutes}:${seconds}${ampm}`;
    document.getElementById('dateHtml').innerHTML = `--${x1}--`;
    display_c7();
     }
function display_c7(){
    let refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct7()',refresh)
    }
display_c7()


