import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguagePageComponent } from './src/app/pages/language-page/language-page.component';
import { HomePageComponent } from './src/app/pages/home-page/home-page.component';
import { FieldPageComponent } from './src/app/pages/field-page/field-page.component';
import { TestPageComponent } from './src/app/pages/test-page/test-page.component';
import { AboutPageComponent} from './src/app/pages/about-page/about-page.component';
const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'home', redirectTo:''},
  {path:'language', component: LanguagePageComponent},
  {path:'field', component: FieldPageComponent},
  {path:'test', component:TestPageComponent},
  {path:'about', component:AboutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
