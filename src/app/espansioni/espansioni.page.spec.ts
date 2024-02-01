import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EspansioniPage } from './espansioni.page';

describe('EspansioniPage', () => {
  let component: EspansioniPage;
  let fixture: ComponentFixture<EspansioniPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EspansioniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
