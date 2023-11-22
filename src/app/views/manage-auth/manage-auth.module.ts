import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageAuthComponent } from './manage-auth.component';
import { HttpClientModule } from '@angular/common/http';
import { ManageApiService } from './services/manage-api.service';
import { RouterModule } from '@angular/router';
import { ApiListComponent } from './components/api-list/api-list.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { PolicyListComponent } from './components/policy/policy-list/policy-list.component';
import { BadgeModule, ButtonModule, CardModule, DropdownModule, FormCheckComponent, FormModule, GridModule, ModalModule, TableModule } from '@coreui/angular';
import { RoleListComponent } from './components/roles/role-list/role-list.component';
import { WaitingToLoadComponent } from '../shared/waiting-to-load/waiting-to-load.component';
import { CreateRoleComponent } from './components/roles/create-role/create-role.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateRoleComponent } from './components/roles/update-role/update-role.component';
import { CreatePolicyComponent } from './components/policy/create-policy/create-policy.component';
import { UpdatePolicyComponent } from './components/policy/update-policy/update-policy.component';
import { DecentralizeComponent } from './components/roles/decentralize/decentralize.component';
import { IconModule } from '@coreui/icons-angular';
import { NotFoundComponent } from '../shared/not-found/not-found.component';

const UI_MODULES = [
  IconModule,
  CardModule,
  BadgeModule,
  TableModule,
  GridModule,
  ButtonModule,
  DropdownModule,
  ModalModule,
  FormCheckComponent,
  FormModule,

  NotFoundComponent,
  WaitingToLoadComponent,

]

const MODULE_COMPONENTS = [
  ManageAuthComponent,
  ApiListComponent,
  AccountListComponent,

  PolicyListComponent,
  CreatePolicyComponent,
  UpdatePolicyComponent,

  RoleListComponent,
  CreateRoleComponent,
  UpdateRoleComponent,
  DecentralizeComponent,
]

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,

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
        path: 'role',
        component: RoleListComponent
      }
    ]),
  ],
  providers: [ManageApiService],
  declarations: [...MODULE_COMPONENTS]
})
export class ManageAuthModule { }
