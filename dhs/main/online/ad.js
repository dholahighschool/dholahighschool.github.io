var vid = "";
function appidset(){
	var jst = new Date();
  var jstn = jst.valueOf();
  var lst = new Date("12/31/2050");
  var lstn = lst.valueOf();
  var diff = lstn - jstn;
	vid = diff;
  document.getElementById("vid").value = vid;
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
document.getElementById('onlineclass').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
var	fclass = getInputVal('fclass');
var	sub = getInputVal('sub');
var	topic = getInputVal('topic');
var teacher = getInputVal('teacher');
var dtype = getInputVal('dtype');
var vlnk = getInputVal('vlnk');
var vid = getInputVal('vid');

 // Save message
  saveMessage(fclass,sub,topic,teacher,dtype,vlnk,vid);


  document.getElementById("onlineclass").style.display = 'none';
  document.getElementById("thankyou").style.display = 'block';

  document.getElementById('onlineclass').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase   
function saveMessage(fclass,sub,topic,teacher,dtype,vlnk,vid){
  /*
  var newMessageRef = messagesRef.push();
  MessageRef.set({
  */
  firebase.database().ref('onlineclass/' + vid).set({
fclass:fclass,
sub:sub,
topic:topic,
teacher:teacher,
dtype:dtype,
vlnk:vlnk,
vid:vid
  });
}










var fbBucketName1 = 'onlineclass';

    var uploader1 = document.getElementById('uploader1');
    var fileButton1 = document.getElementById('fileButton1');
    fileButton1.addEventListener('change', function (e1) {

      console.log('file upload event', e1);
      
      var FileSize = e1.target.files[0].size / 1024 / 1024; // in MB
          if (FileSize > 20) 
          {
              swal('Oops..','File size exceeds 20 MB \n Please Choose another document or resize it.','error');
              document.getElementById('fileButton1').value = "";
          } 
          else 
          {
            var file1 = e1.target.files[0];
          }
          
      var file1 = e1.target.files[0];

      var str = e1.target.files[0].type;
      
      var n = str.length - str.lastIndexOf("/") -1;
      
      var strt = str.substr(str.length - n);


      var bl = strt.includes("wordprocessingml");

      if(bl == 1){strt = "docx"}

      var bl = strt.includes("spreadsheetml");

      if(bl == 1){strt = "xlsx"}

      var bl = strt.includes("plain");

      if(bl == 1){strt = "txt"}

      var bl = strt.includes("presentationml");

      if(bl == 1){strt = "pptx"}


      var storageRef1 = firebase.storage().ref(`${fbBucketName1}/dhs${vid}.${strt}`);

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
          /*
          var link1 = document.getElementById("photo");
          link1.setAttribute("src", downloadURL1);
          */
          document.getElementById('vlnk').value = downloadURL1;
          document.getElementById('updcmpl').style.display = "block";
        });

    });

