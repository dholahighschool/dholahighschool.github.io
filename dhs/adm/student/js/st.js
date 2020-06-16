
function arl() {
  var rootRef = firebase.database().ref('xi2020/ARTS/');

rootRef.on("child_added", snap => {

var cat = snap.child("prstream").val();
  ars = ars - 1;
  $('#seatlive').html("<center><b><i>Seats Available (LIVE): </i></b><br>Arts: <b>" + ars + "</b>&nbsp; Science: <b>" + scs + "</b>&nbsp; Commerce: <b>" + cms + "</b></center>");

});

}
function scl() {
  var rootRef = firebase.database().ref('xi2020/SCIENCE/');

rootRef.on("child_added", snap => {

var cat = snap.child("prstream").val();
  scs = scs - 1;
  $('#seatlive').html("<center><b><i>Seats Available (LIVE): </i></b><br>Arts: <b>" + ars + "</b>&nbsp; Science: <b>" + scs + "</b>&nbsp; Commerce: <b>" + cms + "</b></center>");

});

}
function cml() {
  var rootRef = firebase.database().ref('xi2020/COMMERCE/');

rootRef.on("child_added", snap => {

var cat = snap.child("prstream").val();
  cms = cms - 1;
  $('#seatlive').html("<center><b><i>Seats Available (LIVE): </i></b><br>Arts: <b>" + ars + "</b>&nbsp; Science: <b>" + scs + "</b>&nbsp; Commerce: <b>" + cms + "</b></center>");

});
}