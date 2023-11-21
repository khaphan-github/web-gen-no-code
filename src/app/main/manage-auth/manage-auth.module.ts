import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageAuthComponent } from './manage-auth.component';
import { HttpClientModule } from '@angular/common/http';
import { ManageApiService } from './services/manage-api.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ManageApiService],
  declarations: [ManageAuthComponent]
})
export class ManageAuthModule { }
