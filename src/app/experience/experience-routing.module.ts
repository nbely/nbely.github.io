import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ExperienceComponent } from "./experience.component";
import { ProjectsComponent } from "./projects/projects.component";
import { VolunteerComponent } from "./volunteer/volunteer.component";
import { WorkComponent } from "./work/work.component";

const routes: Routes = [
    { 
        path: '', 
        component: ExperienceComponent,
        children: [
            { path: 'projects', component: ProjectsComponent },
            { path: 'volunteer', component: VolunteerComponent },
            { path: 'work', component: WorkComponent }
        ]  
      }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExperienceRoutingModule {}