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
    "1-hbn6Qtaxv1o-N47pjdRu0k4EMfC_L3Ehn9drrQL710/edit",
    '<i class="fas fa-wrench"></i>',
    "suspension"
  );
  add_form_link(
    "1Tl-q16Fi573Oi7m0DlaVmavEP_r8AQB61o0VL7F0MR8/edit",
    '<i class="fas fa-water"></i>',
    "aerodynamics"
  );
  add_form_link(
    "16iHh-0OOc-0-FK_MhQPEknDKHTIkxcpTLvL6K_bKTTI/edit",
    '<i class="fas fa-car-battery"></i>',
    "electric"
  );
  add_form_link(
    "16iHh-0OOc-0-FK_MhQPEknDKHTIkxcpTLvL6K_bKTTI/edit",
    '<i class="fas fa-laptop"></i>',
    "marketing"
  );
  add_form_link(
    "1pKjpmgwXd26Ke1kx2WT9EVx-YsKNdl_zZZ4AwWzbEJQ/edit",
    '<i class="fas fa-video"></i>',
    "electronics"
  );
};
