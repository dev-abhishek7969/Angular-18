import { Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-bindings/data-binding.component';
import { StructuralDirComponent } from './components/directive/structural-dir/structural-dir/structural-dir.component';
import { AttributeDirComponent } from './components/directive/attribute-dir/attribute-dir.component';
import { IfelseComponent } from './components/controlFlow/ifelse/ifelse.component';
import { ForComponent } from './components/controlFlow/for/for.component';

export const routes: Routes = [
    {
        path:'data-binding',
        component:DataBindingComponent

    },
    {
        path:'structural-dir',
        component:StructuralDirComponent
    },
    {
        path:'attribute-dir',
        component:AttributeDirComponent
    },
    {
        path:'app-ifelse',
        component:IfelseComponent
    },
    {
        path:'app-for',
        component:ForComponent
    }
];
