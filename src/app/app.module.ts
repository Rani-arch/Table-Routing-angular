import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {
  RouterModule,
  Routes,
  CanActivate,
  NavigationEnd,
} from '@angular/router';
import { abcComponent } from '../abc/abc.component';
import { TableComponent } from '../table/table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PostComponent } from './post/post.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { ChartComponent } from './chart/chart.component';
import { SettingComponent } from './setting/setting.component';

// import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts';
import { Location } from '@angular/common';
import { BarchartComponent } from './barchart/barchart.component';
import { GraphComponent } from './graph/graph.component';
// import { PieComponent } from './pie/pie.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    // NgxChartsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        // {
        //   path: '',
        //   pathMatch: 'full',
        //   redirectTo: '',
        // },

        {
          path: 'table',
          component: TableComponent,
          canActivate: [AuthGuard],
          // resolve: { onSameUrlNavigation: 'reload' },
        },
        {
          path: 'poster',
          component: PostComponent,
          canActivate: [AuthGuard],
        },
        {
          path: 'explore',
          component: abcComponent,
        },
        {
          path: 'chart',
          component: ChartComponent,
        },
        {
          path: 'setting',
          component: SettingComponent,
        },
        // {
        //   path: 'pie',
        //   component: PieComponent,
        // },
        {
          path: 'graph',
          component: GraphComponent,
        },
        {
          path: 'barchart',
          component: BarchartComponent,
        },
      ],
      { onSameUrlNavigation: 'reload' }
    ),
  ],
  declarations: [
    AppComponent,
    abcComponent,
    TableComponent,
    PostComponent,
    ChartComponent,
    SettingComponent,
    // PieComponent,
    BarchartComponent,
    GraphComponent,
  ],
  providers: [AuthGuard, AuthService, Location],
  bootstrap: [AppComponent],
})
export class AppModule {}
