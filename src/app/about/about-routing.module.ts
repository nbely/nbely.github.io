import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AboutComponent } from "./about.component";
import { backgroundComponent } from "./background/background.component";
import { IntroductionComponent } from "./introduction/introduction.component";

const routes: Routes = [
    { 
        path: '', 
        component: AboutComponent, 
        children: [
            { path: 'introduction', component: IntroductionComponent },
            { path: 'background', component: backgroundComponent },
        ] 
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AboutRoutingModule {}