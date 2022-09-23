const add_slide = (slide_no, description, car, extension) => {
  slide = document.createElement("div");
  slide.id = "slide-" + slide_no;
  img = document.createElement("img");
  img.src = "images/cars/" + car + "_" + slide_no + extension;
  if (car === "vaclav") {
    description = "Vaclav solar car visualization - " + description;
  } else if (car === "klara") {
    description = "Klara solar car - " + description;
  }
  img.alt = description;
  img.className = "slide_img";
  slide.appendChild(img);
  parent_slides = document.getElementById(car + "_slides");
  parent_slides.appendChild(slide);
};
const add_slides = () => {
  add_slide(1, "iLumen 2021", "klara", ".jpg");
  add_slide(2, "workshop of PUT SOLAR DYNAMICS", "klara", ".jpg");
  add_slide(3, "iLumen 2021 - with the team", "klara", ".jpg");
  add_slide(4, "rear view - campus of PUT", "klara", ".png");
  add_slide(5, "visualization - front isometric view", "klara", ".png");
  add_slide(6, "visualization - back isometric view", "klara", ".png");
  add_slide(7, "technical drawing", "klara", ".png");

  add_slide(1, "isometric view", "vaclav", ".png");
  add_slide(2, "side view", "vaclav", ".png");
  add_slide(3, "rear-left view", "vaclav", ".png");
  add_slide(4, "side-rear view", "vaclav", ".png");
  add_slide(5, "top view", "vaclav", ".png");
};
