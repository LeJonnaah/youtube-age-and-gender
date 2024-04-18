fetch('data.json')
  .then(response => response.json())
  .then(data => {
    renderChartData(data.gender, 'chart');
    renderChartData(data.ages, 'chart2');
  })
  .catch(error => {
    console.error('Error fetching or processing data:', error);
  });

function renderChartData(data, chartId) {
  const chartContainer = document.getElementById(chartId);
  
  Object.entries(data).forEach(([label, { percentage }]) => {
    const barContainer = document.createElement('div');
    barContainer.classList.add('bar-container');
    
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.width = `${percentage}%`;
    
    const percentageDiv = document.createElement('div');
    percentageDiv.classList.add('percentage-label');
    percentageDiv.textContent = `${percentage}%`;
    
    const labelDiv = document.createElement('div');
    labelDiv.classList.add('gender-label');
    labelDiv.textContent = label;
    
    barContainer.appendChild(percentageDiv);
    barContainer.appendChild(labelDiv);
    barContainer.appendChild(bar);
    
    chartContainer.appendChild(barContainer);
  });
}