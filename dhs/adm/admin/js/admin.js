var noticeid = "";
function appidset(){
	var jst = new Date();
  var jstn = jst.valueOf();
  var lst = new Date("12/31/2050");
  var lstn = lst.valueOf();
  var diff = lstn - jstn;
	noticeid = diff;
}
var galleryid = "";
function galidset(){
  var jst = new Date();
  var jstn = jst.valueOf();
  var lst = new Date("12/31/2050");
  var lstn = lst.valueOf();
  var diff = lstn - jstn;
  galleryid = diff;
  document.getElementById("galid").value = galleryid;
  document.getElementById("galleryadd").style.display = 'block';
  document.getElementById("thankgal").style.display = 'none';
  document.getElementById('galleryadd').reset();
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
document.getElementById('noticeAdd').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
var	topics = getInputVal('topics');
var	sdtls = getInputVal('sdtls');
var	ndate = getInputVal('ndate');
var fdtls = getInputVal('fdtls');
var noticeupd = getInputVal('updphoto')

 // Save message
  saveMessage(topics,sdtls,ndate,fdtls,noticeupd);


  document.getElementById("noticeAdd").style.display = 'none';
  document.getElementById("thankyou").style.display = 'block';

  document.getElementById('noticeAdd').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase   
function saveMessage(topics,sdtls,ndate,fdtls,noticeupd){
  /*
  var newMessageRef = messagesRef.push();
  MessageRef.set({
  */
  firebase.database().ref('notices/' + noticeid).set({
topics:topics,
sdtls:sdtls,
ndate:ndate,
fdtls:fdtls,
noticeupd:noticeupd
  });
}


var fbBucketName1 = 'notices';

    var uploader1 = document.getElementById('uploader1');
    var fileButton1 = document.getElementById('fileButton1');
    fileButton1.addEventListener('change', function (e1) {

      console.log('file upload event', e1);
      /*
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
          */
      var file1 = e1.target.files[0];

      var str = e1.target.files[0].type;
      
      var n = str.length - str.lastIndexOf("/") -1;
      
      var strt = str.substr(str.length - n);

      var storageRef1 = firebase.storage().ref(`${fbBucketName1}/notice${noticeid}.${strt}`);

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



function opentab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}