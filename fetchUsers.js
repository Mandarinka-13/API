async function fetchUsers() {
        const response =  fetch("https://jsonplaceholder.typicode.com/users");
        const users =  response.json();        
        users.forEach(user => {
            console.log(user.name);
        });
        return [
            { id: 1, name: 'Leanne Graham' },
            { id: 2, name: 'Ervin Howell' },
            { id: 3, name: 'Clementine Bauch' }
        ];
}

fetchUsers()
