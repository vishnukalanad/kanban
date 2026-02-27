import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCard } from './icon-card';

describe('IconCard', () => {
  let component: IconCard;
  let fixture: ComponentFixture<IconCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
