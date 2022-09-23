const add_column_right = (department_name) => {
  column_right = document.createElement("div");
  column_right.className = "column-right";
  subtitle = document.createElement("div");
  subtitle.className = "subtitle";
  span = document.createElement("span");
  span.className = "lang";
  span.accessKey = "dep_" + "title_" + department_name;
  subtitle.appendChild(span);
  text = document.createElement("div");
  text.className = "text";
  span_2 = document.createElement("span");
  span_2.className = "lang";
  span_2.accessKey = "dep_" + department_name + "_areas";
  text.appendChild(span_2);
  areas = document.createElement("ul");
  areas.className = "areas";
  text_2 = document.createElement("div");
  text_2.className = "text";
  span_3 = document.createElement("span");
  span_3.className = "lang";
  span_3.accessKey = "dep_abilities";
  text_2.appendChild(span_3);
  skills = document.createElement("ul");
  skills.className = "skills";
  for (let i = 1; i < 6; i++) {
    li = document.createElement("li");
    span_4 = document.createElement("span");
    span_4.className = "lang";
    span_4.accessKey = "dep_" + department_name + "_area_" + i;
    li.appendChild(span_4);
    areas.appendChild(li);

    li_2 = document.createElement("li");
    span_5 = document.createElement("span");
    span_5.className = "lang";
    span_5.accessKey = "dep_" + department_name + "_ability_" + i;
    li_2.appendChild(span_5);
    skills.appendChild(li_2);
  }
  column_right.appendChild(subtitle);
  column_right.appendChild(text);
  column_right.appendChild(areas);
  column_right.appendChild(text_2);
  column_right.appendChild(skills);
  parent_department = document.getElementById("department_" + department_name);
  parent_department.appendChild(column_right);
};

const add_column_left = (department_name) => {
  column_left = document.createElement("div");
  column_left.className = "column-left";
  img = document.createElement("img");
  img.src = "images/departments/" + department_name + ".png";
  img.alt = "PUT SOLAR DYNAMICS member during " + department_name + " job.";
  column_left.appendChild(img);
  parent_department = document.getElementById("department_" + department_name);
  parent_department.appendChild(column_left);
};

const add_columns = (department_name) => {
  add_column_left(department_name);
  add_column_right(department_name);
};
