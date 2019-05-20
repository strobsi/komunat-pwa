import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'komunat', loadChildren: './komunat/komunat.module#KomunatPageModule' },
  { path: 'matches', loadChildren: './matches/matches.module#MatchesPageModule' },
  { path: 'share', loadChildren: './share/share.module#SharePageModule' },
  { path: 'intermediate', loadChildren: './intermediate/intermediate.module#IntermediatePageModule' },
  { path: 'content', loadChildren: './content/content.module#ContentPageModule' },
  { path: 'dsgvo', loadChildren: './dsgvo/dsgvo.module#DsgvoPageModule' },
  { path: 'impressum', loadChildren: './impressum/impressum.module#ImpressumPageModule' },
  { path: 'cdetail', loadChildren: './cdetail/cdetail.module#CdetailPageModule' },
  { path: 'loading', loadChildren: './loading/loading.module#LoadingPageModule' },
  { path: 'feedback', loadChildren: './feedback/feedback.module#FeedbackPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
