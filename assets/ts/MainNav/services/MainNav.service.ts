import { MainNavObservableInterface } from '../interfaces/MainNavObservable.interface';
import { MainNavMessageEventType } from '../types/MainNavMessageEvent.type';
import { MainNavObserverInterface } from '../interfaces/MainNavObserver.interface';

export class MainNavService implements MainNavObservableInterface{

    //
    private observers: MainNavObserverInterface[];

    //
    constructor(){
        this.observers = [];
    }

    //
    subscribe(observer: MainNavObserverInterface): void{
        this.observers.push(observer);
    }

    //
    notify(messageEvent: MainNavMessageEventType): void{
        this.observers.forEach(observer => observer.update(messageEvent));
    }
}