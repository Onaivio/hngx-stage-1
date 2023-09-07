function updateDateTime() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date();
  const dayOfWeek = daysOfWeek[now.getUTCDay()];
  const time = now.toISOString().substr(11, 5); // Get the time in HH:MM format

  // Update the elements with real-time data
  document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
    dayOfWeek;
  document.querySelector('[data-testid="currentUTCTime"]').textContent = time;

  // Update the time every second (1000 milliseconds)
  setTimeout(updateDateTime, 1000);
}

// Call the function to initiate real-time updates
updateDateTime();
