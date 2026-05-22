import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
    TuiButton,
    TuiDataList,
    TuiDropdown,
    TuiLink,
} from '@taiga-ui/core';
import {
    TuiBadge,
    TuiBreadcrumbs,
    TuiChevron,
    TuiFade,
    TuiTabs,
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
        TuiBreadcrumbs,
        TuiButton,
        TuiChevron,
        TuiDataList,
        TuiDropdown,
        TuiFade,
        TuiLink,
        TuiNavigation,
        TuiAsideComponent,
        TuiHeaderComponent,
        TuiLogoComponent,
        TuiMainComponent,
        TuiAsideGroupComponent,
        TuiAsideItemDirective,
        TuiSubheaderCompactComponent,
        TuiTabs,
    ],
    templateUrl: './navigation-full.component.html',
    styleUrl: './navigation-full.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationFullComponent {
    protected readonly expanded = signal(false);
    protected readonly breadcrumbs = ['หน้าหลัก'];

    protected handleToggle(): void {
        this.expanded.update((e) => !e);
    }
}
