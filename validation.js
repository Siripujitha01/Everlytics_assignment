let create = document.getElementById("create");
let cancel = document.getElementById("cancel");
function validate(s,s1) {
  console.log(s)
  const format = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
  if (
    s === "" ||
    s.length < 5 ||
    s[0] === "_" ||
    s[0] === "-" ||
    s[0] === "+" ||
    format.test(s)
  ) {
    document.getElementById(s1).style.visibility="visible"
  }
  else{
    document.getElementById(s1).style.visibility="hidden"
  }
}
create.addEventListener("click", function (e) {
  e.preventDefault();
  validate(document.getElementById("ics").value,"isc");
  validate(document.getElementById("re").value,"er");
  validate(document.getElementById("gsc").value,"gcs");
  validate(document.getElementById("gbn").value,"gnb");
  validate(document.getElementById("pi").value,"ip");
  validate(document.getElementById("pn").value,"np");
});
cancel.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("ics").value = "";
  document.getElementById("re").value = "";
  document.getElementById("gsc").value = "";
  document.getElementById("gbn").value = "";
  document.getElementById("pi").value = "";
  document.getElementById("pn").value = "";
});
