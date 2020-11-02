import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycomponentDetailComponent } from './mycomponent-detail.component';

describe('MycomponentDetailComponent', () => {
  let component: MycomponentDetailComponent;
  let fixture: ComponentFixture<MycomponentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycomponentDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycomponentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
