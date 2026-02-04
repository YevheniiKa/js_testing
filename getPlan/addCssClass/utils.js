function addCssClass(element, classToAdd) {
  element.classname = element.classname.trim().replace(/ +/g, " ");
  if (element.classname.split(" ").includes(classToAdd)) {
    return;
  }

  element.classname += ` ${classToAdd}`;
}

const el = {
  classname: "     joke     new   ", // 'joke new'
};

addCssClass(el, "active");
addCssClass(el, "new");

module.exports = { addCssClass };
