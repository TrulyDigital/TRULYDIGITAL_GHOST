import { MainNavMessageEventType } from "../types/MainNavMessageEvent.type";

export interface MainNavObserverInterface {
    update: (messageEvent: MainNavMessageEventType) => void;
}