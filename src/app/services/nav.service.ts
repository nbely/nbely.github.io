import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class NavService {
    private fullNavLinks: string[] = ['introduction', 'background', 'work', 'projects', 'contact'];
    public activeLink = new BehaviorSubject<string>('introduction');
    public isTablet = new BehaviorSubject<boolean>(false);
    public navLinks = new BehaviorSubject<string[]>(this.fullNavLinks);

    /**
     * Pushes a new link to navigate to, scrolls the user to to the top of the page, and updates nav links
     * @param  {string} newLink New Link to push to activeLink subject and navigate to
     * @returns void
     */
    pushNewLink(newLink: string): void {
        this.activeLink.next(newLink);
        this.updateNavLinks();
        window.scroll(0,0);
    }

    /**
     * Updates the Nav Links to constrain to three links if the screen width is within the tablet breakpoints
     * @returns void
     */
    updateNavLinks(): void {
        if (this.isTablet.value) {
            let centerIndex = this.fullNavLinks.indexOf(this.activeLink.value);
            if (this.fullNavLinks.length > 3) {
                centerIndex === 0 && centerIndex++;
                centerIndex === (this.fullNavLinks.length - 1) && centerIndex--;
                const tabletNavLinks = this.fullNavLinks.slice(centerIndex - 1, centerIndex + 2);
                this.navLinks.next(tabletNavLinks);
                return;
            }
        }
        if (this.navLinks.value !== this.fullNavLinks) {
            this.navLinks.next(this.fullNavLinks);
        }
    }
}