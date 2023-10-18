import { Component } from '@angular/core';
import { CountryCardModel } from '../../models/country-card.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  cardList : CountryCardModel[] = [
    {name:'Spanish', flag:'https://img.freepik.com/premium-vector/spain-flag-flag-spain-vector-illustration_685751-103.jpg'},
    {name:'Greek', flag:'https://cdn.britannica.com/49/1049-004-AE4BAD3E/Flag-Greece.jpg'},
    {name:'English', flag:'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png'},
  ]
}

