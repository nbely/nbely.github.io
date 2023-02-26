import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class NavService {
    public navLinks = new Subject<string[] | null>();
    public activeLink = new BehaviorSubject<string | null>(null);
    public isCollapsed = new BehaviorSubject<boolean>(false);

    constructor() { 
        // Empty Constructor
    }

    pushNewLink(link: string | null) {
        this.activeLink.next(link);
        window.scroll(0,0);
    }
}