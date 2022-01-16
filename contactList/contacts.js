document.querySelector('#btn-add-contact')
.addEventListener('click', function () {
    const nameInput = document.querySelector('#name-input');
    addContact(nameInput.value);
     nameInput.value = '';
});

function addContact(fullName){

    if(!fullName || !fullName.trim())  return;

    const contactDiv = document.createElement('div');
    contactDiv.className = 'contact-entry';

    contactDiv.addEventListener('dblclick', function() {
      contactDiv.remove();  
    });

    const nameInitialDiv = document.createElement('div');
    nameInitialDiv.className = 'name-initial';
    nameInitialDiv.textContent = fullName.charAt(0);
    nameInitialDiv.style.backgroundColor = randomColor();
    const fullNameDiv = document.createElement('div');
    fullNameDiv.className = 'full-name';
    fullNameDiv.textContent = fullName;

    // append in order
    contactDiv.append(nameInitialDiv);
    contactDiv.append(fullNameDiv);
    document.querySelector('#contacts-list').append(contactDiv);
}

function randomColor() {
    const colors = [
        '#purple',
        '#059c16',
        '#000770',
        '#7a3e02',
        '#036b64',
        '#505e2d',
        '#e30909',
        '#b05e0c',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

window.alert('Por favor preencha o nome do contato para adicionar. Caso queira remover clique duas vezes sobre o contato.')