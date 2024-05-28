function str_del() {
  selection = window.getSelection().toString();

  var str = document.getElementById("elem").textContent;

  var start = str.indexOf(selection);
  var end = start + selection.length;
  var result = str.slice(0, start) + str.slice(end);
  console.log(result);

  document.getElementById("elem").innerHTML = result;
}
