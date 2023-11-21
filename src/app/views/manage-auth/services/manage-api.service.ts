import { HttpClient } from '@angular/common/http';
import { LOCALSTORAGE_STORAGED_KEY } from '../../../core/config/storage-key/localstorage.const';
import { apiPathBuilder } from '../../../core/config/http-client/helper';
import { SResponse } from '../../../core/config/http-client/response-base';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { GeneratedAPI } from '../interfaces/response/generated-api.interface';
@Injectable()
export class ManageApiService {

  constructor(
    private readonly httpClient: HttpClient,
  ) { }

  connectToServer(hostName: string, connectionId: string) {
    localStorage.setItem(LOCALSTORAGE_STORAGED_KEY.modules.manageApi.connection.hostName, hostName);
    return this.httpClient.post(`${hostName}/api/v1/connect`, {
      connection: connectionId,
    })
  }

  countGeneratedApi() {
    return this.httpClient.get<SResponse<[{ count: number }]>>(apiPathBuilder('/_core_generated_apis/count'));
  }
  countTotalTable() {
    return this.httpClient.get<SResponse<[{ count: number }]>>(apiPathBuilder('/_core_x/total-table'));
  }
  countRole() {
    return this.httpClient.get<SResponse<[{ count: number }]>>(apiPathBuilder('/_core_role/count'));
  }
  countAccount() {
    return this.httpClient.get<SResponse<[{ count: number }]>>(apiPathBuilder('/_core_account/count'));
  }

  apiList() {
    return this.httpClient.post<SResponse<Array<GeneratedAPI>>>(apiPathBuilder('/_core_generated_apis/query'), {}).pipe(
      map((response) => {
        const modifiedData = response.data.map((el) => {
          return {
            ...el,
            api_path: el.api_path.replace('/api/v1/app/9999/schema', '')
          }
        });
        return { ...response, data: modifiedData };
      }));
  }
}
