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

const list = [];

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
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`
  deleteBtn.style.backgroundColor = 'inherit';
  deleteBtn.style.border = `1px solid (0,0,0,0.1)`;
  deleteBtn.style.borderRadius = '5px';
  deleteBtn.addEventListener('click', (event) => {
    event.target.parentNode.parentNode.parentNode.parentNode.remove();
  });
  span1.innerText = `${transactionList.year}-${transactionList.month}-${transactionList.date}`;
  span2.innerText = incomeExpenditure;
  span3.innerText = transactionList.content;
  span4.innerText = `${transactionList.price} 원 `;
  $list.append(li);
  li.append(div);
  div.append(divFirstChild);
  div.append(divSecondChild);
  divFirstChild.append(span1);
  divFirstChild.append(span2);
  divSecondChild.append(span3);
  divSecondChild.append(span4);
  span4.append(deleteBtn);
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
    month : String($month.value).padStart(2,"0"),
    date : String($dates.value).padStart(2,"0"),
    content : $content.value,
    price : $price.value,
    incomeExpenditure : incomeExpenditure
  }
  upDateList(transactionList);
  list.push(transactionList);
  $income.style.backgroundColor = '';
  $expenditure.style.backgroundColor = '';
  $year.value = '';
  $month.value = '';
  $dates.value = '';
  $content.value = '';
  $price.value = '';
}

$form.addEventListener('submit',addTransaction);

const $history__title = document.querySelector('.transaction-history__title');
const $history__all = document.querySelector('.history__all');
const $history__income = document.querySelector('.history__income');
const $history__expenditure = document.querySelector('.history__expenditure');

$history__title.addEventListener('click',(event) => {
  if (event.target === $history__income) {
    $history__all.style.color = 'rgba(0,0,0,0.1)';
    $history__income.style.color = 'rgba(0,0,0,1)';
    $history__expenditure.style.color = 'rgba(0,0,0,0.1)';
  } else if (event.target === $history__expenditure) {
    $history__all.style.color = 'rgba(0,0,0,0.1)';
    $history__income.style.color = 'rgba(0,0,0,0.1)';
    $history__expenditure.style.color = 'rgba(0,0,0,1)';
  } else if (event.target === $history__all) {
    $history__all.style.color = 'rgba(0,0,0,1)';
    $history__income.style.color = 'rgba(0,0,0,0.1)';
    $history__expenditure.style.color = 'rgba(0,0,0,0.1)';
  }
})