// src/models/userModel.js

class UserModel {
    constructor() {
      this.users = [
        { id: 1, name: 'Dylan Clerque', country:'Ecuador', number:'0979299016' },
        { id: 2, name: 'Dereck Tapia', country:'Ecuador', number:'0992048961' },
      ];
      this.currentId = 3; // Mantiene un ID incremental para nuevos usuarios.
    }
    
    // Método para obtener todos los usuarios
    getAllUsers() {
      return this.users;
    }
  
  
  // Crear un nuevo usuario
  createUser(name,country,number) {
    const newUser = { id: this.currentId++, name, country, number };
    this.users.push(newUser);
    return newUser;
  }

  // Actualizar un usuario existente
  updateUser(id, newName, newCountry, newNumber) {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      this.users[userIndex].name = newName;
      this.users[userIndex].country = newCountry;
      this.users[userIndex].number = newNumber;
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
  