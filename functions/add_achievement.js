const add_achievement = (date, accessKey) => {
  const table = document.getElementById("achievements");
  const table_row = table.insertRow();
  const col1 = table_row.insertCell(0);
  const col2 = table_row.insertCell(1);
  const col3 = table_row.insertCell(2);
  const span = document.createElement("span");
  span.className = "lang";
  span.accessKey = accessKey;
  col1.innerHTML = '<i class="fas fa-trophy fa-5x"></i>';
  col2.appendChild(span);
  col3.innerHTML = date;
};
