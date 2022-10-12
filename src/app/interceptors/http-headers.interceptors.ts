import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {
    constructor() {}

    // const url = 'https://rawg-video-games-database.p.rapidapi.com/games'

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'X-RapidAPI-Key': '2e222407b9msh7c1f6ac754bc3bbp143742jsn71e7d77ef952',
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
            },
            setParams: {
                key: '2e222407b9msh7c1f6ac754bc3bbp143742jsn71e7d77ef952'
            }
        });
        return next.handle(req);
    }
}