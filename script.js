const chartOptions = {
    chart: {
        type: 'area',
        height: 180,
        toolbar: { show: false },
        zoom: { enabled: false }
    },
    colors: ['#37003c'],
    series: [{ name: 'Views', data: [87.9, 84.1, 86.7, 29.3, 21.8, 66.6, 35.0, 18.4, 18.6, 19.0, 18.8, 17.4]}],
    dataLabels: { enabled: false },
    stroke: { width: 3, curve: 'smooth' },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0,
            stops: [0, 90, 100]
        }
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisBorder: { show: false },
        labels: { style: { colors: '#5a5959', fontFamily: 'Poppins' }}
    },
    yaxis: { show: false },
    grid: { borderColor: 'rgba(0, 0, 0, 0', padding: { top: -30, bottom: -8, left: 12, right: 12 }},
    tooltip: {
        enabled: true,
        y: { formatter: value => `${value}M`},
        style: { fontFamily: 'Poppins' }
    },
    markers: { show: false }
};

const chart = new ApexCharts(document.querySelector('.chart-area'), chartOptions);
chart.render();