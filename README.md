# NgxFloatingMenu

## Features
* Menu position
* Menu background color
* Material icon support
* Icon color
* Menu selection background
* Action on click


## Installation
* `npm install ngx-floating-toolbar`

* `import {NgxMenuFloatModule} from 'ngx-menu-float';
;`
  
  `````
  @NgModule({
    imports: [
      ...,
        NgxMenuFloatModule
    ],
    ...
  })
  class YourModule { ... }
  `````
  
* use `  <ngx-menu-float [menuItems]="menu" [settings]="settings"></ngx-menu-float>` in your templates to add the custom dropdown in your view like below

## Config

### Input
* `settings: IMenuSettinggs` - settings for menu container.
* `menuItems: Array<IMenuItem>` - Array of objects for menu items.

````
settings: IMenuSettings = {
  position: 'bottom' | 'top';
  backgroundColor?: string;
}

menuItem: IMenuItem = {
  icon: string;
  color?: string;
  selected?: boolean;
  selectedBackground?: string;
  action?: any;

}

````
 ## Notes:
 
 * action can be an arrow function or a bindable function
 * only material icons are supported for now


