import { ModuleWithProviders, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Uncomment this line if you want to use the StoreDevtool
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers, metaReducers } from './app.store';
import { AllEffects } from './all-effects';
import { HttpClientModule } from '@angular/common/http';

// -- IMPORT SERVICES --
import { {{ properCase name }}Service } from './{{ folder name "services" }}/{{ kebabCase name }}.service';

// This file should be in src/app/store, the environment relative path should be as follow
import {environment} from '../../environments/environment';

@NgModule({
    imports: [
        HttpClientModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([...AllEffects]),
        environment.production ? [] : StoreDevtoolsModule.instrument({
            maxAge: 25, //  Retains last 25 states
        })
    ],
    exports: [],
    providers: [
        // -- PROVIDERS --
        {{ properCase name }}Service
    ]
})
export class StoreReduxorModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: StoreReduxorModule
        };
    }
}
