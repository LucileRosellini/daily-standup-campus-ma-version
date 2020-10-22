import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetChildComponent } from './projet-child.component';

describe('ProjetChildComponent', () => {
  let component: ProjetChildComponent;
  let fixture: ComponentFixture<ProjetChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
