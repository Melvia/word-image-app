import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestPanelComponent } from './quest-panel.component';

describe('QuestPanelComponent', () => {
  let component: QuestPanelComponent;
  let fixture: ComponentFixture<QuestPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
