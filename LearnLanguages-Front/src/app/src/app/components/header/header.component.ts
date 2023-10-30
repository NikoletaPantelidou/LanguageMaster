import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public items: MenuItem[] = [
  {
      label: 'Quit',
  },
  {
    label: 'Login',
    icon: 'pi pi-fw pi-user',
  },
];
}
