import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-all-tools-by-catagory',
  templateUrl: './all-tools-by-catagory.component.html',
  styleUrls: ['./all-tools-by-catagory.component.css']
})
export class AllToolsByCatagoryComponent {

  chart = new Chart({
    chart: {
      type: 'pie',
      height: 325
    },
    title: {
      text: 'Tools By Province'
    },
    xAxis: {
      categories: [
        'Harare',
        'Bulawayo',
        'Manicalands',
        'Midlands',
        'Mashonalands West',
        'Mashonalands East',
        'Mashonalands Central',
        'Matebelelands North',
        'Matebelelands South',
        'Masvingo',
      ]
    },
    yAxis: {
      title: {
        text: 'Tools Received in %'
      }
    },
    series: [
     {
      type: 'pie',
      data: [
        {
          name: 'Harare',
          y: 15.0,
          color: '#044342',
        },
        {
          name: 'Bulawayo',
          y: 8.0,
          color: '#7e0505',
        },
        {
          name: 'Manicalands',
          y: 10.0,
          color: '#ed9e20',
        },
        {
          name: 'Midlands',
          y: 6.4,
          color: '#6920fb',
        },
        {
          name: 'Mashonalands West',
          y: 17.6,
          color: '#121212',
        },
        {
          name: 'Mashonalands East',
          y: 13.0,
          color: '#144342',
        },
        {
          name: 'Mashonalands Central',
          y: 7.0,
          color: '#8e0505',
        },
        {
          name: 'Matebelelands North',
          y: 6.0,
          color: '#fd9e20',
        },
        {
          name: 'Matebelelands South',
          y: 7.0,
          color: '#7920fb',
        },
        {
          name: 'Masvingo',
          y: 10.0,
          color: '#221212',
        },
      ]
     }
    ],
    credits: {
      enabled: false
    }
  })

}
