import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { LoginComponent } from './components/login/login.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PasswordLookupComponent } from './components/password-lookup/password-lookup.component';
import { ManageOwnersComponent } from './components/manage-owners/manage-owners.component';
import { ManageRentalsComponent } from './components/manage-rentals/manage-rentals.component';
import { ManageTenantsComponent } from './components/manage-tenants/manage-tenants.component';
import { ViewPropertyComponent } from './components/view-property/view-property.component';
import { ViewMaintenanceComponent } from './components/view-maintenance/view-maintenance.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { LeaseComponent } from './components/lease/lease.component';
import { OpenUnitsComponent } from './components/open-units/open-units.component';
import { RequestMaintenanceComponent } from './components/request-maintenance/request-maintenance.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'welcome-page', component: WelcomePageComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'password-lookup', component: PasswordLookupComponent},
  { path: 'about-us', component: AboutUsComponent },
  { path: 'login', component: LoginComponent},
  { path: 'create-user', component: CreateUserComponent },
  { path: 'manage-owners', component: ManageOwnersComponent },
  { path: 'manage-rentals', component: ManageRentalsComponent },
  { path: 'manage-tenants', component: ManageTenantsComponent },
  { path: 'view-property', component: ViewPropertyComponent },
  { path: 'view-maintenance', component: ViewMaintenanceComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'lease', component: LeaseComponent },
  { path: 'open-units', component: OpenUnitsComponent },
  { path: 'request-maintenance', component: RequestMaintenanceComponent },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
