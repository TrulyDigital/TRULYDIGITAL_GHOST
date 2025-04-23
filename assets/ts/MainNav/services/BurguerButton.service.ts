import { MainNavStateService } from "./MainNavState.service";
import { MainNavService } from "./MainNav.service";
import { MainNavMessageEventType } from "../types/MainNavMessageEvent.type";
import { MainNavStateType } from "../types/MainNavState.type";
import { MainNavActionEnum } from "../enums/MainNavAction.enum";

export class BurguerButtonService{

    //
    private burguerButton: HTMLButtonElement;
    private state: MainNavStateType;

    //
    constructor(
        private readonly mainNavState: MainNavStateService,
        private readonly mainNav: MainNavService,
    ){
        this.state = this.mainNavState.getState();
        this.burguerButton = document.getElementById(MainNavActionEnum.CLICK_OPEN_MOBILE_NAV) as HTMLButtonElement;
        this.burguerButton.addEventListener('click', () => {
            this.handleClick({
                action: MainNavActionEnum.CLICK_OPEN_MOBILE_NAV,
            });
        });
    }

    //
    private handleClick(messageEvent: MainNavMessageEventType): void{
        if (messageEvent.action === MainNavActionEnum.CLICK_OPEN_MOBILE_NAV) {
            this.state = this.mainNavState.getState();
            this.state = {
                isOpen: true,
                subItem1: {
                    ...this.state.subItem1,
                }
            };
            this.mainNavState.setState(this.state);
            this.mainNav.notify(messageEvent);
        }
    }
}