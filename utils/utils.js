function addCssClass(element, classToAdd) {
  const classes = new Set(element.classname.split(" "));

  classes.delete("");

  classes.add(classToAdd);

  element.classname = [...classes].join(" ");
}

function removeCssClass(element, classToRemove) {
  const classes = new Set(element.classname.split(" "));
  classes.delete("");

  classes.delete(classToRemove);

  element.classname = [...classes].join(" ");
}
module.exports = { addCssClass, removeCssClass };
