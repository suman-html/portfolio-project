const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

/* sign up and sign in */

function signUp(){
    const singUpData = {
        user_name:document.getElementById("user_name").value,
        user_email:document.getElementById("user_email").value,
        user_pass:document.getElementById("user_pass").value,
    }

    localStorage.setItem("singUpData", JSON.stringify(singUpData));
}

function getDataForSignUp(){

    let userData = JSON.parse(localStorage.getItem("singUpData"));

    return userData;
}

function signIn(){

    let userData  = getDataForSignUp();
    console.log(userData);
   let user =  document.getElementById("user_name").value ;
   let pass =  document.getElementById("user_pass").value ;

    const signInData = {
        user_name : user,
        user_pass: pass
    }

    if (userData.user_name == user &&  userData.user_name == pass ) {

           
            // window.location.href = "index.html";
            localStorage.setItem("signInData", JSON.stringify(signInData));


    } else {
            alert("Sorry! You are not authenticate user!")
    }
}

function getDataForSignIn(){

    let userData = JSON.parse(localStorage.getItem("signInData"));

    return userData;
}
 
function showHideContent(){

    let userData = getDataForSignIn();
    console.log(userData);
    if (userData.user_name!='') {
        
        document.getElementById("home_page").style.display = "block";
        document.getElementById("user_log_out").style.display = "block";

    } else {
        document.getElementById("home_page").style.display = "none";
        document.getElementById("user_log_out").style.display = "none";
    }
}
 


function logOut(){

    localStorage.removeItem("signInData");
    window.location.reload();
}
showHideContent();

/*  end sign up and sign in */