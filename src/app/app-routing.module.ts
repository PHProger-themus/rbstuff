import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { NotFoundComponent } from './common/not-found/not-found.component'

import {IndexComponent} from "./pages/index/index.component";
import {ReadingListComponent} from "./pages/reading-list/reading-list.component";

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'reading-list', component: ReadingListComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload',
    relativeLinkResolution: 'legacy',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
