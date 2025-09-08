import {Routes} from '@angular/router';
import {QuestPanelComponent} from './quest-panel/quest-panel.component';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';


export const routes: Routes = [
  {path: "", component: QuestPanelComponent},
  {path: "admin", component: AdminPanelComponent},
  {path: "**", redirectTo: ""}
];


