// src/models/userModel.js

class UserModel {
    constructor() {
      this.users = [
        { id: 1, name: 'Dylan Clerque' },
        { id: 2, name: 'Dereck Tapia' },
      ];
      this.currentId = 3; // Mantiene un ID incremental para nuevos usuarios.
    }
    
    // Método para obtener todos los usuarios
    getAllUsers() {
      return this.users;
    }
  
  
  // Crear un nuevo usuario
  createUser(name) {
    const newUser = { id: this.currentId++, name };
    this.users.push(newUser);
    return newUser;
  }

  // Actualizar un usuario existente
  updateUser(id, newName) {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      this.users[userIndex].name = newName;
      return this.users[userIndex];
    }
    return null;
  }

  // Eliminar un usuario por ID
  deleteUser(id) {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      return this.users.splice(userIndex, 1);
    }
    return null;
  }
  
}
  
  export default new UserModel();
  