import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionVoyageurComponent } from './inscription-voyageur.component';

describe('InscriptionVoyageurComponent', () => {
  let component: InscriptionVoyageurComponent;
  let fixture: ComponentFixture<InscriptionVoyageurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionVoyageurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionVoyageurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
