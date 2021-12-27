# ngex-accordion

A simple and light-weight accordion for applications with Angular versions 8 - 13. 

The library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12. It still uses the ViewEngine, instead of Ivy Partial option, for the better backward compatibility.

The `ngex-accordion` uses the directive, rather than component, design and pattern practices. The component pattern of the Angular accordion implementation limits the consumer code for additional and more hierarchical HTML elements with complex data bindings and styles. The directive pattern of the ngex-accordion, however, overcomes these limits and works better in the real production web applications. Please stay tuned for my blog post that details those design and pattern comparisons.

## Installation

Run `npm install ngex-accordion` to add the library into your project directory, or add `"ngex-accordion": "~12.2.0"` to the package.json file and then run `npm install` to update the existing package.

## How to Use

1. Import AccordionModule to your app.module.ts

    `import { AccordionModule } from 'ngex-accordion';`

2. Import AccordionDirective to your component to use the accordion:

    `import { AccordionDirective } from 'ngex-accordion';`

3. Define `isOpenAll` class-level flag and assign its value in your component to ues the accordion:

    `isOpenAll: boolean = <false|true>;`

The value `false` sets to always expand one item at a time, whereas `true` keeps all items expanded if you have expended any.    

4. Specify all required directives with your code in the HTML template. You can freely use all your own options and styles in your component template. There is no library-rendered component templates to limit your UI display. Below is the base template with the `ngex-accordion` directives.
 
    ```
    <div accordion="isOpenAll">	
        <div *ngFor="let item of dataList; let idx = index">                
            <div accordionItem [index]="idx" >
                <div accordionHeader>
                    {{item.key}}
                    <i class="accordion-toggle-btn fa fa-chevron-right"
                       [class.accordion-active-icon]="accordion.isActiveItem(idx)">
		    </i>
		</div>                    
                <div [class.accordion-expanded]="accordion.isActiveItem(idx)" >
                    <div *ngFor="let subItem of item.value">
                        {{subItem.text}}
                    </div>
                 </div>
             </div>
         </div>	
    </div>
    ```	

## Source Code and Demo Application

The source code and demo application can be downloaded from the [github repository](https://github.com/shenweiliu/ngex-accordion). You can reference the HTML template in the app.component.html and CSS styles in the app.component.css for your application use.    
 
