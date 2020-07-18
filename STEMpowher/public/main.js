

  'use strict';

  //grab a form
  const form = document.querySelector('.contactForm');
  
  //grab an input
  const inputName = form.querySelector('#name');
  const inputEmail = form.querySelector('#email');
  const inputMessage = form.querySelector('#message');
  
  
  //config your firebase push
  const config = {
    apiKey: "AIzaSyDpGpve7TuokIfAhYh2oYBL-qKJx5b8L44",
    authDomain: "stempowher-903e4.firebaseapp.com",
    databaseURL: "https://stempowher-903e4.firebaseio.com",
    projectId: "stempowher-903e4",
    storageBucket: "stempowher-903e4.appspot.com",
    messagingSenderId: "530883910458",
    appId: "1:530883910458:web:b4c03504fdf87838b58e03",
    measurementId: "G-Y0P3KSZSRD"
  };
  
  
  //create a functions to push
      function firebasePush(name, email, message) {
  
  
          //prevents from braking
          if (!firebase.apps.length) {
              firebase.initializeApp(config);
          }
  
          //push itself
          var mailsRef = firebase.database().ref('message').push().set(
              {
                  name: name.value,
                  email: email.value,
                  message: message.value

              }
          );
  
      }
  
  //push on form submit
      if (form) {
          form.addEventListener('submit', function (evt) {
              evt.preventDefault();
              firebasePush(inputName, inputEmail, inputMessage);
      
  
              //shows alert if everything went well.
              return alert('Thank you for reaching out to us! We will get back to you soon.');
          })
      }