// Initialize Firebase (ADD YOUR OWN DATA)
var streamid = "";
var appid = "";
var ars = 317;
var scs = 75;
var cms = 15;
var ffn = 0;
var arpcode = "";
var btnn = "#showmore";
var dtadmst = [];
var dtadmend = [];
var subadm = ["ARTS","SCIENCE","COMMERCE"];
// function appidset(){
// 	// var date = new Date();
// 	// var timestamp = date.getTime();
// 	// appid = timestamp;
//   document.getElementById("idset").innerHTML = "Your Application ID is: " + appid;
//   document.getElementById("appidsetval").value = appid;
// }

// Initialize Firebase (ADD YOUR OWN DATA)
function getusername(){
                var username= parseInt(sessionStorage.getItem("username"));
                return username;
            }
function getstream(){
                var stream= sessionStorage.getItem("stream");
                return stream;
            }
function getpassword(){
                var password= parseInt(sessionStorage.getItem("password"));
                // = str.substring(0, 4) + "-" + str.substring(4, 6) + "-" + str.substring(6, 8);
                return password;
            }
            uid = getusername();
            pswd = getpassword();
            streampath = getstream();
            flag=0;
var appid = uid;
document.getElementById("idset").innerHTML = "Application form of Application ID: <b>" + appid + "</b> is modified and updated.";

/*
function appidset(){
	var date = new Date();
	var timestamp = date.getTime();
	appid = timestamp;
  document.getElementById("idset").innerHTML = "Your Application ID is: " + appid;
  document.getElementById("appidsetval").value = appid;
}
*/
var config = {
  apiKey: "AIzaSyC5hD8l1JE0G97zlflv8R8UZ4vcDv7JcsU",
    authDomain: "admission-2020.firebaseapp.com",
    databaseURL: "https://admission-2020.firebaseio.com",
    projectId: "admission-2020",
    storageBucket: "admission-2020.appspot.com",
    messagingSenderId: "319954780627",
    appId: "1:319954780627:web:e7619e9df08e54d703af26",
    measurementId: "G-K3CT148EJR"

};
firebase.initializeApp(config);



/*-------------------------------------*/


$(document).ready(function(){
console.log('xi2025/' + streampath);
var rootRef = firebase.database().ref('xi2025/' + streampath);

rootRef.on("child_added", snap => {

var name = snap.child("name").val();
var dob = snap.child("dob").val();
var psd = dob.replace(/-/g,'');
var dobreg = snap.child("dobreg").val();
var gender  = snap.child("gender").val();
var category = snap.child("category").val();
var religion = snap.child("religion").val();
var mothertongue = snap.child("mothertongue").val();
var nationality = snap.child("nationality").val();
var aadhaar = snap.child("aadhaar").val();
var bloodgroup = snap.child("bloodgroup").val();
var healthid = snap.child("healthid").val();
var idmark = snap.child("idmark").val();
// var acyear = snap.child("acyear").val();
// var admno = snap.child("admno").val();
// var admdate = snap.child("admdate").val();
// var prclass = snap.child("prclass").val();
// var praddl = snap.child("praddl").val();
// var prsec = snap.child("prsec").val();
// var prroll = snap.child("prroll").val();
// var prstream = snap.child("prstream").val();
// var prfcomp1 = snap.child("prfcomp1").val();
// var prfcomp2 = snap.child("prfcomp2").val();
// var prfsub1 = snap.child("prfsub1").val();
// var prfsub2 = snap.child("prfsub2").val();
// var prfsub3 = snap.child("prfsub3").val();
// var prfsub4 = snap.child("prfsub4").val();
// var pvclass = snap.child("pvclass").val();
// var pvschool = snap.child("pvschool").val();
// var pvsec = snap.child("pvsec").val();
// var pvroll = snap.child("pvroll").val();
// var pvstream = snap.child("pvstream").val();
// var medium = snap.child("medium").val();
var vill = snap.child("vill").val();
var habitation = snap.child("habitation").val();
var district = snap.child("district").val();
var block = snap.child("block").val();
var panchayat = snap.child("panchayat").val();
var po = snap.child("po").val();
var ps = snap.child("ps").val();
var pin = snap.child("pin").val();
var phone = snap.child("phone").val();
var email = snap.child("email").val();
var fname = snap.child("fname").val();
var mname = snap.child("mname").val();
var gname = snap.child("gname").val();
var relationship = snap.child("relationship").val();
var aincome = snap.child("aincome").val();
var gqualification = snap.child("gqualification").val();
var gvill = snap.child("gvill").val();
var ghabitation = snap.child("ghabitation").val();
var gdistrict = snap.child("gdistrict").val();
var gblock = snap.child("gblock").val();
var gpanchayat = snap.child("gpanchayat").val();
var gpo = snap.child("gpo").val();
var gps = snap.child("gps").val();
var gpin = snap.child("gpin").val();
var gphone = snap.child("gphone").val();
var gemail = snap.child("gemail").val();
var bplstatus = snap.child("bplstatus").val();
var bplno = snap.child("bplno").val();
var cwsn = snap.child("cwsn").val();
var cwsntyp = snap.child("cwsntyp").val().replace(/-/g,' ');

var rv = snap.child("bname").val();
var bname = rv.replace(/-/g, ' ');

var bcode = snap.child("bcode").val();
var bifsc = snap.child("bifsc").val();
var acno = snap.child("acno").val();
var appid = snap.child("appid").val();

var updphoto = snap.child("updphoto").val();
var updsign = snap.child("updsign").val();
var updmpadmit = snap.child("updmpadmit").val();
var updmpmark = snap.child("updmpmark").val();
var updbproof = snap.child("updbproof").val();
var updbpass = snap.child("updbpass").val();
var updslc = snap.child("updslc").val();
var updaadhaarpic = snap.child("updaadhaarpic").val();
var updcaste = snap.child("updcaste").val();

console.log(appid);
if(appid==uid)
{
flag=1;

$('#appidsetval').val(appid);
$('#name').val(name);
$('#dob').val(dob);
$('#dobreg').val(dobreg);
$('#gender').val(gender);
$('#category').val(category);
$('#religion').val(religion);
$('#mothertongue').val(mothertongue);
$('#nationality').val(nationality);
$('#aadhaar').val(aadhaar);
$('#bloodgroup').val(bloodgroup);
$('#healthid').val(healthid);
$('#idmark').html(idmark);
// $('#acyear').val(acyear);
// $('#prclass').val(prclass);
// $('#praddl').val(praddl);
// $('#prstream').val(prstream);
// $('#prfcomp1').val(prfcomp1);
// $('#prfcomp2').val(prfcomp2);
// $('#prfsub1').val(prfsub1);
// $('#prfsub2').val(prfsub2);
// $('#prfsub3').val(prfsub3);
// $('#prfsub4').val(prfsub4);
// $('#pvclass').val(pvclass);
// $('#pvschool').val(pvschool);
// if(pvsec!="NA")
// $('#pvsec').val(pvsec);
// else
// {}
// $('#pvroll').val(pvroll);
// $('#pvstream').val(pvstream);
// $('#medium').val(medium);
$('#vill').val(vill);
$('#habitation').val(habitation);
$('#district').val(district);
$('#block').val(block);
$('#panchayat').val(panchayat);
$('#po').val(po);
$('#ps').val(ps);
$('#pin').val(pin);
$('#phone').val(phone);
$('#email').val(email);
$('#fname').val(fname);
$('#mname').val(mname);
$('#gname').val(gname);
$('#relationship').val(relationship);
$('#ainome').val(aincome);
$('#gqualification').val(gqualification);
$('#gvill').val(gvill);
$('#ghabitation').val(ghabitation);
$('#gdistrict').val(gdistrict);
$('#gblock').val(gblock);
$('#gpanchayat').val(gpanchayat);
$('#gpo').val(gpo);
$('#gps').val(gps);
$('#gpin').val(gpin);
$('#gphone').val(gphone);
$('#gemail').val(gemail);
$('#bplstatus').val(bplstatus);
$('#bplno').val(bplno);
$('#cwsn').val(cwsn);
$('#cwsntyp').val(cwsntyp);
$('#bname').val(bname);
$('#bcode').val(bcode);
$('#bifsc').val(bifsc);
$('#acno').val(acno);

/*-------------------*/

$("#photo").attr("src",updphoto);
$("#signature").attr("src",updsign);
$("#mpadmit").attr("src",updmpadmit);
$("#mpmark").attr("src",updmpmark);
$("#bpass").attr("src",updbpass);

$('#updphoto').val(updphoto);
$('#updsign').val(updsign);
$("#updmpadmit").val(updmpadmit);
$("#updmpmark").val(updmpmark);
$("#updbpass").val(updbpass);


if(updaadhaarpic!=""){
$("#aadhaarpic").attr("src",updaadhaarpic);
$('#updaadhaarpic').val(updaadhaarpic);}
else{}

if(updcaste!=""){
$("#caste").attr("src",updcaste);
$('#updcaste').val(updcaste);}
else{}

/*-------------------*/
}
});
});



// Listen for form submit
document.getElementById('xiadmf').addEventListener('submit', xifedit);

// Submit form
function xifedit(e){
  e.preventDefault();

  // Get values
var cat = getInputVal('cat');
var	name = getInputVal('name');
var	dob = getInputVal('dob');
var	dobreg = getInputVal('dobreg');
var	gender = getInputVal('gender');
var	category = getInputVal('category');
var	religion = getInputVal('religion');
var	mothertongue = getInputVal('mothertongue');
var	nationality = getInputVal('nationality');
var	aadhaar = getInputVal('aadhaar');
var	bloodgroup = getInputVal('bloodgroup');
var	healthid = getInputVal('healthid');
var	idmark = getInputVal('idmark');

// var	acyear = getInputVal('acyear');
// var	admno = getInputVal('admno');
// //var	admdate = getInputVal('admdate');
// var admstatus = getInputVal('admstatus');
// var	pvclass = getInputVal('pvclass');
// var pvaddl = getInputVal('pvaddl');
// var	prclass = getInputVal('prclass');
// var pvroll = getInputVal('pvroll');
// var mpboard = getInputVal('mpboard');
// var pvschool = getInputVal('pvschool');
// var	prroll = getInputVal('prroll');
// var mpbengali = getInputVal('mpbengali');
// var mpenglish = getInputVal('mpenglish');
// var mpmath = getInputVal('mpmath');
// var mpphysc = getInputVal('mpphysc');
// var mplfsc = getInputVal('mplfsc');
// var mphist = getInputVal('mphist');
// var mpgeo = getInputVal('mpgeo');
// var mpaddl = getInputVal('mpaddl');
// var mptotal = getInputVal('mptotal');
// var mpperrev = getInputVal('mpperrev');
// var mpprc = getInputVal('mpprc');
// var	prstream = getInputVal('prstream');
// streamid = prstream;
// var admdate = "Admission Time &amp; Date: " + dtadmst[subadm.indexOf(streamid)] + " to " + dtadmend[subadm.indexOf(streamid)];
// var	prfcomp1 = getInputVal('prfcomp1');
// var	prfcomp2 = getInputVal('prfcomp2');
// var	prfsub1 = getInputVal('prfsub1');
// var	prfsub2 = getInputVal('prfsub2');
// var	prfsub3 = getInputVal('prfsub3');
// var	prfsub4 = getInputVal('prfsub4');
// var	medium = getInputVal('medium');

var	vill = getInputVal('vill');
var	habitation = getInputVal('habitation');
var	district = getInputVal('district');
var	block = getInputVal('block');
var	panchayat = getInputVal('panchayat');
var	po = getInputVal('po');
var	ps = getInputVal('ps');
var	pin = getInputVal('pin');
var	phone = getInputVal('phone');
var	email = getInputVal('email');
var	fname = getInputVal('fname');
var	mname = getInputVal('mname');
var	gname = getInputVal('gname');
var	relationship = getInputVal('relationship');
var	aincome = getInputVal('aincome');
var	gqualification = getInputVal('gqualification');
var	gvill = getInputVal('gvill');
var	ghabitation = getInputVal('ghabitation');
var	gdistrict = getInputVal('gdistrict');
var	gblock = getInputVal('gblock');
var	gpanchayat = getInputVal('gpanchayat');
var	gpo = getInputVal('gpo');
var	gps = getInputVal('gps');
var	gpin = getInputVal('gpin');
var	gphone = getInputVal('gphone');
var	gemail = getInputVal('gemail');
var	bplstatus = getInputVal('bplstatus');
var	bplno = getInputVal('bplno');
var	cwsn = getInputVal('cwsn');
var	cwsntyp = getInputVal('cwsntyp').replace(/\s+/g, '-');
var	bname = getInputVal('bname').replace(/\s+/g, '-');
var	bcode = getInputVal('bcode');
var	bifsc = getInputVal('bifsc');
var	acno = getInputVal('acno');
var appid = getInputVal('appidsetval');
var updphoto = getInputVal('updphoto');
var updsign = getInputVal('updsign');
var updmpadmit = getInputVal('updmpadmit');
var updmpmark = getInputVal('updmpmark');
var updaadhaarpic = getInputVal('updaadhaarpic');
var updbpass = getInputVal('updbpass');
var updcaste = getInputVal('updcaste');

 // Save message
  saveMessage(cat,name,dob,dobreg,gender,category,religion,mothertongue,nationality,aadhaar,bloodgroup,healthid,idmark,vill,habitation,district,block,panchayat,po,ps,pin,phone,email,fname,mname,gname,relationship,aincome,gqualification,gvill,ghabitation,gdistrict,gblock,gpanchayat,gpo,gps,gpin,gphone,gemail,bplstatus,bplno,cwsn,cwsntyp,bname,bcode,bifsc,acno,appid,updphoto,updsign,updmpadmit,updmpmark,updaadhaarpic,updbpass,updcaste);


  document.getElementById("xiadmf").style.display = 'none';
  document.getElementById("instructions").style.display = 'none';
  document.getElementById("thankyou").style.display = 'block';

  document.getElementById('xiadmf').reset();
}

function getInputVal(id){
	if(document.getElementById(id).className == "upt"){
		return document.getElementById(id).value.toUpperCase();
	}
	else{
		return document.getElementById(id).value;
	}
}


// Save message to firebase   
function saveMessage(cat,name,dob,dobreg,gender,category,religion,mothertongue,nationality,aadhaar,bloodgroup,healthid,idmark,vill,habitation,district,block,panchayat,po,ps,pin,phone,email,fname,mname,gname,relationship,aincome,gqualification,gvill,ghabitation,gdistrict,gblock,gpanchayat,gpo,gps,gpin,gphone,gemail,bplstatus,bplno,cwsn,cwsntyp,bname,bcode,bifsc,acno,appid,updphoto,updsign,updmpadmit,updmpmark,updaadhaarpic,updbpass,updcaste){
  /*
  var newMessageRef = messagesRef.push();
  MessageRef.set({
  */
  firebase.database().ref('xi2025/' + streampath + '/' + appid).update({
cat:cat,
name:name,
dob:dob,
dobreg:dobreg,
gender:gender,
category:category,
religion:religion,
mothertongue:mothertongue,
nationality:nationality,
aadhaar:aadhaar,
bloodgroup:bloodgroup,
healthid:healthid,
idmark:idmark,
vill:vill,
habitation:habitation,
district:district,
block:block,
panchayat:panchayat,
po:po,
ps:ps,
pin:pin,
phone:phone,
email:email,
fname:fname,
mname:mname,
gname:gname,
relationship:relationship,
aincome:aincome,
gqualification:gqualification,
gvill:gvill,
ghabitation:ghabitation,
gdistrict:gdistrict,
gblock:gblock,
gpanchayat:gpanchayat,
gpo:gpo,
gps:gps,
gpin:gpin,
gphone:gphone,
gemail:gemail,
bplstatus:bplstatus,
bplno:bplno,
cwsn:cwsn,
cwsntyp:cwsntyp,
bname:bname,
bcode:bcode,
bifsc:bifsc,
acno:acno,
appid:appid,
updphoto:updphoto,
updsign:updsign,
updmpadmit:updmpadmit,
updmpmark:updmpmark,
updaadhaarpic:updaadhaarpic,
updbpass:updbpass,
updcaste:updcaste
  });
}

	var fbBucketName1 = 'xi2025';

		var uploader1 = document.getElementById('uploader1');
		var fileButton1 = document.getElementById('fileButton1');
		fileButton1.addEventListener('change', function (e1) {

			console.log('file upload event', e1);

			var FileSize = e1.target.files[0].size / 1024 / 1024; // in MB
        	if (FileSize > 0.0195) 
        	{
            	swal('Oops..','File size exceeds 20 KB \n Please Choose a new Photo.','error');
            	document.getElementById('fileButton1').value = "";
        	} 
        	else 
        	{
        		var file1 = e1.target.files[0];
        	}

        	var str = e1.target.files[0].type;
			if(!str.includes("image")){
        		swal('Oops..','Only Image type files are allowed to upload.','error');
            	document.getElementById('fileButton3').value = "";
            	return;
        	}
      
      		var n = str.length - str.lastIndexOf("/") -1;
      
      		var strt = str.substr(str.length - n);
	
			var storageRef1 = firebase.storage().ref(`${fbBucketName1}/${appid}/${appid}photo.${strt}`);

			var uploadTask1 = storageRef1.put(file1);

			uploadTask1.on(firebase.storage.TaskEvent.STATE_CHANGED, 
				function (snapshot) {
					var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					uploader1.value = progress;
					console.log('Upload is ' + progress + '% done');
					switch (snapshot.state) {
						case firebase.storage.TaskState.PAUSED: 
							console.log('Upload is paused');
							break;
						case firebase.storage.TaskState.RUNNING: 
							console.log('Upload is running');
							break;
					}
				}, function (error) {

						switch (error.code) {
						case 'storage/unauthorized':
							break;

						case 'storage/canceled':
							break;

						case 'storage/unknown':
							break;
					}
				}, function () {
					var downloadURL1 = uploadTask1.snapshot.downloadURL;
					console.log('downloadURL1', downloadURL1);
					var link1 = document.getElementById("photo");
					link1.setAttribute("src", downloadURL1);
					document.getElementById('updphoto').value = downloadURL1;
				});

		});


var fbBucketName2 = 'xi2025';

		var uploader2 = document.getElementById('uploader2');
		var fileButton2 = document.getElementById('fileButton2');
		fileButton2.addEventListener('change', function (e2) {

			console.log('file upload event', e2);

			var FileSize = e2.target.files[0].size / 1024 / 1024; // in MB
        	if (FileSize > 0.0195) 
        	{
            	swal('Oops..','File size exceeds 20 KB \n Please Choose a new Signature.','error');
            	document.getElementById('fileButton2').value = "";
        	} 
        	else 
        	{
        		var file2 = e2.target.files[0];
        	}

        	var str = e2.target.files[0].type;
			if(!str.includes("image")){
        		swal('Oops..','Only Image type files are allowed to upload.','error');
            	document.getElementById('fileButton3').value = "";
            	return;
        	}
      
      		var n = str.length - str.lastIndexOf("/") -1;
      
      		var strt = str.substr(str.length - n);

			var storageRef2 = firebase.storage().ref(`${fbBucketName2}/${appid}/${appid}sign.${strt}`);

			var uploadTask2 = storageRef2.put(file2);

			uploadTask2.on(firebase.storage.TaskEvent.STATE_CHANGED, 
				function (snapshot) {
					var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					uploader2.value = progress;
					console.log('Upload is ' + progress + '% done');
					switch (snapshot.state) {
						case firebase.storage.TaskState.PAUSED: 
							console.log('Upload is paused');
							break;
						case firebase.storage.TaskState.RUNNING: 
							console.log('Upload is running');
							break;
					}
				}, function (error) {

						switch (error.code) {
						case 'storage/unauthorized':
							break;

						case 'storage/canceled':
							break;

						case 'storage/unknown':
							break;
					}
				}, function () {
					var downloadURL2 = uploadTask2.snapshot.downloadURL;
					console.log('downloadURL2', downloadURL2);
					var link2 = document.getElementById("signature");
					link2.setAttribute("src", downloadURL2);
					document.getElementById('updsign').value = downloadURL2;
				});

		});


var fbBucketName3 = 'xi2025';

		var uploader3 = document.getElementById('uploader3');
		var fileButton3 = document.getElementById('fileButton3');
		fileButton3.addEventListener('change', function (e3) {

			console.log('file upload event', e3);

			var FileSize = e3.target.files[0].size / 1024 / 1024; // in MB
        	if (FileSize > 0.244) 
        	{
            	swal('Oops..','File size exceeds 250 KB \n Please Choose a new Picture.','error');
            	document.getElementById('fileButton3').value = "";
        	} 
        	else 
        	{
        		var file3 = e3.target.files[0];
        	}

        	var str = e3.target.files[0].type;
			if(!str.includes("image")){
        		swal('Oops..','Only Image type files are allowed to upload.','error');
            	document.getElementById('fileButton3').value = "";
            	return;
        	}
      
      		var n = str.length - str.lastIndexOf("/") -1;
      
      		var strt = str.substr(str.length - n);
	
			var storageRef3 = firebase.storage().ref(`${fbBucketName3}/${appid}/${appid}mpadmit.${strt}`);

			var uploadTask3 = storageRef3.put(file3);

			uploadTask3.on(firebase.storage.TaskEvent.STATE_CHANGED, 
				function (snapshot) {
					var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					uploader3.value = progress;
					console.log('Upload is ' + progress + '% done');
					switch (snapshot.state) {
						case firebase.storage.TaskState.PAUSED: 
							console.log('Upload is paused');
							break;
						case firebase.storage.TaskState.RUNNING: 
							console.log('Upload is running');
							break;
					}
				}, function (error) {

						switch (error.code) {
						case 'storage/unauthorized':
							break;

						case 'storage/canceled':
							break;

						case 'storage/unknown':
							break;
					}
				}, function () {
					var downloadURL3 = uploadTask3.snapshot.downloadURL;
					console.log('downloadURL3', downloadURL3);
					var link3 = document.getElementById("mpadmit");
					link3.setAttribute("src", downloadURL3);
					document.getElementById('updmpadmit').value = downloadURL3;
				});

		});


var fbBucketName4 = 'xi2025';

		var uploader4 = document.getElementById('uploader4');
		var fileButton4 = document.getElementById('fileButton4');
		fileButton4.addEventListener('change', function (e4) {

			console.log('file upload event', e4);

			var FileSize = e4.target.files[0].size / 1024 / 1024; // in MB
        	if (FileSize > 0.244) 
        	{
            	swal('Oops..','File size exceeds 250 KB \n Please Choose a new Picture.','error');
            	document.getElementById('fileButton4').value = "";
        	} 
        	else 
        	{
        		var file4 = e4.target.files[0];
        	}

        	var str = e4.target.files[0].type;
			if(!str.includes("image")){
        		swal('Oops..','Only Image type files are allowed to upload.','error');
            	document.getElementById('fileButton3').value = "";
            	return;
        	}
      
      		var n = str.length - str.lastIndexOf("/") -1;
      
      		var strt = str.substr(str.length - n);
	
			var storageRef4 = firebase.storage().ref(`${fbBucketName4}/${appid}/${appid}mpmark.${strt}`);

			var uploadTask4 = storageRef4.put(file4);

			uploadTask4.on(firebase.storage.TaskEvent.STATE_CHANGED, 
				function (snapshot) {
					var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					uploader4.value = progress;
					console.log('Upload is ' + progress + '% done');
					switch (snapshot.state) {
						case firebase.storage.TaskState.PAUSED: 
							console.log('Upload is paused');
							break;
						case firebase.storage.TaskState.RUNNING: 
							console.log('Upload is running');
							break;
					}
				}, function (error) {

						switch (error.code) {
						case 'storage/unauthorized':
							break;

						case 'storage/canceled':
							break;

						case 'storage/unknown':
							break;
					}
				}, function () {
					var downloadURL4 = uploadTask4.snapshot.downloadURL;
					console.log('downloadURL4', downloadURL4);
					var link4 = document.getElementById("mpmark");
					link4.setAttribute("src", downloadURL4);
					document.getElementById('updmpmark').value = downloadURL4;
				});

		});

var fbBucketName5 = 'xi2025';

		var uploader5 = document.getElementById('uploader5');
		var fileButton5 = document.getElementById('fileButton5');
		fileButton5.addEventListener('change', function (e5) {

			console.log('file upload event', e5);

			var FileSize = e5.target.files[0].size / 1024 / 1024; // in MB
        	if (FileSize > 0.244) 
        	{
            	swal('Oops..','File size exceeds 250 KB \n Please Choose a new Picture.','error');
            	document.getElementById('fileButton5').value = "";
        	} 
        	else 
        	{
        		var file5 = e5.target.files[0];
        	}

        	var str = e5.target.files[0].type;
			if(!str.includes("image")){
        		swal('Oops..','Only Image type files are allowed to upload.','error');
            	document.getElementById('fileButton3').value = "";
            	return;
        	}
      
      		var n = str.length - str.lastIndexOf("/") -1;
      
      		var strt = str.substr(str.length - n);
	
			var storageRef5 = firebase.storage().ref(`${fbBucketName5}/${appid}/${appid}aadhaarpic.${strt}`);

			var uploadTask5 = storageRef5.put(file5);

			uploadTask5.on(firebase.storage.TaskEvent.STATE_CHANGED, 
				function (snapshot) {
					var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					uploader5.value = progress;
					console.log('Upload is ' + progress + '% done');
					switch (snapshot.state) {
						case firebase.storage.TaskState.PAUSED: 
							console.log('Upload is paused');
							break;
						case firebase.storage.TaskState.RUNNING: 
							console.log('Upload is running');
							break;
					}
				}, function (error) {

						switch (error.code) {
						case 'storage/unauthorized':
							break;

						case 'storage/canceled':
							break;

						case 'storage/unknown':
							break;
					}
				}, function () {
					var downloadURL5 = uploadTask5.snapshot.downloadURL;
					console.log('downloadURL5', downloadURL5);
					var link5 = document.getElementById("aadhaarpic");
					link5.setAttribute("src", downloadURL5);
					document.getElementById('updaadhaarpic').value = downloadURL5;
				});

		});


var fbBucketName6 = 'xi2025';

		var uploader6 = document.getElementById('uploader6');
		var fileButton6 = document.getElementById('fileButton6');
		fileButton6.addEventListener('change', function (e6) {

			console.log('file upload event', e6);

			var FileSize = e6.target.files[0].size / 1024 / 1024; // in MB
        	if (FileSize > 0.244) 
        	{
            	swal('Oops..','File size exceeds 250 KB \n Please Choose a new Picture.','error');
            	document.getElementById('fileButton6').value = "";
        	} 
        	else 
        	{
        		var file6 = e6.target.files[0];
        	}

        	var str = e6.target.files[0].type;
			if(!str.includes("image")){
        		swal('Oops..','Only Image type files are allowed to upload.','error');
            	document.getElementById('fileButton3').value = "";
            	return;
        	}
      
      		var n = str.length - str.lastIndexOf("/") -1;
      
      		var strt = str.substr(str.length - n);
	
			var storageRef6 = firebase.storage().ref(`${fbBucketName6}/${appid}/${appid}bpass.${strt}`);

			var uploadTask6 = storageRef6.put(file6);

			uploadTask6.on(firebase.storage.TaskEvent.STATE_CHANGED, 
				function (snapshot) {
					var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					uploader6.value = progress;
					console.log('Upload is ' + progress + '% done');
					switch (snapshot.state) {
						case firebase.storage.TaskState.PAUSED: 
							console.log('Upload is paused');
							break;
						case firebase.storage.TaskState.RUNNING: 
							console.log('Upload is running');
							break;
					}
				}, function (error) {

						switch (error.code) {
						case 'storage/unauthorized':
							break;

						case 'storage/canceled':
							break;

						case 'storage/unknown':
							break;
					}
				}, function () {
					var downloadURL6 = uploadTask6.snapshot.downloadURL;
					console.log('downloadURL6', downloadURL6);
					var link6 = document.getElementById("bpass");
					link6.setAttribute("src", downloadURL6);
					document.getElementById('updbpass').value = downloadURL6;
				});

		});

var fbBucketName7 = 'xi2025';

		var uploader7 = document.getElementById('uploader7');
		var fileButton7 = document.getElementById('fileButton7');
		fileButton7.addEventListener('change', function (e7) {

			console.log('file upload event', e7);

			var FileSize = e7.target.files[0].size / 1024 / 1024; // in MB
        	if (FileSize > 0.244) 
        	{
            	swal('Oops..','File size exceeds 250 KB \n Please Choose a new Picture.','error');
            	document.getElementById('fileButton7').value = "";
        	} 
        	else 
        	{
        		var file7 = e7.target.files[0];
        	}

        	var str = e7.target.files[0].type;
			if(!str.includes("image")){
        		swal('Oops..','Only Image type files are allowed to upload.','error');
            	document.getElementById('fileButton3').value = "";
            	return;
        	}
      
      		var n = str.length - str.lastIndexOf("/") -1;
      
      		var strt = str.substr(str.length - n);
	
			var storageRef7 = firebase.storage().ref(`${fbBucketName7}/${appid}/${appid}caste.${strt}`);

			var uploadTask7 = storageRef7.put(file7);

			uploadTask7.on(firebase.storage.TaskEvent.STATE_CHANGED, 
				function (snapshot) {
					var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					uploader7.value = progress;
					console.log('Upload is ' + progress + '% done');
					switch (snapshot.state) {
						case firebase.storage.TaskState.PAUSED: 
							console.log('Upload is paused');
							break;
						case firebase.storage.TaskState.RUNNING: 
							console.log('Upload is running');
							break;
					}
				}, function (error) {

						switch (error.code) {
						case 'storage/unauthorized':
							break;

						case 'storage/canceled':
							break;

						case 'storage/unknown':
							break;
					}
				}, function () {
					var downloadURL7 = uploadTask7.snapshot.downloadURL;
					console.log('downloadURL7', downloadURL7);
					var link7 = document.getElementById("caste");
					link7.setAttribute("src", downloadURL7);
					document.getElementById('updcaste').value = downloadURL7;
				});

		});
function chkn() {
		localStorage.ud = appid + "splt" + streampath;
		window.open("xilogin.html");
		window.close();
}
	function pinlength(x){
 		if(x.value.length!=6)
 		{
 			swal("Oops..","PIN Code must contain 6 digits. Please re-type.","error");
 			x.value ="";
 			x.focus();
 		}
 		
 	}
 	function aadhaarlength(x){
 		if(x.value.length!=12)
 		{
 			swal("Oops..","Aadhaar no. must contain 12 digits. Please re-type.","error");
 			x.value ="";
 			x.focus();
 		}
 		
 	}
 	function contactlength(x){
 		if(x.value.length!=10)
 		{
 			swal("Oops..","Contact no. must contain 10 digits. Please re-type.","error");
 			x.value ="";
 			x.focus();
 		}
 		
 	}


 	function toggleCheckbox(element)
 {	
 	//ffn = 0;
   	//ff(btnn,document.getElementById("prstream").value);

 if(document.getElementById("name").value==="" || document.getElementById("name").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Enter your Full Name","error");
   document.getElementById("name").focus();}
 	else if(document.getElementById("dob").value==="" || document.getElementById("dob").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Enter your Date of Birth","error");
   document.getElementById("dob").focus();}
   	else if(document.getElementById("gender").value==="" || document.getElementById("gender").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Choose your Gender","error");
   document.getElementById("gender").focus();}
   	else if(document.getElementById("category").value==="" || document.getElementById("category").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Choose your Social Category","error");
   document.getElementById("category").focus();}
	else if(document.getElementById("mothertongue").value==="" || document.getElementById("mothertongue").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Choose your Mother Tongue","error");
   document.getElementById("mothertongue").focus();}
	else if(document.getElementById("nationality").value==="" || document.getElementById("nationality").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Choose your Nationality","error");
   document.getElementById("nationality").focus();}
	else if(document.getElementById("aadhaar").value==="" || document.getElementById("aadhaar").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Enter Aadhaar Number","error");
   document.getElementById("aadhaar").focus();}
   
   
	// else if(document.getElementById("prclass").value==="" || document.getElementById("prclass").value==="NA"){
  //  element.checked = !element.checked;
  //  swal("Oops..","Choose your Class to Apply for","error");
  //  document.getElementById("prclass").focus();}
	//  else if(document.getElementById("pvschool").value==="" || document.getElementById("pvschool").value==="NA"){
  //  element.checked = !element.checked;
  //  swal("Oops..","Enter name of your Previous school attended.","error");
  //  document.getElementById("pvschool").focus();}

	// else if(document.getElementById("prstream").value==="" || document.getElementById("prstream").value==="NA"){
  //  element.checked = !element.checked;
  //  swal("Oops..","Fill MP Exam Details and click on Submit to proceed further.","error");
  //  document.getElementById("showmore").focus();}
  //  	else if(document.getElementById("prfcomp1").value==="" || document.getElementById("prfcomp1").value==="NA" || document.getElementById("prfcomp1").value==="CHOOSE"){
  //  element.checked = !element.checked;
  //  swal("Oops..","Select Compulsory Subjects.","error");
  //  document.getElementById("showmore").focus();}
  //  	else if(document.getElementById("prfcomp2").value==="" || document.getElementById("prfcomp2").value==="NA" || document.getElementById("prfcomp2").value==="CHOOSE"){
  //  element.checked = !element.checked;
  //  swal("Oops..","Select Compulsory Subjects.","error");
  //  document.getElementById("showmore").focus();}
  //  	else if(document.getElementById("prfsub1").value==="" || document.getElementById("prfsub1").value==="NA" || document.getElementById("prfsub1").value==="CHOOSE"){
  //  element.checked = !element.checked;
  //  swal("Oops..","Select Subjects (Maximum Limit: 4).","error");
  //  document.getElementById("showmore").focus();}
  //  	else if(document.getElementById("prfsub2").value==="" || document.getElementById("prfsub2").value==="NA" || document.getElementById("prfsub2").value==="CHOOSE"){
  //  element.checked = !element.checked;
  //  swal("Oops..","Select Subjects (Maximum Limit: 4).","error");
  //  document.getElementById("showmore").focus();}
  //  	else if(document.getElementById("prfsub3").value==="" || document.getElementById("prfsub3").value==="NA" || document.getElementById("prfsub3").value==="CHOOSE"){
  //  element.checked = !element.checked;
  //  swal("Oops..","Select Subjects (Maximum Limit: 4).","error");
  //  document.getElementById("showmore").focus();}
  //  	else if(document.getElementById("prfsub4").value==="" || document.getElementById("prfsub4").value==="NA" || document.getElementById("prfsub4").value==="CHOOSE"){
  //  element.checked = !element.checked;
  //  swal("Oops..","Select Subjects (Maximum Limit: 4).","error");
  //  document.getElementById("showmore").focus();}

	// else if(document.getElementById("pvclass").value==="" || document.getElementById("pvclass").value==="NA"){
  //  element.checked = !element.checked;
  //  swal("Oops..","Choose your Previous Class attended","error");
  //  document.getElementById("pvclass").focus();}
	// else if(document.getElementById("medium").value==="" || document.getElementById("medium").value==="NA"){
  //  element.checked = !element.checked;
  //  swal("Oops..","Choose your Medium of Study","error");
  //  document.getElementById("medium").focus();}
   	else if(document.getElementById("habitation").value==="" || document.getElementById("habitation").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Enter your Habitation or Locality","error");
   document.getElementById("habitation").focus();}
   	else if(document.getElementById("district").value==="" || document.getElementById("district").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Choose your District","error");
   document.getElementById("district").focus();}
   	else if(document.getElementById("block").value==="" || document.getElementById("block").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Enter your Block or Municipality name","error");
   document.getElementById("block").focus();}
   	else if(document.getElementById("po").value==="" || document.getElementById("po").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Enter your Post Office","error");
   document.getElementById("po").focus();}
   	else if(document.getElementById("ps").value==="" || document.getElementById("ps").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Enter your Police Station","error");
   document.getElementById("ps").focus();}
   	else if(document.getElementById("pin").value==="" || document.getElementById("pin").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Enter your Area PIN Code","error");
   document.getElementById("pin").focus();}
   	else if(document.getElementById("gname").value==="" || document.getElementById("gname").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Enter your Guardian's Name","error");
   document.getElementById("gname").focus();}
   	else if(document.getElementById("relationship").value==="" || document.getElementById("relationship").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Choose your Relationship with your Guardian","error");
   document.getElementById("relationship").focus();}
   	else if(document.getElementById("ghabitation").value==="" || document.getElementById("ghabitation").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Enter your Guardian's Habitation or Locality","error");
   document.getElementById("ghabitation").focus();}
   	else if(document.getElementById("gdistrict").value==="" || document.getElementById("gdistrict").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Choose your Guardian's District","error");
   document.getElementById("gdistrict").focus();}
   	else if(document.getElementById("gblock").value==="" || document.getElementById("gblock").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Enter your Guardian's Block or Municipality name","error");
   document.getElementById("gblock").focus();}
   	else if(document.getElementById("gpo").value==="" || document.getElementById("gpo").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Enter your Guardian's Post Office","error");
   document.getElementById("gpo").focus();}
   	else if(document.getElementById("gps").value==="" || document.getElementById("gps").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Enter your Guardian's Police Station","error");
   document.getElementById("gps").focus();}
   	else if(document.getElementById("gpin").value==="" || document.getElementById("gpin").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Enter your Guardian's Area PIN Code","error");
   document.getElementById("gpin").focus();}
    else if(document.getElementById("gphone").value==="" || document.getElementById("gphone").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Enter your Guardian's Phone No.","error");
   document.getElementById("gphone").focus();}
	 else if(document.getElementById("bname").value==="" || document.getElementById("bname").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Choose Bank Name","error");
   document.getElementById("bname").focus();}
	 else if(document.getElementById("bcode").value==="" || document.getElementById("bcode").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Enter Bank Branch Code","error");
   document.getElementById("bcode").focus();}
	 else if(document.getElementById("bifsc").value==="" || document.getElementById("bifsc").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Enter Bank Branch IFSC Code","error");
   document.getElementById("bifsc").focus();}
	 else if(document.getElementById("acno").value==="" || document.getElementById("acno").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Enter your Bank Account No.","error");
   document.getElementById("acno").focus();}

     else if(document.getElementById("updphoto").value===""){
   element.checked = !element.checked;
   swal("Oops..","Upload your Photo to proceed","error");
   document.getElementById("fileButton1").focus();}
     else if(document.getElementById("updsign").value===""){
   element.checked = !element.checked;
   swal("Oops..","Upload your Signature to proceed","error");
   document.getElementById("fileButton2").focus();}
     else if(document.getElementById("updmpadmit").value===""){
   element.checked = !element.checked;
   swal("Oops..","Upload your MP Admit card to proceed","error");
   document.getElementById("fileButton3").focus();}
     else if(document.getElementById("updmpmark").value===""){
   element.checked = !element.checked;
   swal("Oops..","Upload your MP Marksheet to proceed","error");
   document.getElementById("fileButton4").focus();}
     else if(document.getElementById("updbpass").value===""){
   element.checked = !element.checked;
   swal("Oops..","Upload your Bank Pass Book to proceed","error");
   document.getElementById("fileButton6").focus();}
     else if(document.getElementById("updaadhaarpic").value===""){
   element.checked = !element.checked;
   swal("Oops..","Upload your Aadhaar Card to proceed","error");
   document.getElementById("fileButton5").focus();}
	 // else if(ffn == 0){
   // element.checked = !element.checked;
   // swal("Oops..","Check Live Seat Status & Schedule to proceed.","error");
   // document.getElementById("fileButton6").focus();}

   	else{
   element.checked = element.checked;
   document.getElementById("submitbtn").disabled = !element.checked;
   swal("Dhola High School","Check all details carefully and be sure that you have uploaded your Photo, Date of Birth proof and Bank Pass Book before Submit.","info");
   }
 }





// function ff(a,b) {
// 	if(b.substring(0, 2)=="AR"){
// 		ffn = 1;
// 		//alert("arts selected")
// 	}
// 		else{
// 	if(b!="COMMERCE"){
// 		b = document.getElementById("prstream").value.substring(0, 2);
// 	}
// 	else{b="cm";}
// 	var dt = new Date();
// 	var xt = dt.getTime();
// 	var yt = $(a).attr(b + 'st');
// 	var zt = $(a).attr(b + 'end');
// 	var stt = $(a).attr(b + 's');

// 	if((+xt >= +yt && +xt <= +zt) && (stt > 0)){
// 		ffn = 1;
// 	}
// 	else{ffn=0;}
// 	}
// }


function showarts(){
	if(document.getElementById("permissioncode").value.length == 11 && document.getElementById("permissioncode").value == arpcode){
		$("#arop").removeAttr('disabled');
	}
	else{
		$("#arop").attr('disabled', true);
	}
}

function pcodeget() {
  var rootRef = firebase.database().ref('mpadmin');

rootRef.on("child_added", snap => {

var pmcat = snap.child("pmcode").val();
var pmid = snap.child("id").val();
if(pmid =="chk"){
	arpcode = pmcat;
}
});

}










$(document).ready(function dtlsload(){

var rootRef = firebase.database().ref('mpadmin');

rootRef.on("child_added", snap => {

var cat = snap.child("cat").val();

var arm = snap.child("arm").val();
var arst = conv(snap.child("arst").val());
var arend = conv(snap.child("arend").val());
var aradmst = conv(snap.child("aradmst").val());
var aradmend = conv(snap.child("aradmend").val());

var scm = snap.child("scm").val();
var scst = conv(snap.child("scst").val());
var scend = conv(snap.child("scend").val());
var scadmst = conv(snap.child("scadmst").val());
var scadmend = conv(snap.child("scadmend").val());

var cmm = snap.child("cmm").val();
var cmst = conv(snap.child("cmst").val());
var cmend = conv(snap.child("cmend").val());
var cmadmst = conv(snap.child("cmadmst").val());
var cmadmend = conv(snap.child("cmadmend").val());


if(cat == "dh"){
$('#allel').html("Arts: <b>" + arm + "</b>&nbsp; Science: <b>" + scm + "</b>&nbsp; Commerce: <b>" + cmm + "</b>");
$('#arsd').html("<u style=\"color:#a1f0df\">Arts</u><br>Start: <b>" + arst + "</b><br>End: <b>" + arend + "</b>");
$('#scsd').html("<u style=\"color:#a1f0df\">Science</u><br>Start: <b>" + scst + "</b><br>End: <b>" + scend + "</b>");
$('#cmsd').html("<u style=\"color:#a1f0df\">Commerce</u><br>Start: <b>" + cmst + "</b><br>End: <b>" + cmend + "</b>");
$('#showmore').attr( { arm:arm, scm:scm, cmm:cmm, arst:new Date(arst).getTime(), arend:new Date(arend).getTime(), scst:new Date(scst).getTime(), scend:new Date(scend).getTime(), cmst:new Date(cmst).getTime(), cmend:new Date(cmend).getTime() } );
dtadmst[0]=aradmst;
dtadmst[1]=scadmst;
dtadmst[2]=cmadmst;

dtadmend[0]=aradmend;
dtadmend[1]=scadmend;
dtadmend[2]=cmadmend;

}
});
},
seatcheck()
);

function seatcheck() {
  arl();
  scl();
  cml();
checkdtls();
pcodeget();
}


function checkdtls(){

var rootRef = firebase.database().ref('mpadmin');

rootRef.on("child_changed", snap => {

var cat= snap.child("cat").val();

var arm = snap.child("arm").val();
var arst = conv(snap.child("arst").val());
var arend = conv(snap.child("arend").val());
var aradmst = conv(snap.child("aradmst").val());
var aradmend = conv(snap.child("aradmend").val());

var scm = snap.child("scm").val();
var scst = conv(snap.child("scst").val());
var scend = conv(snap.child("scend").val());
var scadmst = conv(snap.child("scadmst").val());
var scadmend = conv(snap.child("scadmend").val());

var cmm = snap.child("cmm").val();
var cmst = conv(snap.child("cmst").val());
var cmend = conv(snap.child("cmend").val());
var cmadmst = conv(snap.child("cmadmst").val());
var cmadmend = conv(snap.child("cmadmend").val());

if(cat == "dh"){
$('#allel').html("Arts: <b>" + arm + "</b>&nbsp; Science: <b>" + scm + "</b>&nbsp; Commerce: <b>" + cmm + "</b>");
$('#arsd').html("<u style=\"color:#a1f0df\">Arts</u><br>Start: <b>" + arst + "</b><br>End: <b>" + arend + "</b>");
$('#scsd').html("<u style=\"color:#a1f0df\">Science</u><br>Start: <b>" + scst + "</b><br>End: <b>" + scend + "</b>");
$('#cmsd').html("<u style=\"color:#a1f0df\">Commerce</u><br>Start: <b>" + cmst + "</b><br>End: <b>" + cmend + "</b>");
$('#showmore').attr( { arm:arm, scm:scm, cmm:cmm, arst:new Date(arst).getTime(), arend:new Date(arend).getTime(), scst:new Date(scst).getTime(), scend:new Date(scend).getTime(), cmst:new Date(cmst).getTime(), cmend:new Date(cmend).getTime() } );

dtadmst[0]=aradmst;
dtadmst[1]=scadmst;
dtadmst[2]=cmadmst;

dtadmend[0]=aradmend;
dtadmend[1]=scadmend;
dtadmend[2]=cmadmend;

}
});
}



function conv(val) {
  var d = new Date(val);
  var n = d.toDateString() + " " +  d.toLocaleTimeString();
  return n;
}

// document.getElementById("showmore").addEventListener("click", divhid);

function divhid() {
	var flag = 0;
	var btn = "#showmore";
	var op = ["ar", "sc", "cm"];

	$(".mpfl").each(function() {
		if(this.value.length!=0) {
			flag += 1;
		}
	});

	$(".mpps").each(function() {
		if(this.value<25) {
			flag -= 1;
		}
	});

	if(flag	> 11){
		chk(op[0],btn);
		chk(op[1],btn);
		chk(op[2],btn);
		$("#prstream").css("display","block");
		}
		else{
			swal("Dhola High School","Check all fileds of MP Exam details whether left or not.You must have to obtain at least 25% in each subject(without Addl.) to be eligible.","error");
			$("#prstream").css("display","none");
		}
		//showarts();
	}

function chk(ops,btn) {
	var d = new Date();
	var x = d.getTime();
	var om = $(btn).attr('data-total');
	var y = $(btn).attr(ops + 'st');
	var z = $(btn).attr(ops + 'end');
	var rm = $(btn).attr(ops + 'm');
	var st = $(btn).attr(ops + 's');

	if((+x >= +y && +x <= +z) && (om >= rm) && (st > 0))//(tm >= m)
        {
            $("#" + ops + "op").removeAttr('disabled');
        }
    else{
            $("#" + ops + "op").attr('disabled', true);
    	}

    $("#prstream").val("NA");
}

function convlw(x){
    if(x.value.length>0){
    x.style.textTransform = "lowercase";
    }
    else{
      x.style.textTransform = "uppercase";
    }
  }

  function marksadd(x){
  	//document.getElementById("mptotal").value = sum;
  	var sum = 0;
  	var prc = 0.0;
  	if(Number(x.value) > 100){
  		swal("Dhola High School","Obtained Marks cannot be more than 100","warning");
  		x.value = "";
  		x.placeholder = "0";
  	}
  	$(".mpmarks").each(function() {
		if(!isNaN(this.value) && this.value.length!=0) {
			sum += parseFloat(this.value);
			prc = sum / 7;
		}
	});
	$("#mptotal").val(sum);
	$("#mpprc").val(prc.toFixed(2));

	rev(100 - prc.toFixed(2));
	

	$("#showmore").attr("data-total", sum);
	finalsub(x);
	//if(){}		
  }
  function rev(x) {
  	if(x<10){
  		$("#mpperrev").val("0" + x.toFixed(2));
  	}
  	else{
  		$("#mpperrev").val(x.toFixed(2));
  	}
  }
  function markscheck(x) {
  	if(Number(x.value) > 100 || isNaN(x.value)){
  		swal("Dhola High School","Obtained Marks cannot be more than 100","warning");
  		x.value = "";
  		x.placeholder = "0";
  	}
  	else{
  		addlslct();
  	}
  }

function addlslct() {
	if(document.getElementById("pvaddl").selectedIndex != 1){
		$("#mpaddl").removeAttr('disabled');

		if(document.getElementById("mpaddl") .value > 25){
  			var adlval = document.getElementById("pvaddl").value;
  			$(".adl").each(function() {
				if(this.value == adlval){
					$(this).removeAttr('disabled');
				}
				else{
					$(this).attr('disabled', true);
				}
			});
  		}
  		else{
  			$(".adl").each(function() {
				$(this).attr('disabled', true);
		});
  		}
	}
  	else{
  		$("#mpaddl").attr('disabled', true);
  	}
}

  function roll(){
        document.getElementById("pvroll").value = document.getElementById("mproll").value.toUpperCase() + " " + document.getElementById("mpno").value.toUpperCase();
       }

function finalsub(x) {
	if (x.id == "mpmath" || x.id == "mpphysc" || x.id == "mplfsc" || x.id == "mpgeo") {
		if(x.value < 35){
			$("." + x.id).attr('disabled', true);
		}
		else{
			$("." + x.id).removeAttr('disabled');
		}
	}

	$("#prfcomp1").val("");
	$("#prfcomp2").val("");

	var i;
	for (i = 1; i < 5; i++) {
  		$("#prfsub" + i).val("");
	}

	$(".prch:input:checkbox").each(function() {
		this.checked = false;
		//$("p").unbind();
	});

	var j;
	for (j = 1; j < 9; j++) {
  		document.getElementById("prchc" + j).selectedIndex = "0";
	}

	$("#prstream").css("display","none");
	$("#prsubs").css("display","none");
	$("#prstream").val("NA");
}

function cccheck(x) {
	if(x.value != "GENERAL"){
		document.getElementById("cc1").innerHTML = "<span>7</span>Caste Certificate(If applicable)";
	}
	else{
		document.getElementById("cc1").innerHTML = "<span>7</span>Caste Certificate";
	}
}


function arl() {
  var rootRef = firebase.database().ref('xi2025/ARTS/');

rootRef.on("child_added", snap => {

var cat = snap.child("prstream").val();
  ars = ars - 1;
  $('#seatlive').html("<center><b><i>Seats Available (LIVE): </i></b><br>Arts: <b>" + ars + "</b>&nbsp; Science: <b>" + scs + "</b>&nbsp; Commerce: <b>" + cms + "</b></center>");
  $('#showmore').attr('ars', ars);
});

}
function scl() {
  var rootRef = firebase.database().ref('xi2025/SCIENCE/');

rootRef.on("child_added", snap => {

var cat = snap.child("prstream").val();
  scs = scs - 1;
  $('#seatlive').html("<center><b><i>Seats Available (LIVE): </i></b><br>Arts: <b>" + ars + "</b>&nbsp; Science: <b>" + scs + "</b>&nbsp; Commerce: <b>" + cms + "</b></center>");
  $('#showmore').attr('scs', scs);
});

}
function cml() {
  var rootRef = firebase.database().ref('xi2025/COMMERCE/');
rootRef.on("child_added", snap => {

var cat = snap.child("prstream").val();
  cms = cms - 1;
  $('#seatlive').html("<center><b><i>Seats Available (LIVE): </i></b><br>Arts: <b>" + ars + "</b>&nbsp; Science: <b>" + scs + "</b>&nbsp; Commerce: <b>" + cms + "</b></center>");
  $('#showmore').attr('cms', cms);
});
}
