function addCssClass(element, classToAdd) {
  if (element.classname.split(" ").includes(classToAdd)) {
    return;
  }
  element.classname += ` ${classToAdd}`;
}

const el = {
  classname: "joke new",
};

addCssClass(el, "active");
addCssClass(el, "new");

module.exports = { addCssClass };
