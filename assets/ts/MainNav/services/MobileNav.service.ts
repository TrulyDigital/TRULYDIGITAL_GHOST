import { MainNavStateService } from "./MainNavState.service";
import { MainNavService } from "./MainNav.service";
import { MainNavMessageEventType } from "../types/MainNavMessageEvent.type";
import { MainNavObserverInterface } from "../interfaces/MainNavObserver.interface";
import { MainNavStateType } from "../types/MainNavState.type";
import { MainNavActionEnum } from "../enums/MainNavAction.enum";

export class MobileNavService implements MainNavObserverInterface{

    //
    private nav: HTMLDivElement;
    private state: MainNavStateType;

    //
    constructor(
        private readonly mainNavState: MainNavStateService,
        private readonly mainNav: MainNavService,
    ){
        this.state = this.mainNavState.getState();
        this.nav = document.getElementById(MainNavActionEnum.OBSERVER_NAV_MOBILE) as HTMLDivElement;
        this.mainNav.subscribe(this);
    }

    //
    update(messageEvent: MainNavMessageEventType): void{
        if (messageEvent.action === MainNavActionEnum.CLICK_OPEN_MOBILE_NAV || messageEvent.action === MainNavActionEnum.CLICK_OPEN_MOBILE_NAV_FIXED) {
            this.state = this.mainNavState.getState();
            if (this.state.isOpen) {
                this.mobileNavExposed();
            }
        }

        if (messageEvent.action === MainNavActionEnum.CLICK_CLOSE_MOBILE_NAV) {
            this.state = this.mainNavState.getState();
            if (!this.state.isOpen) {
                this.navMobileHidden();
            }
        }
    }

    //
    mobileNavExposed(): void{
        this.nav.classList.remove('header__nav-mobile-container--hidden');
        this.nav.classList.add('header__nav-mobile-container--visible');
    }

    //
    navMobileHidden(): void{
        this.nav.classList.remove('header__nav-mobile-container--visible');
        this.nav.classList.add('header__nav-mobile-container--hidden');
    }
}