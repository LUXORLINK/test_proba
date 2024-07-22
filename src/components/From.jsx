import React, { useState, useEffect } from 'react'
import './index.scss'


const UserForm = ({ addUser, updateUser, editingUser }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name)
      setEmail(editingUser.email)
    } else {
      setName('')
      setEmail('')
    }
  }, [editingUser])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingUser) {
      updateUser({ id: editingUser.id, name, email })
    } else {
      addUser({ name, email })
    }
    setName('')
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} className='box'>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">{editingUser ? 'Update' : 'добавить'} пользователя</button>
    </form>
  )
}

export default UserForm;
