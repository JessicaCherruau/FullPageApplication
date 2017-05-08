import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DirectivesModule } from '../directives/directives.module';
import { PresentationConceptComponent } from './presentation.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'concept', component: PresentationConceptComponent },
  { path: '', redirectTo: '/concept',  pathMatch: 'full' }
];

@NgModule({
  declarations: [
    PresentationConceptComponent
  ],
  imports: [
    BrowserModule,
    DirectivesModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class PresentationModule { }
