import ApexCharts from 'react-apexcharts';

export default function Chart({ Metrics }) { 

    const categories = Metrics ? Object.keys(Metrics) : [];
    const seriesData = Metrics ? Object.values(Metrics) : [];

    const options = {
        xaxis: {
            categories: categories, 
        },
        yaxis: {
            tooltip: {
                enabled: true
            }
        },
    };

    const series = [{
        name: "Valores",
        data: seriesData,
    }];

    return (
        <ApexCharts 
            options={options}
            series={series}
            type="bar"
            width={350}
            height={320}
        />
    );
}