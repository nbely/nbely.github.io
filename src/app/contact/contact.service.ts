import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class ContactService {
    private api = 'https://mailthis.to/nicholas0781';

    constructor(private http: HttpClient) {}

    postMessage(input: any) {
        return this.http.post(this.api, input, { responseType: 'text' }).pipe(
            map(
                (response: any) => {
                    if (response) {
                        return response;
                    }
                },
                (error: any) => {
                    return error;
                }
            )
        );
    }
}