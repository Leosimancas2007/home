document.addEventListener("DOMContentLoaded", function () {
  const botonesComprar = document.querySelectorAll(".producto button");

  botonesComprar.forEach((boton) => {
    boton.addEventListener("click", () => {
      const producto = boton.parentElement.querySelector("h3").innerText;
      alert(`¡Has agregado "${producto}" al carrito!`);
    });
  });
});

