const add_row_partners = (partner_1, partner_2, partner_3, partner_4) => {
  table = document.getElementById("partners");
  const table_row = table.insertRow();
  const col1 = table_row.insertCell(0);
  const col2 = table_row.insertCell(1);
  const col3 = table_row.insertCell(2);
  const col4 = table_row.insertCell(3);
  col1.appendChild(partner_1);
  col2.appendChild(partner_2);
  col3.appendChild(partner_3);
  col4.appendChild(partner_4);
  table.appendChild(table_row);
};
