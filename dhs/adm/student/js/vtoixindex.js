var vst = "";
var vist = "";
var viist = "";
var viiist = "";
var ixst = "";

var ved = "";
var vied = "";
var viied = "";
var viiied = "";
var ixed = "";

var vdt = "";
var vidt = "";
var viidt = "";
var viiidt = "";
var ixdt = "";

function classchange(clv) {

var d = new Date();
  var x = d.getTime();
  var y = 0;
  var z = 0;
  if(clv.value == 'v'){
  	y = vst;
  	z = ved;
  }
  else if(clv.value == 'vi'){
  	y = vist;
  	z = vied;
  }
  else if(clv.value == 'vii'){
  	y = viist;
  	z = viied;
  }
  else if(clv.value == 'viii'){
  	y = viiist;
  	z = viiied;
  }
  else if(clv.value == 'ix'){
  	y = ixst;
  	z = ixed;
  }
  
if(+x >= +y && +x <= +z)
	{
	document.getElementById("newregister").style.display = "block";
	//window.open("student/index.html");
	}
else{
	document.getElementById("newregister").style.display = "none";
	swal("Dhola High School","Admission Portal for class " + clv.value.toUpperCase() + " is not available now. Check admission Schedule","info");
}
}
function openForm(){
  window.open('vtoix.html?class=' + document.getElementById('classApplyFor').value + "=" + (document.getElementById(document.getElementById('classApplyFor').value + 'dt').innerHTML).replace("<i>","").replace("</i>","").replace("<br>"," "));
}


$(document).ready(function(){
getAllData();
getChangedData();

});

function getAllData(){
  var rootRef = firebase.database().ref('mpadmin/schedulevtoix');

rootRef.on("child_added", snap => {

vst = snap.child("vst").val();
vist = snap.child("vist").val();
viist = snap.child("viist").val();
viiist = snap.child("viiist").val();
ixst = snap.child("ixst").val();
ved = snap.child("ved").val();
vied = snap.child("vied").val();
viied = snap.child("viied").val();
viiied = snap.child("viiied").val();
ixed = snap.child("ixed").val();
vdt = snap.child("vdt").val().split("\n").join("<br>");
vidt = snap.child("vidt").val().split("\n").join("<br>");
viidt = snap.child("viidt").val().split("\n").join("<br>");
viiidt = snap.child("viiidt").val().split("\n").join("<br>");
ixdt = snap.child("ixdt").val().split("\n").join("<br>");
vactive = snap.child("vactive").val();
viactive = snap.child("viactive").val();
viiactive = snap.child("viiactive").val();
viiiactive = snap.child("viiiactive").val();
ixactive = snap.child("ixactive").val();


if(vactive == "Yes"){
$('#vst').html(changedate(vst));
$('#ved').html(changedate(ved));
$('#vdt').html("<i>" + vdt + "</i>");
}
else{
$('#vst').html("-");
$('#ved').html("-");
$('#vdt').html("-");
document.getElementById("classApplyFor").options[1].disabled = true;
}
if(viactive == "Yes"){
$('#vist').html(changedate(vist));
$('#vied').html(changedate(vied));
$('#vidt').html("<i>" + vidt + "</i>");
}
else{
$('#vist').html("-");
$('#vied').html("-");
$('#vidt').html("-");
document.getElementById("classApplyFor").options[2].disabled = true;
}
if(viiactive == "Yes"){
$('#viist').html(changedate(viist));
$('#viied').html(changedate(viied));
$('#viidt').html("<i>" + viidt + "</i>");
}
else{
$('#viist').html("-");
$('#viied').html("-");
$('#viidt').html("-");
document.getElementById("classApplyFor").options[3].disabled = true;
}

if(viiiactive == "Yes"){
$('#viiist').html(changedate(viiist));
$('#viiied').html(changedate(viiied));
$('#viiidt').html("<i>" + viiidt + "</i>");
}
else{
$('#viiist').html("-");
$('#viiied').html("-");
$('#viiidt').html("-");
document.getElementById("classApplyFor").options[4].disabled = true;
}

if(ixactive == "Yes"){
$('#ixst').html(changedate(ixst));
$('#ixed').html(changedate(ixed));
$('#ixdt').html("<i>" + ixdt + "</i>");
}
else{
$('#ixst').html("-");
$('#ixed').html("-");
$('#ixdt').html("-");
document.getElementById("classApplyFor").options[5].disabled = true;
}

});
}
function getChangedData(){
  var rootRef = firebase.database().ref('mpadmin/schedulevtoix');

rootRef.on("child_changed", snap => {

vst = snap.child("vst").val();
vist = snap.child("vist").val();
viist = snap.child("viist").val();
viiist = snap.child("viiist").val();
ixst = snap.child("ixst").val();
ved = snap.child("ved").val();
vied = snap.child("vied").val();
viied = snap.child("viied").val();
viiied = snap.child("viiied").val();
ixed = snap.child("ixed").val();
vdt = snap.child("vdt").val().split("\n").join("<br>");
vidt = snap.child("vidt").val().split("\n").join("<br>");
viidt = snap.child("viidt").val().split("\n").join("<br>");
viiidt = snap.child("viiidt").val().split("\n").join("<br>");
ixdt = snap.child("ixdt").val().split("\n").join("<br>");
vactive = snap.child("vactive").val();
viactive = snap.child("viactive").val();
viiactive = snap.child("viiactive").val();
viiiactive = snap.child("viiiactive").val();
ixactive = snap.child("ixactive").val();


if(vactive == "Yes"){
$('#vst').html(changedate(vst));
$('#ved').html(changedate(ved));
$('#vdt').html("<i>" + vdt + "</i>");
document.getElementById("classApplyFor").options[1].disabled = false;
}
else{
$('#vst').html("-");
$('#ved').html("-");
$('#vdt').html("-");
document.getElementById("classApplyFor").options[1].disabled = true;
}
if(viactive == "Yes"){
$('#vist').html(changedate(vist));
$('#vied').html(changedate(vied));
$('#vidt').html("<i>" + vidt + "</i>");
document.getElementById("classApplyFor").options[2].disabled = false;
}
else{
$('#vist').html("-");
$('#vied').html("-");
$('#vidt').html("-");
document.getElementById("classApplyFor").options[2].disabled = true;
}
if(viiactive == "Yes"){
$('#viist').html(changedate(viist));
$('#viied').html(changedate(viied));
$('#viidt').html("<i>" + viidt + "</i>");
document.getElementById("classApplyFor").options[3].disabled = false;
}
else{
$('#viist').html("-");
$('#viied').html("-");
$('#viidt').html("-");
document.getElementById("classApplyFor").options[3].disabled = true;
}

if(viiiactive == "Yes"){
$('#viiist').html(changedate(viiist));
$('#viiied').html(changedate(viiied));
$('#viiidt').html("<i>" + viiidt + "</i>");
document.getElementById("classApplyFor").options[4].disabled = false;
}
else{
$('#viiist').html("-");
$('#viiied').html("-");
$('#viiidt').html("-");
document.getElementById("classApplyFor").options[4].disabled = true;
}

if(ixactive == "Yes"){
$('#ixst').html(changedate(ixst));
$('#ixed').html(changedate(ixed));
$('#ixdt').html("<i>" + ixdt + "</i>");
document.getElementById("classApplyFor").options[5].disabled = false;
}
else{
$('#ixst').html("-");
$('#ixed').html("-");
$('#ixdt').html("-");
document.getElementById("classApplyFor").options[5].disabled = true;
}


});
}

function changedate(db){
	var d = new Date(Number(db));
	var finaldate = "<b>" + d.getDate() + "/" + Number(d.getMonth()+1) + "/" + d.getFullYear() + "</b><br><i>" + d.toLocaleTimeString() + "</i>";
	return finaldate;
}



function dtchk() {
var d = new Date();
  var x = d.getTime();
  
  var n = new Date("2020-01-20 10:00:00");
  var y = n.getTime();
  
  var m = new Date("2020-01-22 23:59:00");
  var z = m.getTime();
  
if(+x >= +y && +x <= +z)
	{
	swal("Dhola High School","Enter Access Key Here:", {
    content: {
    element: "input",
    attributes: {
     placeholder: "Type access key",
     type: "password",
    },
  },
})
  .then((value) => {

  if (value != null) {
    if (value == window.atob("YWRtczIwMjBAZGhz")){
      window.open("student/index.html");
  }
  else{
  swal("Dhola High School","You are not authorized!","error");
  window.open("../404/index.html");
  }
  }
});
	//window.open("student/index.html");
	}
else{swal("Dhola High School","Admission Portal will be available from 20th January, 2020 at 10:00 AM till 22nd January, 2020 only for permitted candidates.","info");
}
}