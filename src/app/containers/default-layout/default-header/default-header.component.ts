import { Component, Input, OnInit } from '@angular/core';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { ManageApiService } from '../../../main/manage-auth/services/manage-api.service';
import { LOCALSTORAGE_STORAGED_KEY } from 'src/app/core/config/storage-key/localstorage.const';
import { ConnectedToServerEvent } from 'src/app/main/manage-auth/event/connected-to-server.event';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent implements OnInit {

  @Input() sidebarId: string = "sidebar";

  constructor(
    private readonly service: ManageApiService,
    private readonly connectoServerEvent: ConnectedToServerEvent
  ) {
    super();
  }

  public readonly CONNECT_DISPLAY_TEXT = 'Connect';
  public readonly DISCONNECT_DISPLAY_TEXT = 'Disconnect';
  public readonly RETRY_DISPLAY_TEXT = 'Retry';

  public currentDisplayText = this.CONNECT_DISPLAY_TEXT;
  public disableButton: boolean = true;
  public disableInput: boolean = false;
  public showSpinner: boolean = false;

  public connectionSecretKey: string = '';
  public hostName: string = '';

  ngOnInit(): void {
    this.hostName = localStorage.getItem(LOCALSTORAGE_STORAGED_KEY.modules.manageApi.connection.hostName) ?? 'http://localhost:3000';
  }

  onConnect() {
    if (this.currentDisplayText == this.DISCONNECT_DISPLAY_TEXT) {
      this.disableInput = false;
      this.currentDisplayText = this.CONNECT_DISPLAY_TEXT;
    } else {
      this.disableButton = true;
      this.disableInput = true;
      this.showSpinner = true;

      this.service.connectToServer(this.hostName, this.connectionSecretKey).subscribe({
        next: (val) => {
          if (val) {
            this.connectoServerEvent.setState({ fetchData: true });
            this.currentDisplayText = this.DISCONNECT_DISPLAY_TEXT;
          } else {
            this.currentDisplayText = this.RETRY_DISPLAY_TEXT;
            this.disableInput = false;
          }
        },
        error: (err) => {
          this.disableButton = false;
          this.disableInput = false;
          this.showSpinner = false;
        },
        complete: () => {
          this.disableButton = false;
          this.showSpinner = false;
        },
      });
    }
  }

  onChangeHostname(text: string) {
    this.disableButton = text.length < 10 || this.connectionSecretKey.length < 10;
  }

  onChangeSecretKey(text: string) {
    this.disableButton = text.length < 10 || this.hostName.length < 10;
  }
}
