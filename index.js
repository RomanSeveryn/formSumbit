'use strict';

const array = [];

const form = document.getElementById('root-form');

const container = document.getElementById('root-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const {
    target: { email: { value: val } },
  } = e;
  
  if (val !== '') {
    array.push(val);
    const li = createLi(val);
    container.append(li);
    form.reset();
  } else {
    throw Error();
  }

  console.dir(array);
});

function createLi(val) {
  const li = document.createElement('li');
  li.classList.add('textUser');
  li.append(val);
  return li;
}

