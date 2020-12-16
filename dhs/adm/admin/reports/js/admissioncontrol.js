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

$(document).ready(function(){
getAllData();
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
vdt = snap.child("vdt").val();
vidt = snap.child("vidt").val();
viidt = snap.child("viidt").val();
viiidt = snap.child("viiidt").val();
ixdt = snap.child("ixdt").val();
vactive = snap.child("vactive").val();
viactive = snap.child("viactive").val();
viiactive = snap.child("viiactive").val();
viiiactive = snap.child("viiiactive").val();
ixactive = snap.child("ixactive").val();



$('#vst').val(changedate(vst));
$('#ved').val(changedate(ved));
$('#vdt').val(vdt);
$('#vactive').val(vactive);

$('#vist').val(changedate(vist));
$('#vied').val(changedate(vied));
$('#vidt').val(vidt);
$('#viactive').val(viactive);

$('#viist').val(changedate(viist));
$('#viied').val(changedate(viied));
$('#viidt').val(viidt);
$('#viiactive').val(viiactive);

$('#viiist').val(changedate(viiist));
$('#viiied').val(changedate(viiied));
$('#viiidt').val(viiidt);
$('#viiiactive').val(viiiactive);

$('#ixst').val(changedate(ixst));
$('#ixed').val(changedate(ixed));
$('#ixdt').val(ixdt);
$('#ixactive').val(ixactive);

});
}


function changedate(db){
	var d = new Date(Number(db));
  var finalMinute = d.getMinutes();
  var finalHour = d.getHours();
  if(Number(d.getHours()) < 10){
    finalHour = "0" + d.getHours();
  }

  if(Number(d.getMinutes()) < 10){
    finalMinute = "0" + d.getMinutes();
  }
  var finaldate = d.getUTCFullYear() + "-" + Number(d.getUTCMonth()+1) + "-" + d.getUTCDate() + "T" + finalHour + ":" + finalMinute;
  return finaldate;
}

function updateTiming(cls) {
  if(cls == "v"){
    firebase.database().ref("mpadmin/schedulevtoix/all").update({vst:changeToTime($('#' + cls + 'st').val()),ved:changeToTime($('#' + cls + 'ed').val()),vdt:$('#' + cls + 'dt').val(),vactive:$('#' + cls + 'active').val()});
  }
  if(cls == "vi"){
    firebase.database().ref("mpadmin/schedulevtoix/all").update({vist:changeToTime($('#' + cls + 'st').val()),vied:changeToTime($('#' + cls + 'ed').val()),vidt:$('#' + cls + 'dt').val(),viactive:$('#' + cls + 'active').val()});
  }
  if(cls == "vii"){
    firebase.database().ref("mpadmin/schedulevtoix/all").update({viist:changeToTime($('#' + cls + 'st').val()),viied:changeToTime($('#' + cls + 'ed').val()),viidt:$('#' + cls + 'dt').val(),viiactive:$('#' + cls + 'active').val()});
  }
  if(cls == "viii"){
    firebase.database().ref("mpadmin/schedulevtoix/all").update({viiist:changeToTime($('#' + cls + 'st').val()),viiied:changeToTime($('#' + cls + 'ed').val()),viiidt:$('#' + cls + 'dt').val(),viiiactive:$('#' + cls + 'active').val()});
  }
  if(cls == "ix"){
    firebase.database().ref("mpadmin/schedulevtoix/all").update({ixst:changeToTime($('#' + cls + 'st').val()),ixed:changeToTime($('#' + cls + 'ed').val()),ixdt:$('#' + cls + 'dt').val(),ixactive:$('#' + cls + 'active').val()});
  }
}

function changeToTime(tme){
  var d = new Date(tme);
  var n = d.getTime();
  return n;
}