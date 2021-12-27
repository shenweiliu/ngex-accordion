import { Directive, Input, ViewChildren, AfterViewInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { AccordionDirective } from './accordion.directive';

@Directive({
  selector: '[accordionItem]'
})
export class AccordionItemDirective implements AfterViewInit, OnDestroy {
    @Input() index: number = -1;
    isActive: boolean = false;
    
    constructor(private accordion: AccordionDirective) { }

    ngAfterViewInit() {
        this.accordion.items.push(this); 
    }

    ngOnDestroy() {        
    }
}
