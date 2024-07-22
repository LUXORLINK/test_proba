import React from 'react'
import './index.scss'
export const UserList = ({ users, deleteUser, editUser }) => {
  return (
    <ul className='info'>
      {users.map(user => (
        <li key={user.id}>
          {user.name} ({user.email})
          <button onClick={() => editUser(user)}>редактировать</button>
          <button onClick={() => deleteUser(user.id)}>удалить</button>
        </li>
      ))}
    </ul>
  )
}

export default UserList
