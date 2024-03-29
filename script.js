let money = "",
    time  = "", 
    one_day = 0;

/*Создаем обьект*/
let appData = {
    bujet : {},
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : true,
    monthIncome: 0,
    detectDayBugget : function(money){
        appData.bujet       = money;
        appData.moneyPreDay = money / 30;
        alert("your bujet for one day: " +  appData.moneyPreDay);
    },
    detectLevel : function(){
        if(appData.moneyPreDay < 50 ){
            return "you loser";
        }else if (appData.moneyPreDay > 100){
            return "you win";
        }else{
            return "comdi comsa";
        }
    },
    chooseOptExpenses : function(){
        for (let i = 1; i<4; i++){
            appData.optionalExpenses[i] = prompt("Не обязательные расходы?", '');
        }
    },
    chooseIncome : function(){
        let ans = prompt("Укажитедополнительные доходы (разделитель запятая)",'');
        if(!isNaN(ans) || ans == null || ans == ""){
            ans = prompt("Укажитедополнительные доходы (разделитель запятая)",'');
        }
        appData.income = ans.split(', ');
    },
    addExpenses : function(){
        while(confirm("Добавить расход? ")){
            /**
             * Спрашиваем пользователя
             */
            let a = prompt("Обязательная статья расхода в этом месяце?", '');
            let b = prompt("Во сколько обойдется?", '');
        
            if(a.length > 0 && b.length > 0){
                //заполняем вопрос/ответ
                appData.expenses[a] = +b;
            }else{
                alert("Не правильно указанны данные");
            }
        }
        //перебираем все статьи расхода сумируем расход
        for (let i in appData.expenses){
            one_day += parseFloat(appData.expenses[i]);
        }
    },
    checkSavings : function(){
        if(appData.savings == true){
            let save = +prompt("Какова сумма накопления?"), 
                procent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/1000/12*procent;
            alert("Доход в месяц : " + appData.monthIncome);
        }
    },
    summExpenses : function(){
        //перебираем все статьи расхода сумируем расход
        for (let i in appData.expenses){
            one_day += parseFloat(appData.expenses[i]);
        }
    },
    viewData : function(){
        let str = "Our programm has in data: \n";

        for (let key in appData){
            if(typeof(appData[key]) === 'function'){
                //fff
            }else{
                if(appData[key] !== null && typeof appData[key] === 'object'){
                    str += key+ " : \n";
                    for(let key2 in appData[key]){
                        str += "    " + key2 + " : " + appData[key][key2] + "\n"; 
                    }
                }else{
                str += key + " : " + appData[key] + '\n';
                }
            }
       
        }
        return str;
    }
};

function start(){
    money = +prompt("Ваш бюджет на месяц?: ", '');
    time  = prompt("Введите дату в формате YYYY-MM-DD", '');

    if(isNaN(money) || money == null || money == ""){
        money = +prompt("Ваш бюджет на месяц?: ", '');
    }
    appData.timeData = time;
}
start();

appData.chooseIncome();
appData.detectDayBugget(money);
//chooseIncome();
//detectDayBugget(money);
alert(appData.detectLevel());



 if(confirm("Добавить не обязательную статью расходов?")){
     appData.chooseOptExpenses();
 }

 if(confirm("Добавить обязательные рассходы?")){
     appData.addExpenses();
 }

 if(appData.income.length > 0){
     let str = "";
     appData.income.forEach(function(item, i){
         k = ++i;
        str += "your income# " + k + " : " + item + "\n";
     });
     if(str.length >0) {alert(str);}
 }

 if(appData.expenses){
     appData.summExpenses();
 }

 appData.checkSavings();

console.log(appData.viewData());