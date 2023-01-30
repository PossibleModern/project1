'use strict'

let $money = prompt('Ваш бюджет на месяц?', '0');
let $time = prompt('Введите дату в формате YYYY-MM-DD', '2000-01-01');
let $expencesState = prompt('Введите обязательную статью расходов в этом месяце');
let $expencesCost = prompt('Во сколько обойдется?');

let appData = {
    moneyData: $money,
    timeData: $time,
    moneyForDay(){
        return this.moneyData / 30;
    },
};

let expences = {};
expences[$expencesState] = $expencesCost;

alert(appData.moneyForDay());
alert(expences[$expencesState]);
console.log(expences);