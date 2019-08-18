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

  addList(description) {
    const listRef = this.rdb.ref(`todos/${this.auth.currentUser.uid}/`);
    const listChildRef = listRef.push();

    listChildRef.push({ description: description });
  }

  addTodo(listId, description) {
    const todosObj = {
      description: description
    };
    const todosRef = this.rdb.ref(
      `todos/${this.auth.currentUser.uid}/${listId}/`
    );
    todosRef.push(todosObj);
  }

  deleteTodo(listId, objId) {
    const todosRef = this.rdb.ref(
      `todos/${this.auth.currentUser.uid}/${listId}/${objId}`
    );
    todosRef.remove();
  }

  getTodosList() {
    let user = this.auth.currentUser;
    const todoList = this.rdb.ref(`todos/${user.uid}/`);
    return todoList;
  }
}

export default new Service();
