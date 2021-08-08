import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SproutHeaderComponentComponent } from './sprout-header-component.component';

describe('SproutHeaderComponentComponent', () => {
  let component: SproutHeaderComponentComponent;
  let fixture: ComponentFixture<SproutHeaderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SproutHeaderComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SproutHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
