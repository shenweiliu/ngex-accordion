# ngex-accordion
The repository contains the source code and demo application files for the Angular ngex-accordion.

## Angular Version Compatibility

The applications are set with the Angular 13. It works well with the `ngex-accordion` library tool built with tha Angular 12 ViewEngine (non-Ivy) compilation options. if compiled with the Ivy Parial (not provided here), it can only work on the applications with the Angular 13 and latest version of the Angular 12.

The base directive code files should work with the Angular versions 8 - 13. If you need to have the `ngex-accordion` work with previous version, you can update the package.json for the required versions and update the `node_modules` by running the `npm install` for the `ang-content` project. 

## How to Use

1. Import `AccordionModule` to your app.module.ts

    `import { AccordionModule } from '[ngex-accordion-location]';`

2. Import `AccordionDirective` to your component to use the accordion:

    `import { AccordionDirective } from '[ngex-accordion-location]';`

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
## Demo on stackblitz.com 

The [demo sample application](https://angular-ivy-qlt3jr.stackblitz.io) is on the stackblitz.com. You can open the page to see `ngex-accordion` in action. 
