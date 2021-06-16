import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooooooodComponent } from './foooooood.component';

describe('FooooooodComponent', () => {
  let component: FooooooodComponent;
  let fixture: ComponentFixture<FooooooodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooooooodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooooooodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
