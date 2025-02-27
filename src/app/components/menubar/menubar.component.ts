import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';

@Component({
  selector: 'app-menubar',
  imports: [
    Menubar,
  ],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss'
})
export class MenubarComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
          label: 'Home',
          icon: 'fa-solid fa-house'
      },
      {
          label: 'Pessoas',
          icon: 'pi pi-users',
          items: [
            {
                label: 'Clientes',
                icon: 'pi pi-user'
            },
            {
                label: 'Fornecedores',
                icon: 'fa-solid fa-people-carry-box'
            },
            {
                label: 'Usuários',
                icon: 'fa-solid fa-user'
            }
          ]
      },
      {
          label: 'Rotinas',
          icon: 'fa-brands fa-black-tie',
          items: [
              {
                  label: 'Produtos',
                  icon: 'fa-solid fa-mug-saucer',
                  routerLink: '/products'
              },
              {
                  label: 'Orçamentos',
                  icon: 'fa-solid fa-file-invoice-dollar'
              },
              {
                  label: 'Ordens de Serviços',
                  icon: 'fa-solid fa-clipboard'
              },
              {
                  label: 'Caixa',
                  icon: 'fa-solid fa-cash-register'
              }
          ]
      },
      {
          label: 'Financeiro',
          icon: 'pi pi-money-bill'
      }
    ];
  }
}
