import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourniseurLayoutComponent } from './fourniseur-layout.component';

describe('FourniseurLayoutComponent', () => {
  let component: FourniseurLayoutComponent;
  let fixture: ComponentFixture<FourniseurLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourniseurLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourniseurLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
