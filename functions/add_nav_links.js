const add_nav_link = (href, text) => {
  const liElement = document.createElement("li");
  const link = document.createElement("a");
  const span = document.createElement("span");
  span.className = "lang";
  span.accessKey = text.toLowerCase();
  span.appendChild(document.createTextNode(text));
  link.href = href;
  link.className = "menu-btn";
  link.appendChild(span);
  liElement.appendChild(link);
  parent_list = document.getElementById("menu");
  parent_list.appendChild(liElement);
};
const add_nav_links = () => {
  add_nav_link("index.html", "Home");
  add_nav_link("team.html", "Team");
  add_nav_link("cars.html", "Cars");
  add_nav_link("departments.html", "Departments");
  add_nav_link("achievements.html", "Achievements");
  add_nav_link("career.html", "Career");
  add_nav_link("media.html", "Media");
  add_nav_link("partnership.html", "Partnership");
  add_nav_link("index.html#contact", "Contact");
};
