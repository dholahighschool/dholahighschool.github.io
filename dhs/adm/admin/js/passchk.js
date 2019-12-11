function adminpass() {
  swal("Dhola High School","Enter Admin Password Here:", {
  content: "input",
})
  .then((value) => {

  if (value != null) {
    if (value == window.atob("ZGhzYWRtaW4yMDA3")){
      window.open("admin.html");
  }
  else{
  swal("Dhola High School","You are not authorized!","error");
  window.open("../../404/index.html");
  }
  }
});
}