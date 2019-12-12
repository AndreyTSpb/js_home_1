let money = +prompt("Ваш бюджет на месяц?: ", ''),
    time  = prompt("Введите дату в формате YYYY-MM-DD", ''), 
    one_day = 0;


/*Создаем обьект*/
let appData = {
    bujet : {},
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : true,
    monthIncome: 0
};

function detectDayBugget(money){
    appData.bujet       = money;
    appData.moneyPreDay = money / 30;
    alert("your bujet for one day: " +  appData.moneyPreDay);
}

function detectLevel(){
    if(appData.moneyPreDay < 50 ){
        return "you loser";
    }else if (appData.moneyPreDay > 100){
        return "you win";
    }else{
        return "comdi comsa";
    }
}

function chooseOptExpenses(){
    for (let i = 1; i<4; i++){
        appData.optionalExpenses[i] = prompt("Не обязательные расходы?");
    }
}

detectDayBugget(money);
alert(detectLevel());

function addExpenses(){
    while(confirm("Добавить расход? ")){
        /**
         * Спрашиваем пользователя
         */
        let a = prompt("Обязательная статья расхода в этом месяце?");
        let b = prompt("Во сколько обойдется?");
    
        if(a.length > 0 && b.length > 0){
            //заполняем вопрос/ответ
            appData.expenses[a] = +b;
        }else{
            alert("Не правильно указанны данные");
        }
    }
}

function checkSavings(){
    if(appData.savings == true){
        let save = +prompt("Какова сумма накопления?"), 
            procent = +prompt("Под какой процент?");

        appData.monthIncome = save/1000/12*procent;
        alert("Доход в месяц : " + appData.monthIncome);
    }
}

function summExpenses(){
    //перебираем все статьи расхода сумируем расход
    for (let i in appData.expenses){
        one_day += parseFloat(appData.expenses[i]);
    }
}

 if(confirm("Добавить не обязательную статью расходов?")){
     chooseOptExpenses();
 }

 if(confirm("Добавить обязательные рассходы?")){
     addExpenses();
 }

 if(appData.expenses){
     summExpenses();
 }

 checkSavings();


console.log(appData);