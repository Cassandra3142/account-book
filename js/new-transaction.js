const $list = document.querySelector('.transaction-list');
const $form = document.querySelector('form');
const $year = document.querySelector('.years');
const $month = document.querySelector('.months');
const $dates = document.querySelector('.dates');
const $incomeExpenditure = document.querySelector('.new-transaction__content__input__button')
const $income = document.querySelector('.income');
const $expenditure = document.querySelector('.expenditure');
const $content = document.querySelector('.content');
const $price = document.querySelector('.price');

const year = $year.value;
const month = $month.value;
const date = $dates.value;
const content = $content.value;
const pirce = $price.value;
let incomeExpenditure = '';

$incomeExpenditure.addEventListener('click',(event) => {
  if(event.target === $income) {
    $income.style.backgroundColor = '#ffd400';
    $expenditure.style.backgroundColor = '';
    incomeExpenditure = '수입'
  } else if (event.target === $expenditure) {
    $expenditure.style.backgroundColor = '#ffd400';
    $income.style.backgroundColor = '';
    incomeExpenditure = '지출'
  };
})

function addTransaction(event) {
  event.preventDefault();
}

$form.addEventListener('submit',addTransaction);