      function myrtFunction(){
      var rpickpoint=document.getElementById("selectTravelCity").value;
      var rdroppoint=document.getElementById("droppoint").value;
      var rpickdate=document.getElementById("dep_date").value;
      var rdropdate=document.getElementById("ret_date").value;
      var rmobile=document.getElementById("rmobile").value;
      
      // Returns successful data submission message when the entered information is stored in database.
      var dataString = '&pickpoint=' + rpickpoint + '&droppoint=' + rdroppoint + '&pickdate=' + rpickdate + '&dropdate=' + rdropdate + '&rmobile=' + rmobile;
      
      if (rpickpoint=='' || rdroppoint=='' || rmobile==''){
      alert("Please Fill All Fields");
      }else{
      
      // AJAX code to submit form.
      
      $.ajax({
      type: "POST",
      url: "contactform.php",
      data: dataString,
      cache: false,
      success: function(html){
      $("#contact-form").slideUp();
      }
      });
      }
      return false;
      }



      function myowFunction(){
      var owpickpoint=document.getElementById("opickpoint").value;
      var owdroppoint=document.getElementById("odroppoint").value;
      var owpickdate=document.getElementById("owdep_date").value;
      var owmobile=document.getElementById("owmobile").value;
      
      // Returns successful data submission message when the entered information is stored in database.
      var dataString = '&owpickpoint=' + owpickpoint + '&owdroppoint=' + owdroppoint + '&owpickdate=' + owpickdate + '&owmobile=' + owmobile;
      
      if (owpickpoint=='' || owdroppoint=='' || owmobile==''){
      alert("Please Fill All Fields");
      }else{
      
      // AJAX code to submit form.
      
      $.ajax({
      type: "POST",
      url: "contactform.php",
      data: dataString,
      cache: false,
      success: function(html){
      $("#onewaytaxi").slideUp();
      }
      });
      }
      return false;
      }






      function mylFunction(){
      var lpickpoint=document.getElementById("lpickpoint").value;
      var package=document.getElementById("package").value;
      var ldate=document.getElementById("ldate").value;
      var lmobile=document.getElementById("lmobile").value;
      
      // Returns successful data submission message when the entered information is stored in database.
      var dataString = '&lpickpoint=' + lpickpoint + '&package=' + package + '&ldate=' + ldate + '&lmobile=' + lmobile;
      
      if (lpickpoint=='' || package=='' || lmobile==''){
      alert("Please Fill All Fields");
      }else{
      
      // AJAX code to submit form.
      
      $.ajax({
      type: "POST",
      url: "contactform.php",
      data: dataString,
      cache: false,
      success: function(html){
      $("#localtaxi").slideUp();
      }
      });
      }
      return false;
      }
      
      
      
      

      function myfcbFunction(){
      var mobile=document.getElementById("freecall").value;
      
      // Returns successful data submission message when the entered information is stored in database.
      
      var dataString = 'freecallback=' + mobile;
      if (mobile==''){
alert("Please Enter 10 Digit Mobile no");
      }else{
      
      // AJAX code to submit form.
      $.ajax({
      type: "POST",
      url: "contactform.php",
      data: dataString,
      cache: false,
      success: function(html){
      $("#fcform").slideUp();
      }
      });
      }
      return false;
      }

function mybookFunction(){

var selectcar=document.getElementById("selectcar").value;
var name=document.getElementById("name").value;
var mobile=document.getElementById("mobile").value;
var dep_date=document.getElementById("dep_date").value;
var nop=document.getElementById("nop").value;
var address=document.getElementById("address").value;
var price=document.getElementById("demo").innerText;

// Returns successful data submission message when the entered information is stored in database.
var dataString='selectcar1=' + selectcar + '&name1=' + name + '&mobile1=' + mobile + '&dep_date1=' + dep_date + '&nop1=' + nop + '&address1=' + address + '&price1=' + price;

   				if (address == "") {
   				document.getElementById("address").style.border = "1px solid red";
   				} else {
   				    document.getElementById("address").style.border = "1px solid green";
   				}
   				if (selectcar == "") {
   				    document.getElementById("carerror").style.display="block";
   				    document.getElementById("selectcar").style.border = "1px solid red";
   				} else {
   				    document.getElementById("carerror").style.display="none";
   				    document.getElementById("selectcar").style.border = "1px solid green";
   				}
   				if (mobile == "") {

   				    document.getElementById("mobile").style.border = "1px solid red";
   				} else {
   				    document.getElementById("mobile").style.border = "1px solid green";
   				}

   				if (name == "") {
   				    document.getElementById("name").style.border = "1px solid red";
   				} else {
   				    document.getElementById("name").style.border = "1px solid green";
   				}

   				if (dep_date == "") {
   				    document.getElementById("dep_date").style.border = "1px solid red";
   				} else {
   				    document.getElementById("dep_date").style.border = "1px solid green";
   				}

   				if (nop == "") {
   				 
   				    document.getElementById("nop").style.border = "1px solid red";
   				} else {
   				    document.getElementById("nop").style.border = "1px solid green";
   				}

if(selectcar!="" && name!="" && mobile!="" && dep_date!="" && nop!="" && address!="") {

document.getElementById("submit").disabled = true;
document.getElementById("myDIV").style.opacity = "0.1";

// AJAX code to submit form.

$.ajax({
type: "POST",
url: "tourinquiry.php",
data: dataString,
cache: false,
success: function(html){
$("#bookform").slideUp();
document.getElementById("success").style.display="block";
document.getElementById("myDIV").style.opacity = "1";
}
});
}
return false;
}





function mymodalFunction(){

var modalname=document.getElementById("modalname").value;
var modalphone=document.getElementById("modalphone").value;
var modalmsg=document.getElementById("modalmsg").value;

// Returns successful data submission message when the entered information is stored in database.
var dataString='modalname1=' + modalname + '&modalphone1=' + modalphone + '&modalmsg1=' + modalmsg;

   	

if (modalname=='' || modalphone=='' || modalmsg==''){
alert("Please Fill All Fields");
}else{
document.getElementById("modalsubmit").disabled = true;
document.getElementById("myDIV").style.opacity = "0.1";

// AJAX code to submit form.

$.ajax({
type: "POST",
url: "tajinquiry.php",
data: dataString,
cache: false,
success: function(html){
$("#modalform").slideUp();
document.getElementById("myDIV").style.opacity = "1";
}
});
}
return false;
}








