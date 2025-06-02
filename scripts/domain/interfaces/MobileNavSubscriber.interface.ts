import { MobileNavMsgEventType } from '../types/MobileNavMsgEvent.type';

export interface MobileNavSubscriberInterface{
    updateNav(
        messageEventType: MobileNavMsgEventType,
    ): void;
}