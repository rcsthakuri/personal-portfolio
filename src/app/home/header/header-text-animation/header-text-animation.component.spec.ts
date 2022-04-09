import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTextAnimationComponent } from './header-text-animation.component';

describe('HeaderTextAnimationComponent', () => {
  let component: HeaderTextAnimationComponent;
  let fixture: ComponentFixture<HeaderTextAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTextAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTextAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
