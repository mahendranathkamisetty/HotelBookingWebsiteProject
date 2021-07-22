//header template
var header_template = `<nav id="nav" class="navbar-light">
<a href="index.html" target="_self"><img class="logo" src="C:/Users/r/Desktop/css upgrad/project/assests/images/logo.png" height="200px" width="150px" alt="logo"></a>
 <div>
   <button id="login" type="button" class="btn btn-light btn-sm login-btn" 
    data-bs-toggle="modal" 
    data-bs-target="#exampleModal" data-backdrop="false" 
    onclick="mainLogin(event)">
     LOGIN
   </button>
   <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div class="modal-dialog">
     <div class="modal-content">
       <div class="modal-header">
         <h5 class="modal-title" id="modal-label-1" style="font-family: Ubuntu, sans-serif; font-weight: bold;">Please Login</h5>
         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
       </div>
       <div class="modal-body" style="margin: 0 auto;">
         <form action="index.html" method="GET" target="_self" class="form">
                       
           <label>Username: </label>
           <input class="login-input" type="text" id="username" name="username" placeholder="Enter Username" required/>
           <br>
           <label>Password: </label>
           <input class="login-input"  type="password" id="password" name="password" placeholder="Enter Password" required/>
           <br>
           
         </div>
       <div class="modal-footer">
         <button onclick="login(event)"  class="btn btn-primary" style="margin: 0 auto;">Login</button>
       </div>
     </form>
     </div>
   </div>
 </div>
  </div>
</nav>`;
document.getElementById('header').innerHTML = header_template;

//footer template
var footer_template = `<div id="contact">
<button id="bcontact" class="btn btn-info btn-sm"
 data-bs-toggle="modal" data-bs-target="#example">
 Contact Us
</button> 
<div class="modal fade"id="example"tabindex="-1"role="dialog"aria-labelledby="exampleModalLabel"aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modal-label" style="font-family: Ubuntu, sans-serif; font-weight: bold;">Get in touch</h5>
        <button type="button"class="btn-close" data-bs-dismiss="modal"aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form action="index.html" method="GET" target="_self" class="form">
          <div>Thank you for reaching out!!!</div>
          <p>Please enter your email and we will get back to you.</p>
          <label>E-mail:</label>
          <input type="email" name="email" id="email" placeholder="Enter your email id" required/>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
<div id="socialimg">
    <a href="https://www.facebook.com" target="_blank"><img class="socialicons" src="assests/images/facebook.png"></a>
    <a href="https://www.instagram.com" target="_blank"><img class="socialicons" src="assests/images/instagram.png"></a>
    <a href="https://www.twitter.com" target="_blank"><img class="socialicons" src="assests/images/twitter.png"></a><br>
    </div>
    <p id="copyrights">&copy; 2020 ROOM SEARCH PVT. LTD.</p>`;
 document.getElementById('footer').innerHTML = footer_template;

 let mainLogin = e => {
    // when isLogin true then it must set as a  false before login
    // if it set as a false then you can login so
    if(localStorage.getItem('isLogin') === 'true'){
      localStorage.setItem('isLogin', 'false');
     //add
     location.reload();
    }
  };

  // 2. when login button in modal clicked fn login invoked
let login = e => {
    // set useranme and password as admin in local storage
    localStorage.setItem('username', 'admin');
    localStorage.setItem('password', 'admin');
    // when modal opens isLogin must be set as a  false refer line no. 112
    localStorage.setItem('isLogin', 'false');
    e.preventDefault();

    let usernameE1 = document.getElementById('username');
    let passwordE1 = document.getElementById('password');

    if(usernameE1.value === localStorage.getItem('username') && passwordE1.value === localStorage.getItem('password') ){
        //1. set isLogin is true
        localStorage.setItem('isLogin', 'true');
        //2.aler box 
        alert('Successfully logged in!');
        //3 accessing login button in fn create login element -loginE1
        let loginE1 = document.getElementById('login');
        //4.
        loginE1.dataset.target = '';
        loginE1.innerText = "LOGOUT"
        //add
       location.reload(); 
      }
      else{
        alert('Incorrect credentials! Login failed!');
        usernameE1.value = '';
            passwordE1.value = '';
      }
    };

let isLogin = localStorage.getItem('isLogin');
let loginE1 = document.getElementById('login');

let checkLogin = () => {
  if (!isLogin || isLogin === 'false') {
      localStorage.clear();
      loginE1.dataset.target = '#exampleModal';
      loginE1.innerText = 'LOGIN';
  } else if (isLogin === 'true') {
    loginE1.dataset.target = '';
    loginE1.innerText = 'LOGOUT';
  }
}

checkLogin();