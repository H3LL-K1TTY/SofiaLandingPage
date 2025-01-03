window.onload = function () {
    const locationElement = document.getElementById('user-location');
    const availabilityElement = document.getElementById('availability-info');

    // Replace 'your_access_token' with your actual API token
    fetch('https://ipinfo.io/json?token=cfb3a0ec5c2c27')
        .then(response => response.json())
        .then(data => {
            const city = data.city;
            const country = data.country
            const today = new Date();
            const nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 6);

            // Function to format date in "Month DD" format
            function formatDate(date) {
                const monthNames = ["January", "February", "March", "April", "May", "June",
                                    "July", "August", "September", "October", "November", "December"];
                return `${monthNames[date.getMonth()]} ${date.getDate()}`;
            }

            // Update the location text
            locationElement.textContent = `${city}, ${country}`;

            // Update the availability info text
            availabilityElement.textContent = `I'm staying in ${city} from ${formatDate(today)} to ${formatDate(nextWeek)}`;
        })
        .catch(error => {
            console.error('Error fetching location:', error);
            locationElement.textContent = 'Location unavailable';
        });
};
