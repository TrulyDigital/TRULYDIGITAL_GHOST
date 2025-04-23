import { MainNavActionEnum } from "../enums/MainNavAction.enum";
import { MainNavMessageEventType } from "../types/MainNavMessageEvent.type";
import { MainNavStateType } from "../types/MainNavState.type";
import { MainNavService } from "./MainNav.service";
import { MainNavStateService } from "./MainNavState.service";

export class CloseButtonService{

    //
    private closeButton: HTMLButtonElement;
    private state: MainNavStateType;

    //
    constructor(
        private readonly mainNavState: MainNavStateService,
        private readonly mainNav: MainNavService,
    ){
        this.state = this.mainNavState.getState();
        this.closeButton = document.getElementById(MainNavActionEnum.CLICK_CLOSE_MOBILE_NAV) as HTMLButtonElement;
        this.closeButton.addEventListener('click', () => {
            const messageEvent: MainNavMessageEventType = {
                action: MainNavActionEnum.CLICK_CLOSE_MOBILE_NAV,
            };
            this.handleClick(messageEvent);
        })
    }

    //
    private handleClick(messageEvent: MainNavMessageEventType): void{
        if(messageEvent.action === MainNavActionEnum.CLICK_CLOSE_MOBILE_NAV){
            this.state = this.mainNavState.getState();
            this.state = {
                isOpen: false,
                subItem1: {
                    ...this.state.subItem1
                }
            };
            this.mainNavState.setState(this.state);
            this.mainNav.notify(messageEvent);
        }
    }
}