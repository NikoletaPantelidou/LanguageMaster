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
import { AboutPageComponent } from './src/app/pages/about-page/about-page.component';
import { SkillCardComponent } from './src/app/components/skill-card/skill-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LanguagePageComponent,
    FieldPageComponent,
    TestPageComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    AboutPageComponent,
    SkillCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
