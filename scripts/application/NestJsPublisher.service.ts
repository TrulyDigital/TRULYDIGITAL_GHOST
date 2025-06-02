import { MobileSubNavMsgEventType } from "../domain/types/MobileSubNavMsgEvent.type";
import { MobileSubNavTopicEntity } from "../domain/entities/MobileSubNavTopic.entity";
import { MobileSubNavEventEnum } from "../domain/enums/MobileSubNavEvent.enum";

export class NestJsPublisherService{

    //
    private button: HTMLButtonElement | null;
    private mobileSubNavTopicEntity: MobileSubNavTopicEntity;

    //
    constructor(
        mobileSubNavTopicEntity: MobileSubNavTopicEntity,
    ){
        this.mobileSubNavTopicEntity = mobileSubNavTopicEntity;
        this.button = document.getElementById('idMobileNestJs') as HTMLButtonElement | null;
        if(this.button){
            this.button.addEventListener('click', (_: MouseEvent) => {
                this.handleClick({
                    action: MobileSubNavEventEnum.CLICK_NESTJS,
                });
            });
        }
    }

    //
    private handleClick(
        messageEventType: MobileSubNavMsgEventType,
    ): void{
        if(messageEventType.action === MobileSubNavEventEnum.CLICK_NESTJS){
            this.mobileSubNavTopicEntity.handleClick(messageEventType);
        }
    }
}