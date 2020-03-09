//Babel
alert("teste");
class teste {
  metodo() {}
  outro() {}
}

//Class
class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodo() {
    this.todos.push("Novo Todo");
    console.log(this.todos);
  }
}

const MinhaLista = new TodoList();
document.getElementById("novoTodo").onclick = function() {
  MinhaLista.addTodo();
};

//Heranca
class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoListHeranca extends List {
  constructor() {
    super();

    this.usuario = "Diego";
  }

  mostrUsuario() {
    console.log(this.usuario);
  }
}

const MinhaListaHeranca = new TodoListHeranca();
document.getElementById("novoTodo").onclick = function() {
  MinhaListaHeranca.add("Teste");
};

//METODOS ESTATICOS
class Matematica {
  static soma(a, b) {
    return a + b;
  }
}

console.log(Matematica.soma(1, 9));

//Constantes
const a = 1;
const usuario = { nome: "Diego" };
usuario.nome = "Cleiton";

//Variaveis de escopo
function testeEscopo(x) {
  let y = 2;

  if (x > 5) {
    console.log(x, y);
  }
}
testeEscopo(10);
