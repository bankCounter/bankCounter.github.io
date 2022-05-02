const   pennyRolls      =   document.getElementById('pennyRoll')
const   nickleRolls     =   document.getElementById('nickleRoll')
const   dimeRolls       =   document.getElementById('dimeRoll')
const   quarterRolls    =   document.getElementById('quarterRoll')
const   rollsBtn        =   document.getElementById('rollsBtn')
const   rollHtml        =   document.getElementById('rollHtml')
let     arrRolls        =   [0]
let     sumRolls        =   0
const   penny           =   document.getElementById('penny')
const   nickle          =   document.getElementById('nickle')
const   dime            =   document.getElementById('dime')
const   quarter         =   document.getElementById('quarter')
const   coinHtml        =   document.getElementById('coinHtml')
let     arrCoin         =   [0]
let     sumCoin         =   0
const   one             =   document.getElementById('one')
const   five            =   document.getElementById('five')
const   ten             =   document.getElementById('ten')
const   twenty          =   document.getElementById('twenty')
const   fifty           =   document.getElementById('fifty')
const   hundred         =   document.getElementById('hundred')
const   billHtml        =   document.getElementById('billHtml')
let     arrBill         =   [0]
let     sumBill         =   0
const   bankHtml        =   document.getElementById('bankHtml')
let     arrBank         =   [0]
let     sumBank         =   0
const   loanHtml        =   document.getElementById('loanHtml')
const   depositHtml     =   document.getElementById('depositHtml')
const   loanInput       =   document.getElementById('loanInput')
const   dateHtml        =   document.getElementById('dateHtml')
function multiplyRender(el, mul, arr, ind, sum, html, f, sum2){
        el.addEventListener("focusout", function() {
        el.className = 'noBorder'
            let total = el.value * mul;
            arr[ind] = total;
        for (let i = 0; i < arr.length; i++){
            sum = sum + arr[i]}
        html.innerHTML = `$${sum}`
        arrBank[f] = sum
        for (let i = 0; i < arrBank.length; i++){
            sum2 = sum2 + arrBank[i]}
        bankHtml.innerHTML = `$${sum2}`
        let deposit = sum2 - loanInput.value
        deposit = deposit.toFixed(2) * 1
        depositHtml.innerHTML = `$${deposit}`
        sum2 = 0
        sum = 0
        })}
function displayDateTime(){
    let x = new Date()
    let ampm = x.getHours() >= 12 ? 'PM' : 'AM';
    
    let x1= x.getMonth() + 1 + '/' + x.getDate() + '/' + x.getFullYear();

    x1 = x1 + ' - ' + x.getHours() + ':' + x.getMinutes() + ':' + x.getSeconds() + '(' + ampm + ')';

    dateHtml.innerHTML = `----- ${x1} -----`
    refresh()
}
function refresh(){
    let time = 1000
    mytime = setTimeout('displayDateTime()', time)
}
function loanRenderDeposit(el){
    el.addEventListener('focusout', function(){
        el.className = 'noBorder'
        sumBank = 0
        for (let i = 0; i < arrBank.length; i++){
            sumBank = sumBank + arrBank[i]
        }
        let total = sumBank - el.value
        total = total.toFixed(2) * 1
        depositHtml.innerHTML = `$${total}`
        sumBank = 0
    })
}

function borderless(){
    let obj = document.getElementsByTagName('input')
    if (obj.value != '') {
        obj.className = 'borderless'
    }
}
console.log(document.getElementsByTagName('input'))
borderless()
loanRenderDeposit(loanInput)
displayDateTime()
multiplyRender(pennyRolls, 0.5, arrRolls, 0, sumRolls, rollHtml, 0, sumBank)
multiplyRender(nickleRolls, 2, arrRolls, 1, sumRolls, rollHtml, 0, sumBank)
multiplyRender(dimeRolls, 5, arrRolls, 2, sumRolls, rollHtml, 0, sumBank)
multiplyRender(quarterRolls, 10, arrRolls, 3, sumRolls, rollHtml, 0, sumBank)
multiplyRender(penny, 0.01, arrCoin, 0, sumCoin, coinHtml, 1, sumBank)
multiplyRender(nickle, 0.05, arrCoin, 1, sumCoin, coinHtml, 1, sumBank)
multiplyRender(dime, 0.1, arrCoin, 2, sumCoin, coinHtml, 1, sumBank)
multiplyRender(quarter, 0.25, arrCoin, 3, sumCoin, coinHtml, 1, sumBank)
multiplyRender(one, 1, arrBill, 0, sumBill, billHtml, 2, sumBank)
multiplyRender(five, 5, arrBill, 1, sumBill, billHtml, 2, sumBank)
multiplyRender(ten, 10, arrBill, 2, sumBill, billHtml, 2, sumBank)
multiplyRender(twenty, 20, arrBill, 3, sumBill, billHtml, 2, sumBank)
multiplyRender(fifty, 50, arrBill, 4, sumBill, billHtml, 2, sumBank)
multiplyRender(hundred, 100, arrBill, 5, sumBill, billHtml, 2, sumBank)

