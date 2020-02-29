var ctx = document.getElementById('busMallChart').getContext('2d');
renderChart();

function renderChart() {
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: getRandomColors(6, '0.2'),
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
};

function getRandomColors(count, a) {
    var colors = [];
    for (var c = 0; c < count; c++) {
        let r = Math.floor(Math.random() * Math.floor(255));
        let g = Math.floor(Math.random() * Math.floor(255));
        let b = Math.floor(Math.random() * Math.floor(255));
        let color = `rgba(${r}, ${g}, ${b}, ${a})`;
        console.log(color);
        colors.push(color);
    }
    return colors;
}