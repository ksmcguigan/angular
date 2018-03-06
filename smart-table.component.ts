import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { NumberService } from '../../../@core/data/number.service';
import { SegmentService } from '../../../@core/data/segment.service';
import { Subscription } from 'rxjs/Subscription';

import { SmartTableService } from '../../../@core/data/smart-table.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
  // encapsulation: ViewEncapsulation.None,
})
export class SmartTableComponent {

  subscription: Subscription;
  message: any;

  settings = {
    actions: false,
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },

    columns: {
      id: {
        title: 'Feature',
        type: 'string',
      },
      firstName: {
        title: 'Date',
        type: 'string',
      },
      lastName: {
        title: 'Queries',
        type: 'string',
      },
      username: {
        title: 'Queries (%Total)',
        type: 'string',
      },
      email: {
        title: 'DAU',
        type: 'string',
      },
      age: {
        title: 'DAU (%Total)',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableService, private numberService: NumberService) {

	this.subscription = this.numberService.getMessage().subscribe(message => { 
	    this.message = message; 
	    console.log("Smart Table received message:" + this.message);
	    var array = this.message.text.split(':')
	    // array[2] has start date, array[3] has end date
	});

    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  funct(value) {
    // this.route.navigate('detail:'+value.data.Id)
    console.log('detail:'+value.data.Id)
  }
}
