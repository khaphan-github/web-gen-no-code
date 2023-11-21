import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ManageApiService } from '../../main/manage-auth/services/manage-api.service';

import { DashboardChartsData, IChartProps } from './dashboard-charts-data';
import { Observable } from 'rxjs';
import { SResponse } from '../../core/config/http-client/response-base';
import { GeneratedAPI } from 'src/app/main/manage-auth/services/interfaces/response/generated-api.interface';

interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(
    private readonly service: ManageApiService,
  ) { }


  public list$!: Observable<SResponse<Array<GeneratedAPI>>>;


  ngOnInit(): void {
    this.list$ = this.service.apiList();
  }

  public visible = false;

  toggleLiveDemo(api: GeneratedAPI) {
    console.log(api);
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }
}
