import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root', 
})
export class SearchBarService{
    public isServiceVisible : BehaviorSubject<boolean> =new BehaviorSubject(false);
}