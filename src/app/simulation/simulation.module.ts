import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DirectivesModule } from '../directives/directives.module';

import { RouterModule, Routes } from '@angular/router';
import { NeedsComponent } from './needs/needs.component';
import { TestComponent } from './test/test.component';
import { HedgeComponent } from './hedge/hedge.component';

const appRoutes: Routes = [
  { path: 'simulation/needs', component: NeedsComponent },
  { path: 'simulation/test', component: TestComponent },
  { path: 'simulation/hedge', component: HedgeComponent },
  { path: '', redirectTo: '/concept',  pathMatch: 'full' },
  { path: 'simulation', redirectTo: 'simulation/needs',  pathMatch: 'full' }
];

@NgModule({
  declarations: [
    NeedsComponent,
    TestComponent,
    HedgeComponent
  ],
  imports: [
    BrowserModule,
    DirectivesModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class SimulationModule { }
