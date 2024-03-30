// This array contains the coordinates for all bus stops along Ventura Blvd and Van Nuys Blvd in Sherman Oaks
const busStops = [
  // Waypoints for Bus 1 (Ventura Blvd)
  [-118.448208, 34.151000], // Starting point for Bus 1 (Ventura Blvd)
  [-118.448208, 34.151000], // Waypoint 1 for Bus 1 (Ventura Blvd - West)
  [-118.449208, 34.151000], // Waypoint 2 for Bus 1 (Ventura Blvd - Further West)
  [-118.450208, 34.151000], // Waypoint 3 for Bus 1 (Ventura Blvd - Far West)
  [-118.451208, 34.151000], // Waypoint 4 for Bus 1 (Ventura Blvd - Farther West)
  // Add more waypoints for Bus 1 along Ventura Blvd as needed

  // Waypoints for Bus 2 (Van Nuys Blvd)
  [-118.448208, 34.148724], // Starting point for Bus 2 (Van Nuys Blvd)
  [-118.448208, 34.149724], // Waypoint 1 for Bus 2 (Van Nuys Blvd - North)
  [-118.448208, 34.150724], // Waypoint 2 for Bus 2 (Van Nuys Blvd - Further North)
  [-118.448208, 34.151724], // Waypoint 3 for Bus 2 (Van Nuys Blvd - Far North)
  [-118.448208, 34.152724], // Waypoint 4 for Bus 2 (Van Nuys Blvd - Farther North)
  // Add more waypoints for Bus 2 along Van Nuys Blvd as needed
];

// Set your Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoidGVzdHVzZXIxMDAwIiwiYSI6ImNraDkzZ2pkMzAzMHoycnBmMXpvZ3UwZnMifQ.jAE4YsPeAJv50VK92NSpOQ';

// Create the map object using mapboxgl.map() function
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-118.448208, 34.151000], // Centered on Ventura Blvd
  zoom: 14,
});

// Add markers to the map for the starting points of both buses
let marker1 = new mapboxgl.Marker().setLngLat([-118.448208, 34.151000]).addTo(map); // Bus 1 (Ventura Blvd)
let marker2 = new mapboxgl.Marker().setLngLat([-118.448208, 34.148724]).addTo(map); // Bus 2 (Van Nuys Blvd)

// Function to simulate bus movement every 7 seconds
function moveBuses() {
  let counter1 = 1; // Counter for Bus 1 waypoints
  let counter2 = 1; // Counter for Bus 2 waypoints

  setInterval(() => {
    // Move Bus 1 (Ventura Blvd)
    if (counter1 < busStops.length / 2) {
      marker1.setLngLat(busStops[counter1]);
      counter1++;
    } else {
      counter1 = 1; // Reset counter to loop through waypoints
    }

    // Move Bus 2 (Van Nuys Blvd)
    if (counter2 < busStops.length / 2) {
      marker2.setLngLat(busStops[busStops.length / 2 + counter2]);
      counter2++;
    } else {
      counter2 = 1; // Reset counter to loop through waypoints
    }
  }, 7000); // Move buses every 7 seconds
}

// Call the function to start simulating bus movement
moveBuses();
