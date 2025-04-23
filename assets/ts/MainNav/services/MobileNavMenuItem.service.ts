import { MainNavMessageEventType } from "../types/MainNavMessageEvent.type";
import { MainNavStateType } from "../types/MainNavState.type";
import { MainNavService } from "./MainNav.service";
import { MainNavObserverInterface } from "../interfaces/MainNavObserver.interface";
import { MainNavStateService } from "./MainNavState.service";
import { MainNavActionEnum } from "../enums/MainNavAction.enum";

export class MobileNavMenuItemService implements MainNavObserverInterface{

    //
    private state: MainNavStateType;
    private menuItem1: HTMLDivElement; // Menu principal NestJS

    //
    constructor(
        private readonly mainNavState: MainNavStateService,
        private readonly mainNav: MainNavService,
    ){
        this.state = this.mainNavState.getState();

        const cssQueryMenuItem1 = `.header__nav-mobile > ul > li > div#${MainNavActionEnum.CLICK_MENU_ITEM_1}`;
        this.menuItem1 = document.querySelector(cssQueryMenuItem1) as HTMLDivElement;
        this.menuItem1.addEventListener('click', () => {
            this.handleClick({
                action: MainNavActionEnum.CLICK_MENU_ITEM_1,
            })
        });

        this.mainNav.subscribe(this);
    }

    //
    private rotateIcon(img: HTMLImageElement | null): void {
        if (img !== null) {
            img.classList.add('nav__menu-inner-icon--rotate-90');
        }
    }

    //
    private defaultIcon(img: HTMLImageElement | null): void {
        if (img !== null) {
            img.classList.remove('nav__menu-inner-icon--rotate-90');
        }
    }

    // logic for menu plegables
    private setStateMenuItem1OpenAndClose(): void{
        this.state = this.mainNavState.getState();
        if(this.state.subItem1.isOpen){
            this.state = {
                ...this.state,
                subItem1: {
                    isOpen: false,
                    name: 'NestJS'
                },
            };
        }
        else{
            this.state = {
                ...this.state,
                subItem1: {
                    isOpen: true,
                    name: 'NestJS'
                },
            };
        }
        this.mainNavState.setState(this.state);
    }

    //
    private handleMenuItem1(messageEvent: MainNavMessageEventType): void {
        this.setStateMenuItem1OpenAndClose();
        this.mainNavState.setState({
            ...this.mainNavState.getState(),
        });
        this.mainNav.notify(messageEvent);
    }

    //
    update(messageEvent: MainNavMessageEventType): void {

        if (messageEvent.action === MainNavActionEnum.CLICK_MENU_ITEM_1) {
            this.state = this.mainNavState.getState();
            const img_plegables = this.menuItem1.querySelector('img');
            if (this.state.subItem1.isOpen) {
                this.rotateIcon(img_plegables);
            }
        }

        if(messageEvent.action === MainNavActionEnum.CLICK_CLOSE_MOBILE_NAV){
            const img_plegables = this.menuItem1.querySelector('img');
            this.defaultIcon(img_plegables);
        }
    }

    //
    private handleClick(messageEvent: MainNavMessageEventType): void {
        if (messageEvent.action === MainNavActionEnum.CLICK_MENU_ITEM_1) {
            this.handleMenuItem1(messageEvent);
        }
    }

}