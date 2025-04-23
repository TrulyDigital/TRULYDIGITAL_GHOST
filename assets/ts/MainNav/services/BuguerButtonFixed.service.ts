import { MainNavStateService } from "./MainNavState.service";
import { MainNavService } from "./MainNav.service";
import { MainNavMessageEventType } from "../types/MainNavMessageEvent.type";
import { MainNavStateType } from "../types/MainNavState.type";
import { MainNavActionEnum } from "../enums/MainNavAction.enum";

export class BurguerButtonFixedService{

    //
    private burguer_button: HTMLButtonElement;
    private state: MainNavStateType;

    //
    constructor(
        private readonly nav_bar_state_service: MainNavStateService,
        private readonly nav_bar_service: MainNavService,
    ){
        this.state = this.nav_bar_state_service.getState();
        this.burguer_button = document.getElementById(MainNavActionEnum.CLICK_OPEN_MOBILE_NAV_FIXED) as HTMLButtonElement;
        window.addEventListener('scroll', () => {
            this.handle_scroll(window.scrollY);
        })
        this.burguer_button.addEventListener('click', () => {
            this.handle_click({
                action: MainNavActionEnum.CLICK_OPEN_MOBILE_NAV_FIXED,
            });
        });
    }

    //
    private handle_scroll(scroll_y: number): void{
        if(scroll_y > 0){
            this.burguer_button.classList.remove('post-article__float-nav-mobile--hidden');
            this.burguer_button.classList.add('post-article__float-nav-mobile--visible');
        }
        else{
            this.burguer_button.classList.remove('post-article__float-nav-mobile--visible');
            this.burguer_button.classList.add('post-article__float-nav-mobile--hidden');
        }
    }

    //
    private handle_click(message_event: MainNavMessageEventType): void{
        if (message_event.action === MainNavActionEnum.CLICK_OPEN_MOBILE_NAV_FIXED) {
            this.state = this.nav_bar_state_service.getState();
            this.state = {
                isOpen: true,
                subItem1: {
                    ...this.state.subItem1,
                }
            };
            this.nav_bar_state_service.setState(this.state);
            this.nav_bar_service.notify(message_event);
        }
    }
}