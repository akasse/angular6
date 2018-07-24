import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionFourniseurComponent } from './inscription-fourniseur.component';

describe('InscriptionFourniseurComponent', () => {
  let component: InscriptionFourniseurComponent;
  let fixture: ComponentFixture<InscriptionFourniseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionFourniseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionFourniseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
