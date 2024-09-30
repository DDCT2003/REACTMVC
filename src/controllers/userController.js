// src/controllers/userController.js
import UserModel from '../models/userModel';

class UserController {
  getUsers() {
    return UserModel.getAllUsers();
  }
// Crear un nuevo usuario
addUser(name) {
  return UserModel.createUser(name);
}

// Actualizar un usuario
modifyUser(id, newName) {
  return UserModel.updateUser(id, newName);
}

// Eliminar un usuario
removeUser(id) {
  return UserModel.deleteUser(id);
}
}

export default new UserController();
