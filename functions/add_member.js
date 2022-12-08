const add_member = (photo, alt_text, name, department) => {
  const div = document.createElement("div");
  div.className = "column";

  const subdiv = document.createElement("div");
  subdiv.innerHTML = name;

  const img = document.createElement("img");
  path_photo = "images/team/" + photo;
  img.src = path_photo;
  img.alt = alt_text;

  div.appendChild(img);
  div.appendChild(subdiv);

  if (department == "row_0") {
    const span = document.createElement("span");
    span.innerHTML = alt_text;
    const lineBreak = document.createElement("br");
    subdiv.appendChild(lineBreak);
    subdiv.appendChild(span);
  }

  parent = document.getElementById(department);
  parent.appendChild(div);
};
const append_members = () => {
  add_member("antczak.jpg", "Aerodynamics member", "Weronika Antczak", "row_0");
  add_member("jasinski.jpg", "Suspension leader", "Jacek Jasiński", "row_0");
  add_member("gawin.jpg", "Electrician leader", "Michał Gawin", "row_0");
  add_member(
    "penczynska.jpg",
    "Promotion leader",
    "Natalia Penczyńska",
    "row_0"
  );
  add_member(
    "kwiatkowski.jpg",
    "Electronics leader",
    "Szymon Kwiatkowski",
    "row_0"
  );
  add_member(
    "penczynska.jpg",
    "Promotion member",
    "Natalia Penczyńska",
    "row_1"
  );
  add_member(
    "derewecka.jpg",
    "Promotion member",
    "Dominika Derewecka",
    "row_1"
  );
  add_member("wysocki.jpg", "Promotion member", "Andrzej Wysocki", "row_1");
  add_member(
    "bednarska.jpg",
    "Promotion member",
    "Patrycja Bednarska",
    "row_1"
  );
  add_member("nowak.png", "Promotion member", "Jakub Nowak", "row_1");
  add_member(
    "jaroszczuk.jpg",
    "Promotion member",
    "Zuzanna Jaroszczuk",
    "row_2"
  );
  add_member("anonymous.png", "Promotion member", "Aleksandra Jarysz", "row_2");
  add_member("anonymous.png", "Promotion member", "Julia Prochera", "row_2");
  add_member(
    "anonymous.png",
    "Promotion member",
    "Katarzyna Drobnikowska",
    "row_2"
  );
  add_member(
    "anonymous.png",
    "Promotion member",
    "Aleksandra Sawicka",
    "row_2"
  );
  add_member("anonymous.png", "Promotion member", "Julita Dominiak", "row_3");
  add_member("anonymous.png", "Promotion member", "Filip Staszak", "row_3");
  add_member("anonymous.png", "Promotion member", "Zofia Bielawska", "row_3");
  add_member("anonymous.png", "Promotion member", "Anna Zygmunciak", "row_3");
  add_member("anonymous.png", "Promotion member", "Jakub Ciepły", "row_3");

  add_member("jasinski.jpg", "Suspension member", "Jacek Jasiński", "row_4");
  add_member(
    "blazejewski.jpg",
    "Suspension member",
    "Marcel Błażejewski",
    "row_4"
  );
  add_member("dzioba.jpg", "Suspension member", "Piotr Dzioba", "row_4");
  add_member("gabor.jpg", "Suspension member", "Andrzej Gabor", "row_4");
  add_member("twardon.jpg", "Suspension member", "Tymon Twardoń", "row_4");
  add_member("anonymous.png", "Suspension member", "Barbara Kryś", "row_5");
  add_member("anonymous.png", "Suspension member", "Maciej Lebioda", "row_5");
  add_member("anonymous.png", "Suspension member", "Wojciech Błaszak", "row_5");
  add_member("anonymous.png", "Suspension member", "Krzysztof Wójcik", "row_5");
  add_member("anonymous.png", "Suspension member", "Łukasz Golec", "row_5");

  add_member("antczak.jpg", "Aerodynamics member", "Weronika Antczak", "row_6");
  add_member(
    "piekarzewicz.jpg",
    "Aerodynamics member",
    "Dawid Piekarzewicz",
    "row_6"
  );
  add_member("golawski.jpg", "Aerodynamics member", "Jan Goławski", "row_6");
  add_member("anonymous.png", "Aerodynamics member", "Jan Walczak", "row_6");
  add_member("anonymous.png", "Aerodynamics member", "Bartosz Łapacz", "row_6");

  add_member("gawin.jpg", "Electric member", "Michał Gawin", "row_8");
  add_member("sadlo.jpg", "Electric member", "Piotr Sadło", "row_8");
  add_member("jaronski.jpg", "Electric member", "Adrian Jaroński", "row_8");
  add_member("anonymous.png", "Electric member", "Dominik Chodor", "row_8");
  add_member("anonymous.png", "Electric member", "Kacper Kasprzak", "row_8");
  add_member("anonymous.png", "Electric member", "Marcin Stępniewski", "row_9");

  add_member(
    "kwiatkowski.jpg",
    "Electronics member",
    "Szymon Kwiatkowski",
    "row_10"
  );
  add_member("kasprzyk2.jpg", "Electronics member", "Paweł Kasprzyk", "row_10");
  add_member("kruszyk.jpg", "Electronics member", "Jakub Kruszyk", "row_10");
  add_member(
    "anonymous.png",
    "Electronics member",
    "Mateusz Czarnecki",
    "row_10"
  );

  add_member("laskowski.png", "Old guard", "Filip Laskowski", "row_11");
  add_member("warmbier.png", "Old guard", "Jarosław Warmbier", "row_11");
  add_member("klos.png", "Old guard", "Adam Kłos", "row_11");
  add_member("wytykowski.png", "Old guard", "Jakub Wytykowski", "row_11");
  add_member("taberski.png", "Old guard", "Mikołaj Taberski", "row_11");
  add_member("wachowski.png", "Old guard", "Paweł Wachowski", "row_12");
  add_member("gieregowski.png", "Old guard", "Konrad Gieregowski", "row_12");
  add_member("lis.png", "Old guard", "Weronika Lis", "row_12");
  add_member("winnicki.png", "Old guard", "Krzysztof Winnicki", "row_12");
  add_member("janas.png", "Old guard", "Adam Janas", "row_12");
  add_member("miedzinski.png", "Old guard", "Kamil Miedziński", "row_13");
  add_member("kujawski.jpg", "Old guard", "Maurycy Kujawski", "row_13");
  add_member("miazga.jpg", "Old guard", "Marcin Miazga", "row_13");
  add_member("czaja.jpg", "Electric member", "Paweł Czaja", "row_13");
  add_member("tonder.jpg", "Aero leader", "Eryk Tonder", "row_13");
};
