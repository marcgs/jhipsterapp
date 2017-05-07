import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { EventManager , JhiLanguageService  } from 'ng-jhipster';

import { JobMySuffix } from './job-my-suffix.model';
import { JobMySuffixService } from './job-my-suffix.service';

@Component({
    selector: 'jhi-job-my-suffix-detail',
    templateUrl: './job-my-suffix-detail.component.html'
})
export class JobMySuffixDetailComponent implements OnInit, OnDestroy {

    job: JobMySuffix;
    private subscription: any;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: EventManager,
        private jhiLanguageService: JhiLanguageService,
        private jobService: JobMySuffixService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['job']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInJobs();
    }

    load(id) {
        this.jobService.find(id).subscribe((job) => {
            this.job = job;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInJobs() {
        this.eventSubscriber = this.eventManager.subscribe('jobListModification', (response) => this.load(this.job.id));
    }
}