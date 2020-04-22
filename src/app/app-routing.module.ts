import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    loadChildren: './login/login.module#LoginPageModule'
  },
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterPageModule'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardPageModule'
  },
  {
    path: 'details',
    loadChildren: './details/details.module#DetailsPageModule'
  },
  {
    path: 'reports',
    loadChildren: './reports/reports.module#ReportsPageModule'
  },
  {
    path: 'new-task',
    loadChildren: './new-task/new-task.module#NewTaskPageModule'
  },
  {
    path: 'ocr',
    loadChildren: './ocr/ocr.module#OcrPageModule'
  },
  {
    path: 'members',
    loadChildren: './members/members.module#MembersPageModule'
  },
  {
    path: 'new-members',
    loadChildren: './new-members/new-members.module#NewMembersPageModule'
  },
  
  
 
  {
    path: 'mdetails',
    
    loadChildren: './mdetails/mdetails.module#MdetailsPageModule'
  },
  
 

  {
    path: 'notify',
    
    loadChildren: './notify/notify.module#NotifyPageModule' 
  },
  {
    path: 'visualize',
    loadChildren: () => import('./visualize/visualize.module').then( m => m.VisualizePageModule)
 },


  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
