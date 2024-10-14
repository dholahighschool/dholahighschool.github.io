  
      var count=0;
  
  function getAllUser(){
      $("#userDetails").empty();
      var rootRef = firebase.database().ref("appUser");
      rootRef.on("child_added", snap => {
        var fcm = snap.child("FCMToken").val();
      
        var id = snap.child("userId").val();
        var name = snap.child("userName").val();
        var email = snap.child("userEmail").val();
        var phone = snap.child("userPhone").val();
        count++;
        var fcmshort="-";
        if(fcm!=null){
            var fcmshort = fcm.substring(0, 8) + "... ..." + fcm.slice(-8);
        }
      $("#userDetails").append("<tr class='userTable' id='user" + id + "'><td>" + count + "</td><td><table class='insideTable'><tr><td>" + id +"</td><td><i onClick='copyCode(\"" + id + "\")' class='fa-solid fa-copy'></i></td></tr></table></td><td><table class='insideTable'><tr><td>" + fcmshort +"</td><td><i onClick='copyCode(\"" + fcm + "\")' class='fa-solid fa-copy'></i></td></tr></table></td><td><table class='insideTable'><tr><td>" + name +"</td><td><i onClick='copyCode(\"" + name + "\")' class='fa-solid fa-copy'></i></td></tr></table></td><td><table class='insideTable'><tr><td>" + phone +"</td><td><i onClick='copyCode(\"" + phone + "\")' class='fa-solid fa-copy'></i></td></tr><tr><td>" + email +"</td><td><i onClick='copyCode(\"" + email + "\")' class='fa-solid fa-copy'></i></td></tr></table></td><td id='type" + id + "'></td></tr>");
      getPayOptions(id);
    
  });
      }
  
  
      function getPayOptions(id){
          var rootRef = firebase.database().ref("appUser/" + id + "/payments/options/");
          
          rootRef.on("child_added", snap => {
  
          var pid = snap.child("id").val();
          var pacc = snap.child("acc").val();
          var ptype= snap.child("type").val();
          var text = $("#type" + id).html();
          if(text!="")
          $("#type" + id).html(text + "<br><table class='insideTable'><tr><td>" + pid + "</td><td>" + ptype +"</td></tr><tr><td>" + pacc +"</td><td><i onClick='copyCode(\"" + pacc + "\")' class='fa-solid fa-copy'></i></td></tr></table>");
          else
          $("#type" + id).html("<table class='insideTable'><tr><td>" + pid + "</td><td>" + ptype +"</td></tr><tr><td>" + pacc +"</td><td><i onClick='copyCode(\"" + pacc + "\")' class='fa-solid fa-copy'></i></td></tr></table>");
          });
           
          }

// Report List

function getAllReports(){
        $("#reportDetails").empty();
        var rootRef = firebase.database().ref("report");
        rootRef.on("child_added", snap => {
        var orderId = snap.child("OrderId").val();
        var remarks = snap.child("remarks").val();
        var reply = snap.child("reply").val(); 
        var reportId = snap.child("reportId").val();
        var userId = snap.child("userId").val();
        var txnId = snap.child("txnId").val();
        var reportTime = snap.child("reportTime").val();
        getuserName(orderId,remarks,reply,reportId,userId,txnId,reportTime);
    });
}
var count1=0;
function getuserName(orderId,remarks,reply,reportId,userId,txnId,reportTime){
  // console.log(reportId)
    reportTime = reportTime.replace('|','<br>');
    var rootRef = firebase.database().ref("appUser");
    
    rootRef.on("child_added", snap => {
        var uid = snap.child("userId").val();    
        var userName = snap.child("userName").val();
        if (uid==userId){
        count1++;
        $("#reportDetails").append("<tr class='reportTable' id='report" + reportId + "' ><td>"+ count1 +"</td><td><table class='insideTable'><tr><td>" + reportId +"</td><td><i onClick='copyCode(\"" + reportId + "\")' class='fa-solid fa-copy'></i></td></tr><tr><td colspan='2'>" + reportTime +"</td></tr></table></td><td><table class='insideTable'><tr><td>" + remarks + "</td></tr><tr><td><center><i onClick='replybtn(\"" + reportId + "\")' class='fa-solid fa-reply'></i></center></td></tr></table></td><td><table class='insideTable'><tr><td>" + reply + "</td><td><i onClick='replyeditbtn(\"" + reportId + "\",\"" + reply + "\")' class='fa-solid fa-edit'></i></td></tr></table></td><td><table class='insideTable'><tr><td>" + orderId +"</td><td><i onClick='copyCode(\"" + orderId + "\")' class='fa-solid fa-copy'></i></td></tr><tr><td>" + txnId +"</td><td><i onClick='copyCode(\"" + txnId + "\")' class='fa-solid fa-copy'></i></td></tr></table></td><td><table class='insideTable'><tr><td>" + userId +"</td><td><i onClick='copyCode(\"" + userId + "\")' class='fa-solid fa-copy'></i></td></tr><tr><td>" + userName +"</td><td><i onClick='copyCode(\"" + userName + "\")' class='fa-solid fa-copy'></i></td></tr></table></td><td><center><i style='color:red' onclick='removeReport(\"" + reportId + "\")' class='fa fa-trash trash fa-2x'></i><center></td></tr>");
        
        }
    });
}
function replybtn(y) {
  var reply = prompt("Enter Your Reply",);
  if (confirm("Confirm Send Or Cancel To Change.") == true) {
      alert("Reply Sent.");
      window.location.reload(true);
      firebase.database().ref("report/" + y).update({reply: reply});
      // printreply(reply,y)
      // firebase.database().ref("developerOptions/versionInfo/").update({versionCode: versionc});
    } else {
      alert("You cancelled!");
    }
}
function replyeditbtn(y,replied) {
  var reply = prompt("Edit Your Reply",replied);
  if (confirm("Confirm Send Or Cancel To Change.") == true) {
      alert("Edited Reply Sent.");
      window.location.reload(true);
      firebase.database().ref("report/" + y).update({reply: reply});
      // printreply(reply,y)
      // firebase.database().ref("developerOptions/versionInfo/").update({versionCode: versionc});
    } else {
      alert("You cancelled!");
    }
}
// function printreply(z,rid){
//   if ()
//   $("#rep").html(z);
// }

function removeReport(x) {
  console.log(x)
if (confirm("Do you confirm to remove the report?") == true) {
    alert("Report Removed.");
    firebase.database().ref("report/" + x).remove();
    document.getElementById("report" + x).style.display = "none";
  } else {
    alert("You canceled!");
  }
}
  
// Order List
allStatus = "";
function getAllorder(){
    $("#userDetails").empty();
var rootRef = firebase.database().ref("appUser");
rootRef.on("child_added", snap => {
var id = snap.child("userId").val();
getOrderDetails(id);
});
}
var statusTypes = ['Pending','Purchased','Under Progress','Under Review','Hold','Refunded','Completed','Cancelled','Declined','Error','Undefined'];
var cntr = 0;
function getOrderDetails(id){
var rootRef = firebase.database().ref("order/" + id);
    
    rootRef.on("child_added", snap => {

    var oid = snap.child("id").val();
    var amount = snap.child("amount").val();
    var mp= snap.child("mp").val();
    var orderTime= snap.child("orderTime").val();
    var payid= snap.child("payId").val();
    var paymentAccount= snap.child("paymentAccount").val();
    var paymentType= snap.child("paymentType").val();
    var productId= snap.child("productId").val();
    var productName= snap.child("productName").val();
    var status= snap.child("status").val();
    var user= snap.child("user").val();
    var userEmail= snap.child("userEmail").val();
    var userName= snap.child("userName").val();
    var userPhone= snap.child("userPhone").val();
    var googleTransactionId= snap.child("googleTransactionId").val();
    var isAcknowledged= snap.child("isAcknowledged").val();
    var purchasePackageName= snap.child("purchasePackageName").val();
    var accountIdentifiers= snap.child("accountIdentifiers").val();
    var purchaseState= snap.child("purchaseState").val();
    var purchaseToken= snap.child("purchaseToken").val();
    var signatureDetails= snap.child("signatureDetails").val();
    var transactionTime= snap.child("transactionTime").val();
    var autoRenew= snap.child("autoRenew").val();
    var payLoad= snap.child("payLoad").val();
    var transactionAmount= snap.child("transactionAmount").val();
    // var qrCodeContent= "upi://pay?pa=" + paymentAccount + "&pn=Abcd&tn=undefined&am=" + amount;
    // var qrcodeId = "qrCode" + oid;
    
    if(purchasePackageName == "com.quantumwebgarden.rewardqw"){
    var statusUpdate = "<select name='status" + oid + "' id='status" + oid + "'>";
    for (var i = 0; i <= statusTypes.length - 1; i++) {
        statusUpdate += "<option value='" + statusTypes[i] + "'>" + statusTypes[i] + "</option>";
    }
    allStatus = statusUpdate + "</select>";
    cntr++;
    var UTCTime = new Date(transactionTime).toUTCString();
    var pToken = purchaseToken.substring(0, 8) + "... ..." + purchaseToken.slice(-8);
    var pSign = signatureDetails.substring(0, 8) + "... ..." + signatureDetails.slice(-8);
    var accIdentify = accountIdentifiers.substring(0, 8) + "... ..." + accountIdentifiers.slice(-8);
    var finalStatus = status.trim().toLowerCase().replace(" ","_");

    $("#orderDetails").append("<tr class='orderTableData' id='order" + oid + "'><td  class='bt " + finalStatus + "'>" + cntr + "</td><td><table class='insideTable'><tr><td>" + oid + "</td><td><i onclick='copyCode(\"" + oid + "\")' class='fa-solid fa-copy'></i></td></tr><tr><td colspan='2'>" + orderTime.replace(' | ', '<br>') + "</td></tr></table></td><td><table class='insideTable'><tr><td>" + user + "</td><td><i onclick='copyCode(\"" + user + "\")' class='fa-solid fa-copy'></i></td></tr><tr><td>" + userName + "</td><td><i onclick='copyCode(\"" + userName + "\")' class='fa-solid fa-copy'></i></td></tr><tr><td>" + userEmail + "</td><td><i onclick='copyCode(\"" + userEmail + "\")' class='fa-solid fa-copy'></i></td></tr><tr><td>" + userPhone + "</td><td><i onclick='copyCode(\"" + userPhone + "\")' class='fa-solid fa-copy'></i></td></tr></table></td><td><table class='insideTable'><tr><td colspan='2'>" + productName + "</td></tr><tr><td>" + productId + "</td><td><i onclick='copyCode(\"" + productId + "\")' class='fa-solid fa-copy'></i></td></tr><tr><td colspan='2'>Amount: " + transactionAmount + "</td></tr></table></td><td><table class='insideTable'><tr><td id=curStatus" + oid + ">" + status + "</td><td><i onclick='copyCode(\"" + status + "\")' class='fa-solid fa-copy'></i></td></tr><tr><td colspan='2'>" + statusUpdate + "</select></td></tr><tr><td colspan='2'><input type='submit' onclick='updateStatus(\"" + oid + "\",\"" + id + "\")' value='Update Status'></td></tr></table></td><td><table class='insideTable'><tr><td colspan='2'>" + paymentType + "</td></tr><tr><td>" + paymentAccount + "</td><td><i onclick='copyCode(\"" + paymentAccount + "\")' class='fa-solid fa-copy'></i></td></tr><tr><td colspan='2'>Amount: " + amount + "</td></tr></table></td><td><table class='insideTable'><tr><td colspan='2'><input type='submit' onclick='generateQR(\"" + oid + "\",\"" + paymentAccount + "\",\"" + amount + "\")' value='Generate QR'></td></tr><tr><td id='qrcode" + oid + "' colspan='2'></td></tr></table></td><td><table class='insideTable'><tr><td>" + googleTransactionId + "</td><td><i onclick='copyCode(\"" + googleTransactionId + "\")' class='fa-solid fa-copy'></i></td></tr><tr><td colspan='2'>" + UTCTime + "</td></tr><tr><td colspan='2'>" + purchaseState + "</td></tr><tr><td colspan='2'>Ack: " + isAcknowledged + "</td></tr></table></td><td><table class='insideTable'><tr><td>Purchase Token: <br>" + pToken + "</td><td><i onclick='copyCode(\"" + purchaseToken + "\")' class='fa-solid fa-copy'></i><br><br><i onclick='verifyCode(\"" + purchaseToken + "\")' class=\"fa fa-check\" aria-hidden=\"true\"></i></td></tr><tr><td>Signature: <br>" + pSign + "</td><td><i onclick='copyCode(\"" + signatureDetails + "\")' class='fa-solid fa-copy'></i></td></tr><tr><td colspan='2'>Renew: " + autoRenew + "</td></tr></table></td><td><table class='insideTable'><tr><td>Account Identifiers: <br>" + accIdentify + "</td><td><i onclick='copyCode(\"" + accountIdentifiers + "\")' class='fa-solid fa-copy'></i></td></tr><tr><td>Payload: <br>" + payLoad + "</td><td><i onclick='copyCode(\"" + payLoad + "\")' class='fa-solid fa-copy'></i></td></tr></table></td><td><center><i style='color:red' onclick='removeOrder(\"" + oid + "\",\"" + id + "\")' class='fa fa-trash trash fa-2x'></i></center></td></tr>");
    // var qrcode = new QRCode(qrCodeId,qrCodeContent);
        
    }
    });
}
function generateQR(x,y,a){
    x= "qrcode" + x;
    y= "upi://pay?pa=" + y + "&tn=QRewards_cashback&am=" + a;
    var qrcode = new QRCode(x,y);
}
function copyCode(x) {
    navigator.clipboard.writeText(x);
    
}

function verifyCode(x) {
let gpToken = prompt("Paste the Purchase token: ", "");
  if (gpToken != null) {
    if(gpToken == x){
        alert("Verified");
    }
    else{
        alert("Error");
    }
  }
}

function removeOrder(x,y) {
if (confirm("Do you confirm to remove the order?") == true) {
    alert("Order Removed");
    firebase.database().ref("order/" + y + "/" + x).remove();
    document.getElementById("order" + x).style.display = "none";
  } else {
    alert("You canceled!");
  }
}

function updateStatus(x,y) {
if (confirm("Do you confirm to update the status?") == true) {
    alert("Order status updated.");
    firebase.database().ref("order/" + y + "/" + x).update({status:document.getElementById("status" + x).value});
    document.getElementById("curStatus" + x).innerHTML = document.getElementById("status" + x).value;
    // var modal = document.getElementById("myModal");
    // modal.style.display = "block";
    // document.getElementById("notify_username").value = ;
    // document.getElementById("notify_fcmToken").value = ;
    // document.getElementById("notify_text").value = ;
  } else {
    alert("You canceled!");
  }
}

// CallBack
function getAllcalls(){
        $("#callDetails").empty();
        var rootRef = firebase.database().ref("callback");
        rootRef.on("child_added", snap => {
        var id = snap.child("callbackId").val();
        var userid = snap.child("userId").val();
        getusername(userid,id);
    });
}
var count2=0;
function getusername(userid,id){
    var rootRef = firebase.database().ref("appUser");
    
    rootRef.on("child_added", snap => {
        var uid = snap.child("userId").val();    
        var username = snap.child("userName").val();
        var userPhone = snap.child("userPhone").val();
        if (uid==userid){
        count2++;
        $("#callDetails").append("<tr id='callback" + id + "'><td>"+ count2 + "." + "</td><td>" + id +"</td><td onclick=\"window.open('tel:" + userPhone + "')\">" + userPhone + "</td><td>" + userid + "</td><td id='name'>" + username + "</td><td><center><i style='color:red' onclick='removeCall(\"" + id + "\")' class='fa fa-trash trash fa-2x'></i><center></td></tr>");
  }  });         
}

function removeCall(x) {
if (confirm("Do you confirm to remove the callback request?") == true) {
    alert("Callback Request Removed.");
    firebase.database().ref("callback/" + x).remove();
    document.getElementById("callback" + x).style.display = "none";
  } else {
    alert("You canceled!");
  }
}


// Index


        function validate(){
            var rootRef = firebase.database().ref("applog");
            rootRef.on("child_added", snap => {
            var id = snap.child("id").val();
            var pass = snap.child("pass").val();
            var username = document.getElementById("username").value;
            var password = document.getElementById("pass").value;
            if ( username == id && password == pass){
            window.close();
            window.open("user_list.html","_blank");     
            return false;
            }
            else $("#alert").html("Enter Correct Details");
        });
        }

// SideMenu

document.addEventListener("DOMContentLoaded", function(event) {
   
    const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)
    
    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
    toggle.addEventListener('click', ()=>{
    // show navbar
    nav.classList.toggle('show')
    // change icon
    toggle.classList.toggle('bx-x')
    // add padding to body
    bodypd.classList.toggle('body-pd')
    // add padding to header
    headerpd.classList.toggle('body-pd')
    })
    }
    }
    
    showNavbar('header-toggle','nav-bar','body-pd','header')
    
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
     // Your code to run since DOM is loaded and ready
    });

//Search 
$('#myinput').on("keyup",function(){
        var value = $(this).val().toLowerCase();
        //    alert(value)
        $(".searchInTable tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value)>-1);
        });

});

$('#orderSearch').on("keyup",function(){
    searchOrder($('#statusChecker').find(":selected").text());
});

function searchOrder(x){
    x = x.toUpperCase();
var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("orderSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("orderDetails");
  tr = table.getElementsByClassName("orderTableData");
  for (i = 0; i < tr.length; i++) {
    td1 = tr[i].getElementsByTagName("td")[2]; // order ID
    td2 = tr[i].getElementsByTagName("td")[6]; // user Id
    td3 = tr[i].getElementsByTagName("td")[8]; // user Name
    td4 = tr[i].getElementsByTagName("td")[20]; // Purchase Status
    td10 = tr[i].getElementsByTagName("td")[30]; // Google Order Id
    if (td10||td1||td2||td3||td4) {
      txt1 = td1.textContent || td1.innerText;
      txt1+= td2.textContent || td2.innerText;
      txt1+= td10.textContent || td10.innerText;
      txt1+= td3.textContent || td3.innerText;
      txt2 = td4.textContent || td4.innerText;
      if(x!="ALL"){
        if (txt1.toUpperCase().indexOf(filter) > -1 && txt2.toUpperCase() == x) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
      }
      else{
        if (txt1.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
      }
    }       
  }
}

$('#userSearch').on("keyup",function(){
    searchUser();
});

function searchUser(){
var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("userSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("userDetails");
  tr = table.getElementsByClassName("userTable");
  for (i = 0; i < tr.length; i++) {
    td1 = tr[i].getElementsByTagName("td")[2]; // User ID
    td2 = tr[i].getElementsByTagName("td")[8]; // User Name
    td3 = tr[i].getElementsByTagName("td")[11]; // user Phone
    td4 = tr[i].getElementsByTagName("td")[13]; // User Email
    td5 = tr[i].getElementsByTagName("td")[16]; // Payment Type
    td6 = tr[i].getElementsByTagName("td")[18]; // paymaent Account
    if (td1||td2||td3||td4||td6) {
      txt1 = td1.textContent || td1.innerText;
      txt1+= td2.textContent || td2.innerText;
      txt1+= td3.textContent || td3.innerText;
      txt1+= td4.textContent || td4.innerText;
      if(td5!=null||td5!=undefined){
        txt2 = td5.textContent || td5.innerText;
      txt2+= td6.textContent || td6.innerText;
      }

        if (txt1.toUpperCase().indexOf(filter) > -1 || txt2.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }

    }       
  }
}


$('#reportSearch').on("keyup",function(){
    searchReport();
});

function searchReport(){
var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("reportSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("reportDetails");
  tr = table.getElementsByClassName("reportTable");
  for (i = 0; i < tr.length; i++) {
    td1 = tr[i].getElementsByTagName("td")[2]; // Report ID
    td2 = tr[i].getElementsByTagName("td")[11]; // Order Id
    td3 = tr[i].getElementsByTagName("td")[13]; // Google Txn Id
    td4 = tr[i].getElementsByTagName("td")[16]; // User Id
    td5 = tr[i].getElementsByTagName("td")[18]; // User Name
    if (td1||td2||td3||td4||td5) {
      txt1 = td1.textContent || td1.innerText;
      txt1+= td2.textContent || td2.innerText;
      txt1+= td3.textContent || td3.innerText;
      txt1+= td4.textContent || td4.innerText;
      txt1+= td5.textContent || td5.innerText;
      // if(td5!=null||td5!=undefined){
      //   txt2 = td5.textContent || td5.innerText;
      // txt2+= td6.textContent || td6.innerText;
      // }
        if (txt1.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }

    }       
  }
}


function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("orderDetails");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 0; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[2];
      y = rows[i + 1].getElementsByTagName("TD")[2];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

// Settings

function versions(){
  var rootRef = firebase.database().ref("developerOptions/versionInfo/");
  rootRef.on('value' , snap => {
    var version = snap.child("version").val();
    var versionCode = snap.child("versionCode").val();
    // console.log(version +"  "+ versionCode);
    $("#versioninfo").append("<tr id='curversion'><td >"+ version +"</td><td>" + versionCode +'<i onClick="editbtn()" style="padding-left:8px;" class="fa-solid fa-edit"></i>'+"</td></tr>");
  });
}
function editbtn(){
  // $("#versioninfo").empty();
  var versionCodenew = prompt("Enter Updated Version Code")
  var versionc = parseInt(versionCodenew)
  var versionp = versionc/10
  if (confirm("Do you confirm to update the Version?") == true) {
    alert("Version  updated.");
    window.location.reload(true);
      firebase.database().ref("developerOptions/versionInfo/").update({version: versionp});
      firebase.database().ref("developerOptions/versionInfo/").update({versionCode: versionc});
    } else {
      alert("You canceled!");
    }
  }

  
  function appinfo(){
    var rootRef = firebase.database().ref("developerOptions/appInfo/");
    rootRef.on('value' , snap => {
    var doc = snap.child("docType").val();
    var documentation = snap.child("documentation").val();
    var faq = snap.child("faq").val();
    var tfaq = snap.child("faqType").val();
    var vid = snap.child("video").val();
    var tvid = snap.child("videoType").val();
    // console.log(version +"  "+ versionCode);
    $("#appinfo").append("<tr><td>"+ doc +'<i onClick="editbtn0()" style="padding-left:8px;" class="fa-solid fa-edit"></i>'+"</td><td>" + documentation +'<i onClick="editbtn1()" style="padding-left:8px;" class="fa-solid fa-edit"></i>'+"</td><td>"+faq +"</td><td>"+tfaq +"</td><td>"+vid +"</td><td>"+tvid +"</td></tr>");
  });
  }

  function developers(){
    var rootRef = firebase.database().ref("developerOptions/developers/");
    rootRef.on('child_added' , snap => {
    var desc = snap.child("desc").val();
    var id = snap.child("id").val();
    var name = snap.child("name").val();
    var photo = snap.child("photo").val();
    var pos = snap.child("pos").val();
    var photolink = photo.substring(0, 8) + "... ..." + photo.slice(-8);
    // getphoto(photo)
    // console.log(version +"  "+ versionCode);
    $("#developersinfo").append("<tr><td id='pic'> <img src = \"" + photo + "\" class ='imgd' </td> <td class = 'piclink'>" + photolink +'<i onClick="editbtn2()" style="padding-left:8px;" class="fa-solid fa-edit"></i>'+"</td><td>"+name +"</td><td>"+desc +"</td><td>"+ pos +"</td></tr>");
  });
  
  }
    
  // getphoto(photo){
  //   $("#pic").html(<img src = "photo">);
  // }


// payments

function sortMonths(months) {
  months.sort(function(a, b) {
    const yearA = parseInt(a.slice(-4));
    const yearB = parseInt(b.slice(-4));
    if (yearA !== yearB) {
      return yearA - yearB;
    } else {
      const monthA = monthTitle.indexOf(a.slice(0, -7));
      const monthB = monthTitle.indexOf(b.slice(0, -7));
      return monthA - monthB;
    }
  });
  return months;
}


function payment(year){
  $("#payments").empty();
  var filteredMonths = [];
  for (var i = 0; i < monthYearTitle.length; i++) {
    const monthYear = monthYearTitle[i];
    const yearInTitle = parseInt(monthYear.slice(-4));
    if (year == '0' || year == yearInTitle) {
      filteredMonths.push(monthYear);
    }
  }
  filteredMonths = sortMonths(filteredMonths);
  for (var i = 0; i < filteredMonths.length; i++) {
    const monthYear = filteredMonths[i];
    const monthName = monthYear.slice(0, -7);
    const yearInTitle = monthYear.slice(-4);
    const index = monthYearTitle.indexOf(monthYear);
    const totalSale = monthYearAmountPurchase[index];
    const totalPayment = monthYearAmountReturn[index];
    const googlePayment = totalSale - (0.31 * totalSale);
    const formattedGooglePayment = googlePayment.toFixed(2);
    const profit = googlePayment - totalPayment;
    const formattedProfit = profit.toFixed(2);
    if(year == '0'){
    $("#payments").append("<tr id='payments'><td>" + monthName +" - " + yearInTitle + "</td><td>" + monthYearAmountPurchase[index] + "</td><td >" + monthYearAmountReturn[index] + "</td><td>" + formattedGooglePayment + "</td><td>" + formattedProfit + "</td> </tr>");
  }
  else{
    if(yearInTitle == year){
      $("#payments").append("<tr id='payments'><td>" + monthName + "</td><td>" + monthYearAmountPurchase[index] + "</td><td >" + monthYearAmountReturn[index] + "</td><td>" + formattedGooglePayment + "</td><td>" + formattedProfit + "</td> </tr>");
}
}
  }
}

function getAllPayments(){
  var rootRef = firebase.database().ref("appUser");
  rootRef.on("child_added", snap => {
    var id = snap.child("userId").val();
    getMonthTotal(id);
  });
}

monthYearAmountPurchase = [];
monthYearAmountReturn = [];
monthYearTitle = [];
monthTitle = ["January", "February", "March", "April" , "May", "June", "July", "August", "September", "October", "November", "December"];
yearTitle=[];
monthYearProfit = [];
monthYearGooglePayment = [];

function getMonthTotal(id){
  var rootRef = firebase.database().ref("order/" + id);
      
  rootRef.on("child_added", snap => {
    var amount = snap.child("amount").val();
    var mp= snap.child("mp").val();
    var productId= snap.child("productId").val();
    var status= snap.child("status").val();
    var transactionTime= snap.child("transactionTime").val();
      
    if(productId != null){
      var productAmount = parseInt(productId.slice(productId.length - 4));
      const d = new Date(Number(transactionTime));
      let monthGot = monthTitle[parseInt(d.getMonth())];
      const dy = new Date(Number(transactionTime));
      let year = dy.getFullYear();
      var finalMonthYear = monthGot + " - " + year;
        
      if(mp == "gps"){
        if(status.toUpperCase() == "COMPLETED"){
          if(monthYearTitle.indexOf(finalMonthYear) === -1){
            monthYearTitle.push(finalMonthYear);
            yearTitle.push(year);
            monthYearAmountPurchase[monthYearTitle.indexOf(finalMonthYear)]=Number(productAmount);
             monthYearAmountReturn[monthYearTitle.indexOf(finalMonthYear)]=Number(amount);
             
           }
           else{
            monthYearAmountPurchase[monthYearTitle.indexOf(finalMonthYear)]=Number(monthYearAmountPurchase[monthYearTitle.indexOf(finalMonthYear)]) + Number(productAmount);
            monthYearAmountReturn[monthYearTitle.indexOf(finalMonthYear)]=Number(monthYearAmountReturn[monthYearTitle.indexOf(finalMonthYear)]) + Number(amount);
           }
           
          }
       }
      }
      
      });
  }
