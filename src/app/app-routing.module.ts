import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServersComponent } from './servers/servers.component'
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'servers', component: ServersComponent  },
  { path: 'user', component: UsersComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
