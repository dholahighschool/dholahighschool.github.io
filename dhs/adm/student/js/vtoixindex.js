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
  window.open('vtoix.html?class=' + document.getElementById('classApplyFor').value);
}


$(document).ready(function(){

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
vdt = snap.child("vdt").val();
vidt = snap.child("vidt").val();
viidt = snap.child("viidt").val();
viiidt = snap.child("viiidt").val();
ixdt = snap.child("ixdt").val();

$('#vst').html(changedate(vst));
$('#vist').html(changedate(vist));
$('#viist').html(changedate(viist));
$('#viiist').html(changedate(viiist));
$('#ixst').html(changedate(ixst));

$('#ved').html(changedate(ved));
$('#vied').html(changedate(vied));
$('#viied').html(changedate(viied));
$('#viiied').html(changedate(viiied));
$('#ixed').html(changedate(ixed));

$('#vdt').html("<i>" + vdt + "</i>");
$('#vidt').html("<i>" + vidt + "</i>");
$('#viidt').html("<i>" + viidt + "</i>");
$('#viiidt').html("<i>" + viiidt + "</i>");
$('#ixdt').html("<i>" + ixdt + "</i>");

});
});

function changedate(db){
	var d = new Date(Number(db));
	var finaldate = "<b>" + d.getUTCDate() + "/" + Number(d.getUTCMonth()+1) + "/" + d.getUTCFullYear() + "</b><br><i>" + d.toLocaleTimeString() + "</i>";
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