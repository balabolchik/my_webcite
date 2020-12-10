let newUserName = document.getElementById('first-name');
let newUserSurname = document.getElementById('surname');
let buttonForSaveInformation = document.getElementById('save-botton');
let id = 0;
let users = {};
buttonForSaveInformation.addEventListener('click', () => {
    id++;
    users[id] = {};
    users[id].firstName = newUserName.value;
    users[id].surname = newUserSurname.value;
    console.log(users[id]);
});
