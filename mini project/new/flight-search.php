<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "flightdata";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create database
$sql = "CREATE DATABASE $dbname";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully<br>";
} else {
    echo "Error creating database: " . $conn->error;
}

// Select database
$conn->select_db($dbname);

// Create table
$sql = "CREATE TABLE flights (
  id INT AUTO_INCREMENT PRIMARY KEY,
  airline VARCHAR(100),
  flightNumber VARCHAR(20),
  departure VARCHAR(100),
  destination VARCHAR(100),
  time TIME
)";
if ($conn->query($sql) === TRUE) {
    echo "Table created successfully<br>";
} else {
    echo "Error creating table: " . $conn->error;
}

// Insert data
$sql = "INSERT INTO flights (airline, flightNumber, departure, destination, time) VALUES
  ('Airline 1', 'FL001', 'New York', 'London', '10:00:00'),
  ('Airline 2', 'FL002', 'London', 'Paris', '11:30:00'),
  ('Airline 3', 'FL003', 'Paris', 'Tokyo', '12:45:00'),
  ('Airline 4', 'FL004', 'Tokyo', 'Sydney', '13:15:00'),
  ('Airline 5', 'FL005', 'Sydney', 'New York', '14:30:00'),
  ('Airline 6', 'FL006', 'Rome', 'Dubai', '15:45:00'),
  ('Airline 7', 'FL007', 'Dubai', 'Singapore', '16:30:00'),
  ('Airline 8', 'FL008', 'Amsterdam', 'Barcelona', '17:15:00'),
  ('Airline 9', 'FL009', 'Barcelona', 'Berlin', '18:00:00'),
  ('Airline 10', 'FL010', 'Berlin', 'Vienna', '19:00:00'),
  ('Airline 11', 'FL011', 'Cairo', 'Istanbul', '20:15:00'),
  ('Airline 12', 'FL012', 'Hawaii', 'Los Angeles', '21:30:00'),
  ('Airline 13', 'FL013', 'Las Vegas', 'Miami', '22:45:00'),
  ('Airline 14', 'FL014', 'Toronto', 'Vancouver', '23:00:00'),
  ('Airline 15', 'FL015', 'Chicago', 'Houston', '00:15:00')";

if ($conn->query($sql) === TRUE) {
    echo "Data inserted successfully";
} else {
    echo "Error inserting data: " . $conn->error;
}

// Close the connection
$conn->close();
?>
