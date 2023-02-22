'use strict'

let money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '2000-01-01');

let appData = {
    budget: money,
    expences: {},
    optionalExpences: {},
    income: [],
    timeData: time,
    savings: false,
};



// let readExpences = true;
do {
    let expencesName = prompt('Введите обязательную статью расходов в этом месяце', ''),
    expencesValue = prompt('Во сколько обойдется?', '');

    if( (typeof(expencesName) != null) && (typeof(expencesValue) != null)
        && ( expencesName != '' ) && (expencesValue != '')
        && ( expencesName.length < 50 )){

        console.log('done');
        appData.expences[expencesName] = expencesValue; 
    } else {
        //Проинформировать о несоответствии услвию, вернуться
        // readExpences = false;
        break;
    }
} while (true); //while (readExpences == true);

// while (true){
//     let expencesName = prompt('Введите обязательную статью расходов в этом месяце', ''),
//     expencesValue = prompt('Во сколько обойдется?', '');

//     if( (typeof(expencesName) != null) && (typeof(expencesValue) != null)
//         && ( expencesName != '' ) && (expencesValue != '')
//         && ( expencesName.length < 50 )){

//         console.log('done');
//         appData.expences[expencesName] = expencesValue; 
//     } else {
//         //Проинформировать о несоответствии услвию, вернуться
//         break;
//     }

// }









// for (let i = 0; i < 2; i++){
//     let expencesName = prompt('Введите обязательную статью расходов в этом месяце', ''),
//     expencesValue = prompt('Во сколько обойдется?', '');

//     if( (typeof(expencesName) != null) && (typeof(expencesValue) != null)
//         && ( expencesName != '' ) && (expencesValue != '')
//         && ( expencesName.length < 50 )){

//         console.log('done');
//         appData.expences[expencesName] = expencesValue; 
//     } else {
//         //Проинформировать о несоответствии услвию, вернуться
//     }
// };

appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюджет:' + appData.moneyPerDay);

console.log(typeof(appData.moneyPerDay));

if ( appData.moneyPerDay < 100 ){
    alert('Минимальный уровень достатка');
} else if ( appData.moneyPerDay < 1000 ) {
    alert('Средний уровень достатка');
} else {
    alert('Высокий уровень достатка');
}