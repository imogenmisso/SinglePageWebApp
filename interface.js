fetch('https://async-workshops-api.herokuapp.com/people')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    button.addEventListener('click', function() {
      var string = ""
        for (var i = 0; i < myJson.length; i++) {
          string += (myJson[i].name + ", ")
        }
        text.textContent = "People: " + string.slice(0, -2)
    }, false);
  })
