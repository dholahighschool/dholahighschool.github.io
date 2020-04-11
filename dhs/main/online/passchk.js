function adminpass() {
  swal("Dhola High School","Enter Admin Password Here:", {
    content: {
    element: "input",
    attributes: {
      placeholder: "Type your password",
      type: "password",
    },
  },
})
  .then((value) => {

  if (value != null) {
    if (value == window.atob("ZGhzb25saW5lMjAyMA==")){
      window.open("ad.html");
  }
  else{
  swal("Dhola High School","You are not authorized!","error");
  window.open("../../404/index.html");
  }
  }
});
}