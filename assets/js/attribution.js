function initAttribution() {
  function addAttribution() {
    var attrTemplate = document.querySelector('#attribution');

    if (!attrTemplate && addAttributionRetries > 0) {
      addAttributionRetries--;
      setTimeout(addAttribution, 100);
      return;
    } else if (addAttributionRetries === 0) {
      return;
    }

    var attrContainer = document.querySelector('.attribution');
    var node = document.importNode(attrTemplate.content, true)
    attrContainer.appendChild(node);
  }

  let addAttributionRetries = 10;
  setTimeout(addAttribution, 100);
}
