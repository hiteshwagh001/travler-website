// JavaScript code for the website

// Responsive navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
// JavaScript code for flight search and displaying search results

document.getElementById('flight-search-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Get form input values
    var departure = document.getElementById('departure').value;
    var destination = document.getElementById('destination').value;
    var date = document.getElementById('date').value;
  
    // Perform flight search based on input values
    var searchResults = performFlightSearch(departure, destination, date);
  
    // Display flight search results
    displayFlightSearchResults(searchResults);
  });
  
  function performFlightSearch(departure, destination, date) {
    // Perform flight search logic here and return the search results
    // This is just a placeholder, you need to implement your own logic
    var searchResults = [
      { airline: 'Airline 1', flightNumber: 'FL001', departure: 'Departure 1', destination: 'Destination 1', time: '10:00 AM' },
      { airline: 'Airline 2', flightNumber: 'FL002', departure: 'Departure 2', destination: 'Destination 2', time: '11:30 AM' },
      { airline: 'Airline 3', flightNumber: 'FL003', departure: 'Departure 3', destination: 'Destination 3', time: '12:45 PM' }
    ];
  
    return searchResults;
  }
  
  function displayFlightSearchResults(searchResults) {
    var resultsContainer = document.getElementById('flight-search-results');
    var resultsList = resultsContainer.querySelector('ul');
  
    // Clear previous search results
    resultsList.innerHTML = '';
  
    // Display new search results
    searchResults.forEach
  