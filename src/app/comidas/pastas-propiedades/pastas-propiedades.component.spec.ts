import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastasPropiedadesComponent } from './pastas-propiedades.component';

describe('PastasPropiedadesComponent', () => {
  let component: PastasPropiedadesComponent;
  let fixture: ComponentFixture<PastasPropiedadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastasPropiedadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastasPropiedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
