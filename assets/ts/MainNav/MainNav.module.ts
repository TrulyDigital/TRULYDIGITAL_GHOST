import { BurguerButtonFixedService } from "./services/BuguerButtonFixed.service";
import { BurguerButtonService } from "./services/BurguerButton.service";
import { CloseButtonService } from "./services/CloseButton.service";
import { MainNavService } from "./services/MainNav.service";
import { MainNavStateService } from "./services/MainNavState.service";
import { MobileNavService } from "./services/MobileNav.service";
import { MobileNavMenuItemService } from "./services/MobileNavMenuItem.service";
import { MobileNavSubMenuItemService } from "./services/MobileNavSubItem.service";

export class MainNavModule{

    //
    constructor(){
        const nav_bar_state_service = new MainNavStateService();
        const nav_bar_service = new MainNavService();
        new BurguerButtonService(
            nav_bar_state_service,
            nav_bar_service,
        );
        /*
        new BurguerButtonFixedService(
            nav_bar_state_service,
            nav_bar_service,
        );
        */
        new CloseButtonService(
            nav_bar_state_service,
            nav_bar_service,
        );
        new MobileNavService(
            nav_bar_state_service,
            nav_bar_service,
        );
        new MobileNavMenuItemService(
            nav_bar_state_service,
            nav_bar_service,
        );
        new MobileNavSubMenuItemService(
            nav_bar_state_service,
            nav_bar_service,
        );
    }
}