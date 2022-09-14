window.addEventListener('load',function(){
    console.log ('страница загрузилась')
    let ul = document.getElementById('menu');
    let arrayLi = document.getElementsByClassName('item-menu');

    let content= document.getElementsByClassName('content');

    Object.keys(arrayLi).forEach(key => {
        arrayLi[key].addEventListener('click', Concat)
    })



    // console.log(ul);
    // console.log(arrayLi);


// ul.addEventListener('click', Concat);

// function Concat(event,firstName ='Vanya', lastName ='Pypkin') {
//     console.log(firstName +' ' + lastName);
// }
 
// arrayLi.addEventListener('click',Concat)

// let Arr =["Anton", "Sergey","Vasya","Petya"];

// console.log(typeof(arrayLi));
// arrayLi.forEach((element) => {console.log(element)})


function Concat (e) {

    // if (e.target.innerText ==='Пункт 4') {
    //     content[0].innerText = "Anna Korenina"
    // }
    // if (e.target.innerText ==='Пункт 2') {
    //     content[0].innerText = "Voina i Mir"
    // console.log(e.target.innerText);
    // content[0].innerText = e.target.innerText;
switch(e.target.innerText){
    case 'Пункт 1':
         content[0].innerText = "Anna Korenina"
    break;
    case 'Пункт 2':
        content[0].innerText = "Ivan Dyrak"
        break;
    case 'Пункт 3':
        content[0].innerText = "Voina Mirov"
        break;
     case 'Пункт 4':
        content[0].innerText = "Zvezdnue Voinu"
        break;
    case 'Пункт 5':
        content[0].innerText = "WAR STARS"
         break;
    case 'Пункт 6':
        content[0].innerText = "DONT KNOW"
        break;
    case 'Пункт 7':
         content[0].innerText = "DONna"
         break;  
     case 'Пункт 8':
         content[0].innerHTML = '<img src= ./img/halloween.png>'
         break;  
         default:
            content[0].innerText = 'Not found';

}
}
console.log (content);

}
)

