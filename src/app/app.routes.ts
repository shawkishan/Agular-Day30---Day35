import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Home } from './home/home';
import { About } from './about/about';
import { PageNotFound } from './page-not-found/page-not-found';
import { Profile } from './profile/profile';
import { User } from './user/user';

export const routes: Routes = [
    {path:'login',component:Login},
    {path:'register',component:Register},
    {path:'',component:Home},
    {path:'about',component:About},
    {path:'profile',component:Profile,data:{user:'Yes SS'}},
    {path:'user/:id/:name',component:User},
    {path:'**',component:PageNotFound},



];
