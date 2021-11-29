import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { LoginComponent } from './components/login/login.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PasswordLookupComponent } from './components/password-lookup/password-lookup.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ManageOwnersComponent } from './components/manage-owners/manage-owners.component';
import { ManageRentalsComponent } from './components/manage-rentals/manage-rentals.component';
import { ManageTenantsComponent } from './components/manage-tenants/manage-tenants.component';
import { ViewPropertyComponent } from './components/view-property/view-property.component';
import { ViewMaintenanceComponent } from './components/view-maintenance/view-maintenance.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { LeaseComponent } from './components/lease/lease.component';
import { OpenUnitsComponent } from './components/open-units/open-units.component';
import { RequestMaintenanceComponent } from './components/request-maintenance/request-maintenance.component';
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    PageNotFoundComponent,
    CreateUserComponent,
    LoginComponent,
    AboutUsComponent,
    FooterComponent,
    MainPageComponent,
    PasswordLookupComponent,
    NavBarComponent,
    ManageOwnersComponent,
    ManageRentalsComponent,
    ManageTenantsComponent,
    ViewPropertyComponent,
    ViewMaintenanceComponent,
    PaymentsComponent,
    LeaseComponent,
    OpenUnitsComponent,
    RequestMaintenanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAPUXQ8-w6oU6moT6tlk3VzB_GiwtjURdY",
      authDomain: "icdc-4e98b.firebaseapp.com",
      projectId: "icdc-4e98b",
      storageBucket: "icdc-4e98b.appspot.com",
      messagingSenderId: "237635431662",
      appId: "1:237635431662:web:e7903052389dadf37797ff",
      measurementId: "G-RYDEY3TKTF"
    }),
    AngularFirestoreModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
