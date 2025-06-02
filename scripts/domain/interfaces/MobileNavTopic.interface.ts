import { MobileNavMsgEventType } from '../types/MobileNavMsgEvent.type';
import { MobileNavSubscriberInterface } from './MobileNavSubscriber.interface';

export interface MobileNavTopicInterface{

    //
    subscribe(
        observer: MobileNavSubscriberInterface,
    ): void;

    //
    notify(
        messageEventType: MobileNavMsgEventType,
    ): void;
}