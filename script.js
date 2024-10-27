
fetch('metroData.json')
            .then(response => response.json())
            .then(data => {
                const timetableBody = document.getElementById('timetable-body');
                timetableBody.innerHTML = ''; // Clear existing rows

                data.forEach((entry) => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${entry.station}</td>
                        <td>${entry.departureTime}</td>
                        <td>${entry.reachedToDestination}</td>
                        <td>${entry.nextMetro}</td>
                    `;
                    timetableBody.appendChild(row);
                });
            })
            .catch(error => console.error('Error loading metro data:', error));
