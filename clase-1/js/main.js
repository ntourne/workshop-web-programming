function displayDate() {
  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const fullDate = `${day}/${month}/${year}`;

  alert("Hoy es " + fullDate);
}
