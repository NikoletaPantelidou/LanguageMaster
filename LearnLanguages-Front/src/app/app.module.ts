import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { FieldPageComponent } from './pages/field-page/field-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LanguagePageComponent } from './pages/language-page/language-page.component';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PasswordModule } from 'primeng/password';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

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
    LoginPageComponent,
    RegisterPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    MenubarModule,
    PasswordModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
