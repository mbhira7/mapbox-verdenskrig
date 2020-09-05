const barArray = [];
const pieArray = [];

for(const prop in barData) {
    barArray.push({
        land: prop,
        info: barData[prop]
    })
}

for(const prop in pieData) {
    pieArray.push({
        name: prop,
        y: pieData[prop].y,
        sliced:pieData[prop].sliced,
        selected:pieData[prop].selected
    })
}

console.log(pieArray)

const barOptions = {
    title:{
        text:"Casualities: WW1 (1914-1918)",
        style:{
            color:"white"
        }
    },

    chart: {
        renderTo:"barContainer",
        type:"bar",
        backgroundColor:"rgb(59, 59, 59)",
        plotBackgroundColor: "black",
        height:700
    },

    xAxis: {
        categories:barArray.map(
            d => [d.land]
        ),
        labels:{
            style: {
                color:"white"
            }
        }
    },
    legend:{
        itemStyle:{
            color:"white"
        }
    },
    yAxis: {
        gridLineColor:"rgb(59, 59, 59)",
        title: {
            text: "Number of soldiers",
            style:{
                color:"white"
            },
            x:-35,
            y:5
        },
        labels:{
            style: {
                color:"white"
            }
        }
    },

    plotOptions: {
        series: {
            pointWidth:8
        }
    },
    
    series: [
        { 
            color:"darkred",
            name: "Dead",
            data: barArray.map(
               d=>d.info.death 
            )
        },

        {
            color:"grey",
            name: "Wounded",
            data: barArray.map(
               d=>d.info.wounded 
            ) 
        },

        {
            color:"rgb(6, 6, 97)",
            width:300,
            name: "Missing/Prisoners",
            data: barArray.map(
               d=>d.info.missing
            )
        }
    ]


}

const farger = ["#5D0C08","#1F2538","rgb(90, 90, 90)","#12151E","rgb(31, 15, 25)","#1A232C","grey","#2C5547","rgb(6, 23, 48)","#450A20","rgb(34, 48, 46)","rgb(30, 34, 31)","rgb(22, 43, 36)"]

const pieOptions = {
    title:{
        text:"Financial costs of WW1 (1914-1918)",
        style:{
            color:"white"
        }
    },
    chart: {
        renderTo:"pieContainer",
        type:"pie",
        backgroundColor:"rgb(59, 59, 59)",
        plotBackgroundColor: "black"
    },

    tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.2f}%</b>"
    },
    accessibility: {
        point: {
            valueSuffix: "%"
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: "pointer",
            depth: 85,
            colors: farger.map(
                farge => farge
            ),
            dataLabels: {
                enabled: true,
                format: "<b>{point.name}</b>: {point.percentage:.1f} %"
            }
        }
    },

    series: [
        {
            name: "Cost in percentage",
            data: pieArray,
            dataLabels: {
                enabled: true,
                color: "white"
            }
        }
    ]

}

const barChart = new Highcharts.Chart(barOptions)
const pieChart = new Highcharts.Chart(pieOptions)
