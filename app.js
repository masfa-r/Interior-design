function openSlideMenu(){
    document.getElementById('slide-menu').style.width ='100%';
    document.getElementById('slide-menu').style.display ='block';
    document.getElementById('slide-menu').style.top ='0%';
    document.getElementById('slide-menu').style.position ='fixed';
    document.getElementById('s-m').style.display='none';
    
  
}
function closeSlideMenu(){
    document.getElementById('slide-menu').style.width ='0px';
    document.getElementById('slide-menu').style.display ='none';
   

}
// Contact form validation
function submitFunction(){
    var a = document.forms["Form"]["name"].value;
    var b = document.forms["Form"]["company"].value;
    var c = document.forms["Form"]["email"].value;
    var d = document.forms["Form"]["number"].value;
    var e = document.forms["Form"]["message"].value;
    if (a === "" || b==="" || c==="" || d==="" || e==="") {
        document.getElementById("submit-msg").innerHTML = "Please fill out first."
    }else{
        document.getElementById("submit-msg").innerHTML = "Your message has been sent."
    }

}

// Newsletter
var modal = document.getElementById('N-modal');
var mbutton = document.getElementById('modalbtn');
var closebtn = document.getElementById('closebtn');
modalbtn.addEventListener('click', OpenBox);
closebtn.addEventListener('click', CloseBox);

function OpenBox(){
modal.style.display='block';
}
function CloseBox(){
    modal.style.display='none';
    }

  function Subscribe(){
    document.getElementById("submit-msg2").innerHTML = "Thankyou."
    }











