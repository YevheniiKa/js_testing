function addCssClass(element, classToAdd) {
  const classes = new Set(element.classname.split(" "));

  classes.delete("");

  classes.add(classToAdd);

  element.classname = [...classes].join(" ");
}

const el = {
  classname: "   joke   joke    new  new    ", // 'joke new'
};

addCssClass(el, "active");
addCssClass(el, "new");

module.exports = { addCssClass };
