import { NgModule } from '@angular/core';

import { ScriptSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [ScriptSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [ScriptSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ScriptSharedCommonModule {}
