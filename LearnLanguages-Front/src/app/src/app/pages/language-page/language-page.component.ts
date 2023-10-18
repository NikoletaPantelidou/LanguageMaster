import { Component } from '@angular/core';
import { SkillCardModel } from '../../models/skil-card.model';

@Component({
  selector: 'app-language-page',
  templateUrl: './language-page.component.html',
  styleUrls: ['./language-page.component.scss']
})
export class LanguagePageComponent {
  skillCardList : SkillCardModel[] = [
    {skill:'Listening', material:''},
    {skill:'Writing', material:''},
    {skill:'Speaking', material:''},
    {skill:'Grammar', material:''},
    {skill:'Vocabulary', material:''},
    {skill:'Exams', material:''},
  ]
}
