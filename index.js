// const input = document.querySelector('input')

//index.js
import { fetchUsers } from "./api.js";

// const addButton = document.querySelector('button');
const usersList = document.querySelector('#users');

const getUsers = async () => {
    usersList.textContent = 'Loading...'
    try {
        const {users, responseState} = await fetchUsers();
        usersList.textContent = '';

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = `name: ${user.name}, Email: ${user.email}`;
            usersList.appendChild(listItem);
        })
        
    } catch (error) {
        console.error('Something went wrong:', error)
        usersList.textContent = 'Something went wrong. Please try again.';
    }
}

getUsers();



// const addItem = () => {
//     const itemText = input.value.trim(); // trim() removes leading/trailing whitespace
//     if (itemText === '') return; // guard clause — stop here if empty

//     const newItem = document.createElement('li');
//     newItem.className = 'listItem';
//     newItem.textContent = itemText;
//     list.appendChild(newItem);
//     input.value = ''

//     newItem.addEventListener('click', () => newItem.remove())
// }

// addButton.addEventListener('click', addItem);
// input.addEventListener('keydown', (e) => {
// if(e.key === 'Enter') addItem();
// })