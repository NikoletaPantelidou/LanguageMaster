import { Component, Input } from '@angular/core';
import { CountryCardModel } from '../../models/country-card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() cardCountry: CountryCardModel; 
}