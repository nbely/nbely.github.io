import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BackgroundComponent } from "./background/background.component";
import { ContactComponent } from "./contact/contact.component";
import { IntroductionComponent } from "./introduction/introduction.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ViewsComponent } from "./views.component";
import { WorkComponent } from ".//work/work.component";

const routes: Routes = [
    { 
        path: '', 
        component: ViewsComponent, 
        children: [
            { path: '', redirectTo: '/introduction', pathMatch: 'full' },
            { path: 'introduction', component: IntroductionComponent },
            { path: 'background', component: BackgroundComponent },
            { path: 'work', component: WorkComponent },
            { path: 'projects', component: ProjectsComponent },
            { path: 'contact', component: ContactComponent }
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewsRoutingModule {}