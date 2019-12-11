// Initialize Firebase (ADD YOUR OWN DATA)
var appid = "";
function appidset(){
	var date = new Date();
	var timestamp = date.getTime();
	appid = timestamp;
  document.getElementById("idset").innerHTML = "Your Application ID is: " + appid;
  document.getElementById("appidsetval").value = appid;
}
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

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
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
var	acyear = getInputVal('acyear');
var	admno = getInputVal('admno');
var admstatus = getInputVal('admstatus');
var	prclass = getInputVal('prclass');
var pvschool = getInputVal('pvschool');
var	prsec = getInputVal('prsec');
var	prroll = getInputVal('prroll');
var praddl = getInputVal('praddl');
var	prstream = getInputVal('prstream');
var	prfcomp1 = getInputVal('prfcomp1');
var	prfcomp2 = getInputVal('prfcomp2');
var	prfsub1 = getInputVal('prfsub1');
var	prfsub2 = getInputVal('prfsub2');
var	prfsub3 = getInputVal('prfsub3');
var	prfsub4 = getInputVal('prfsub4');
var	pvclass = getInputVal('pvclass');
var	pvsec = getInputVal('pvsec');
var	pvroll = getInputVal('pvroll');
var	pvstream = getInputVal('pvstream');
var pvaddl = getInputVal('pvaddl');
var	medium = getInputVal('medium');
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
var updbproof = getInputVal('updbproof');
var updslc = getInputVal('updslc');
var updaadhaarpic = getInputVal('updaadhaarpic');
var updbpass = getInputVal('updbpass');
var updcaste = getInputVal('updcaste');

 // Save message
  saveMessage(name,dob,dobreg,gender,category,religion,mothertongue,nationality,aadhaar,bloodgroup,healthid,idmark,acyear,admno,admstatus,prclass,pvschool,prsec,prroll,praddl,prstream,prfcomp1,prfcomp2,prfsub1,prfsub2,prfsub3,prfsub4,pvclass,pvsec,pvroll,pvstream,pvaddl,medium,vill,habitation,district,block,panchayat,po,ps,pin,phone,email,fname,mname,gname,relationship,aincome,gqualification,gvill,ghabitation,gdistrict,gblock,gpanchayat,gpo,gps,gpin,gphone,gemail,bplstatus,bplno,cwsn,cwsntyp,bname,bcode,bifsc,acno,appid,updphoto,updsign,updbproof,updslc,updaadhaarpic,updbpass,updcaste);


  document.getElementById("contactForm").style.display = 'none';
  document.getElementById("instructions").style.display = 'none';
  document.getElementById("thankyou").style.display = 'block';

  document.getElementById('contactForm').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase   
function saveMessage(name,dob,dobreg,gender,category,religion,mothertongue,nationality,aadhaar,bloodgroup,healthid,idmark,acyear,admno,admstatus,prclass,pvschool,prsec,prroll,praddl,prstream,prfcomp1,prfcomp2,prfsub1,prfsub2,prfsub3,prfsub4,pvclass,pvsec,pvroll,pvstream,pvaddl,medium,vill,habitation,district,block,panchayat,po,ps,pin,phone,email,fname,mname,gname,relationship,aincome,gqualification,gvill,ghabitation,gdistrict,gblock,gpanchayat,gpo,gps,gpin,gphone,gemail,bplstatus,bplno,cwsn,cwsntyp,bname,bcode,bifsc,acno,appid,updphoto,updsign,updbproof,updslc,updaadhaarpic,updbpass,updcaste){
  /*
  var newMessageRef = messagesRef.push();
  MessageRef.set({
  */
  firebase.database().ref('users/' + appid).set({
appid:appid,
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
acyear:acyear,
admno:admno,
admstatus:admstatus,
prclass:prclass,
pvschool:pvschool,
prsec:prsec,
prroll:prroll,
praddl:praddl,
prstream:prstream,
prfcomp1:prfcomp1,
prfcomp2:prfcomp2,
prfsub1:prfsub1,
prfsub2:prfsub2,
prfsub3:prfsub3,
prfsub4:prfsub4,
pvclass:pvclass,
pvsec:pvsec,
pvroll:pvroll,
pvstream:pvstream,
pvaddl:pvaddl,
medium:medium,
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
updphoto:updphoto,
updsign:updsign,
updbproof:updbproof,
updslc:updslc,
updaadhaarpic:updaadhaarpic,
updbpass:updbpass,
updcaste:updcaste
  });
}

	var fbBucketName1 = 'images';

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
	
			var storageRef1 = firebase.storage().ref(`${fbBucketName1}/${appid}/photo`);

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


var fbBucketName2 = 'images';

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

			var storageRef2 = firebase.storage().ref(`${fbBucketName2}/${appid}/sign`);

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


var fbBucketName3 = 'images';

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
	
			var storageRef3 = firebase.storage().ref(`${fbBucketName3}/${appid}/bproof`);

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
					var link3 = document.getElementById("bproof");
					link3.setAttribute("src", downloadURL3);
					document.getElementById('updbproof').value = downloadURL3;
				});

		});


var fbBucketName4 = 'images';

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
	
			var storageRef4 = firebase.storage().ref(`${fbBucketName4}/${appid}/slc`);

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
					var link4 = document.getElementById("slc");
					link4.setAttribute("src", downloadURL4);
					document.getElementById('updslc').value = downloadURL4;
				});

		});

var fbBucketName5 = 'images';

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
	
			var storageRef5 = firebase.storage().ref(`${fbBucketName5}/${appid}/aadhaarpic`);

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


var fbBucketName6 = 'images';

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
	
			var storageRef6 = firebase.storage().ref(`${fbBucketName6}/${appid}/bpass`);

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

var fbBucketName7 = 'images';

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
	
			var storageRef7 = firebase.storage().ref(`${fbBucketName7}/${appid}/caste`);

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
		//var userID = document.getElementById("finalusername").value;
		if (window.sessionStorage) 
				{
					sessionStorage.setItem("username", appid);
					window.open("login/index.html");
					window.close();
				}
}
function pinlength(){
 		var plngt=document.getElementById("pin").value.length;
 		if(plngt!=6)
 		{
 			swal("Oops..","PIN Code must contain 6 digits. Please re-type.","error");
 			document.getElementById("pin").value ="";
 			document.getElementById("pin").focus();
 		}
 		
 	}
 	function gpinlength(){
 		var gplngt=document.getElementById("gpin").value.length;
 		if(gplngt!=6)
 		{
 			swal("Oops..","PIN Code must contain 6 digits. Please re-type.","error");
 			document.getElementById("gpin").value ="";
 			document.getElementById("gpin").focus();
 		}
 		
 	}
 	function aadhaarlength(){
 		var alngt=document.getElementById("aadhaar").value.length;
 		if(alngt!=12)
 		{
 			swal("Oops..","Aadhaar no. must contain 12 digits. Please re-type.","error");
 			document.getElementById("aadhaar").value ="";
 			document.getElementById("aadhaar").focus();
 		}
 		
 	}
 	function contactlength(){
 		var clngt=document.getElementById("phone").value.length;
 		if(clngt!=10)
 		{
 			swal("Oops..","Contact no. must contain 10 digits. Please re-type.","error");
 			document.getElementById("phone").value ="";
 			document.getElementById("phone").focus();
 		}
 		
 	}
 	function gcontactlength(){
 		var gclngt=document.getElementById("gphone").value.length;
 		if(gclngt!=10)
 		{
 			swal("Oops..","Contact no. must be 10 digits. Please re-type.","error");
 			document.getElementById("gphone").value ="";
 			document.getElementById("gphone").focus();
 		}
 		
 	}


 	function toggleCheckbox(element)
 {	
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
   
   
	else if(document.getElementById("prclass").value==="" || document.getElementById("prclass").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Choose your Class to Apply for","error");
   document.getElementById("prclass").focus();}
	 else if(document.getElementById("pvschool").value==="" || document.getElementById("pvschool").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Enter name of your Previous school attended.","error");
   document.getElementById("pvschool").focus();}
   /*
   	else if(document.getElementById("prclass").value==="XI" || document.getElementById("prclass").value==="XII"){
	if(document.getElementById("prstream").value==="" || document.getElementById("prstream").value==="NA"){
   element.checked = !element.checked;
   alert("Choose your Stream to Apply for");}
   	else if(document.getElementById("prfcomp1").value==="" || document.getElementById("prfcomp1").value==="NA"){
   element.checked = !element.checked;
   alert("Choose your Compulsory Subjects");}
   	else if(document.getElementById("prfcomp2").value==="" || document.getElementById("prfcomp2").value==="NA"){
   element.checked = !element.checked;
   alert("Choose your Compulsory Subjects");}
   	else if(document.getElementById("prfsub1").value==="" || document.getElementById("prfsub1").value==="NA"){
   element.checked = !element.checked;
   alert("Choose your Subjects");}
   	else if(document.getElementById("prfsub2").value==="" || document.getElementById("prfsub2").value==="NA"){
   element.checked = !element.checked;
   alert("Choose your Subjects");}
   	else if(document.getElementById("prfsub3").value==="" || document.getElementById("prfsub3").value==="NA"){
   element.checked = !element.checked;
   alert("Choose your Subjects");}
   	else if(document.getElementById("prfsub4").value==="" || document.getElementById("prfsub4").value==="NA"){
   element.checked = !element.checked;
   alert("Choose your Subjects");}
	}   */
	else if(document.getElementById("pvclass").value==="" || document.getElementById("pvclass").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Choose your Previous Class attended","error");
   document.getElementById("pvclass").focus();}
	else if(document.getElementById("pvsec").value===""){
   element.checked = !element.checked;
   swal("Oops..","Choose your Section of previous class attended","error");
   document.getElementById("pvsec").focus();}
	else if(document.getElementById("medium").value==="" || document.getElementById("medium").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Choose your Medium of Study","error");
   document.getElementById("medium").focus();}
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
   document.getElementById("municipality").focus();}
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
   	   	
   	else{
   element.checked = element.checked;
   document.getElementById("submitbtn").disabled = !element.checked;
   swal("Dhola High School","Check all details carefully and be sure that you have uploaded your Photo, Date of Birth proof and Bank Pass Book before Submit.","info");
   }
 }
