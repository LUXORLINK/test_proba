
import React, { useState } from 'react'
import UserForm from './components/From'
import UserList from './components/List'

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null)

  const addUser = (user) => {
    setUsers([...users, { id: Date.now(), ...user }])
  }

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)))
    setEditingUser(null)
  };

  const editUser = (user) => {
    setEditingUser(user)
  }

  return (
    <div className="App">
      <h1  style={{textAlign:'center'}}>Пользователи</h1>
      <UserForm addUser={addUser} updateUser={updateUser} editingUser={editingUser} />
      <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
    </div>
  )
}

export default App;

