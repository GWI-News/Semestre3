import ApexCharts from 'react-apexcharts';

export default function Chart({ Metrics }) {

    if (Metrics && Metrics['Todas as Categorias'] !== undefined) {
        delete Metrics['Todas as Categorias'];
    }

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
            height= {300}
            width={"100%"}
            options={options}
            series={series}
            type="bar"
        />
    );
}