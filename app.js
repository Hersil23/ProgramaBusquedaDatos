// Clase para representar un contacto
class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

// Clase para gestionar los contactos
class GestorContactos {
  constructor() {
    this.contactos = [
      new Contacto("Ana Perez", "123456789"),
      new Contacto("Luis Gomez", "987654321"),
      new Contacto("Carlos Ruiz", "555555555"),
      new Contacto("Lucia Fernandez", "444444444"),
      new Contacto("Maria Lopez", "111222333"),
      new Contacto("Pedro Martinez", "999888777"),
    ];
  }

  buscar(nombre) {
    return this.contactos.filter(c =>
      c.nombre.toLowerCase().includes(nombre.toLowerCase())
    );
  }

  obtenerTodos() {
    return this.contactos;
  }
}

// Instancia del gestor
const gestor = new GestorContactos();

// Referencias al DOM
const input = document.getElementById("searchInput");
const btnBuscar = document.getElementById("searchBtn");
const listaResultados = document.getElementById("resultsList");
const namesList = document.getElementById("namesList");
const toggleDark = document.getElementById("toggleDark");

// Mostrar todos los nombres al cargar
function mostrarTodosLosNombres() {
  const todos = gestor.obtenerTodos();
  namesList.innerHTML = "";

  todos.forEach(c => {
    const li = document.createElement("li");
    li.textContent = c.nombre;
    li.className = "text-blue-700 dark:text-white";
    namesList.appendChild(li);
  });
}

// Buscar contactos por nombre
btnBuscar.addEventListener("click", () => {
  const texto = input.value.trim();
  listaResultados.innerHTML = "";

  if (!texto) {
    alert("Por favor ingresa un nombre para buscar.");
    return;
  }

  const resultados = gestor.buscar(texto);

  if (resultados.length === 0) {
    listaResultados.innerHTML = `<li class="text-red-500">No se encontraron contactos.</li>`;
    return;
  }

  resultados.forEach(c => {
    const li = document.createElement("li");
    li.className = "p-2 bg-blue-100 dark:bg-gray-600 rounded";
    li.textContent = `${c.nombre} - ${c.telefono}`;
    listaResultados.appendChild(li);
  });
});

// Alternar modo oscuro
toggleDark.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Inicializar lista completa al cargar
mostrarTodosLosNombres();