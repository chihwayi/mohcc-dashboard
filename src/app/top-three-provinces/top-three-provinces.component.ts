import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-top-three-provinces',
  templateUrl: './top-three-provinces.component.html',
  styleUrls: ['./top-three-provinces.component.css']
})
export class TopThreeProvincesComponent {

  chart = new Chart({
    chart: {
      type: 'bar',
      height: 225
    },
    title: {
      text: 'Tools Category by Language'
    },
    xAxis: {
      categories: [
        'Shona',
        'English',
        'Ndebele',
      ]
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    series: [
     {
      type: 'bar',
      showInLegend: false,
      data: [
        {
          name: 'Shona',
          y: 395,
          color: '#044342',
        },
        {
          name: 'English',
          y: 385,
          color: '#7e0505',
        },
        {
          name: 'Ndebele',
          y: 275,
          color: '#ed9e20',
        },
      ]
     }
    ],
    credits: {
      enabled: false
    }
  })

}
