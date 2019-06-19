import { OnInit } from '@angular/core';
import { CustomLibService } from './custom-lib.service';
interface dataTypes {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}
export declare class CustomLibComponent implements OnInit {
    private libService;
    values: dataTypes[];
    constructor(libService: CustomLibService);
    ngOnInit(): void;
}
export {};
