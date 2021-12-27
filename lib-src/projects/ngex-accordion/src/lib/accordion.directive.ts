import { trigger, state, style, transition, animate } from '@angular/animations';
import { ChangeDetectionStrategy, Directive, ViewChildren, Input, QueryList, OnInit, AfterViewInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { MessageService } from './message.service';
import { AccordionItemDirective } from './accordion-item.directive';

@Directive({    
    selector: '[accordion]'    
})

export class AccordionDirective implements OnInit, AfterViewInit {    
    /**
    * false: toggling one would collapse others.
    * true: all panels are expanded.
    */
    @Input() isOpenAll: boolean = false;

    //Not working for parent and child directives.
    //@ViewChildren(AccordionItemDirective) items!: QueryList<AccordionItemDirective>;
    items: Array<AccordionItemDirective> = [];

    private subscription_1!: Subscription;

    constructor(private messageService: MessageService) {        
    }

    ngOnInit() {
        let pThis: any = this;
        this.subscription_1 = this.messageService.subscribe('accordionItem_Toggle', (itemIndex) => {                            
            pThis.toggleState(itemIndex);            
        });
    }

    ngAfterViewInit() {
        //Check.
        let te: any = this.items;
    }

    ngOnDestroy() {
        this.subscription_1.unsubscribe();
    }

    /* Use Observable for flag processing and return.
       Default value should be set for checking flag logic when initial template loading.
       Otherwise, it'll render null reference error for items[index].isActive.
    */
    isActiveItem(index: number): boolean {
        let pThis: any = this;
        let rtn: boolean = false;

        // let obs: Observable<boolean> = new Observable<boolean>((observer) => { 
        new Observable<boolean>((observer) => {
            if (pThis.items.length > 0 && pThis.items[index]) {
                observer.next(pThis.items[index].isActive);
            }
            return { unsubscribe() { } };
        }).subscribe(flag => {
            rtn = flag;
        });        
        return rtn;
    }

    toggleState(itemIndex: number) {       
        let pThis: any = this;
        this.items.forEach((item: any, idx: number) => {
            if (idx == itemIndex) {
                item.isActive = !item.isActive;
            }
            else {
                item.isActive = pThis.isOpenAll ? true : false;
            }
        });        
    };
}
