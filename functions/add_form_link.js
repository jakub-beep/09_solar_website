const add_form_link = (href, img, accesskey) => {
  const li_element = document.createElement("li");
  const span = document.createElement("span");
  const span2 = document.createElement("span");
  const span3 = document.createElement("span");
  span3.className = "lang";
  span3.accessKey = accesskey;
  span3.id = "department_name";
  const link = document.createElement("a");
  span.className = "fa-li";
  span.innerHTML = img;
  link.href = "https://docs.google.com/forms/d/" + href;
  link.target = "_blank";
  const span4 = document.createElement("span");
  span4.className = "lang";
  span4.accessKey = "apply";
  span2.appendChild(span4);
  link.appendChild(span2);
  li_element.appendChild(span);
  li_element.appendChild(span3);
  li_element.appendChild(link);
  parent_ul = document.getElementById("fa-ul-form-link");
  parent_ul.appendChild(li_element);
};

const add_form_links = () => {
  add_form_link(
    "e/1FAIpQLScE60wJbN3ke7vg6U-Vv9UIliXnq-hu8RxBNSofwbcBPwAvAw/viewform",
    '<i class="fas fa-wrench"></i>',
    "suspension"
  );
  add_form_link(
    "e/1FAIpQLSdr8N9JMHKp2-N-Y8vkLOLEZBRH0atR3PZEZlNHGK1dezG93A/viewform",
    '<i class="fas fa-water"></i>',
    "aerodynamics"
  );
  add_form_link(
    "e/1FAIpQLSfGQ20STar2K9LXZBeOd9kidn7sr1a8XhCNquX7s4zKH90-0Q/viewform",
    '<i class="fas fa-car-battery"></i>',
    "electric"
  );
  add_form_link(
    "1H_Ofbv2eZuvniEFc2GTmOdcAJ6fFKI6Xj67isvo6MPg/edit?fbclid=IwAR0vkr2Q-hdHd6rxFNW6C9PbRITXtQgl9BAZdqlgi_nNT1zkeV_FMAhKELA",
    '<i class="fas fa-laptop"></i>',
    "marketing"
  );
  add_form_link(
    "e/1FAIpQLSfGQ20STar2K9LXZBeOd9kidn7sr1a8XhCNquX7s4zKH90-0Q/viewform",
    '<i class="fas fa-video"></i>',
    "electronics"
  );
};
