import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './loginregistration/login/login.component';
import { RegistrationComponent } from './loginregistration/registration/registration.component';
import { MymediaComponent } from './media/mymedia/mymedia.component';
import { SinglemediaComponent } from './media/singlemedia/singlemedia.component';
import { MediadetailComponent } from './media/mediadetail/mediadetail.component';
import { FollowersComponent } from './followers/followers.component';
import { HeaderComponent } from './headers/header/header.component';
import { UserheaderComponent } from './headers/userheader/userheader.component';
import { ErrorComponent } from './error/error.component';
import { UploadComponent } from './media/upload/upload.component';
import { AccountComponent } from './account/account.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    MymediaComponent,
    SinglemediaComponent,
    MediadetailComponent,
    FollowersComponent,
    HeaderComponent,
    UserheaderComponent,
    ErrorComponent,
    UploadComponent,
    AccountComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
