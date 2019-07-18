import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-database";

const config = {
  apiKey: "<YOUR_API_KEY>",
  authDomain: "<>",
  databaseURL: "<>",
  projectId: "<>",
  storageBucket: "<>",
  messagingSenderId: "<>",
  appId: "<>"
};

class Service {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.rdb = app.database();
  }

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  async signup(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name
    });
  }

  addTodo(title, description) {
    const todosObj = {
      title: title,
      description: description
    };
    const todosRef = this.rdb.ref(`todos/${this.auth.currentUser.uid}`);
    todosRef.push(todosObj);
  }

  deleteTodo(todoId) {
    const todosRef = this.rdb.ref(
      `todos/${this.auth.currentUser.uid}/${todoId}`
    );
    todosRef.remove();
  }

  getTodosList() {
    let user = this.auth.currentUser;
    const todoList = this.rdb.ref(`todos/${user.uid}`);
    return todoList;
  }
}

export default new Service();
