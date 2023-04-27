import { Subscription } from 'rxjs';
export class UnsubscriberContainerComponent {
    private subs: Subscription[] = [];
    set add(s: Subscription) {
        this.subs.push(s);
        //console.log('subs',this.subs);
    }
    dispose() {
        this.subs.forEach((s) => s.unsubscribe());
    }
}
