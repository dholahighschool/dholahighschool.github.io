function toEdit(){
var uid = document.getElementById("appid").value;
    if (window.sessionStorage) 
        {
          sessionStorage.setItem("username", uid);
          window.open("../student/edit.html");
        }
    }
    function toixLogin(){
var uid = document.getElementById("appid").value;
    if (window.sessionStorage) 
        {
          sessionStorage.setItem("username", uid);
          window.open("../student/login/ixonly.html");
        }
    }
    function toviLogin(){
var uid = document.getElementById("appid").value;
    if (window.sessionStorage) 
        {
          sessionStorage.setItem("username", uid);
          window.open("../student/login/vitoviii.html");
        }
    }
    function admstupd(){
var uid = document.getElementById("appid").value;
    if (window.sessionStorage) 
        {
          sessionStorage.setItem("username", uid);
          window.open("../student/admission.html");
        }
    }
    function slstupd(){
var uid = document.getElementById("appid").value;
    if (window.sessionStorage) 
        {
          sessionStorage.setItem("username", uid);
          window.open("../student/selection.html");
        }
    }