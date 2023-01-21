window.addEventListener('DOMContentLoaded', ()=> {

    const expensesItem1 = document.querySelector('#expenses_1');
    const expensesItem2 = document.querySelector('#expenses_2');
    const expensesItem3 = document.querySelector('#expenses_3');
    const expensesItem4 = document.querySelector('#expenses_4');
    const expensesItemBtn = document.querySelector('.expenses-item-btn');
    const budgetValue = document.querySelector('.budget-value');
    const startBtn = document.getElementById("start");
    const expensesValue = document.querySelector('.expenses-value');
    const dayBudgetValue = document.querySelector('.daybudget-value');
    const levelValue = document.querySelector('.level-value');
    const countBudgetBtn = document.querySelector('.count-budget-btn');
    const optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');
    const optionalExpensesValue = document.querySelector('.optionalexpenses-value');
    const optionalExpensesBtn = document.querySelector('.optionalexpenses-btn');
    const checkSavings = document.querySelector('#savings');
    const sumValue = document.querySelector('#sum');
    const persentValue = document.querySelector('#percent');

    const appData = {
        budget: 0,
        expenses: {},
        optionalexpenses: {},
        income: [],
        savings: false,
        getExpenses: ()=> {
            let a = expensesItem1.value;
            let b = expensesItem2.value;
            let c = expensesItem3.value;
            let d = expensesItem4.value;
            let sum = 0;

            if ((typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50 && a.length > 3) {
                appData.expenses[a] = b;
                sum += +b;
            };

            if ((typeof (c)) != null && (typeof (d)) != null && c != '' && d != '' && c.length < 50 && c.length > 3) {
                appData.expenses[c] = d;
                sum += +d;
            };

            console.log(sum);
            console.log(typeof(b));
            console.log(b);
            console.log(typeof(d));
            console.log(d);
            console.log(appData);
            expensesValue.textContent = sum;
        }, 
        
        start: ()=> {
            money = +prompt('Ваш бюджет на месяц?','');

            while (money == '' || money == null || isNaN(money)) {
                money = +prompt('Вы не ввели бюджет на месяц!','');
            };

            appData.budget = money;
            budgetValue.textContent = appData.budget;
        },
        getMoneyPerDay: function() {
            if (appData.budget != undefined && appData.budget != 0) {
                appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
                dayBudgetValue.textContent = appData.moneyPerDay;
                if (appData.moneyPerDay < 100) {
                    levelValue.textContent = 'Минимальный уровень достатка';
                } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                    levelValue.textContent = 'Средний уровень достатка';
                } else if (appData.moneyPerDay > 2000) {
                    levelValue.textContent = 'Высокий уровень достатка';
                } else {
                    levelValue.textContent = 'Произошла ошибка';
                }
            } else {
                dayBudgetValue.textContent = 'Произошла ошибка';
            }
        },        
        getIncome: function() {
            let items = incomeItem.value;
            if (items != '') {
                appData.income = items.split(',');
                incomeValue.textContent = appData.income;
            }
        },
        getOExpenses: function() {
            for (let i=0; i < optionalExpensesItem.length; i++) {
                let opt = optionalExpensesItem[i].value;
                appData.optionalExpenses[i] = opt;
                optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
            }
        },
        setSavings: ()=> {
            if (appData.savings == true) {
                appData.savings = false;
            } else {
                appData.savings = true;
            }
            console.log(appData.savings);
        },
        getSavings: function() {
            if (appData.savings == true) {
                let sum = +sumValue.value;
                let persent = +persentValue.value;
                appData.montIncome = sum/100/12*persent
                appData.yearIncome = sum/100*persent
                monthsavingsValue.textContent = appData.montIncome.toFixed(1);
                yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
            }
        },
    };

    const monthsavingsValue = document.querySelector('.monthsavings-value');
    const yearsavingsValue = document.querySelector('.yearsavings-value');

    startBtn.addEventListener("click", appData.start);
    expensesItemBtn.addEventListener('click', appData.getExpenses);
    countBudgetBtn.addEventListener('click', appData.getMoneyPerDay);
    optionalExpensesBtn.addEventListener('click', appData.getOExpenses);
    checkSavings.addEventListener('click', appData.setSavings);
    sumValue.addEventListener('input', appData.getSavings);
    persentValue.addEventListener('input', appData.getSavings);
});