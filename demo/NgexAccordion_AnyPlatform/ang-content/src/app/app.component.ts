import { Component, ViewChild, ElementRef, OnInit, Renderer2 } from '@angular/core';
//import { trigger, style, animate, transition } from '@angular/animations';
import { AccordionDirective } from 'ngex-accordion'; 

@Component({    
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {    
    isOpenAll: boolean = false;
    documentList: Array<any> = [];

    @ViewChild(AccordionDirective, { static: true }) accordion!: AccordionDirective;

    constructor() { }

    ngOnInit() {
        //Sample data.
        this.documentList = [
            {
                key: 'Angular Framework',
                value: [{
                    docName: 'Getting started with Angular',
                    publisher: 'Google'
                },
                {
                    docName: 'Tours of Heroes app and Tutorial',
                    publisher: 'Google'
                },
                {
                    docName: 'Learn Angular from scratch step by step',
                    publisher: 'angular-templates.io'
                }]
            },
            {
                key: 'TypeScript and JavaScript',
                value: [{
                    docName: 'TypeScript Tutorial',
                    publisher: 'typescripttutorial.net'
                },
                {
                    docName: 'JavaScript basics - Learn web development',
                    publisher: 'MDN'
                },]
            },
            {
                key: 'ASP.NET Core MVC',
                value: [{
                    docName: 'Get started with ASP.NET Core MVC',
                    publisher: 'Microsoft'
                },
                {
                    docName: 'ASP.Net Core MVC Tutorial',
                    publisher: 'Code Maze'
                },]
            },
            {
                key: 'SQL Server Database',
                value: [{
                    docName: 'Tutorials for SQL Server',
                    publisher: 'Microsoft'
                },
                {
                    docName: 'SQL Server Tutorial',
                    publisher: 'sqlservertutorial.net'
                },]
            }
        ];
        
    }

    getDocument(docItem: any) {
        window.alert('You selected document "' + docItem.docName + '".');
    }
}
