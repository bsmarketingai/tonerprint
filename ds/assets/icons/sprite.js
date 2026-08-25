/* Vloží ikonový sprite do dokumentu. Cesta se odvodí od umístění tohoto skriptu,
   takže funguje ze všech úrovní projektu. */
(function () {
  var self = document.currentScript && document.currentScript.src;
  var url = self ? self.replace(/sprite\.js.*$/, 'tp-icons.svg') : 'assets/icons/tp-icons.svg';
  fetch(url)
    .then(function (r) { return r.text(); })
    .then(function (svg) {
      var d = document.createElement('div');
      d.style.display = 'none';
      d.innerHTML = svg;
      document.body.insertBefore(d, document.body.firstChild);
      window.dispatchEvent(new CustomEvent('tp-sprite-ready'));
    })
    .catch(function () {});
})();
