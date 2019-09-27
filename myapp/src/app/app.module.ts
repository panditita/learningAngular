import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [ { path: ' ', component: HomeComponent }, { path: 'list', component: ListComponent } ];
@NgModule({
	declarations: [ AppComponent, HomeComponent, ListComponent ],
	imports: [ BrowserModule, AppRoutingModule, FormsModule, RouterModule.forRoot(appRoutes, { enableTracing: true }) ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
