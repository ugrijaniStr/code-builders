const ctx = document.getElementById('myChart').getContext('2d');
const data = {
    labels: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
    datasets: [{
        data: [250, 200, 300, 400, 500, 400, 700],
        pointBorderColor: 'rgb(87, 84, 255)',
        pointBackgroundColor: 'rgb(87, 84, 255)',
        borderColor: 'rgb(87, 84, 255)',
        fill: true,
        backgroundColor: 'rgba(77, 38, 252, 0.2)',
        tension: 0.3,
    }]
};

const options = {
    responsive: true,
    scales: {
        x: {
            grid: {
                color: 'rgba(87, 84, 255, 0.18)'
            }
        },
        y: {
            grid: {
                color: 'rgba(87, 84, 255, 0.18)'
            }
        }
    }
};

new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});
