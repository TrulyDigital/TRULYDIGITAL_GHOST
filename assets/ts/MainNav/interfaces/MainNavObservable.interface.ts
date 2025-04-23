import { MainNavMessageEventType } from "../types/MainNavMessageEvent.type";
import { MainNavObserverInterface } from "./MainNavObserver.interface";

export interface MainNavObservableInterface {
    subscribe: (observer: MainNavObserverInterface) => void;
    notify: (messageEvent: MainNavMessageEventType) => void;
}