// src/controllers/userController.js
import UserModel from '../models/userModel';

class UserController {

  
  getUsers() {
    return UserModel.getAllUsers();
  }
// Crear un nuevo usuario
addUser(name,country, number) {
  return UserModel.createUser(name, country, number);
}

// Actualizar un usuario
modifyUser(id, newName,newCountry,newNumber) {
  return UserModel.updateUser(id, newName, newCountry,newNumber);
}

// Eliminar un usuario
removeUser(id) {
  return UserModel.deleteUser(id);
}

}

export default new UserController();
