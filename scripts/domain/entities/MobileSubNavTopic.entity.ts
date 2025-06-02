import { MobileSubNavSubscriberInterface } from '../interfaces/MobileSubNavSubscriber.interface';
import { MobileSubNavType } from '../types/MobileSubNav.type';
import { MobileSubNavTopicInterface } from '../interfaces/MobileSubNavTopic.interface';
import { MobileSubNavMsgEventType } from '../types/MobileSubNavMsgEvent.type';
import { MobileSubNavEventEnum } from '../enums/MobileSubNavEvent.enum';

export class MobileSubNavTopicEntity implements MobileSubNavTopicInterface{

    //
    private mobileSubNavType: MobileSubNavType;
    private observers: MobileSubNavSubscriberInterface[];

    //
    constructor(){
        this.mobileSubNavType = {
            subMenu:[
                {
                    key: MobileSubNavEventEnum.CLICK_NESTJS,
                    isOpen: false,
                }
            ]
        };
        this.observers = [];
    }

    //
    subscribe(
        observer: MobileSubNavSubscriberInterface
    ): void {
        this.observers.push(observer);
    }

    //
    notify(
        messageEventType: MobileSubNavMsgEventType
    ): void {
        for(const observer of this.observers){
            observer.updateSubNav(messageEventType);
        }
    }

    //
    handleClick(
        mobileSubNavMsgEventType: MobileSubNavMsgEventType,
    ): void{
        
        if(mobileSubNavMsgEventType.action === MobileSubNavEventEnum.CLICK_NESTJS){
            const subMenuNestJsList = this.mobileSubNavType.subMenu.filter(subMenu => subMenu.key === MobileSubNavEventEnum.CLICK_NESTJS);
            const subMenuRest = this.mobileSubNavType.subMenu.filter(subMenu => subMenu.key !== MobileSubNavEventEnum.CLICK_NESTJS);
            this.mobileSubNavType.subMenu = [];

            if(subMenuNestJsList.length === 1){
                let subMenu = subMenuNestJsList[0];
                if(subMenu.isOpen){
                    subMenu.isOpen = false;
                }
                else{
                    subMenu.isOpen = true;
                }
                this.mobileSubNavType.subMenu.push(subMenu);
            }

            for(const subMenu of subMenuRest){
                subMenu.isOpen = false;
                this.mobileSubNavType.subMenu.push(subMenu);
            }

            this.notify(mobileSubNavMsgEventType);
        }
    }

    //
    setDefaultState(
        mobileSubNavType: MobileSubNavType
    ): void{
        this.mobileSubNavType = mobileSubNavType;
    }

    //
    getMobileSubNavType(): MobileSubNavType{
        return this.mobileSubNavType;
    }
}
