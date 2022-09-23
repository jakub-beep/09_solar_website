const add_podcast = (row, source, name, date, station) => {
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
    1,
    "09_story",
    "Difficult story behind first electric cars",
    "03.02.22",
    "Afera"
  );
  add_podcast(2, "08_engines", "About engines", "20.01.22", "Afera");
  add_podcast(3, "07_legends", "Electric mythbusters", "20.12.21", "Afera");
  add_podcast(4, "06_eco", "Are Electric Cars Green?", "20.12.21", "Afera");
  add_podcast(5, "05_mans", "The Rise of the Klara", "20.12.21", "Afera");
  add_podcast(6, "04_rise", "Solar le Mans", "20.12.21", "Afera");
  add_podcast(7, "03_maxxx", "Electromobility_3", "07.12.18", "RMF MAXXX");
  add_podcast(8, "02_maxxx", "Electromobility_2", "31.11.18", "RMF MAXXX");
  add_podcast(9, "01_maxxx", "Electromobility", "14.10.18", "RMF MAXXX");
};
