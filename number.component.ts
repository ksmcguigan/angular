import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { NumberService } from '../../../@core/data/number.service';
import {NgxChartsModule} from '@swimlane/ngx-charts';
// import { Subscription } from 'rxjs/Subscription';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'number-component',
  template: `
    <ngx-charts-number-card
      [view]="view"
      [scheme]="colorScheme"
      [results]="metrics"
      (select)="onSelect($event)">
    </ngx-charts-number-card>
  `
})

export class NumberComponent implements AfterViewInit, OnDestroy, OnInit {

  themeSubscription: any;

  subscription: Subscription;
  message: any;

  // single: any[];
  //  multi: any[];
  // metrics: any[];

  // metrics: Metric[];

  constructor(private theme: NbThemeService, private numberService: NumberService) { 
        // subscribe to home component messages
        // this.subscription = this.numberService.getMetrics().subscribe(metrics => { this.metrics = metrics; });
	this.subscription = this.numberService.getMessage().subscribe(message => { 
	    this.message = message; 
	    console.log("received message:" + this.message);
	    // var msg = message;
	    // console.log(msg.text);
	    var array = this.message.text.split(':')

	    // this.metrics[0].name = array[0];
	    // this.metrics[0].value = array[1];

/*
      ID: {        title: 'ID',        type: 'number',   width: '100px'},
      Name: {        title: 'Name',        type: 'string',   width: '100px'   },
      Sent: {        title: 'Sent',        type: 'string',      },
      roc: {        title: 'roc',        type: 'string',      },
      Days: {        title: 'Days',        type: 'string',      },
      ft: {        title: 'Feature',        type: 'string',      },
      tqpu: {        title: 'tqpu',        type: 'string',      },
      sq: {        title: 'sq',        type: 'string',      },
      nu: {        title: 'nu',        type: 'string',      },
      nuf: {        title: 'nuf',        type: 'string',      },
      tuf: {        title: 'tuf',        type: 'string',      },
      sqf: {        title: 'sqf',        type: 'string',      },
      uff: {        title: 'uff',        type: 'string',      }
*/


	    this.metrics[0].name = 'Days';
	    this.metrics[0].value = array[4];

	    this.metrics[1].name = 'Feature Type';
	    this.metrics[1].value = array[5];

	    this.metrics[2].name = 'Queries Per User';
	    this.metrics[2].value = this.numberWithCommasFormatting(array[6]);

	    this.metrics[3].name = 'SD Queries';
	    this.metrics[3].value = this.numberWithCommasFormatting(array[7]);

	    this.metrics[4].name = '# Users';
	    this.metrics[4].value = this.numberWithCommas(array[8]);

	    this.metrics[5].name = '# Users Feature';
	    // this.metrics[5].value = array[9];
	    this.metrics[5].value = this.numberWithCommas(array[9]);

	    this.metrics[6].name = 'Usage Feature';
	    this.metrics[6].value = this.numberWithCommas(array[10]);

	    this.metrics[7].name = 'SD Queries Feature';
	    this.metrics[7].value = this.numberWithCommasFormatting(array[11]);

	    this.metrics[8].name = 'Feature Users Only';
	    this.metrics[8].value = this.numberWithCommasFormatting(array[12]);


	    // console.log("new name:" + this.metrics[0].name);
	    // console.log("new value:" + this.metrics[0].value);
	    this.metrics = [...this.metrics];
	});
  }

metrics = [
  {
    "name": "-3 Day",
    "value": "40632"
  },
  {
    "name": "0 Day",
    "value": "49737"
  },
  {
    "name": "3 Day",
    "value": "36745"
  },
  {
    "name": "7 Day",
    "value": "36240"
  },
  {
    "name": "14 Day",
    "value": "33000"
  },
  {
    "name": "28 Day",
    "value": "35800"
  },
  {
    "name": "Metric 7",
    "value": "35800"
  },
  {
    "name": "Metric 8",
    "value": "35800"
  },
  {
    "name": "Metric 9",
    "value": "35800"
  }

];

// size
   view: any[] = [500, 322];


  colorScheme = {
    domain: ['#AAB4C4', '#A1AAD8', '#C7B4DC', 
    	     '#AAB4C4', '#A1AAD8', '#C7B4DC',    	    
             '#AAB4C4', '#A1AAD8', '#C7B4DC' ]
  };

  onSelect(event) {
    console.log(event);
  }

  ngAfterViewInit() {

    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors = config.variables;
    });

    // document.getElementsByClassName('column_name')['0'].style.width = '100px'
    // document.getElementsByClassName('td').style.padding = 0;
  }

/*
  getMetrics(): void {
    console.log("inside number component:: getMetrics()");
  	// this.multi = this.numberService.getMetrics();
	this.numberService.getMetrics()
		.subscribe(metrics => this.metrics = metrics);
  }
*/

  ngOnInit(): void {
//      this.getMetrics();	      
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  numberWithCommasFormatting(x) {
    console.log("numberWithCommasFormatting original value:" + x);
    var y = Math.round(parseFloat(x) * 100) / 100;
    return y.toFixed(3);
  }
  numberWithCommas(x) {

    // console.log("numberWithCommas original value:" + x);
    // var y = parseFloat(Math.round(parseFloat(x) * 100) / 100).toFixed(2);
    // var y = Math.round(parseFloat(x) * 100) / 100;
    // y = y.toFixed(2);
    // console.log("numberWithCommas:" + y.toFixed(2));
//    y = parseFloat(Math.round(parseFloat(x) * 100) / 100); // .toFixed(2);

    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

