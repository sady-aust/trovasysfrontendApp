import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirqualitycardComponent } from './airqualitycard.component';

describe('AirqualitycardComponent', () => {
  let component: AirqualitycardComponent;
  let fixture: ComponentFixture<AirqualitycardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirqualitycardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirqualitycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
