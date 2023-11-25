/// Configuración de la biblioteca Google API Client
function start() {
    gapi.client.init({
      'apiKey': 'AIzaSyBAz7qfiiJ8c4r8c5ERxOsrcdoGO0iInGU',
      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'],
      'clientId': '762179602188-4pidc81jrsfehb9ethjnfiiv4kkja8f4.apps.googleusercontent.com',
      'scope': 'https://www.googleapis.com/auth/gmail.send',
    }).then(function() {
      // Llamar a la función para cargar la biblioteca Google API Client
      gapi.load('client:auth2', initClient);
    });
  }
  
  // Inicialización de la biblioteca Google API Client
  function initClient() {
    gapi.client.load('gmail', 'v1', sendEmail);
  }
  
  // Función para enviar el correo electrónico
  function sendEmail() {
    // Obtener los valores de los campos de entrada
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // Construir el correo electrónico
    var emailContent = "Nombre: " + name + "\r\n";
    emailContent += "Correo electrónico: " + email + "\r\n";
    emailContent += "Mensaje: " + message;
  
    // Codificar el correo electrónico en base64
    var base64EncodedEmail = btoa(emailContent);
  
    // Enviar el correo electrónico utilizando la Gmail API
    var request = gapi.client.gmail.users.messages.send({
      'userId': 'me',
      'resource': {
        'raw': base64EncodedEmail
      }
    });
  
    request.execute(function(response) {
      console.log(response);
    });
  }
  