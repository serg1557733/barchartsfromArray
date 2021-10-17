
/* Есть массив чисел:
[5,8,2,1,15,2,3,5,9,11,10,4,3,14,1,7,10,3,2,13]
Вывести его в виде графика (bar charts), где по оси x - 
индекс элемента, по оси y - значение. 
Сделать цветовую градацию показателей на графике: 0 - 5 зеленый, 6 - 10 желтый, свыше 10 красный.
 Допускается использование только html, css, javascript. Использование сторонних библиотек, canvas, svg не допускается. */

const array = [5,8,2,1,15,2,3,5,9,11,10,4,3,14,1,7,10,3,2,13],
        root = document.querySelector('.root'),
        axY = document.createElement('div');


axY.classList.add('axY');
axY.style.height = `${Math.max.apply(null, array) * 20}px`;
root.append(axY);

for (let i = 0; i <= Math.max.apply(null, array); i++){
    yIndex = document.createElement('span');
    yIndex.innerText = i;
    axY.append(yIndex);
}



        
array.map((item, index) => {
     let div = document.createElement('div'),
        xIndex = document.createElement('span'),
        height = item * 20;
     div.classList.add('bar');
     xIndex.classList.add('line');
     xIndex.innerText = index;
     div.style.height = `${height}px`;
     if (item > 0 && item < 5) {
         div.style.backgroundColor = 'green';
     } else if (item >= 5 && item <= 10){
        div.style.backgroundColor = 'yellow';
    } else if (item > 10){
        div.style.backgroundColor = 'red';
    }
    
     root.append(xIndex);
     root.append(div);
});