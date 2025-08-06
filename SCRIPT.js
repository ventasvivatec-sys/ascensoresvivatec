function mostrar(seccionId) {
  const secciones = document.querySelectorAll('.contenido');
  secciones.forEach(sec => sec.style.display = 'none');
  document.getElementById(seccionId).style.display = 'block';
}