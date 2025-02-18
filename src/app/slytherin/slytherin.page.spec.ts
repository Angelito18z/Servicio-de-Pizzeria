import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SlytherinPage } from './slytherin.page';

describe('SlytherinPage', () => {
  let component: SlytherinPage;
  let fixture: ComponentFixture<SlytherinPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SlytherinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
