const add_reasons = () => {
  const add_reason = (reason_access_key, bolded_access_key, text) => {
    const li_element = document.createElement("li");
    const span = document.createElement("span");
    span.className = "fa-li";
    const span_2 = document.createElement("span");
    span.innerHTML = '<i class="fas fa-sun"></i>';
    span_2.className = "lang";
    span_2.accessKey = reason_access_key;
    const span_3 = document.createElement("span");
    span_3.className = "lang";
    span_3.accessKey = bolded_access_key;
    span_3.id = "bolded";
    li_element.appendChild(span);
    li_element.appendChild(span_2);
    li_element.appendChild(span_3);
    if (text != "") {
      const span_4 = document.createElement("span");
      span_4.className = "lang";
      span_4.accessKey = text;
      li_element.appendChild(span_4);
    }
    reasons_ul = document.getElementById("fa-ul");
    reasons_ul.appendChild(li_element);
  };
  // add_finally = () => {
  //   const div = document.createElement("div");
  //   div.className = "sub-title";
  //   div.innerHTML = "and finally...";
  //   reasons_ul = document.getElementById("fa-ul");
  //   reasons_ul.appendChild(div);
  // };

  add_reason("hear", "fit", "");
  add_reason("feeling", "not_enough", "");
  add_reason("fantasy", "exploded_career", "graduation");
  add_reason("sacrifice", "addicted", "designing");
  // add_finally();
  add_reason("build", "solar_cars", "with");
};
