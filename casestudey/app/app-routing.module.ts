import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './headers/header/header.component';
import { UserheaderComponent } from './headers/userheader/userheader.component';
import { LoginComponent } from './loginregistration/login/login.component';
import { RegistrationComponent } from './loginregistration/registration/registration.component';
import { MediadetailComponent } from './media/mediadetail/mediadetail.component';
import { SinglemediaComponent } from './media/singlemedia/singlemedia.component';
import { MymediaComponent } from './media/mymedia/mymedia.component';
import { FollowersComponent } from './followers/followers.component';
import { UploadComponent } from './media/upload/upload.component';
import { AccountComponent } from './account/account.component';


const routes: Routes = [
{path:"header", component: HeaderComponent},
{ path:"userheader", component: UserheaderComponent},
{path:"", redirectTo:"login",pathMatch:"full"},
{ path:"login", component: LoginComponent},
{ path:"registration", component: RegistrationComponent},
{ path:"mediadetail", component: MediadetailComponent},
{ path:"mymedia", component: MymediaComponent},
{ path:"singlemedia", component: SinglemediaComponent},
{ path:"followers", component: FollowersComponent},
{ path:"upload", component: UploadComponent},
{ path:"account", component: AccountComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
