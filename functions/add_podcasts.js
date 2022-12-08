const add_podcast = (row = -1, source, name, date, station) => {
  const table = document.getElementById("podcasts-table");
  const table_row = table.insertRow(row);
  const col1 = table_row.insertCell(0);
  const col2 = table_row.insertCell(1);
  const col3 = table_row.insertCell(2);
  const col4 = table_row.insertCell(3);
  const audio = document.createElement("audio");
  audio.controls = "controls";
  audio.src = "audio/" + source + ".mp3";
  audio.type = "audio/mpeg";
  col1.appendChild(audio);
  col1.id = "link";
  col2.innerHTML = name;
  col2.id = "topic";
  col3.innerHTML = date;
  col3.id = "date";
  col4.innerHTML = station;
  col4.id = "station";
};

const add_podcasts = () => {
  add_podcast(
    -1,
    "28_autonomic_bus",
    "Autonomiczny autobus",
    "08.12.22",
    "Afera"
  );
  add_podcast(
    -1,
    "27_winter",
    "Jak przygotować auto na zimę?",
    "01.12.22",
    "Afera"
  );
  add_podcast(-1, "26_ilumen", "European Solar Challenge", "17.11.22", "Afera");
  add_podcast(-1, "25_formula_e_2", "Formula E cd.", "10.11.22", "Afera");
  add_podcast(
    -1,
    "24_current",
    "O prądzie i jego pochodzeniu",
    "01.09.22",
    "Afera"
  );
  add_podcast(-1, "23_water", "Ładowanie elektryków wodą", "09.06.22", "Afera");
  add_podcast(-1, "22_types", "Rodzaje aut i oznaczeń", "26.05.22", "Afera");
  add_podcast(-1, "19_future", "Przyszłość motoryzacji", "12.05.22", "Afera");
  add_podcast(-1, "21_batteries", "Wymienne baterie", "28.04.22", "Afera");
  add_podcast(
    -1,
    "20_cheapest",
    "Ranking najtańśzych elektryków",
    "07.07.22",
    "Afera"
  );
  add_podcast(-1, "18_hybrid", "Auta hybrydowe", "21.04.22", "Afera");
  add_podcast(
    -1,
    "17_capacitor",
    "Superkondensatory i grafen",
    "14.04.22",
    "Afera"
  );
  add_podcast(-1, "16_autonomous", "Pojazdy autonomiczne", "07.04.22", "Afera");
  add_podcast(-1, "15_history", "Historia elektryków", "31.03.22", "Afera");
  add_podcast(-1, "14_formula_e", "Formuła E", "24.03.22", "Afera");
  add_podcast(
    -1,
    "13_electric_cars",
    "Pojazdy elektryczne",
    "31.03.22",
    "Afera"
  );
  add_podcast(-1, "12_hydro_cars", "Pojazdy wodorowe", "17.03.22", "Afera");
  add_podcast(
    -1,
    "11_failure",
    "Gdy elektryka usterka dotyka",
    "03.03.22",
    "Afera"
  );
  add_podcast(
    -1,
    "10_eco_drive",
    "Jak jeździć eko i nie zbankrutować?",
    "17.02.22",
    "Afera"
  );
  add_podcast(
    -1,
    "09_story",
    "Trudna historia pierwszego elektryka",
    "03.02.22",
    "Afera"
  );
  add_podcast(-1, "08_engines", "Co napędza elektryki?", "20.01.22", "Afera");
  add_podcast(
    -1,
    "07_legends",
    "Pogromcy elektrycznych mitów",
    "06.01.22",
    "Afera"
  );
  add_podcast(-1, "06_eco", "Czy elektryki są eko?", "23.12.21", "Afera");
  add_podcast(-1, "05_mans", "Solar le Mans", "09.12.21", "Afera");
  add_podcast(-1, "04_rise", "The Rise of the Klara", "25.11.21", "Afera");
  add_podcast(-1, "03_maxxx", "Electromobility_3", "07.12.18", "RMF MAXXX");
  add_podcast(-1, "02_maxxx", "Electromobility_2", "31.11.18", "RMF MAXXX");
  add_podcast(-1, "01_maxxx", "Electromobility", "14.10.18", "RMF MAXXX");
};
