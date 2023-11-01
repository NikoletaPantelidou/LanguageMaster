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
    label: 'About us',
    icon:'pi pi-users'
  },
  {
    label: 'Login',
    icon: 'pi pi-sign-in',
    routerLink: 'login'
  },
  { label: 'Log out',
    icon: 'pi pi-sign-out',
  },
  {
    label:'Register',
    icon:'pi pi-user-plus',
  }
];
}
