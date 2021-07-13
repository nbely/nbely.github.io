import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AboutComponent } from "./about.component";
import { EducationComponent } from "./education/education.component";
import { IntroductionComponent } from "./introduction/introduction.component";
import { ResumeComponent } from "./resume/resume.component";

const routes: Routes = [
    { 
        path: '', 
        component: AboutComponent, 
        children: [
            { path: 'introduction', component: IntroductionComponent },
            { path: 'education', component: EducationComponent },
            { path: 'resume', component: ResumeComponent }
        ] 
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AboutRoutingModule {}