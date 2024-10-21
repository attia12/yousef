

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BodyComponent } from './components/body/body.component';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';
import { MatMenuModule } from '@angular/material/menu';
import { ProductsComponent } from './components/products/products.component';
import { ListsComponent } from './components/lists/lists.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoAngularMaterialModule } from '../../DemoAngularMaterialModule';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CdkDrag, CdkDragDrop, CdkDropList, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Chart } from 'chart.js';
import { ChatComponent } from './components/chat/chat.component';
import {MatTooltip} from "@angular/material/tooltip";






@NgModule({
  declarations: [
    DashboardComponent,
    BodyComponent,
    SidenavComponent,
    HeaderComponent,
    ProductsComponent,
    ChatComponent,
    ListsComponent,

  ],
    imports: [
        CommonModule,
        EmployeeRoutingModule,
        RouterModule,
        OverlayModule,
        CdkMenuModule,
        MatMenuModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        DragDropModule,
        DemoAngularMaterialModule,
        MatTooltip


    ]
})
export class EmployeeModule { }
