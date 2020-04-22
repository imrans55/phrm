import { Component, OnInit, ViewChild } from '@angular/core';
import {  NavController, NavParams } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFireList } from '@angular/fire/database/interfaces';
import { ToastController } from '@ionic/angular';
import { Chart } from 'Chart.js';

@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.page.html',
  styleUrls: ['./visualize.page.scss'],
})
export class VisualizePage implements OnInit {
  /** 
  data: Observable<any[]>;
  ref: AngularFireList<any>;
 
  months = [
    {value: 0, name: 'January'},
    {value: 1, name: 'February'},
    {value: 2, name: 'March'},
    {value: 3, name: 'April'},
  ];
 
  transaction = {
    value: 0,
    expense: false,
    month: 0
  }
 
  @ViewChild('valueBarsCanvas') valueBarsCanvas;
  valueBarsChart: any;
 
  chartData = null;
 
  constructor(public navCtrl: NavController, private db: AngularFireDatabase, private toastCtrl: ToastController) {
  }

  */

  ngOnInit() {
    
  }
/** 
  ionViewDidLoad() {
    // Reference to our Firebase List
    this.ref = this.db.list('transactions', ref => ref.orderByChild('month'));
 
    // Catch any update to draw the Chart
    this.ref.valueChanges().subscribe(result => {
      if (this.chartData) {
        this.updateCharts(result)
      } else {
        this.createCharts(result)
      }
    })
  }

  addTransaction() {
    this.ref.push(this.transaction).then(async () => {
      this.transaction = {
        value: 0,
        month: 0,
        expense: false
      };
      let toast = await this.toastCtrl.create({
        message: 'New Transaction added',
        duration: 3000
      });
      toast.present();
    })
}
getReportValues() {
  let reportByMonth = {
    0: null,
    1: null,
    2: null,
    3: null
  };
 
  for (let trans of this.chartData) {
    if (reportByMonth[trans.month]) {
      if (trans.expense) {
        reportByMonth[trans.month] -= +trans.value;
      } else {
        reportByMonth[trans.month] += +trans.value;
      }
    } else {
      if (trans.expense) {
        reportByMonth[trans.month] = 0 - +trans.value;
      } else {
        reportByMonth[trans.month] = +trans.value;
      }
    }
  }
  return Object.keys(reportByMonth).map(a => reportByMonth[a]);
}


createCharts(data) {
  this.chartData = data;
 
  // Calculate Values for the Chart
  let chartData = this.getReportValues();
 
  // Create the chart
  this.valueBarsChart = new Chart(this.valueBarsCanvas.nativeElement, {
    type: 'bar',
    data: {
      labels: Object.keys(this.months).map(a => this.months[a].name),
      datasets: [{
        data: chartData,
        backgroundColor: '#32db64'
      }]
    },
    options: {
      legend: {
        display: false
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItems, data) {
            return data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index] +' $';
          }
        }
      },
      scales: {
        xAxes: [{
          ticks: {
            beginAtZero: true
          }
        }],
        yAxes: [{
          ticks: {
            callback: function (value, index, values) {
              return value + '$';
            },
            suggestedMin: 0
          }
        }]
      },
    }
  });
}

updateCharts(data) {
  this.chartData = data;
  let chartData = this.getReportValues();
 
  // Update our dataset
  this.valueBarsChart.data.datasets.forEach((dataset) => {
    dataset.data = chartData
  });
  this.valueBarsChart.update();
}
*/
}
