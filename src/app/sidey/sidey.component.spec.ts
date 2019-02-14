import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideyComponent } from './sidey.component';

describe('SideyComponent', () => {
  let component: SideyComponent;
  let fixture: ComponentFixture<SideyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
