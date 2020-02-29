var ctx = document.getElementById('busMallChart').getContext('2d');

function renderChart() {
    var seen = ActiveProducts.map(p => p.timesSeen);
    var votes = ActiveProducts.map(p => p.votes);
    document.getElementsByClassName('results-view')[0].style.width = '80%';
    document.getElementsByClassName('vote-items-holder')[0].style.width = '20%';
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ActiveProducts.map(p => p.ProductName),
            datasets: [{
                label: 'Vote Count',
                data: votes,
                backgroundColor: getRandomColors(ActiveProducts.length, '0.2'),
                borderColor: getRandomColors(ActiveProducts.length, '1.0'),
                borderWidth: 2,
                barThickness: 'flex'
            }, {
                label: 'Times Seen',
                data: seen,
                backgroundColor: getRandomColors(ActiveProducts.length, '0.2'),
                borderColor: getRandomColors(ActiveProducts.length, '1.0'),
                borderWidth: 2,
                barThickness: 'flex'
            }]
        },
        options: {
            layout: {
                padding: 0
            },
            responsive: true,
            maintainAspectRatio: false,
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
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = `rgba(${r}, ${g}, ${b}, ${a})`;
    var colors = [];
    for (var c = 0; c < count; c++) {
        colors.push(color);
    }

    // for (var c = 0; c < count; c++) {
    //     let r = Math.floor(Math.random() * Math.floor(255));
    //     let g = Math.floor(Math.random() * Math.floor(255));
    //     let b = Math.floor(Math.random() * Math.floor(255));
    //     let color = `rgba(${r}, ${g}, ${b}, ${a})`;
    //     console.log(color);
    //     colors.push(color);
    // }
    return colors;
}