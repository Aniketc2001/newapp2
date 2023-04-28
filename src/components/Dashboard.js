
import React, { useEffect, useRef } from 'react';
import data1 from './Score.json';

const PieChart = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const pieChart = new Chart(canvas, {
      type: 'pie',
      data: {
        labels: data1.data.map(item => item.label),
        datasets: [{
          data: data1.data.map(item => item.value),
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#8E5EA2',
            '#3cba9f'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });

    return () => {
      pieChart.destroy();
    };
  }, []);

  return (
    <canvas ref={canvasRef} id="pie-chart"></canvas>
  );
};

export default PieChart;
