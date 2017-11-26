import "rxjs/add/observable/of";
import "rxjs/add/observable/throw";
import { EffectsRunner, EffectsTestingModule } from "@ngrx/effects/testing";
import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { {{properCase name}}Effects } from "{{position "effects"}}/{{kebabCase name}}.effects";
import { {{properCase name}}Service } from "{{position "services"}}/{{kebabCase name}}.service";
import { Observable } from "rxjs/Observable";

describe('{{properCase name}}Effects', () => {
  let runner, {{camelCase name}}Effects, {{camelCase name}}Service;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      EffectsTestingModule
    ],
    providers: [
      {{properCase name}}Effects,
      {
        provide: {{properCase name}}Service,
        useValue: jasmine.createSpyObj('{{camelCase name}}Service', ['get'])
      }
    ]
  }));

  beforeEach(() => {
    runner = TestBed.get(EffectsRunner);
    {{camelCase name}}Effects = TestBed.get({{properCase name}}Effects);
    {{camelCase name}}Service = TestBed.get({{properCase name}}Service);
  });

  describe('{{camelCase name}}$', () => {

    it('should return a LOAD_SUCCESS action, on success', function () {

    });

    it('should return a LOAD_FAIL action, on error', function () {

    });

  });

});