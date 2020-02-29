var ctx = document.getElementById('busMallChart').getContext('2d');

function renderChart() {
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ActiveProducts.map(p => p.ProductName),
            datasets: [{
                label: 'Vote Count',
                data: ActiveProducts.map(p => p.votes),
                backgroundColor: getRandomColors(ActiveProducts.length, '0.2'),
                borderColor: getRandomColors(ActiveProducts.length, '1.0'),
                borderWidth: 1
            }, {
                label: 'Times Seen',
                data: ActiveProducts.map(p => p.seen),
                backgroundColor: getRandomColors(ActiveProducts.length, '0.2'),
                borderColor: getRandomColors(ActiveProducts.length, '1.0'),
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