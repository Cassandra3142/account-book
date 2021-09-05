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

function upDateList(transactionList) {
  const li = document.createElement('li');
  const divContainer = document.createElement('div');
  const divFirstChild = document.createElement('div');
  const divSecondChild = document.createElement('div');
  const spanDay = document.createElement('span');
  const spanIncomeExpenditure = document.createElement('span');
  const spanContent = document.createElement('span');
  const spanPrice = document.createElement('span');
  const deleteBtn = document.createElement('button');

  $list.appendChild(li);
  li.appendChild(divContainer);
  divContainer.appendChild(divFirstChild);
  divContainer.appendChild(divSecondChild);
  divFirstChild.appendChild(spanDay);
  divFirstChild.appendChild(spanIncomeExpenditure);
  divSecondChild.appendChild(spanContent);
  divSecondChild.appendChild(spanPrice);

  divContainer.className = 'divContainer';
  divFirstChild.className = 'divFirstChild';
  divSecondChild.className = 'divSecondChild';

  deleteBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
  spanDay.innerText = `${transactionList.year} - ${transactionList.month} - ${transactionList.date}`;
  spanIncomeExpenditure.innerText = `${transactionList.incomeExpenditure}`;
  spanContent.innerText = `${transactionList.content}`;
  spanPrice.innerText = `${transactionList.price} 원 `;
  
  spanPrice.appendChild(deleteBtn);

  if(incomeExpenditure === '수입') {
    divContainer.style.backgroundColor = 'rgba(0, 0, 255, 0.5)';
  } else if (incomeExpenditure === '지출') {
    divContainer.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
  }

  deleteBtn.addEventListener('click', (event) => {
    event.target.parentNode.parentNode.parentNode.parentNode.remove();
  });
}

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
  const transactionList = {
    year : $year.value,
    month : String($month.value).padStart(2,"0"),
    date : String($dates.value).padStart(2,"0"),
    content : $content.value,
    price : $price.value,
    incomeExpenditure : incomeExpenditure
  }
  list.push(transactionList);
  upDateList(transactionList);
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