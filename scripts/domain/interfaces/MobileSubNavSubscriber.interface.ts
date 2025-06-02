import type { MobileSubNavMsgEventType } from '../types/MobileSubNavMsgEvent.type';

export interface MobileSubNavSubscriberInterface{
    updateSubNav(
        messageEventType: MobileSubNavMsgEventType,
    ): void;
}