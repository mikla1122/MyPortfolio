function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let successMessage = document.getElementById("successMessage");
  
    // Check if fields are empty
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all required fields.");
      return false;
    }
  
    // Show success message
    successMessage.style.display = "block";
    return false; // Prevent form submission for demo purposes
  }
  
  function initMap() {
    var location = { lat: 37.7749, lng: -122.4194 }; // Replace with your coordinates
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: location,
    });
    var marker = new google.maps.Marker({
      position: location,
      map: map,
      title: "My Location"
    });
  }
  