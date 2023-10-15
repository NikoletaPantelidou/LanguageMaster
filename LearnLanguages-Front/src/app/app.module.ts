import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './src/app/pages/home-page/home-page.component';
import { LanguagePageComponent } from './src/app/pages/language-page/language-page.component';
import { FieldPageComponent } from './src/app/pages/field-page/field-page.component';
import { TestPageComponent } from './src/app/pages/test-page/test-page.component';
import { HeaderComponent } from './src/app/components/header/header.component';
import { FooterComponent } from './src/app/components/footer/footer.component';
import { CardComponent } from './src/app/components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LanguagePageComponent,
    FieldPageComponent,
    TestPageComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
