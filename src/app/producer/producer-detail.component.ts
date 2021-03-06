import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { environment } from '../../environments/environment';
import { MockService } from '../services/mock.service';

@Component({
  selector: 'app-producer-detail',
  templateUrl: './producer-detail.component.html',
  styleUrls: ['./producer-detail.component.scss']
})
export class ProducerDetailComponent implements OnInit {

  buyerform: any = {};
  people: any = {};
  producerForm = {
    price: 0,
    crowdfunding: 0
  };

  id: any = null;

  version: string = environment.version;

  constructor(private _mockService: MockService,
    private _routeParams: ActivatedRoute) { }

  ngOnInit() {
    this._routeParams.params.subscribe((params: Params) => {
      this.id = params['id'];
      this._mockService.getProject(this.id).then(item => {
        console.log(item);
        this.buyerform = item;
      });
    });
    this._mockService.getPeople().then(
      people => {
        console.log(people);
        this.people = people;
      }
    );
  }

  startCrowdfunding(form: any) {
    form.projectId = this.id;
    this._mockService.insertCrowdfunding(form);
    alert('Crowdfunding started');
  }

}
