import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { MessageService } from 'primeng/api';

@Injectable({
    providedIn: 'root',
})
export class UtilityService {
    public isSpinner = new BehaviorSubject<boolean>(false);
    castSpinner = this.isSpinner.asObservable();
    public message = new BehaviorSubject<string>('');
    castSpinnerText = this.message.asObservable();
    SpinnerText: string = '';
    count:number=0;
    constructor(private messageService: MessageService) {}
    showSpinnerWithMsg(msg: string) {
        this.count++;
        this.isSpinner.next(true);
        this.message.next(msg);
    }
    showSpinner() {
        this.count++;
        this.isSpinner.next(true);
    }
    hideSpinner() {
        this.count--;
        if (this.count <= 0) {
            this.count = 0;
            this.isSpinner.next(false);
            this.message.next('');
        }
    }
    showAlert(_summary: string, _detail: string, _severity: string) {
        this.messageService.add({
            key: 'primeNGAlertMsg',
            severity: _severity,
            summary: _summary,
            detail: _detail,
        });
    }
    showSuccessAlert(_detail: string) {
        this.messageService.add({
            key: 'primeNGAlertMsg',
            severity: 'success',
            summary: 'Success',
            detail: _detail,
        });
    }
    showWarningAlert(_detail: string) {
        this.messageService.add({
            key: 'primeNGAlertMsg',
            severity: 'warn',
            summary: 'Warning',
            detail: _detail,
        });
    }
    showInfoAlert(_detail: string) {
        this.messageService.add({
            key: 'primeNGAlertMsg',
            severity: 'info',
            summary: 'Information',
            detail: _detail,
        });
    }
    showErrorAlert(_detail: string) {
        this.messageService.add({
            key: 'primeNGAlertMsg',
            severity: 'error',
            summary: 'Error',
            detail: _detail,
        });
    }
}
