import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HufflepuffPage } from './hufflepuff.page';

describe('HufflepuffPage', () => {
  let component: HufflepuffPage;
  let fixture: ComponentFixture<HufflepuffPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HufflepuffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
