document.addEventListener("DOMContentLoaded", function () {
  const commentSection = document.getElementById("comentarios");

  function agregarComentario(nombre, comentario) {
    const comentarioElemento = document.createElement("div");
    comentarioElemento.classList.add("comentario");
    comentarioElemento.innerHTML = `<strong>${nombre}:</strong> ${comentario}`;
    commentSection.appendChild(comentarioElemento);
  }

  const commentForm = document.getElementById("comment-form");
  commentForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const comentario = document.getElementById("comentario").value;
    agregarComentario(nombre, comentario);
    commentForm.reset();
  });
});
