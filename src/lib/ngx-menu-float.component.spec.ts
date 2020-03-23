import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMenuFloatComponent } from './ngx-menu-float.component';

describe('NgxMenuFloatComponent', () => {
  let component: NgxMenuFloatComponent;
  let fixture: ComponentFixture<NgxMenuFloatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMenuFloatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMenuFloatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
