import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ExperienceComponent } from "./experience.component";
import { ProjectsComponent } from "./projects/projects.component";
import { WorkComponent } from "./work/work.component";

const routes: Routes = [
    { 
        path: '', 
        component: ExperienceComponent,
        children: [
            { path: 'work', component: WorkComponent },
            { path: 'projects', component: ProjectsComponent }
        ]  
      }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExperienceRoutingModule {}