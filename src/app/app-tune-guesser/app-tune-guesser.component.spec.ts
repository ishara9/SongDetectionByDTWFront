import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuneGuesserBodyComponent } from './app-tune-guesser.component';

describe('CallToServiceComponent', () => {
  let component: TuneGuesserBodyComponent;
  let fixture: ComponentFixture<TuneGuesserBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TuneGuesserBodyComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuneGuesserBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
