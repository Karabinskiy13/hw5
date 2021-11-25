// Всі функції повинні бути описані стрілочним типом!!!!

//     - створити функцію яка обчислює та повертає площу прямокутника висотою
// const rectangle=(a, b) =>{
//     return a*b;
// }
// console.log(rectangle(1,2))
// - створити функцію яка обчислює та повертає площу кола
//  const circle=(r)=>{
//     let radius= r**2;
//     return 3.14*radius;
//  }
//  console.log(circle(2))
// - створити функцію яка обчислює та повертає площу циліндру
// const cylinder=(r, h)=>{
//   return 2*3.14*r*h
// }
// console.log(cylinder(1,2))
// - створити функцію яка приймає масив та виводить кожен його елемент
// let array=[1,2,3,'string']
// const allofarray=(array) =>{
//     for (i=0;i<array.length; i++)
// }
// allofarray(array)

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// const info=(text)=>{
//     document.write(`<p>${text}</p>`)
// }
// info('fgesdrfgsrthgstrh')
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//  const list=(info)=>{
//     document.write(`<ul>
// <li>${info}</li>
// <li>${info}</li>
// <li>${info}</li>
// </ul>`)
//  }
//  list(`akakakakak`)
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// const list=(info,numbofpage)=>{
//   document.write(`<li>`)
//   for (i=0;i<numbofpage;i++){
//     document.write(`<li>${info[i]}</li>`)
//   }
//   document.write(`</li>`)
// }
// list(`affsafgds`,12)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array=[1,2,true,'string']
// const allofarray=(array)=>{
//       document.write(`<ul>`)
//           for (let i = 0; i < array.length; i++) {
//               document.write(`<li>${array[i]}</li>`);
//           }
//       document.write(`</ul>`)
//   }
//   allofarray(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// let array = [{id: 1, name: 'ivan', age: 50}, {id: 2, name: 'kolya', age: 60}, {id: 3, name: 'olya', age: 70}];
//
// const objarray = (arraylist) => {
//   for (const arraylistElement of arraylist) {
//   }
//   {
//         document.write(`<div>${arraylistElement.id}.${arraylistElement.name} - ${arraylistElement.age}</div>`);
//     }
// }
// objarray(list);
