import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { CalendarComponent } from 'ionic2-calendar/calendar'
import { MonthViewComponent } from 'ionic2-calendar/monthview'
import { WeekViewComponent } from 'ionic2-calendar/weekview'
import { DayViewComponent } from 'ionic2-calendar/dayview'

import { AppModule } from './app.module'

platformBrowserDynamic().bootstrapModule(AppModule)
