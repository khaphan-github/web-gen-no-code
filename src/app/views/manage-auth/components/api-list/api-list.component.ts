import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SResponse } from 'src/app/core/config/http-client/response-base';
import { GeneratedAPI } from '../../interfaces/response/generated-api.interface';
import { ManageApiService } from '../../services/manage-api.service';

@Component({
  selector: 'ngx-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.scss']
})
export class ApiListComponent implements OnInit {
  private service = inject(ManageApiService);

  constructor() { }

  public list$!: Observable<SResponse<Array<GeneratedAPI>>>;


  ngOnInit(): void {
    this.list$ = this.service.apiList();
  }

  public visible = false;

  toggleLiveDemo(api: GeneratedAPI) {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

}
