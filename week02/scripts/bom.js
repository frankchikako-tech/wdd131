const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {

    if (input.value !== '') {

        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = '❌';

        li.append(deleteButton);
        list.append(li);

        input.value = '';
        input.focus();

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
        });
    }

});
