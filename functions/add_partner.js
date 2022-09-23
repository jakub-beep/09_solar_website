const add_partner = (href, sponsor_name) => {
  link = document.createElement("a");
  img = document.createElement("img");
  link.href = href;
  img.class = sponsor_name;
  img.src = "images/partners/" + sponsor_name + ".png";
  img.alt = sponsor_name + " logo";
  link.appendChild(img);
  return link;
};
