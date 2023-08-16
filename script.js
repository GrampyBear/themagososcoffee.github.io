// Script para la funcionalidad de comentarios
document.addEventListener("DOMContentLoaded", function () {
  const commentSection = document.getElementById("comentarios");

  // Función para agregar un nuevo comentario
  function agregarComentario(nombre, comentario) {
    const comentarioElemento = document.createElement("div");
    comentarioElemento.classList.add("comentario");
    comentarioElemento.innerHTML = `<strong>${nombre}:</strong> ${comentario}`;
    commentSection.appendChild(comentarioElemento);
  }

  // Manejar el envío del formulario de comentarios
  const commentForm = document.getElementById("comment-form");
  commentForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const comentario = document.getElementById("comentario").value;
    agregarComentario(nombre, comentario);
    commentForm.reset();
  });
});
