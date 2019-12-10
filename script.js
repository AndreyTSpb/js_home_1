let money = 0, time  = 0, one_day = 0;

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
    let quest1 = prompt("Обязательная статья расхода в этом месяце?");
    let quest2 = prompt("Во сколько обойдется?");


    if(quest2) money = quest2; // если есть значение заполняем
    //заполняем вопрос/ответ
    appData.expenses[quest1] = quest2;
}



//перебираем все статьи расхода сумируем расход
for (var i in appData.expenses){
    one_day += parseFloat(appData.expenses[i]);
}

alert("your bujet for one day: " + one_day / 30);

//console.log(appData.bujet);