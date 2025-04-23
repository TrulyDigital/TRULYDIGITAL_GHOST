import { MainNavStateType } from "../types/MainNavState.type";

export class MainNavStateService {

    //
    private mainNavState: MainNavStateType;

    //
    constructor(){
        this.mainNavState = {
            isOpen: false,
            subItem1: {
                isOpen: false,
                name: 'NestJS'
            }
        }
    }

    //
    setState(newState: MainNavStateType): void {
        this.mainNavState = newState;
    }

    //
    getState(): MainNavStateType{
        return this.mainNavState;
    }
}