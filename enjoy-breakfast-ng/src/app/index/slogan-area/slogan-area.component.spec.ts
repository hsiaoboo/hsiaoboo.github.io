import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SloganAreaComponent } from './slogan-area.component';

describe('SloganAreaComponent', () => {
  let component: SloganAreaComponent;
  let fixture: ComponentFixture<SloganAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SloganAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SloganAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
