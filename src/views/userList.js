import { motion } from 'framer-motion';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit, faTrashAlt, faAlignCenter, faUser, faSave, faUserAlt, faUserFriends, faAdd, faList } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import userController from '../controllers/userController';
import { alignProperty } from '@mui/material/styles/cssUtils';
import { faUserAltSlash } from '@fortawesome/free-solid-svg-icons/faUserAltSlash';

const UserList = () => {

  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('');
  const [newCountry, setNewCountry] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState('');
  const [editingCountry, setEditingCountry] = useState('');
  const [editingNumber, setEditingNumber] = useState('');

  useEffect(() => {
    setUsers(userController.getUsers());
  }, []);

  // Añadir nuevo usuario
  const handleAddUser = () => {
    if (newUser.trim() && newCountry.trim() && newNumber.trim()) {
      const addedUser = userController.addUser(newUser,newCountry,newNumber);
      setUsers([...users, addedUser]);
      setNewUser(''); // Limpiar el campo de entrada
      setNewCountry(''); // Limpiar el campo de entrada
      setNewNumber(''); // Limpiar el campo de entrada
    }
  };

  // Eliminar usuario
  const handleDeleteUser = (id) => {
    userController.removeUser(id);
    setUsers(users.filter(user => user.id !== id));
  };

  // Guardar cambios al editar
  const handleUpdateUser = () => {
    const updatedUser = userController.modifyUser(editingId, editingName,editingCountry,editingNumber);
    if (updatedUser) {
      setUsers(users.map(user => (user.id === editingId ? updatedUser : user)));
      setEditingId(null); // Dejar de editar
      setEditingName(''); // Limpiar el campo de edición
      setEditingCountry(''); // Limpiar el campo de edición
      setEditingNumber(''); // Limpiar el campo de edición
    }
  };    
  return (
    <motion.div
    className="user-list-container"
    initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
>
  <h2>Lista de Usuarios  <FontAwesomeIcon  icon={faList} /> </h2>
  
  {/* Formulario para agregar un nuevo usuario */}
  <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
    <input
      type="text"
      value={newUser}
      onChange={e => setNewUser(e.target.value)}
      placeholder="Nombre del nuevo usuario"
    />
    <input
      type="text"
      value={newCountry}
      onChange={e => setNewCountry(e.target.value)}
      placeholder="País del nuevo usuario"
    />
    <input
      type="text"
      value={newNumber}
      onChange={e => setNewNumber(e.target.value)}
      placeholder="Número del nuevo usuario"
    />
    <button onClick={handleAddUser}>Añadir Usuario <FontAwesomeIcon icon={faUser} /><FontAwesomeIcon icon={faAdd} /> </button>
  </div>

  {/* Tabla para mostrar los usuarios */}
  <table border="1" style={{ width: '80%', textAlign: 'center', marginTop: '10px' }} align='center'>
    <motion.thead
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 3 }}>
      <tr>
        <motion.th
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3 }}>Nombre</motion.th>
         <motion.th
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3 }}>País</motion.th>
        <motion.th
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3 }}>Número</motion.th>
        <motion.th
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3 }}>Acciones</motion.th>
       
      </tr>
    </motion.thead>
    <tbody>
      {users.map(user => (
        <tr key={user.id}>
          <motion.td 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3 }}>
            {editingId === user.id ? (
              <input
                type="text"
                value={editingName}
                onChange={e => setEditingName(e.target.value)}
                placeholder="Editar nombre"
                align= "center"
              />
            ) : (
              user.name
            )}
          </motion.td>
          <motion.td 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3 }}>
            {editingId === user.id ? (
              <input
                type="text"
                value={editingCountry}
                onChange={e => setEditingCountry(e.target.value)}
                placeholder="Editar País"
                align= "center"
              />
            ) : (
              user.country
            )}
          </motion.td>
          <motion.td 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3 }}>
            {editingId === user.id ? (
              <input
                type="text"
                value={editingNumber}
                onChange={e => setEditingNumber(e.target.value)}
                placeholder="Editar nombre"
                align= "center"
              />
            ) : (
              user.number
            )}
          </motion.td>
          <motion.td width={250} 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3 }}>
            {editingId === user.id ? (
              <button onClick={handleUpdateUser}>Guardar <FontAwesomeIcon icon={faUserFriends} /> </button>
            ) : (
              <>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0px' }}>
                <button onClick={() => {
                  setEditingId(user.id);
                  setEditingName(user.name);
                  setEditingCountry(user.country);
                  setEditingNumber(user.number);
                }}>
                  Editar <FontAwesomeIcon icon={faUserEdit} /> 
                </button>
                <button onClick={() => handleDeleteUser(user.id)}>Eliminar <FontAwesomeIcon icon={faUserAltSlash} /></button>
                </div>
              </>
            )}
          </motion.td>
        </tr>
      ))}
    </tbody>
  </table>
</motion.div>
  );
};

export default UserList;
