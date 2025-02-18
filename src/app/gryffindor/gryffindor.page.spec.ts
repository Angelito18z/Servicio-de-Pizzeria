import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GryffindorPage } from './gryffindor.page';

describe('GryffindorPage', () => {
  let component: GryffindorPage;
  let fixture: ComponentFixture<GryffindorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GryffindorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
