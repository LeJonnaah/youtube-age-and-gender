document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', function () {
  invertColors();
});
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const genderData = data.gender;
    const chartContainer = document.getElementById('chart');

    Object.entries(genderData).forEach(([gender, { percentage }]) => {
      const barContainer = document.createElement('div');
      barContainer.classList.add('bar-container');
      const bar = document.createElement('div');
      bar.classList.add('bar');
      bar.style.width = `${percentage}%`;

      const percentageDiv = document.createElement("div");
      percentageDiv.classList.add("percentage-label");
      percentageDiv.textContent = percentage + "%";
      barContainer.appendChild(percentageDiv); 

      const genderLabel = document.createElement("div");
      genderLabel.classList.add("gender-label");
      genderLabel.textContent = gender; 
      barContainer.appendChild(genderLabel); 

      barContainer.appendChild(bar);
      chartContainer.appendChild(barContainer);
    });

    const agesData = data.ages;
    const chartContainer2 = document.getElementById('chart2');

    Object.entries(agesData).forEach(([age, { percentage }]) => {
      const barContainer = document.createElement('div');
      barContainer.classList.add('bar-container');
      const bar = document.createElement('div');
      bar.classList.add('bar');
      bar.style.width = `${percentage}%`;

      const percentageDiv = document.createElement("div");
      percentageDiv.classList.add("percentage-label");
      percentageDiv.textContent = percentage + "%";
      barContainer.appendChild(percentageDiv);

      const ageLabel = document.createElement("div");
      ageLabel.classList.add("gender-label");
      ageLabel.textContent = age + " years";
      barContainer.appendChild(ageLabel);
      barContainer.appendChild(bar);
      chartContainer2.appendChild(barContainer);
    });
  });
});

function invertColors() {
  document.body.classList.toggle('inverted');
  const mainElement = document.querySelector('main');
  mainElement.classList.toggle('inverted');
  const barContainers = document.querySelectorAll('.bar');
  barContainers.forEach(container => {
    container.classList.toggle('inverted');
  })
  const percentageLabels = document.querySelectorAll('.percentage-label');
  percentageLabels.forEach(label => {
    label.classList.toggle('inverted');
  })
  const hr = document.querySelectorAll('hr');
  hr.forEach(hr => {
    hr.classList.toggle('inverted');
  })
  const genderLabels = document.querySelectorAll('.gender-label');
  genderLabels.forEach(label => {
    label.classList.toggle('inverted');
  })
}