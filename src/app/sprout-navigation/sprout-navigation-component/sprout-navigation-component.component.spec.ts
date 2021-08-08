import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SproutNavigationComponentComponent } from './sprout-navigation-component.component';

describe('SproutNavigationComponentComponent', () => {
  let component: SproutNavigationComponentComponent;
  let fixture: ComponentFixture<SproutNavigationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SproutNavigationComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SproutNavigationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
