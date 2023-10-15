import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguagePageComponent } from './src/app/pages/language-page/language-page.component';
import { HomePageComponent } from './src/app/pages/home-page/home-page.component';
import { FieldPageComponent } from './src/app/pages/field-page/field-page.component';
import { TestPageComponent } from './src/app/pages/test-page/test-page.component';

const routes: Routes = [
  {path:'language', component: LanguagePageComponent},
  {path:'home', component:HomePageComponent},
  {path:'field', component: FieldPageComponent},
  {path:'test', component:TestPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
