(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["experience-experience-module"],{

/***/ "1fes":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nav.service */ "aU/6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/projects.component */ "dL12");
/* harmony import */ var _volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./volunteer/volunteer.component */ "lQlt");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./work/work.component */ "cyqp");








function ExperienceComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-volunteer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-work");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExperienceComponent_router_outlet_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
} }
class ExperienceComponent {
    constructor(navService, router) {
        this.navService = navService;
        this.router = router;
        this.navLinks = ['projects', 'volunteer', 'work'];
        this.activeLink = 'projects';
        this.collapseNav = false;
        this.activeLinkSub = this.navService.activeLink
            .subscribe((link) => {
            if (link && this.navLinks.indexOf(link) !== -1) {
                this.activeLink = link;
                this.router.navigate([`/experience/${this.activeLink}`]);
            }
        });
        this.collapseSub = this.navService.isCollapsed
            .subscribe((collapseState) => {
            this.collapseNav = collapseState;
        });
    }
    ngOnInit() {
        this.navService.navLinks.next(this.navLinks);
        this.router.navigate([`/experience/${this.activeLink}`]);
    }
    ngOnDestroy() {
        this.activeLinkSub.unsubscribe();
        this.collapseSub.unsubscribe();
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nav_service__WEBPACK_IMPORTED_MODULE_1__["NavService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], decls: 6, vars: 2, consts: [[1, "component-container"], ["fxLayout", "row", "fxLayoutAlign", "center"], ["fxFlex", "", 1, "exp-container"], [4, "ngIf"], [1, "component-divider"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExperienceComponent_div_4_Template, 6, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExperienceComponent_router_outlet_5_Template, 1, 0, "router-outlet", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collapseNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.collapseNav);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"], _volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_6__["VolunteerComponent"], _work_work_component__WEBPACK_IMPORTED_MODULE_7__["WorkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["hr.navbar-divider[_ngcontent-%COMP%] {\n  margin: 0 0 0 0;\n  border: 1px solid rgba(0, 0, 0, 0.65);\n}\n\nhr.component-divider[_ngcontent-%COMP%] {\n  width: 95%;\n  margin: 0 0 0 2.5%;\n  border: 1px dashed rgba(0, 0, 0, 0.25);\n}\n\n.component-container[_ngcontent-%COMP%] {\n  height: 100%;\n  color: #000;\n  display: flex;\n  flex-direction: column;\n}\n\n.component-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\n\n.component-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.6);\n  color: darkslategrey;\n  padding: 6px 24px;\n  font-size: 16px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.component-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: inherit;\n  padding: 0px 3px;\n  color: #fff;\n  font-family: Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n\n.component-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  padding-right: px;\n}\n\nmain[_ngcontent-%COMP%] {\n  padding: 18px 24px;\n}\n\nmain[_ngcontent-%COMP%]   .exp-container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  text-align: center;\n  background: rgba(255, 255, 255, 0.5);\n  border-radius: 10px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGV4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EscUNBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtBQUFKOztBQUVJO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FBQVI7O0FBR0k7RUFDSSw4QkFBQTtFQUNBLG9CQUFBO0VBRUEsaUJBQUE7RUFDQSxlQUFBO0VBRUEsYUFBQTtFQUNBLDhCQUFBO0FBSFI7O0FBS1E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHdJQUFBO0FBSFo7O0FBTVE7RUFDSSxpQkFBQTtBQUpaOztBQVNBO0VBQ0ksa0JBQUE7QUFOSjs7QUFRSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxvQ0FBQTtFQUVBLG1CQUFBO0VBQ0EseUNBQUE7QUFSUiIsImZpbGUiOiJleHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHIubmF2YmFyLWRpdmlkZXIge1xyXG4gICAgbWFyZ2luOiAwIDAgMCAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjY1KTtcclxufVxyXG5cclxuaHIuY29tcG9uZW50LWRpdmlkZXIge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbjogMCAwIDAgMi41JTtcclxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG59XHJcblxyXG4uY29tcG9uZW50LWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgbmF2IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICAgICAgY29sb3I6IGRhcmtzbGF0ZWdyZXk7XHJcblxyXG4gICAgICAgIHBhZGRpbmc6IDZweCAyNHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAzcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmF2LWljb24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gICAgcGFkZGluZzogMThweCAyNHB4O1xyXG5cclxuICAgIC5leHAtY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEyODBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MCk7XHJcblxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yNilcclxuXHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "2g8h":
/*!*********************************************************!*\
  !*** ./src/app/experience/experience-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ExperienceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceRoutingModule", function() { return ExperienceRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _experience_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experience.component */ "1fes");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects/projects.component */ "dL12");
/* harmony import */ var _volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./volunteer/volunteer.component */ "lQlt");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./work/work.component */ "cyqp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: '',
        component: _experience_component__WEBPACK_IMPORTED_MODULE_1__["ExperienceComponent"],
        children: [
            { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"] },
            { path: 'volunteer', component: _volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_3__["VolunteerComponent"] },
            { path: 'work', component: _work_work_component__WEBPACK_IMPORTED_MODULE_4__["WorkComponent"] }
        ]
    }
];
class ExperienceRoutingModule {
}
ExperienceRoutingModule.ɵfac = function ExperienceRoutingModule_Factory(t) { return new (t || ExperienceRoutingModule)(); };
ExperienceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ExperienceRoutingModule });
ExperienceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ExperienceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "cyqp":
/*!***************************************************!*\
  !*** ./src/app/experience/work/work.component.ts ***!
  \***************************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class WorkComponent {
    constructor() { }
    ngOnInit() {
    }
}
WorkComponent.ɵfac = function WorkComponent_Factory(t) { return new (t || WorkComponent)(); };
WorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkComponent, selectors: [["app-work"]], decls: 2, vars: 0, template: function WorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "work works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3JrLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "dL12":
/*!***********************************************************!*\
  !*** ./src/app/experience/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ProjectsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 2, vars: 0, template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "projects works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "lQlt":
/*!*************************************************************!*\
  !*** ./src/app/experience/volunteer/volunteer.component.ts ***!
  \*************************************************************/
/*! exports provided: VolunteerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolunteerComponent", function() { return VolunteerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class VolunteerComponent {
    constructor() { }
    ngOnInit() {
    }
}
VolunteerComponent.ɵfac = function VolunteerComponent_Factory(t) { return new (t || VolunteerComponent)(); };
VolunteerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VolunteerComponent, selectors: [["app-volunteer"]], decls: 2, vars: 0, template: function VolunteerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "volunteer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2b2x1bnRlZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "n62C":
/*!*************************************************!*\
  !*** ./src/app/experience/experience.module.ts ***!
  \*************************************************/
/*! exports provided: ExperienceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceModule", function() { return ExperienceModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-ui.module */ "iasb");
/* harmony import */ var _experience_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./experience-routing.module */ "2g8h");
/* harmony import */ var _experience_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./experience.component */ "1fes");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ "dL12");
/* harmony import */ var _volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./volunteer/volunteer.component */ "lQlt");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./work/work.component */ "cyqp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class ExperienceModule {
}
ExperienceModule.ɵfac = function ExperienceModule_Factory(t) { return new (t || ExperienceModule)(); };
ExperienceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: ExperienceModule });
ExperienceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _app_ui_module__WEBPACK_IMPORTED_MODULE_1__["AppUiModule"],
            _experience_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExperienceRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ExperienceModule, { declarations: [_experience_component__WEBPACK_IMPORTED_MODULE_3__["ExperienceComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"],
        _volunteer_volunteer_component__WEBPACK_IMPORTED_MODULE_5__["VolunteerComponent"],
        _work_work_component__WEBPACK_IMPORTED_MODULE_6__["WorkComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _app_ui_module__WEBPACK_IMPORTED_MODULE_1__["AppUiModule"],
        _experience_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExperienceRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=experience-experience-module.js.map