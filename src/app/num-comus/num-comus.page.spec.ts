import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NumComusPage } from './num-comus.page';

describe('NumComusPage', () => {
  let component: NumComusPage;
  let fixture: ComponentFixture<NumComusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumComusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NumComusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
