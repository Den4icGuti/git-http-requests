const refs = {
  btn: document.querySelector('.btn'),
  usersList: document.querySelector('.users-list'),
  clearbtn:document.querySelector('.clear-list')
}

refs.clearbtn.addEventListener('click',clearList)

refs.btn.addEventListener('click', () => {
  fetchUsers()
    .then((users) => renderUsersLis(users))
    .catch((error) => alert(error))
})

function fetchUsers() { 
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => { 
      if (!response.ok) { 
        throw new Error(response.status);
      }
      return response.json()
    })
}

function renderUsersLis(users) { 
  const marcup = users.map((user) => { 
    return `<li>
    <p><b>Name</b>: ${user.name}</p>
     <p><b>Email</b>: ${user.email}</p>
     <p><b>Company</b>: ${user.company.name}</p>
    </li>`
  }).join("")
  refs.usersList.innerHTML = marcup;
}


function clearList() { 
  refs.usersList.innerHTML = '';
}