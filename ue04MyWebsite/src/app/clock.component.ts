import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-clock',
    templateUrl: './clock.component.html'
})
export class ClockComponent implements OnInit, OnDestroy {
    public showedText = 'HH:MM:SS';
    private timer: any;

    public ngOnInit () {
        setInterval( () => {
            this.showedText = new Date().toISOString();
        }, 1000);
    }

    public ngOnDestroy () {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
}
