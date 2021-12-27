import { Directive, TemplateRef, AfterViewInit, HostListener } from '@angular/core';
import { MessageService } from './message.service';
import { AccordionItemDirective } from './accordion-item.directive';

@Directive({
  selector: '[accordionHeader]'
})
export class AccordionHeaderDirective implements AfterViewInit {
    index: number = -1;

    constructor(private accordionItem: AccordionItemDirective, private messageService: MessageService) {
    }

    ngAfterViewInit() {
        this.index = this.accordionItem.index;
    }

    @HostListener('click', ['$event.target'])
    //onClick(btn) {
    onClick() {
        this.messageService.broadcast('accordionItem_Toggle', this.index);
    }
}
