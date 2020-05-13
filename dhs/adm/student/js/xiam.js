// Initialize Firebase (ADD YOUR OWN DATA)
var appid = "";
var ars = 207;
var scs = 48;
var cms = 14;
var ffn = 0;
var btnn = "#showmore";
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
document.getElementById('xiadmf').addEventListener('submit', xif);

// Submit form
function xif(e){
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
var	acyear = getInputVal('acyear');
var	admno = getInputVal('admno');
var admstatus = getInputVal('admstatus');
var	pvclass = getInputVal('pvclass');
var pvaddl = getInputVal('pvaddl');
var	prclass = getInputVal('prclass');
var pvroll = getInputVal('pvroll');
var mpboard = getInputVal('mpboard');
var pvschool = getInputVal('pvschool');
var	prroll = getInputVal('prroll');
var mpbengali = getInputVal('mpbengali');
var mpenglish = getInputVal('mpenglish');
var mpmath = getInputVal('mpmath');
var mpphysc = getInputVal('mpphysc');
var mplfsc = getInputVal('mplfsc');
var mphist = getInputVal('mphist');
var mpgeo = getInputVal('mpgeo');
var mparabic = getInputVal('mparabic');
var mpfiqh = getInputVal('mpfiqh');
var mphadith = getInputVal('mphadith');
var mptafsir = getInputVal('mptafsir');
var mpaddl = getInputVal('mpaddl');
var mptotal = getInputVal('mptotal');
var mpperrev = getInputVal('mpperrev');
var mpprc = getInputVal('mpprc');
var	prstream = getInputVal('prstream');
var	prfcomp1 = getInputVal('prfcomp1');
var	prfcomp2 = getInputVal('prfcomp2');
var	prfsub1 = getInputVal('prfsub1');
var	prfsub2 = getInputVal('prfsub2');
var	prfsub3 = getInputVal('prfsub3');
var	prfsub4 = getInputVal('prfsub4');
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
var updmpadmit = getInputVal('updmpadmit');
var updmpmark = getInputVal('updmpmark');
var updaadhaarpic = getInputVal('updaadhaarpic');
var updbpass = getInputVal('updbpass');
var updcaste = getInputVal('updcaste');

 // Save message
  saveMessage(cat,name,dob,dobreg,gender,category,religion,mothertongue,nationality,aadhaar,bloodgroup,healthid,idmark,acyear,admno,admstatus,pvclass,pvaddl,prclass,pvroll,mpboard,pvschool,prroll,mpbengali,mpenglish,mpmath,mpphysc,mplfsc,mphist,mpgeo,mparabic,mpfiqh,mphadith,mptafsir,mpaddl,mptotal,mpperrev,mpprc,prstream,prfcomp1,prfcomp2,prfsub1,prfsub2,prfsub3,prfsub4,medium,vill,habitation,district,block,panchayat,po,ps,pin,phone,email,fname,mname,gname,relationship,aincome,gqualification,gvill,ghabitation,gdistrict,gblock,gpanchayat,gpo,gps,gpin,gphone,gemail,bplstatus,bplno,cwsn,cwsntyp,bname,bcode,bifsc,acno,appid,updphoto,updsign,updmpadmit,updmpmark,updaadhaarpic,updbpass,updcaste);


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
function saveMessage(cat,name,dob,dobreg,gender,category,religion,mothertongue,nationality,aadhaar,bloodgroup,healthid,idmark,acyear,admno,admstatus,pvclass,pvaddl,prclass,pvroll,mpboard,pvschool,prroll,mpbengali,mpenglish,mpmath,mpphysc,mplfsc,mphist,mpgeo,mparabic,mpfiqh,mphadith,mptafsir,mpaddl,mptotal,mpperrev,mpprc,prstream,prfcomp1,prfcomp2,prfsub1,prfsub2,prfsub3,prfsub4,medium,vill,habitation,district,block,panchayat,po,ps,pin,phone,email,fname,mname,gname,relationship,aincome,gqualification,gvill,ghabitation,gdistrict,gblock,gpanchayat,gpo,gps,gpin,gphone,gemail,bplstatus,bplno,cwsn,cwsntyp,bname,bcode,bifsc,acno,appid,updphoto,updsign,updmpadmit,updmpmark,updaadhaarpic,updbpass,updcaste){
  /*
  var newMessageRef = messagesRef.push();
  MessageRef.set({
  */
  firebase.database().ref('xi2020/' + prstream + '/' + appid).set({
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
acyear:acyear,
admno:admno,
admstatus:admstatus,
pvclass:pvclass,
pvaddl:pvaddl,
prclass:prclass,
pvroll:pvroll,
mpboard:mpboard,
pvschool:pvschool,
prroll:prroll,
mpbengali:mpbengali,
mpenglish:mpenglish,
mpmath:mpmath,
mpphysc:mpphysc,
mplfsc:mplfsc,
mphist:mphist,
mpgeo:mpgeo,
mparabic:mparabic,
mpfiqh:mpfiqh,
mphadith:mphadith,
mptafsir:mptafsir,
mpaddl:mpaddl,
mptotal:mptotal,
mpperrev:mpperrev,
mpprc:mpprc,
prstream:prstream,
prfcomp1:prfcomp1,
prfcomp2:prfcomp2,
prfsub1:prfsub1,
prfsub2:prfsub2,
prfsub3:prfsub3,
prfsub4:prfsub4,
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

	var fbBucketName1 = 'xi2020';

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
      
      		var n = str.length - str.lastIndexOf("/") -1;
      
      		var strt = str.substr(str.length - n);
	
			var storageRef1 = firebase.storage().ref(`${fbBucketName1}/${appid}/photo.${strt}`);

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


var fbBucketName2 = 'xi2020';

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
      
      		var n = str.length - str.lastIndexOf("/") -1;
      
      		var strt = str.substr(str.length - n);

			var storageRef2 = firebase.storage().ref(`${fbBucketName2}/${appid}/sign.${strt}`);

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


var fbBucketName3 = 'xi2020';

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
      
      		var n = str.length - str.lastIndexOf("/") -1;
      
      		var strt = str.substr(str.length - n);
	
			var storageRef3 = firebase.storage().ref(`${fbBucketName3}/${appid}/mpadmit.${strt}`);

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


var fbBucketName4 = 'xi2020';

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
      
      		var n = str.length - str.lastIndexOf("/") -1;
      
      		var strt = str.substr(str.length - n);
	
			var storageRef4 = firebase.storage().ref(`${fbBucketName4}/${appid}/mpmark.${strt}`);

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

var fbBucketName5 = 'xi2020';

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
      
      		var n = str.length - str.lastIndexOf("/") -1;
      
      		var strt = str.substr(str.length - n);
	
			var storageRef5 = firebase.storage().ref(`${fbBucketName5}/${appid}/aadhaarpic.${strt}`);

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


var fbBucketName6 = 'xi2020';

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
      
      		var n = str.length - str.lastIndexOf("/") -1;
      
      		var strt = str.substr(str.length - n);
	
			var storageRef6 = firebase.storage().ref(`${fbBucketName6}/${appid}/bpass.${strt}`);

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

var fbBucketName7 = 'xi2020';

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
      
      		var n = str.length - str.lastIndexOf("/") -1;
      
      		var strt = str.substr(str.length - n);
	
			var storageRef7 = firebase.storage().ref(`${fbBucketName7}/${appid}/caste.${strt}`);

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
 	ffn = 0;
   	ff(btnn,document.getElementById("prstream").value);

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

	else if(document.getElementById("prstream").value==="" || document.getElementById("prstream").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Fill MP Exam Details and click on Submit to proceed further.","error");
   document.getElementById("showmore").focus();}
   	else if(document.getElementById("prfcomp1").value==="" || document.getElementById("prfcomp1").value==="NA" || document.getElementById("prfcomp1").value==="CHOOSE"){
   element.checked = !element.checked;
   swal("Oops..","Select Compulsory Subjects.","error");
   document.getElementById("showmore").focus();}
   	else if(document.getElementById("prfcomp2").value==="" || document.getElementById("prfcomp2").value==="NA" || document.getElementById("prfcomp2").value==="CHOOSE"){
   element.checked = !element.checked;
   swal("Oops..","Select Compulsory Subjects.","error");
   document.getElementById("showmore").focus();}
   	else if(document.getElementById("prfsub1").value==="" || document.getElementById("prfsub1").value==="NA" || document.getElementById("prfsub1").value==="CHOOSE"){
   element.checked = !element.checked;
   swal("Oops..","Select Subjects (Maximum Limit: 4).","error");
   document.getElementById("showmore").focus();}
   	else if(document.getElementById("prfsub2").value==="" || document.getElementById("prfsub2").value==="NA" || document.getElementById("prfsub2").value==="CHOOSE"){
   element.checked = !element.checked;
   swal("Oops..","Select Subjects (Maximum Limit: 4).","error");
   document.getElementById("showmore").focus();}
   	else if(document.getElementById("prfsub3").value==="" || document.getElementById("prfsub3").value==="NA" || document.getElementById("prfsub3").value==="CHOOSE"){
   element.checked = !element.checked;
   swal("Oops..","Select Subjects (Maximum Limit: 4).","error");
   document.getElementById("showmore").focus();}
   	else if(document.getElementById("prfsub4").value==="" || document.getElementById("prfsub4").value==="NA" || document.getElementById("prfsub4").value==="CHOOSE"){
   element.checked = !element.checked;
   swal("Oops..","Select Subjects (Maximum Limit: 4).","error");
   document.getElementById("showmore").focus();}

	else if(document.getElementById("pvclass").value==="" || document.getElementById("pvclass").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Choose your Previous Class attended","error");
   document.getElementById("pvclass").focus();}
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
	 else if(ffn == 0){
   element.checked = !element.checked;
   swal("Oops..","Check Live Seat Status & Schedule to proceed.","error");
   document.getElementById("fileButton6").focus();}

   	else{
   element.checked = element.checked;
   document.getElementById("submitbtn").disabled = !element.checked;
   swal("Dhola High School","Check all details carefully and be sure that you have uploaded your Photo, Date of Birth proof and Bank Pass Book before Submit.","info");
   }
 }





function ff(a,b) {
	if(b!="COMMERCE"){
		b = document.getElementById("prstream").value.substring(0, 2);
	}
	else{b="cm";}
	var dt = new Date();
	var xt = dt.getTime();
	var yt = $(a).attr(b + 'st');
	var zt = $(a).attr(b + 'end');
	var stt = $(a).attr(b + 's');

	if((+xt >= +yt && +xt <= +zt) && (stt > 0)){
		ffn = 1;
	}
	else{ffn=0;}
}










$(document).ready(function dtlsload(){

var rootRef = firebase.database().ref('mpadmin');

rootRef.on("child_added", snap => {

var cat = snap.child("cat").val();

var arm = snap.child("arm").val();
var arst = conv(snap.child("arst").val());
var arend = conv(snap.child("arend").val());

var scm = snap.child("scm").val();

var scst = conv(snap.child("scst").val());
var scend = conv(snap.child("scend").val());

var cmm = snap.child("cmm").val();
var cmst = conv(snap.child("cmst").val());
var cmend = conv(snap.child("cmend").val());


if(cat == "am"){
$('#allel').html("Arts: <b>" + arm + "</b>&nbsp; Science: <b>" + scm + "</b>&nbsp; Commerce: <b>" + cmm + "</b>");
$('#arsd').html("<u style=\"color:#a1f0df\">Arts</u><br>Start: <b>" + arst + "</b><br>End: <b>" + arend + "</b>");
$('#scsd').html("<u style=\"color:#a1f0df\">Science</u><br>Start: <b>" + scst + "</b><br>End: <b>" + scend + "</b>");
$('#cmsd').html("<u style=\"color:#a1f0df\">Commerce</u><br>Start: <b>" + cmst + "</b><br>End: <b>" + cmend + "</b>");
$('#showmore').attr( { arm:arm, scm:scm, cmm:cmm, arst:new Date(arst).getTime(), arend:new Date(arend).getTime(), scst:new Date(scst).getTime(), scend:new Date(scend).getTime(), cmst:new Date(cmst).getTime(), cmend:new Date(cmend).getTime() } );
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
}


function checkdtls(){

var rootRef = firebase.database().ref('mpadmin');

rootRef.on("child_changed", snap => {

var cat= snap.child("cat").val();

var arm = snap.child("arm").val();
var arst = conv(snap.child("arst").val());
var arend = conv(snap.child("arend").val());

var scm = snap.child("scm").val();
var scst = conv(snap.child("scst").val());
var scend = conv(snap.child("scend").val());

var cmm = snap.child("cmm").val();
var cmst = conv(snap.child("cmst").val());
var cmend = conv(snap.child("cmend").val());

if(cat == "am"){
$('#allel').html("Arts: <b>" + arm + "</b>&nbsp; Science: <b>" + scm + "</b>&nbsp; Commerce: <b>" + cmm + "</b>");
$('#arsd').html("<u style=\"color:#a1f0df\">Arts</u><br>Start: <b>" + arst + "</b><br>End: <b>" + arend + "</b>");
$('#scsd').html("<u style=\"color:#a1f0df\">Science</u><br>Start: <b>" + scst + "</b><br>End: <b>" + scend + "</b>");
$('#cmsd').html("<u style=\"color:#a1f0df\">Commerce</u><br>Start: <b>" + cmst + "</b><br>End: <b>" + cmend + "</b>");
$('#showmore').attr( { arm:arm, scm:scm, cmm:cmm, arst:new Date(arst).getTime(), arend:new Date(arend).getTime(), scst:new Date(scst).getTime(), scend:new Date(scend).getTime(), cmst:new Date(cmst).getTime(), cmend:new Date(cmend).getTime() } );

}
});
}



function conv(val) {
  var d = new Date(val);
  var n = d.toDateString() + " " +  d.toLocaleTimeString();
  return n;
}

document.getElementById("showmore").addEventListener("click", divhid);

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

	$(".mppsh").each(function() {
		if(this.value<13) {
			flag -= 1;
		}
	});

	if(flag	> 15){
		chk(op[0],btn);
		chk(op[1],btn);
		chk(op[2],btn);
		$("#prstream").css("display","block");
		}
		else{
			swal("Dhola High School","Check all fileds of MP Exam details whether left or not.You must have to obtain at least 25% in each subject(without Addl.) to be eligible.","error");
			$("#prstream").css("display","none");
		}
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
  	$(".mppsh").each(function() {
		if (this.value > 50) {
			swal("Dhola High School","Full marks is 50.","error");
			this.value = "";
			this.placeholder = "0";
		}
	});

  	$(".mpmarks").each(function() {
		if(!isNaN(this.value) && this.value.length!=0) {
			sum += parseFloat(this.value);
			prc = sum / 9;
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
  var rootRef = firebase.database().ref('xi2020/ARTS/');

rootRef.on("child_added", snap => {

var cat = snap.child("prstream").val();
  ars = ars - 1;
  $('#seatlive').html("<center><b><i>Seats Available (LIVE): </i></b><br>Arts: <b>" + ars + "</b>&nbsp; Science: <b>" + scs + "</b>&nbsp; Commerce: <b>" + cms + "</b></center>");
  $('#showmore').attr('ars', ars);
});

}
function scl() {
  var rootRef = firebase.database().ref('xi2020/SCIENCE/');

rootRef.on("child_added", snap => {

var cat = snap.child("prstream").val();
  scs = scs - 1;
  $('#seatlive').html("<center><b><i>Seats Available (LIVE): </i></b><br>Arts: <b>" + ars + "</b>&nbsp; Science: <b>" + scs + "</b>&nbsp; Commerce: <b>" + cms + "</b></center>");
  $('#showmore').attr('scs', scs);
});

}
function cml() {
  var rootRef = firebase.database().ref('xi2020/COMMERCE/');

rootRef.on("child_added", snap => {

var cat = snap.child("prstream").val();
  cms = cms - 1;
  $('#seatlive').html("<center><b><i>Seats Available (LIVE): </i></b><br>Arts: <b>" + ars + "</b>&nbsp; Science: <b>" + scs + "</b>&nbsp; Commerce: <b>" + cms + "</b></center>");
  $('#showmore').attr('cms', cms);
});
}