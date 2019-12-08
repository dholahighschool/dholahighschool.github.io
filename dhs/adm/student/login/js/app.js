
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

var flag=0;

const dbRef = firebase.database().ref();

const usersRef = dbRef.child('users');

usersRef.on("child_added", snap => {

	let user = snap.val();

	let $li = document.createElement("li");
	$li.innerHTML = user.name;
	$li.setAttribute("child-key", snap.key);
	$li.addEventListener("click", userClicked)
	userListUI.append($li);

});


function userClicked(e) {
	var psd = document.getElementById("password").value.replace(/-/g,'');
	var userID = document.getElementById("username").value;
	var ast="";
	const userRef = dbRef.child('users/' + userID);
	const userDetailUI = document.getElementById("userDetail");

	userDetailUI.innerHTML = ""

	userRef.on("child_added", snap => 
	{
		if(snap.key=="dob")
		{
				ast=snap.val().replace(/-/g,'');
			
		}
		if(snap.key=="prclass")
		{
				chsn = snap.val();
			
		}
		if(ast==psd)
		{	
			flag=1;
		}
		if(chsn=="IX")
		{
			flag=2;
		}
	});
	chkn();
}

function chkn() {
	if(flag==1)
	{
		var psd = document.getElementById("password").value.replace(/-/g,'');
		var userID = document.getElementById("username").value;
		if (window.sessionStorage) 
				{
					sessionStorage.setItem("username", userID);
					window.open("vitoviii.html");
					window.close();
				}
	}
	else if(flag==2)
	{
		var userID = document.getElementById("username").value;
		if (window.sessionStorage) 
				{
					sessionStorage.setItem("username", userID);
					window.open("ixonly.html");
					window.close();
				}
	}
	else
	{
		alert("Sorry! \n You entered wrong Application ID or Date of Birth!");
	}
}