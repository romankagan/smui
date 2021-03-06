import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

const FEATURE_TOGGLE_UI_CONCEPT_UPDOWN_RULES_COMBINED = 'toggle.ui-concept.updown-rules.combined';
const FEATURE_TOGGLE_UI_CONCEPT_ALL_RULES_WITH_SOLR_FIELDS = 'toggle.ui-concept.all-rules.with-solr-fields';
const FEATURE_TOGGLE_RULE_DEPLOYMENT_PRE_LIVE_PRESENT = 'toggle.rule-deployment.pre-live.present';
const FEATURE_AUTH_SIMPLE_LOGOUT_BUTTON_TARGET_URL = 'smui.auth.ui-concept.simple-logout-button-target-url';
const FEATURE_TOGGLE_UI_LIST_LIMIT_ITEMS_TO = 'toggle.ui-list.limit-items-to';
const FEATURE_ACTIVATE_SPELLING = 'toggle.activate-spelling';

// TODO refactor into proper angular/export dependency (DI)
declare var FEATURE_TOGGLE_LIST: any;

@Injectable()
export class FeatureToggleService {

  constructor(private http: Http) {
  }

  getSync(toggleName: string): any {

    // console.log('In FeatureToggleService :: getSync');
    // console.log('... toggleName = ' + JSON.stringify(toggleName));
    const retFt = FEATURE_TOGGLE_LIST.filter(function(ft) {
      return (ft.toggleName === toggleName);
    });
    // console.log('... retFt = ' + JSON.stringify(retFt));
    if (retFt.length === 1) {
      // console.log('... retFt[0].toggleValue = ' + JSON.stringify(retFt[0].toggleValue));
      return retFt[0].toggleValue;
    } else {
      // TODO werfen oder bei return null belassen?
      // throw new Error("Feature Toggle >>>" + toggleName + "<<< not defined.");
      return null;
    }
  }

  isRuleTaggingActive(): Boolean {
    return this.getSync('toggle.rule-tagging')
  }

  // TODO rethink if interfacing like this is generic enough

  getSyncToggleUiConceptUpDownRulesCombined(): any {
    return this
      .getSync(FEATURE_TOGGLE_UI_CONCEPT_UPDOWN_RULES_COMBINED);
  }

  getSyncToggleUiConceptAllRulesWithSolrFields(): any {
    return this
      .getSync(FEATURE_TOGGLE_UI_CONCEPT_ALL_RULES_WITH_SOLR_FIELDS);
  }

  getSyncToggleRuleDeploymentPreLivePresent(): any {
    return this
      .getSync(FEATURE_TOGGLE_RULE_DEPLOYMENT_PRE_LIVE_PRESENT);
  }

  getSimpleLogoutButtonTargetUrl(): any {
    return this
      .getSync(FEATURE_AUTH_SIMPLE_LOGOUT_BUTTON_TARGET_URL);
  }

  getSyncToggleUiListLimitItemsTo(): any {
    return this
      .getSync(FEATURE_TOGGLE_UI_LIST_LIMIT_ITEMS_TO);
  }

  getSyncToggleActivateSpelling(): any {
    return this.getSync(FEATURE_ACTIVATE_SPELLING)
  }

}
