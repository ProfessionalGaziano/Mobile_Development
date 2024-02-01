import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardServicesPage } from './card-services.page';

describe('CardServicesPage', () => {
  let component: CardServicesPage;
  let fixture: ComponentFixture<CardServicesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CardServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
