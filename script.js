// chart.js code to render csv https://www.kaggle.com/datasets/iamsouravbanerjee/world-population-dataset
const xlabels = [];
const ylabels = [];

chartIt();

async function chartIt() {
    await getData();
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xlabels,
            datasets: [{
                fill: true,
                label: 'Italy population growth',
                data: ylabels,
                backgroundColor:
                    'rgba(255, 99, 132, 0.2)',
                borderColor:
                    'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        }
    });
}
// fetch API
async function getData() {
    try {
        const res = await fetch('./dataset/italy_population.csv');
        const data = await res.text();

        const table = data.split('\n').slice(1);
        table.forEach(row => {
            const columns = row.split(',');
            const year = columns[2];
            xlabels.push(year);
            const population = columns[3];
            ylabels.push(population);

            console.log(year, population);
        });
    }
    catch (err) {
        console.log(err);
    }
}