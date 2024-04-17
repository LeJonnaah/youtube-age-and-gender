// Fetch the JSON data
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Extract the gender data and percentages
    const genderData = data.gender;

    // Create a container element for the bars
    const barContainer = document.createElement('div');
    barContainer.classList.add('bar-container');

    // Loop through each gender and create a bar element
    Object.entries(genderData).forEach(([gender, { percentage }]) => {
      const bar = document.createElement('div');
      bar.classList.add('bar');
      bar.style.width = `${percentage}%`;

      const percentageDiv = document.createElement("div");
      percentageDiv.classList.add("percentage-label");
      percentageDiv.textContent = percentage + "%";
      barContainer.appendChild(percentageDiv); // Add the percentage to the bar container

      const genderLabel = document.createElement("div"); // Create a div element for the country label
      genderLabel.classList.add("gender-label");
      genderLabel.textContent = gender; // Set the text content of the country label
      barContainer.appendChild(genderLabel); // Add the country label to the bar container
  

      barContainer.appendChild(bar);
    });

    // Append the bar container to the chart element
    const chart = document.getElementById('chart');
    chart.appendChild(barContainer);
  });
