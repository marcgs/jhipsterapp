import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterappRegionMySuffixModule } from './region/region-my-suffix.module';
import { JhipsterappCountryMySuffixModule } from './country/country-my-suffix.module';
import { JhipsterappLocationMySuffixModule } from './location/location-my-suffix.module';
import { JhipsterappDepartmentMySuffixModule } from './department/department-my-suffix.module';
import { JhipsterappTaskMySuffixModule } from './task/task-my-suffix.module';
import { JhipsterappEmployeeMySuffixModule } from './employee/employee-my-suffix.module';
import { JhipsterappJobMySuffixModule } from './job/job-my-suffix.module';
import { JhipsterappJobHistoryMySuffixModule } from './job-history/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JhipsterappRegionMySuffixModule,
        JhipsterappCountryMySuffixModule,
        JhipsterappLocationMySuffixModule,
        JhipsterappDepartmentMySuffixModule,
        JhipsterappTaskMySuffixModule,
        JhipsterappEmployeeMySuffixModule,
        JhipsterappJobMySuffixModule,
        JhipsterappJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterappEntityModule {}
