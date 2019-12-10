let money = +prompt("Ваш бюджет на месяц?: ", ''),
    time  = prompt("Введите дату в формате YYYY-MM-DD", ''), 
    one_day = 0;

/*Создаем обьект*/
let appData = {
    bujet : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};

while(confirm("Добавить расход? ")){
    /**
     * Спрашиваем пользователя
     */
    let a = prompt("Обязательная статья расхода в этом месяце?");
    let b = parseFloat(prompt("Во сколько обойдется?"));

    if(typeof(a) === 'string' && a.length > 0 && b.length > 0 &&  a.length < 50){
        //заполняем вопрос/ответ
        appData.expenses[a] = b;
    }else{
        alert("Не правильно указанны данные");
    }
}



//перебираем все статьи расхода сумируем расход
for (let i in appData.expenses){
    one_day += parseFloat(appData.expenses[i]);
}

appData.moneyPreDay = appData.bujet / 30;

alert("your bujet for one day: " +  appData.moneyPreDay);


console.log(appData);