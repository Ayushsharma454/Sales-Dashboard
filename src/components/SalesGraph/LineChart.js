import React from "react"
import '../SalesGraph/LineChart.css'
import { Line } from 'react-chartjs-2';
import DropDown from '../BarGraph/dropdown-icon.png'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Filler,
    Legend
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler,
    Tooltip,
    Legend
)
const LineChart = () => {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        datasets: [{
            data: [5, 10, 30, 5, 40, 50, 40, 60, 70, 60, 80],
            backgroundColor: (ctx) => {
                const gradient = ctx.chart.canvas
                    .getContext('2d')
                    .createLinearGradient(0, 0, 0, ctx.chart.height);
                gradient.addColorStop(0, 'rgba(8, 145, 254, 0.34)');
                gradient.addColorStop(1, 'rgba(8, 145, 254, 0)');
                return gradient;
            },
            borderColor: "#0891FE",
            pointBorderwidth: 7,
            tension: 0.5,
            fill: true,
        }]
    }
    const options = {
        plugins: {
            legend: {
              display: false,
            },
            tooltip: {
                yAlign: 'bottom',
                backgroundColor: "#2F3F67",
                displayColors: false,
                padding: 25,
                opacity: 0.49,
                'border-radius': 6,
                titleFontFamily: 'Mulish',
                titleFontSize: 22,
            }
          },
        responsive: true,
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                min: 0,
                max: 80,
                ticks: {
                    stepSize: 10,
                    maxTicksLimit: 10,
                    callback: (value) => {
                        switch (value) {
                            case 0:
                                return '0';
                            case 20:
                                return '20';
                            case 40:
                                return '40';
                            case 60:
                                return '60';
                            case 80:
                                return '80';
                            default:
                                return '';
                        }
                    }
                }
            }
        },
        
    };



    return (
        <div className="graph-wrapper">
            <div className="graph-header">
                <p>SALES</p>
                <span>
                <p>This Year</p>
                <img src={DropDown} alt="Dropdown icon" />
                </span>
                
            </div>
            <Line data={data} options={options}></Line>


        </div>
    )
}

export default LineChart;
