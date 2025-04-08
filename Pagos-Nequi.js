


const numeroNequi = "3183866119"; // ← Reemplaza por tu número real
const modal = document.getElementById("modal");
const titulo = document.getElementById("modalTitulo");
const mensaje = document.getElementById("modalMensaje");
const opciones = document.getElementById("modalOpciones");

function mostrarModal(tituloTexto, mensajeTexto, botonesHTML = '') {
  titulo.textContent = tituloTexto;
  mensaje.textContent = mensajeTexto;
  opciones.innerHTML = botonesHTML;
  modal.classList.add("show");
}

function cerrarModal() {
  modal.classList.remove("show");
}

function pagarConMercadoPago() {
  const monto = document.getElementById('monto').value;
  if (!monto || monto <= 0) {
    mostrarModal("Monto inválido", "Por favor ingresa un valor válido.");
    return;
  }

  const link = "https://link.mercadopago.com.co/tecnojmp"; // ← Reemplaza por tu link real
  window.open(link, "_blank");
}

function mostrarModalNequi() {
  const monto = document.getElementById('monto').value;
  if (!monto || monto <= 0) {
    mostrarModal("Monto inválido", "Por favor ingresa un valor válido.");
    return;
  }

  mostrarModal(
    "Paga por Nequi",
    `Envía ${monto} COP al número ${numeroNequi}`,
    `<button class="copy-btn" onclick="copiarNequi()">Copiar número</button>`
  );
}

function copiarNequi() {
  navigator.clipboard.writeText(numeroNequi).then(() => {
    mostrarModal("¡Copiado!", "El número ha sido copiado al portapapeles.");
  });
}

// Cierra el modal si se hace clic fuera del contenido
modal.addEventListener("click", function (e) {
if (e.target === modal) {
cerrarModal();
}
});

