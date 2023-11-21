import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageAuthComponent } from './manage-auth.component';
import { HttpClientModule } from '@angular/common/http';
import { ManageApiService } from './services/manage-api.service';
import { RouterModule } from '@angular/router';
import { ApiListComponent } from './components/api-list/api-list.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { PolicyListComponent } from './components/policy-list/policy-list.component';
import { BadgeModule, CardModule, GridModule, TableModule } from '@coreui/angular';

const UI_MODULES = [
  CardModule,
  BadgeModule,
  TableModule,
  GridModule,
]

const MODULE_COMPONENTS = [
  ManageAuthComponent,
  ApiListComponent,
  PolicyListComponent,
  AccountListComponent,
]

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ...UI_MODULES,
    RouterModule.forChild([
      {
        path: 'apis',
        component: ApiListComponent
      },
      {
        path: 'account',
        component: AccountListComponent
      },
      {
        path: 'policy',
        component: PolicyListComponent
      }
    ]),
  ],
  providers: [ManageApiService],
  declarations: [...MODULE_COMPONENTS]
})
export class ManageAuthModule { }
