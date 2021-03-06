// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToasterModule } from 'angular2-toaster';
import { Http, XHRBackend, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

// services
import {
  FeatureToggleService, ListItemsService, RuleManagementService, SpellingsService, SolrService, TagsService
} from './services/index'

// helpers
import {
  CommonsService, HttpAuthInterceptor
} from './helpers/index'

// components
import {
  AppComponent
} from './components/app.component';

import {
  ButtonRowComponent, CardComponent, CommentComponent, ErrorComponent, DetailHeaderComponent, InputRowContainerComponent,
  DetailInputRow, SpellingsComponent, RuleManagementComponent
} from './components/details/index'

import {
  RulesListComponent, RulesSearchComponent
} from './components/rules-panel/index'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    ToasterModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    ButtonRowComponent,
    CardComponent,
    CommentComponent,
    ErrorComponent,
    DetailHeaderComponent,
    InputRowContainerComponent,
    DetailInputRow,
    SpellingsComponent,
    RuleManagementComponent,
    RulesListComponent,
    RulesSearchComponent
  ],
  providers: [
    CommonsService,
    FeatureToggleService,
    ListItemsService,
    RuleManagementService,
    SpellingsService,
    SolrService,
    TagsService,
    {
      provide: Http,
      useFactory:
        (xhrBackend: XHRBackend, requestOptions: RequestOptions, router: Router) =>
          new HttpAuthInterceptor(xhrBackend, requestOptions, router),
      deps: [XHRBackend, RequestOptions, Router]
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
