import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import('./components/home/home.module').then(mod => mod.HomeModule)
    },
    {
        path: 'todo-list',
        loadChildren: () => import('./components/todo-list/todo-list.module').then(mod => mod.TodoListModule)
    },
    {
        path: 'timesheet-list',
        loadChildren: () => import('./components/timesheet/timesheet.module').then(mod => mod.TimesheetModule)
    },
    {
        path: 'timesheet-detail',
        loadChildren: () => import('./components/timesheet-detail/timesheet-detail.module').then(mod => mod.TimesheetDetailModule)
    },
    {
        path: 'todo-detail',
        loadChildren: () => import('./components/todo-detail/todo-detail.module').then(mod => mod.TodoDetailModule)
    },
    {
        path: 'payroll',
        loadChildren: () => import('./components/payroll/payroll.module').then(mod => mod.PayrollModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: []
})

export class AppRouting { }