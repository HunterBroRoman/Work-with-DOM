//--------------------------РАБОТА С РАЗЛИЧНЫМИ ПРИЕМАМИ В DOMe---------------------

const div = document.createElement('div'); //созд HTML контейнер
div.classList.add('wrapper'); // добавли контейнеру сласс
const body = document.body;// получили доступ к боди
body.appendChild(div);// поместили в боди контейнер

const header = document.createElement('h1');//созд HTML заголовок
header.textContent = ("DOM -DocumentObjectModul");//добавили в в заголовок текст
div.insertAdjacentElement('beforebegin', header);//добавили заголовок в DOM перед контейнером

const ul = `
<ul>
<li>один</li>
<li>два</li>
<li>три</li>
</ul>
`;
div.innerHTML = ul;//создали список и вставили его в контейнер

const img = document.createElement('img');
img.src = 'htpp://picsum.photos/240';
img.width = 240;
img.classList.add('super');
img.alt = 'Super Man';//сoздали элемент фото с классом, размером и путем к нему
div.appendChild(img);//поместили картинку в DIV

const paragraf = `
<div class="pDiv">
  <p>First paragraf</p>
  <p>Second paragraf</p>
</div>
`;
const ulList = div.querySelector('ul');// определили в контейнере помещенный список
ulList.insertAdjacentHTML('beforebegin', paragraf);// поместили перед этим списком разметку paragraf

//------------нужно добавить класс  второму параграфу ----------------

const pDiv = document.querySelector('.pDiv');//создаем переменную для искомомго ДИВа
pDiv.children[1].classList.add('text');//добавляем этой переменной класс

//------------------нужно удалить первый параграф из ДИВа-----------
pDiv.firstElementChild.remove();

//--------------------создаем функцию для возвращения разметки--------

const generateAutoCard = (brand, color, year) => {
 const date = new Date(); //получаем дату для определения возраста авто
 const curDate = date.getFullYear();

return `
      <div class="auto-card">
      
      <h2>${brand.toUpperCase()} ${year} </h2>
      <p>Автомобиль ${brand.toUpperCase()} - ${year} года. Возраст авто - ${curDate - year} лет</p>
      <p>Цвет: ${color}</p>
      <button type="button" class="btn">DELETE</button>
      </div>
`;
};//получив аргументы создает одну карточку с данными автомобиля

//создаем новый ДИВ с классом для размещения в нем карточек
const carDiv = document.createElement('div');
carDiv.classList.add('autos');

//создать три карточки авто использ. функцию generalAutoYear
const carList = [
  {brand:"Tesla", year:"2015", color:"red"},
  {brand:"Mazda", year:"2016", color:"black"},
  {brand:"Toyota", year:"2007", color:"white"},
];

const carsHTML = carList.map(car => {
return generateAutoCard(car.brand, car.color, car.year);
}).join('');// создаем три дива с разметкой

carDiv.innerHTML = carsHTML;// помещаем их в ДИВ, созданный под них

//помещаем его в ДИВ с классом Wrapper, перед ним
div.insertAdjacentElement('beforebegin',carDiv);


//------------------по клику на кнопку удаляем карточку с авто--------
const buttons = document.querySelectorAll('.btn');
//------------------созд функцию удаления кнопки из DOM--------------
function handleClick(e) {
     const buttonCurrent = e.currentTarget;//конст на клик по кнопке
     buttonCurrent.closest('.auto-card').remove();//удаляем карточку
}
//-------------вешаем обработчик собітия на каждую кнопку c помощью цикла-------------
buttons.forEach(button => {
  button.addEventListener('click', handleClick);
});



