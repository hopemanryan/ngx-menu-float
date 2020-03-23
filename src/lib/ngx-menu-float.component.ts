import {Component, Input, OnInit} from '@angular/core';
export interface IMenuItem {
  icon: string;
  color?: string;
  selected?: boolean;
  selectedBackground?: string;
  action?: any;
}
export interface IMenuSettings {
  position: 'bottom' | 'top';
  backgroundColor?: string;
}

@Component({
  selector: 'ngx-menu-float',
  template: `
    <div class="ngx-floating-toolbar container"
         [ngClass]="{'position-top': settings.position === 'top'}"
         [ngStyle]="{'background-color': settings.backgroundColor  || '#ffffff'}"    >
      <div class="items-container" *ngIf="menuItems">
        <div
          *ngFor="let item of menuItems; let i = index" class="menu-item"
          (click)="selectItem(i); item.action ? item.action() : null"
          [ngClass]="{'selected-menu-item': item.selected}"
          [ngStyle]="{'background-color': (item.selected  ? item.selectedBackground || 'rgba(186, 186, 186, 0.31)' : 'transparent') }">
          <a class="material-icons" [ngStyle]="{'color': item.color || 'gray'}">{{item.icon}}</a>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['main.css']
  })
export class NgxMenuFloatComponent implements OnInit {
  @Input() menuItems: IMenuItem[];
  @Input() settings: IMenuSettings
  constructor() { }

  ngOnInit(): void {
  }

  selectItem(index) {
    this.menuItems.forEach((x, i) => {
      x.selected = i === index;
    });
  }

}
