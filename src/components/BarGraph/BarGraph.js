import React from "react";
import '../BarGraph/BarGraph.css'
import DropDown from '../BarGraph/dropdown-icon.png'
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js'

import { Bar } from 'react-chartjs-2';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

const BarGraph = () => {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        datasets: [
            {
                backgroundColor: "#0891FE",
                data: [5, 10, 30, 5, 40, 50, 40, 60, 70, 60, 80],
                borderRadius: 50,
            },
            {
                backgroundColor: "#ADDAFE",
                data: [7, 20, 40, 15, 20, 60, 70, 50, 80, 50, 80],
                borderRadius: 50,
            }
        ],
    };



    const options = {
        plugins: {
            legend: {
                display: false, // Hide legend
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
        barValuespacing: 20,
        responsive: true,
        scales: {
            x: {
                grid: {
                    display: false,
                    color: '#C2C8D5'
                }
            },
            y: {
                grid:{
                    display:true,
                    color: '#C2C8D5',
                },
                
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
        <div className="bar-graph-wrapper">
            <div className="bar-graph-header">
                <p>ORDERS</p>
                <span>
                <p>This Year</p>
                <img src={DropDown} alt="Dropdown"/>
                </span>
                
            </div>

            <Bar data={data} options={options} />

        </div>
    );
};

export default BarGraph;
