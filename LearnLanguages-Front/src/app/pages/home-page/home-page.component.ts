import { Component, OnInit } from '@angular/core';
import { CountryCardModel } from '../../models/country-card.model';
import { LanguagesIntegrationService } from '../../services/integrations/languages-integration.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
  public cardList : CountryCardModel[];

  constructor(public languagesIntegrationService : LanguagesIntegrationService) { }
  
  public ngOnInit(): void {
    this.languagesIntegrationService.GetLanguages().subscribe(responseLanguages => this.cardList = responseLanguages);
  }
}

