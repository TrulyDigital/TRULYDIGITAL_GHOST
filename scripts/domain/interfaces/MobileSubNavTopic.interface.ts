import { MobileSubNavSubscriberInterface } from './MobileSubNavSubscriber.interface';
import { MobileSubNavMsgEventType } from '../types/MobileSubNavMsgEvent.type';

export interface MobileSubNavTopicInterface{

    //
    subscribe(
        observer: MobileSubNavSubscriberInterface,
    ): void;

    //
    notify(
        messageEventType: MobileSubNavMsgEventType,
    ): void;
}