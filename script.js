const incrementBtn=document.querySelector('#increment')
const decrementBtn=document.querySelector('#decrement')
const counterEl=document.getElementById('counter')

const ulElement=document.getElementById('list-items')

let counter=0

function incrementCounter(){
    counter++
    counterEl.innerText=counter

    //create an element
    const li =document.createElement('li')
    li.setAttribute('data-counter', counter)
//styling
if(counter % 2==0){
    li.setAttribute('class', 'red')
}else{
    li.setAttribute('class', 'yellow')
}


    li.innerHTML='<b>Sentence</b> '+ counter
   // console.log(li)
   
    


    //append that element
    ulElement.appendChild(li)
}

function decrementCounter(){
    const li= ulElement.querySelector('[data-counter="'+counter+'"]')
    const number = parseInt(li.getAttribute('data-counter'),10)
    if(number%2==0){
        li.remove()

    }
   
    counter--
    counterEl.innerText=counter
}
incrementBtn.addEventListener('click',incrementCounter)
decrementBtn.addEventListener('click',decrementCounter)