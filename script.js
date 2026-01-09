console.log("Web profesional de Car Rental lista 🚗");

let autoSeleccionado = "";

function abrirModal(auto) {
  autoSeleccionado = auto;
  document.getElementById("reservaModal").style.display = "flex";

  const hoy = new Date().toISOString().split("T")[0];
  document.getElementById("fechaInicio").min = hoy;
  document.getElementById("fechaFin").min = hoy;
}

function cerrarModal() {
  document.getElementById("reservaModal").style.display = "none";
}

function enviarWhatsApp() {
  const inicio = document.getElementById("fechaInicio").value;
  const fin = document.getElementById("fechaFin").value;

  if (!inicio || !fin) {
    alert("Por favor selecciona ambas fechas");
    return;
  }

  const mensaje = `Hola, quiero reservar el auto ${autoSeleccionado} del ${inicio} al ${fin}.`;
  const telefono = "505XXXXXXXX"; // TU número real aquí
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
  cerrarModal();
}
