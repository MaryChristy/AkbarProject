import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeComponent } from './ae.component';

describe('AeComponent', () => {
  let component: AeComponent;
  let fixture: ComponentFixture<AeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
