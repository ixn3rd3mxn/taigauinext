import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal } from '@angular/core';
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
    ],
    templateUrl: './navigation-full.component.html',
    styleUrl: './navigation-full.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
const DAYS = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'];
const MONTHS = [
    'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
    'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม',
];

function getCurrentShiftName(date: Date): string {
    const total = date.getHours() * 60 + date.getMinutes();
    if (total >= 8 * 60 + 30 && total < 16 * 60 + 30) return 'เช้า';
    if (total >= 16 * 60 + 30 || total < 30) return 'บ่าย';
    return 'ดึก';
}

export class NavigationFullComponent {
    private readonly destroyRef = inject(DestroyRef);
    protected readonly expanded = signal(true);

    private readonly now = signal(new Date());

    constructor() {
        // Update time every second
        const interval = setInterval(() => {
            this.now.set(new Date());
        }, 1000);
        this.destroyRef.onDestroy(() => clearInterval(interval));
    }

    protected readonly timeString = computed(() =>
        this.now().toLocaleTimeString('th-TH', {hour12: false}),
    );

    protected readonly dateString = computed(() => {
        const d = this.now();
        const day = DAYS[d.getDay()];
        const date = d.getDate();
        const month = MONTHS[d.getMonth()];
        const year = d.getFullYear() + 543;
        return `วัน${day}ที่ ${date} ${month} ${year}`;
    });

    protected readonly shift = computed(() => `เวร${getCurrentShiftName(this.now())}`);

    protected handleToggle(): void {
        this.expanded.update((e) => !e);
    }

    protected open1 = true;
    protected open2 = true;
}
