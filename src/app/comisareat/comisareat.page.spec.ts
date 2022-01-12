import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComisareatPage } from './comisareat.page';

describe('ComisareatPage', () => {
  let component: ComisareatPage;
  let fixture: ComponentFixture<ComisareatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComisareatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComisareatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
