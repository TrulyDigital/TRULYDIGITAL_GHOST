import { MobileNavSubscriberInterface } from '../domain/interfaces/MobileNavSubscriber.interface';
import { MobileNavTopicEntity } from '../domain/entities/MobileNavTopic.entity';
import { MobileSubNavTopicEntity } from '../domain/entities/MobileSubNavTopic.entity';
import { MobileSubNavEventEnum } from '../domain/enums/MobileSubNavEvent.enum';
import { MobileSubNavSubscriberInterface } from '../domain/interfaces/MobileSubNavSubscriber.interface';
import { MobileSubNavMsgEventType } from '../domain/types/MobileSubNavMsgEvent.type';
import { MobileNavMsgEventType } from '../domain/types/MobileNavMsgEvent.type';
import { MobileNavEventEnum } from '../domain/enums/MobileNavEvent.enum';
import { MobileSubNavType } from '../domain/types/MobileSubNav.type';


export class MobileSubNavSubscriberService implements MobileNavSubscriberInterface, MobileSubNavSubscriberInterface{

    //
    private ulNestJs: HTMLUListElement | null;
    private iconSvgNestJs: HTMLOrSVGImageElement | null;
    private mobileNavTopicEntity: MobileNavTopicEntity;
    private mobileSubNavTopicEntity: MobileSubNavTopicEntity;

    constructor(
        mobileNavTopicEntity: MobileNavTopicEntity,
        mobileSubNavTopicEntity: MobileSubNavTopicEntity,
    ){
        this.mobileSubNavTopicEntity = mobileSubNavTopicEntity;
        this.mobileSubNavTopicEntity.subscribe(this);
        
        this.mobileNavTopicEntity = mobileNavTopicEntity;
        this.mobileNavTopicEntity.subscribe(this);
        
        this.ulNestJs = document.getElementById('idMobileSubMenuNestJs') as HTMLUListElement | null;
        this.iconSvgNestJs = document.querySelector('#idMobileNestJs svg') as HTMLOrSVGImageElement | null;
    }

    //
    private openSubMenuNav(
        ulList: HTMLUListElement | null,
        iconSvg: HTMLOrSVGImageElement | null,
    ): void{
        if(ulList && iconSvg){
            ulList.classList.remove('mobile-nav__sub-menus--close');
            ulList.classList.add('mobile-nav__sub-menus--open');
            iconSvg.classList.add('svg__down-rotate-open');
        }
    }

    //
    private closeSubMenuNav(
        ulList: HTMLUListElement | null,
        iconSvg: HTMLOrSVGImageElement | null,
    ): void{
        if(ulList && iconSvg){
            ulList.classList.remove('mobile-nav__sub-menus--open');
            ulList.classList.add('mobile-nav__sub-menus--close');
            iconSvg.classList.remove('svg__down-rotate-open');
        }
    }

    //
    updateSubNav(
        messageEventType: MobileSubNavMsgEventType
    ): void {
        if(messageEventType.action === MobileSubNavEventEnum.CLICK_NESTJS){
            const subMenuNestJs = this.mobileSubNavTopicEntity.getMobileSubNavType().subMenu.filter(item => item.key === MobileSubNavEventEnum.CLICK_NESTJS);
            if(subMenuNestJs.length === 1){
                if(subMenuNestJs[0].isOpen){
                    this.openSubMenuNav(
                        this.ulNestJs,
                        this.iconSvgNestJs,
                    );
                }
                else{
                    this.closeSubMenuNav(
                        this.ulNestJs,
                        this.iconSvgNestJs,
                    );
                }
            }
        }
    }

    //
    updateNav(
        messageEventType: MobileNavMsgEventType
    ): void {
        if(messageEventType.action === MobileNavEventEnum.CLICK_BURGUER_PRIMARY){
            let subMenu = this.mobileSubNavTopicEntity.getMobileSubNavType().subMenu;
            let newMobileSubNavType: MobileSubNavType = { subMenu: [] };
            for(const item of subMenu){
                newMobileSubNavType.subMenu.push({
                    key: item.key,
                    isOpen: false,
                });
            };
            this.mobileSubNavTopicEntity.setDefaultState(newMobileSubNavType);
            this.closeSubMenuNav(
                this.ulNestJs,
                this.iconSvgNestJs,
            );
        }
    }
}