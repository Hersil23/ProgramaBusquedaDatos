// @desc Clase Contacto para representar cada entrada
class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

// @desc Clase Gestor para manejar la lógica de búsqueda
class GestorContactos {
  constructor() {
    this.contactos = [
      new Contacto("Ana Torres", "0414-1234567"),
      new Contacto("Luis Gómez", "0424-7654321"),
      new Contacto("Carlos Ruiz", "0412-9988776"),
      new Contacto("María López", "0416-3344556"),
      new Contacto("Pedro Martínez", "0426-1122334"),
    ];
  }

  // @desc Busca contactos por nombre (case-insensitive)
  buscar(nombre) {
    const filtro = nombre.toLowerCase();
    return this.contactos.filter(c =>
      c.nombre.toLowerCase().includes(filtro)
    );
  }
}

// @desc Inicialización y eventos
const gestor = new GestorContactos();
const input = document.getElementById("searchInput");
const btnBuscar = document.getElementById("searchBtn");
const listaResultados = document.getElementById("resultsList");
const btnModo = document.getElementById("toggleDark");

// @event click para alternar modo oscuro
btnModo.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnModo.textContent = document.body.classList.contains("dark") ? "🌞" : "🌙";
});

// @event click para buscar contactos
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