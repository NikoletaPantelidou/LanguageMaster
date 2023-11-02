import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { FieldPageComponent } from './pages/field-page/field-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LanguagePageComponent } from './pages/language-page/language-page.component';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'language', component: LanguagePageComponent},
  {path:'field', component: FieldPageComponent},
  {path:'test', component:TestPageComponent},
  {path:'about', component:AboutPageComponent},
  {path:'login', component:LoginPageComponent},
  {path: 'register', component:RegisterPageComponent},
  {path:'home', redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
