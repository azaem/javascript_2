// 1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.

// 2. Вам даны две переменные a=50, b=100. Составьте условие, по которому в консоль будет выводиться 'a больше b', 'a меньше b'.
// 3. Вам дана переменная a=-2. Составьте условие, по которому в консоль будет выводиться 'positive' - если число больше 0, 'равно' если число равно 0, "negative" если число меньше 0.
// 4. Вам дана переменная number=45. Составьте условие, по которому будет выводиться в консоль "Четное число", "Нечетное число".
// function task4(a){
//     if ( a % 2 === 0){
//         return'четное число'
//     }else {
//         return 'не четное число'
//     }return null
// }
//
// console.log(task4(0))
// 5. Вам даны две переменные a=10, b=2. Составьте условие, по которому, остаток деления a на b, будет выводиться консоль "Четное число", "Нечетное число".
//   function port(d,e){
//     if ((d % e) % 2 === 0){
//         return'четное число'
//     }else {
//         return 'не четное число'
//     }
//   }
//
// console.log(port(10,2))
// 6. Вам дана переменная s. Составьте условие, по которому в консоль будет выводится тип этой переменной - "boolean", "number", "string".
//
// function task6(s){
//   return typeof s
// }
//
// console.log(task6(""))
// 7. Вам дана переменная а. Если переменная a больше одного и меньше 9-ти, то выведите 'Верно', иначе выведите 'Неверно'.
// function  task7(n){
//     if (n > 1 && n < 9){
//         return "верно"
//     }return "не верно"
// }
//
// console.log(task7(11))
// 8. Вам дана переменная а. Если переменная a равна трем или равна семи, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной в консоль.
// function task8(a){
//     if (a === 3 || a === 7){
//         return a + 7
//     }return a / 10
// }
//
// console.log(task8(20))
// 9. Вам даны переменные а , b. Если переменная a равна или меньше 0, а переменная b больше или равна 5, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания).
// function str(a,b){
//     if (a <= 0 && b >= 5){
//         return a+b
//     }return a-b
// }
//
// console.log(str(-1,6))
// 10. Вам даны переменные a , b. Если переменная a больше 4-х и меньше 10-ти, или переменная b больше или равна 7-ми и меньше 17-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.
// function task10(a,b){
//     if (a > 4 && a<9 || b >= 7 && b < 17){
//         return "верно"
//     }return 'не верно'
// }
//
// console.log(task10(5,9))
//
// // 11. Вам дана переменная month. В ней лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
// function task11(month){
//     if (month >= 1 && month <= 2){
//         return "кыш"
//     }else if ( month >= 3 && month <= 5){
//         return "жаз"
//     }else if (month >= 6 && month < 8){
//         return "жай"
//     }else if (month >= 9 && month < 10){
//         return "куз"
//     }
//
// }
//
// console.log(task11(3))
// 12. Вам дана переменная day. В ней лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
// 13. Вам дана переменная a='12345'. Проверьте, что первым символом этой переменной является цифра 1, 2 или 3. Если это так – выведите ‘да’, в противном случае выведите ‘нет’.
// 14. Вам дана переменная age=*любое двузначное число*. Составьте условие, по которому, в консоль будет выводиться "Мне  год", "Мне  лет", в зависимости от возраста. Наример мне 21 год, мне 20 лет.
// 15. Вам дана переменная time= *любое чило от 1 до 59*. Составьте условие, по которому время будет делиться на четверти. Пример: time = 12 - Первая четверть. Если число больше 60, то в консоли будет выдаваться "Неверное число".
// -------
//     1. Вам дана переменная str = 'Nevis ITDB TECH'. Выведите в консоль длину первого слова.
// 2. Вам дана переменная str = 'Максимально УЖАСНО'. Выведите в консоль слово УЖАСНО, только нижним регистром.
// 3. Вам дана переменная str = 'максимально УЖАСНО'. Выведите в консоль слово максимально, только верхним регистром.
// 4. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль каждый символ этой строки, используя метод split. Пример : [ 'C','o','d','i','n','g',' ','i','s',' ','t','h','e',' ', 'L','O','V','E',' ','o','f',' ','m','y',' ','L','I','F','E','!' ]
// 5. Вам дана переменная str = 'Максимально Ужасно, переделывай'. Выведите в консоль все слова этой строки, используя метод split. Пример: [ 'Максимально' 'ужасно', 'переделывай'. ]
// 6. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль 'мально Ужасно', используя метод slice.
// 7. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль букву У, использую метод charAt.
// 8. Вам даны переменные str = 'Максимально', str2 = 'Ужасно'. Выведите в консоль соединенные строки, используя метод concat.
// 9. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс слова 'Ужасно'.
// 10. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль "встречается более 1 раза", если букв 'a' встречается более 1 раза, иначе "встречается менее одного раза"
// 11. Вам дана переменная str = 'макСИМАЛЬНО ужаСНО'. Выведите в консоль первую букву каждого слова строки в верхний регистр.
// 12. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого вхождения буквы а.
// myTask()
// const func = (name)=>{
//     return 'hello ${name}!'
// }
// console.log(func("Max"))
//
// function myTask(){
//     console.log("hello world")
// }
// console.log(true && false && true && true)
// console.log(true,true,false)
// const task = (a,b)=>{
//     if ((a > 4 && a < 10) || (b>=7 && b < 17)){
//         return true
//     }
//     return false
// }
// console.log(task(19,10))

// const task14 = (age)=>{
//     let a = age % 10
//
//     if (age > 0){
//         if (a > 0 && age !== 11){
//             return 'мне $(age)год'
//         }else if(age > 10 && age < 15){
//             return 'мне $(age)лет'
//         }else if (a >1 && a < 5){
//             return `мне $(age)год`
//         }else {
//             return `мне $(age)лет`
//         }
//     }
// }
// console.log(task14(20))

let row=document.querySelector(".row")
fetch("https://sideorders.co.uk/collections/frontpage/products/dog-ceo-issue-1")
    .then(data => data.json())
    .then(result=> {
        console.log(result.slice(0,10))
        result.sort((a,b)=>{
            return a.name.common.toLowerCase() > b.name.common.toLowerCase() ? 1: -1
        }).map(el =>{

            row.innerHTML = row.innerHTML +

                ` <div class="col-4">
 <img src="${el..png}" alt="" class="image object-fil-contain" style="width: 250px;height: 150px">
            <h4 class="mt-2">${el.name.Author}</h4>
            <p>${el.name.official}</p>
            <p>население ${el.population}</p>
            <p>area${el.area}km²</p>
            <p>столица${el.capital ? el.capital :"bishkek"}</p>

        </div>`
        })


    })
