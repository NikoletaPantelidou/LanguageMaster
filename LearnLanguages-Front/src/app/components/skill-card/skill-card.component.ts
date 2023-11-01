import { Component, Input } from '@angular/core';
import { SkillCardModel } from '../../models/skil-card.model';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent {
  @Input() skill: SkillCardModel; 
}
