import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatemessagePage } from './createmessage.page';

describe('CreatemessagePage', () => {
  let component: CreatemessagePage;
  let fixture: ComponentFixture<CreatemessagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatemessagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatemessagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
