import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RavenclawPage } from './ravenclaw.page';

describe('RavenclawPage', () => {
  let component: RavenclawPage;
  let fixture: ComponentFixture<RavenclawPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RavenclawPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
