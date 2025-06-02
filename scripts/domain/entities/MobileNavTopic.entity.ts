import { MobileNavEventEnum } from "../enums/MobileNavEvent.enum";
import { MobileNavSubscriberInterface } from "../interfaces/MobileNavSubscriber.interface";
import { MobileNavTopicInterface } from "../interfaces/MobileNavTopic.interface";
import { MobileNavType } from "../types/MobileNav.type";
import { MobileNavMsgEventType } from "../types/MobileNavMsgEvent.type";

export class MobileNavTopicEntity implements MobileNavTopicInterface{
    
    //
    private mobileNavType: MobileNavType;
    private observers: MobileNavSubscriberInterface[];

    //
    constructor(){
        this.mobileNavType = {
            isOpen: false,
        }
        this.observers = [];
    }

    //
    subscribe(
        observer: MobileNavSubscriberInterface
    ): void {
        this.observers.push(observer);
    }

    //
    notify(
        messageEventType: MobileNavMsgEventType
    ): void {
        for(const observer of this.observers){
            observer.updateNav(messageEventType);
        }
    }

    //
    handleClick(): void{
        if(this.mobileNavType.isOpen){
            this.mobileNavType = {
                isOpen: false,
            }
        }
        else{
            this.mobileNavType = {
                isOpen: true,
            }
        }

        this.notify({
            action: MobileNavEventEnum.CLICK_BURGUER_PRIMARY
        });
    }

    //
    getMobileNav(): MobileNavType{
        return this.mobileNavType;
    }
}