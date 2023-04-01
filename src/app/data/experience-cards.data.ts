import { ExperienceCardModel } from "../models/exerience-card.model";

export const workExperienceCards: ExperienceCardModel[] = [
    {
        avatarClass: "nexient-avatar",
        description: "Technical lead of rotating 2-3 person team for development of a React/TypeScript Micro Frontend (MFE), as part of a pre-sales showcase eCommerce webapp designed for company swag distribution. Built to demonstrate the integration of multiple MFE stacks representing best-in-house code practices.",
        skillIcons: [
            "react",
            "typescript",
            "html5",
            "sass",
            "java",
            "azure"
        ],
        isIconGroupLabeled: true,
        isModalButtonEnabled: true,
        modalButtonText: "Read More",
        modalDetails: [
            "Took on Product Owner and Lead Developer roles and responsibilities for a team developing one of three primary MFE repositories for a Pre-Sales Showcase Application:<ul><li>I led grooming meetings to break down the UX Wireframes into stories and construct acceptance criteria in Gherkin Syntax in order to meet the definition of Ready for Development.</li><li>I documented a Quick Start guide, as well as expectations and standards for developing code in the repository</li><li>I reviewed PR's made by junior developers and colleagues, and frequently paired to guide in the development of concise solutions and resolve issues as needed.</ul>",
            "Ensured the repository showcased examples of the best practices in web development:<ul><li>Responsive, mobile-first styling utilizing CSS Modules for local-scoping and Sass for Mixin and Variable Support</li><li>Meaningful automated unit tests written to encompass all functional code and to drive development in a TDD approach</li><li>HTML Templates written to be semantic and accessible, as verified by the WAVE Evaluation Tool for being WCAG 2.1 compliant.</li></ul>",
            "Assisted in developing the openAPI contract-first specifications for the Java API Service to provide user data to the React MFE, and updating the Java service and JUnit automated tests to follow the spec and deploy as an Azure Function.",
            "Operated in an Agile two-week sprint cadence, completing stories upon meeting the definition of done: approval in a code review, verification of functionality and absence of bugs in the QA environment, and demoed as working software to the stakeholders."
        ],
        position: "Software Developer II",
        subtitle: "Pre-Sales Showcase Application",
        title: "Nexient",
    },
    {
        avatarClass: "nexient-avatar",
        description: "Grew quickly into the role of a professional developer as part of a six-person scrum team by planning, documenting, developing, testing, and releasing high quality AB-tested features in a large-scale, multi-domain, eCommerce software suite.",
        skillIcons: [
            "vue",
            "javascript",
            "html5",
            "sass",
            "java",
            "github",
            "jira"
        ],
        isIconGroupLabeled: true,
        isModalButtonEnabled: true,
        modalButtonText: "Read More",
        modalDetails: [
            "Saw implementation of A/B Tested 7 features through from estimation to release across 14 eCommerce sites in two international markets, inclusive of:<ul><li>Design and implementation of feature configurations with feature flags and post-launch A/B Testing options available for customization per-site.</li><li>Integration with in-house analytics reporting softarem through implementation of tracking events for all features.</li><li>100% automated jest unit test coverage on new feature code in Vue or VanillaJS. In addition to comprehensive Vue component testing via Playwright, Apache FTL integration testing, and Java-based Selenium End-to-End Testing.</li></ul",
            "Developed 3 of the features across 3 Vue MFE's with Vuex State Management and common Sass styling, providing style overrides on a per-site basis. Features touched critical site areas such as the global navigation, shop, and product pages.",
            "Developed 3 more features in a legacy Apache FTL/Java tech stack, with configuration options defined and served through Java Spring Boot beans. Features introduced further critical global navigation changes in legacy pages, as well as serving of location-specific trending products on the home page demonstrating interoperability with a recommendation API service to show related products via a flyout.",
            "Developed 1 last feature introducing navigation-based enhancements to a standalone web-component checkout service integrated into the main site, with intelligent style variable design for per-site customizability from outside the service."
        ],
        position: "Software Developer II",
        subtitle: "Client: A Fortune 500 eCommerce Retailer",
        title: "Nexient",
    }
];

export const projectExperienceCards: ExperienceCardModel[] = [
    {
        actionLinks: [
            "https://github.com/nbely/nbely.github.io"
        ],
        actionLinksText: ["REPO"],
        skillIcons: [
            "angular",
            "typescript",
            "sass",
            "accessibility"
        ],
        isIconGroupLabeled: true,
        details: [
            "The simple yet elegant site you see before you.",
            "Demonstrates mobile-first, responsive Sass design for mobile, tablet, and destop devices, in addition to WCAG 2.1 Compliance for ADA accessibility.",
            "Implements and adapts UI components from the Angular Material.io Component library, leaning into best practices for component reusability."
        ],
        subtitle: "Angular Web App",
        status: "In Progress",
        title: "Portfolio - v2"
    },
    {
        actionLinks: [
            "https://github.com/epsilon-beta-ot-developers/theta-tau-rent-portal"
        ],
        actionLinksText: ["REPO"],
        skillIcons: [
            "react",
            "typescript",
            "python",
            "aws"
        ],
        isIconGroupLabeled: true,
        details: [
            "As Treasurer of a non-profit housing corporation, designing and developing a PayPal API-integrated application to onboard new tenants and provide easy access to viewing of account balance and payment of rent invoices.",
            "Leading front-end efforts utilizing Vite-tool React/TypeScript. Supporting back-end mongoDB access via PyFlask and receiving and reporting of PayPal events via AWS Lambda Functions and the Simple Queue Service.",
        ],
        subtitle: "React Web App w/ PyFlask Backend & AWS Integration",
        status: "In Progress",
        title: "Epsilon Beta Rent Portal"
    },
    {
        actionLinks: ["https://github.com/nbely/turq-bot"],
        actionLinksText: ["REPO"],
        skillIcons: [
            "react",
            "typescript",
            "html5",
            "nodejs",
        ],
        isIconGroupLabeled: true,
        details: [
            "Developing full-scale fan-game in Node.js via Discord API, utilizing MongoDB game/user data storage w/Mongoose and parsed data stream results from a forked 3rd party battle simulator",
            "Working on React web application for displaying user profiles and interactable/customizable user event-logs"
        ],
        subtitle: "Node.js Discord Bot & React Web App",
        status: "In Progress",
        title: "PokeSandbox",
    },
    {
        actionLinks: [
            "https://ng-course-recipe-book-53a1d.web.app/",
            "https://github.com/nbely/angular-proj-recipe-book"
        ],
        actionLinksText: ["LIVE", "REPO"],
        skillIcons: [
            "angular",
            "typescript",
            "html5",
            "sass",
        ],
        isIconGroupLabeled: true,
        details: [
            "Completed course project demonstration fundamental and advanced knowledge and practice of Angular concepts, user interface design with Bootstrap, and firebase deployment",
            "ained understanding of and ability to create and utilize modules, components, directives, routing, observables, forms, pipes, https requests, and user authentication"
        ],
        subtitle: "Angular Web App",
        status: "Completed",
        title: "Course Capstone: Recipe Book"
    }
];