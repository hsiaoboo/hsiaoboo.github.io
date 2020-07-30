import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnjoyLocationComponent } from './enjoy-location.component';

describe('EnjoyLocationComponent', () => {
  let component: EnjoyLocationComponent;
  let fixture: ComponentFixture<EnjoyLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnjoyLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnjoyLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
