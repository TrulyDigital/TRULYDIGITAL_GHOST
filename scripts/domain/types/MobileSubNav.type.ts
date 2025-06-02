import { MobileSubNavEventEnum } from "../enums/MobileSubNavEvent.enum";

type SubMenu = {
    key: MobileSubNavEventEnum;
    isOpen: boolean;
}

export type MobileSubNavType = {
    subMenu: SubMenu[];
}