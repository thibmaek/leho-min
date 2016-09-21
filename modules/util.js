export default $ = selector => {
  let result;

  if(selector === 'body') {
    return document.body;
  } else if(selector === 'head') {
    return document.head;
  } else if(/^[\#.]?[\w-]+$/.test(selector)) {

    if(selector[0] === '#') {
      return document.getElementById(selector.slice(1));
    } else if(selector[0] === '.') {
      result = document.getElementsByClassName(selector.slice(1));
    } else{ result = document.getElementsByTagName(selector);}

  } else {result = document.querySelectorAll(selector);}


  let elements = [...result];
  if(elements.length === 1) return elements[0];
  return elements;
};
