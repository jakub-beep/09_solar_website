const add_parameter = (parameter, value, accessKey, table_id) => {
  const table = document.getElementById(table_id);
  const table_row = table.insertRow();
  const col1 = table_row.insertCell(0);
  const col2 = table_row.insertCell(1);
  const span = document.createElement("span");
  const value_holder = document.createElement("div");
  col1.className = "left";
  col2.className = "right";
  value_holder.innerHTML = value;
  span.className = "lang";
  span.accessKey = accessKey;
  span.innerHTML = parameter;
  col1.appendChild(span);
  col2.appendChild(value_holder);
};
const add_parameters = () => {
  // KLARA
  add_parameter("Height [mm]", 1160, "height", "parameters_klara");
  add_parameter("Width [mm]", 2000, "width", "parameters_klara");
  add_parameter("Length [mm]", 4500, "length", "parameters_klara");
  add_parameter("Track [mm]", 1500, "track", "parameters_klara");
  add_parameter("Wheel base [mm]", 2700, "wheel_base", "parameters_klara");
  add_parameter("Turning radius [m]", 8, "turning_radius", "parameters_klara");
  add_parameter(
    "Ground Clearence [mm]",
    115,
    "ground_clear",
    "parameters_klara"
  );
  add_parameter("Weight [kg]", 750, "weight", "parameters_klara");
  add_parameter("Maximal speed [km/h]", 85, "max", "parameters_klara");
  add_parameter("Cx coefficient", 0.17, "cx", "parameters_klara");
  add_parameter(
    "Suspension",
    "Double wishbone",
    "susp_par",
    "parameters_klara"
  );
  add_parameter("Motors", "2 BLDC in hubs", "motors", "parameters_klara");
  add_parameter("Roll Cage", "25CrMo4 stel", "roll_cage", "parameters_klara");
  add_parameter("Body", "Carbon laminates", "body", "parameters_klara");
  add_parameter("Roll Cage", "25CrMo4 steel", "roll_cage", "parameters_klara");
  add_parameter("Seats", 2, "seats", "parameters_klara");
  // VACLAV
  add_parameter("Height [mm]", "TBA", "height", "parameters_vaclav");
  add_parameter("Width [mm]", "TBA", "width", "parameters_vaclav");
  add_parameter("Length [mm]", 4200, "length", "parameters_vaclav");
  add_parameter("Track [mm]", 1500, "track", "parameters_vaclav");
  add_parameter("Wheel base [mm]", 2700, "wheel_base", "parameters_vaclav");
  add_parameter(
    "Turning radius [m]",
    "TBA",
    "turning_radius",
    "parameters_vaclav"
  );
  add_parameter(
    "Ground Clearence [mm]",
    "TBA",
    "ground_clear",
    "parameters_vaclav"
  );
  add_parameter("Weight [kg]", "TBA", "weight", "parameters_vaclav");
  add_parameter("Maximal speed [km/h]", "TBA", "max", "parameters_vaclav");
  add_parameter("Cx coefficient", "TBA", "cx", "parameters_vaclav");
  add_parameter(
    "Suspension",
    "Double wishbone",
    "susp_par",
    "parameters_vaclav"
  );
  add_parameter("Motors", "2 BLDC in hubs", "motors", "parameters_vaclav");
  add_parameter("Body", "Carbon laminates", "body", "parameters_vaclav");
  add_parameter("Roll Cage", "25CrMo4 stel", "roll_cage", "parameters_vaclav");
  add_parameter("Seats", 4, "seats", "parameters_vaclav");
};
