import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
    TuiButton,
    TuiDataList,
    TuiDropdown,
} from '@taiga-ui/core';
import {
    TuiBadge,
    TuiChevron,
    TuiFade,
} from '@taiga-ui/kit';
import {
    TuiNavigation,
    TuiAsideComponent,
    TuiHeaderComponent,
    TuiLogoComponent,
    TuiMainComponent,
    TuiAsideGroupComponent,
    TuiAsideItemDirective,
    TuiSubheaderCompactComponent,
} from '@taiga-ui/layout';

@Component({
    selector: 'app-navigation-full',
    standalone: true,
    imports: [
        NgTemplateOutlet,
        RouterLink,
        RouterOutlet,
        TuiBadge,
        TuiButton,
        TuiChevron,
        TuiDataList,
        TuiDropdown,
        TuiFade,
        TuiNavigation,
        TuiAsideComponent,
        TuiHeaderComponent,
        TuiLogoComponent,
        TuiMainComponent,
        TuiAsideGroupComponent,
        TuiAsideItemDirective,
        TuiSubheaderCompactComponent,
    ],
    templateUrl: './navigation-full.component.html',
    styleUrl: './navigation-full.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationFullComponent {
    protected readonly expanded = signal(true);

    protected handleToggle(): void {
        this.expanded.update((e) => !e);
    }

    protected open1 = true;
    protected open2 = true;
}
