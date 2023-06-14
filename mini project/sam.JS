// JavaScript for the "Plan Your Trip" section

// Get the form element
const tripForm = document.getElementById('trip-form');

// Add event listener for form submission
tripForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const destination = document.getElementById('destination').value;
    const departureDate = document.getElementById('departure-date').value;
    const returnDate = document.getElementById('return-date').value;

    // Perform actions with the form values
    // Example: Display the selected destination and dates
    console.log('Destination:', destination);
    console.log('Departure Date:', departureDate);
    console.log('Return Date:', returnDate);

    // Reset the form
    tripForm.reset();
});

$(document).ready(function() {
  // Hard-coded example of travel tips
  var travelTips = [
    "Pack light and only bring essentials.",
    "Research local customs and traditions before visiting.",
    "Carry a photocopy of important documents like passport and visa.",
    "Always have a backup plan in case of unforeseen circumstances.",
    "Stay hydrated and carry a reusable water bottle.",
    "Learn a few common phrases in the local language.",
    "Keep emergency contact numbers handy.",
    "Leave some room in your itinerary for spontaneity.",
    "Be respectful of the local culture and traditions.",
    "Try local cuisines and explore the street food scene.",
    "Stay updated on weather conditions and pack accordingly."
  ];
  
  // Add travel tips to the tip section
  var tipSection = $('#tip-section');
  for (var i = 0; i < travelTips.length; i++) {
    var tip = travelTips[i];
    var tipCard = $('<div>').addClass('tip-card').text(tip);
    tipSection.append(tipCard);
  }
});
