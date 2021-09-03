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

function upDateList (transactionList) {
  const li = document.createElement('li');
  const div = document.createElement('div');
  div.className = 'divContainer';
  const divFirstChild = document.createElement('div');
  divFirstChild.className = 'divFirstChild';
  const divSecondChild = document.createElement('div');
  divSecondChild.className = 'divSecondChild';
  const span1 = document.createElement('span');
  const span2 = document.createElement('span');
  const span3 = document.createElement('span');
  const span4 = document.createElement('span');
  span1.innerText = `${transactionList.year}-${transactionList.month}-${transactionList.date}`;
  span2.innerText = incomeExpenditure;
  span3.innerText = transactionList.content;
  span4.innerText = `${transactionList.price} 원`;
  $list.append(li);
  li.append(div);
  div.append(divFirstChild);
  div.append(divSecondChild);
  divFirstChild.append(span1);
  divFirstChild.append(span2);
  divSecondChild.append(span3);
  divSecondChild.append(span4);
  if(incomeExpenditure === '수입') {
    div.style.backgroundColor = 'rgba(0, 0, 255, 0.5)';
  } else if (incomeExpenditure === '지출') {
    div.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
  }
}

function addTransaction(event) {
  event.preventDefault();
  const transactionList = {
    year : $year.value,
    month : $month.value,
    date : $dates.value,
    content : $content.value,
    price : $price.value  
  }
  upDateList(transactionList);
}

$form.addEventListener('submit',addTransaction);