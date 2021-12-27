import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from './message.service';
import { AccordionDirective } from './accordion.directive';
import { AccordionItemDirective } from './accordion-item.directive';
import { AccordionHeaderDirective } from './accordion-header.directive';

@NgModule({
    declarations: [
        AccordionDirective,
        AccordionItemDirective,
        AccordionHeaderDirective
    ],
    imports: [
        CommonModule
    ],
    providers: [
        [MessageService]
    ],
    exports: [
        AccordionDirective,
        AccordionItemDirective,
        AccordionHeaderDirective     
    ]
})
export class AccordionModule {}
