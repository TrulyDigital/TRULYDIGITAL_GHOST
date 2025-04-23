import { MainNavMessageEventType } from "../types/MainNavMessageEvent.type";
import { MainNavStateType } from "../types/MainNavState.type";
import { MainNavService } from "./MainNav.service";
import { MainNavObserverInterface } from "../interfaces/MainNavObserver.interface";
import { MainNavStateService } from "./MainNavState.service";
import { MainNavActionEnum } from "../enums/MainNavAction.enum";

export class MobileNavSubMenuItemService implements MainNavObserverInterface{

    //
    private state: MainNavStateType;
    private subMenuItem1: HTMLDivElement; // Todos los sub-menus (NestJS)

    //
    constructor(
        private readonly mainNavState: MainNavStateService,
        private readonly mainNav: MainNavService,
    ){
        this.state = this.mainNavState.getState();

        const cssQuerySubMenuItem1 = `.header__nav-mobile > ul > li > div#${MainNavActionEnum.OBSERVER_SUB_MENU_ITEM_1}`;
        this.subMenuItem1 = document.querySelector(cssQuerySubMenuItem1) as HTMLDivElement;

        this.mainNav.subscribe(this);
    }

    //
    private hiddenSubMenu(div: HTMLDivElement | null): void{
        if(div !== null){
            div.classList.add('nav__submenu-container--hidden');
            div.classList.remove('nav_submenu-container--visible');
        }
    }

    private visibleSubMenu(div: HTMLDivElement | null): void{
        if(div !== null){
            div.classList.add('nav_submenu-container--visible');
            div.classList.remove('nav__submenu-container--hidden');
        }
    }

    update(messageEvent: MainNavMessageEventType): void{

        this.state = this.mainNavState.getState();

        if(messageEvent.action === MainNavActionEnum.CLICK_MENU_ITEM_1){
            if(this.state.subItem1.isOpen){
                this.visibleSubMenu(this.subMenuItem1);
            }
            else{
                this.hiddenSubMenu(this.subMenuItem1);
            }
        }

        if(messageEvent.action === MainNavActionEnum.CLICK_CLOSE_MOBILE_NAV){
            this.hiddenSubMenu(this.subMenuItem1);
        }
    }
}