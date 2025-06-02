import { MobileNavMsgEventType } from '../domain/types/MobileNavMsgEvent.type';
import { MobileNavTopicEntity } from '../domain/entities/MobileNavTopic.entity';
import { MobileNavEventEnum } from '../domain/enums/MobileNavEvent.enum';

export class BurguerPrimaryPublisherService {

    //
    private button: HTMLButtonElement | null;
    private mobileNavTopicEntity: MobileNavTopicEntity;

    constructor(
        mobileNavTopicEntity: MobileNavTopicEntity,
    ) { 
        this.button = document.getElementById('idBurguerPrimaryButton') as HTMLButtonElement | null;
        this.mobileNavTopicEntity = mobileNavTopicEntity;

        if(this.button){
            this.button.addEventListener('click', () => {
                this.handleClick({
                    action: MobileNavEventEnum.CLICK_BURGUER_PRIMARY,
                })
            });
        }
    }

    //
    private handleClick(
        messageEventType: MobileNavMsgEventType,
    ): void{
        if(messageEventType.action === MobileNavEventEnum.CLICK_BURGUER_PRIMARY){
            this.mobileNavTopicEntity.handleClick();
        }
    }
}