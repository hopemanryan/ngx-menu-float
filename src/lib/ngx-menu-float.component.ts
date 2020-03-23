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
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

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

  styles: [`
    @import '~material-icons/iconfont/material-icons.css';

    .ngx-floating-toolbar {
      z-index: 99999999;
      background-color: #fff;
    }
    .ngx-floating-toolbar.container {
      width: 80vw;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
      height: 50px;
      border-radius: 24px;
      position: fixed;
      left: 10vw;
    }
    .ngx-floating-toolbar.position-top {
      top: 1.2rem;
    }
    .ngx-floating-toolbar:not(.position-top) {
      bottom: 1.2rem;
    }
    .ngx-floating-toolbar .items-container {
      display: flex;
      justify-content: space-around;
      height: 100%;
      align-items: center;
      padding: 0 0;
    }
    .ngx-floating-toolbar .items-container .menu-item {
      overflow: hidden;
      flex-grow: 1;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .ngx-floating-toolbar .items-container .menu-item:last-child {
      border: none;
      border-bottom-right-radius: 24px;
      border-top-right-radius: 24px;
    }
    .ngx-floating-toolbar .items-container .menu-item:first-child {
      border-bottom-left-radius: 24px;
      border-top-left-radius: 24px;
    }
    .ngx-floating-toolbar .items-container .menu-item.selected-menu-item {
      transition: 0.5s;
      animation-fill-mode: forwards;
      animation: ease-in-out;
    }


  `]
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
