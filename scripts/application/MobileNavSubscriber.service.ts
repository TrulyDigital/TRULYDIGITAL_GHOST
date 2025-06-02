import { MobileNavTopicEntity } from '../domain/entities/MobileNavTopic.entity';
import { MobileNavEventEnum } from '../domain/enums/MobileNavEvent.enum';
import { MobileNavSubscriberInterface } from '../domain/interfaces/MobileNavSubscriber.interface';
import { MobileNavMsgEventType } from '../domain/types/MobileNavMsgEvent.type';

export class MobileNavSubscriberService implements MobileNavSubscriberInterface{

    private nav: HTMLElement | null;
    private mobileNavTopicEntity: MobileNavTopicEntity;

    constructor(
        mobileNavTopicEntity: MobileNavTopicEntity,
    ){
        this.nav = document.getElementById('idMobileNav');
        this.mobileNavTopicEntity = mobileNavTopicEntity;
        this.mobileNavTopicEntity.subscribe(this);
    }

    private openMobileNav(): void{
        if(this.nav){
            this.nav.classList.remove('layout__mobile-nav--hidden');
            this.nav.classList.add('layout__mobile-nav--visible');
        }
    }

    private closeMobileNav(): void{
        if(this.nav){
            this.nav.classList.remove('layout__mobile-nav--visible');
            this.nav.classList.add('layout__mobile-nav--hidden');
        }
    }

    updateNav(
        messageEventType: MobileNavMsgEventType
    ): void {
        if(messageEventType.action === MobileNavEventEnum.CLICK_BURGUER_PRIMARY){
            if(this.mobileNavTopicEntity.getMobileNav().isOpen){
                this.openMobileNav();
            }
            else{
                this.closeMobileNav();
            }
        }
    }

}