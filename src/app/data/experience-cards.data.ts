import { ExperienceCardModel } from '../models/exerience-card.model';

export const workExperienceCards: ExperienceCardModel[] = [
  {
    avatarIcon: 'launch',
    description:
      'Lead Frontend Engineer/UX Designer of 3-person full-stack team building a greenfield investment application for streamlined order generation.',
    skillIcons: [
      'react',
      'typescript',
      'materialui',
      'aggrid',
      'java',
      'aws',
      'jira',
      'confluence',
    ],
    isIconGroupLabeled: true,
    isModalButtonEnabled: true,
    modalButtonText: 'Read More',
    modalDetails: [
      'I play a crucial role in the solutioning, design, and development of a new order generation application by:<ul><li>Translating complex business requirements into purpose-driven and flexible technical solutions with accompanying Visio wireframe mockups.</li><li>Gathering user feedback through Agile CI/CD development and demoing, allowing for continuous design optimization and high stakeholder confidence.</li><li>Architecting a Create React App with a focus on lean and reusable component design that effectively utilizes third-party packages such as Material UI and AG Grid.</li><li>And transforming non-cohesive, decentralized, and bug-prone UI components into a library of encapsulated, reusable, and dynamic Material UI-based React components.</li></ul>',
      "I'm able to achieve dependable, performant, and highly maintainable code through through Bitbucket Pipeline integration of Whitesource, Prisma and SonarQube scans, in addition to comprehensive (97%) unit test coverage with Jest/React Testing Library.",
      'I assist in minimizing team blockers and deep refactors of the codebase by working closely with the backend team in Java/Spring Boot/PostreSQL. I am often able to spot gaps in the API design early on and provide feedback to ensure that the endpoints are designed in a future-proof manner.',
    ],
    position: 'Digital Technology Engineer → Senior Engineer',
    subtitle: 'Client: Invesco Ltd.',
    title: 'Launch by NTT Data',
  },
  {
    avatarIcon: 'launch',
    description:
      "Acted as technical lead of a remote 3-person team for development of a React/TypeScript Micro Frontend (MFE), as part of a larger eSwag web application designed to assist sales in demonstrating multiple different code stacks representing the firm's best-in-house quality.",
    skillIcons: [
      'react',
      'typescript',
      'html5',
      'sass',
      'java',
      'azure',
      'accessibility',
    ],
    isIconGroupLabeled: true,
    isModalButtonEnabled: true,
    modalButtonText: 'Read More',
    modalDetails: [
      "Took on Product Owner and Lead Developer roles and responsibilities for a team developing one of three primary MFE repositories for a Pre-Sales Showcase Application:<ul><li>I led grooming meetings to break down the UX Wireframes into stories and construct acceptance criteria in Gherkin Syntax in order to meet the definition of Ready for Development.</li><li>I documented a Quick Start guide, as well as expectations and standards for developing code in the repository</li><li>I reviewed PR's made by junior developers and colleagues, and frequently paired to guide in the development of concise solutions and resolve issues as needed.</ul>",
      'Ensured the repository showcased examples of the best practices in web development:<ul><li>Responsive, mobile-first styling utilizing CSS Modules for local-scoping and Sass for Mixin and Variable Support</li><li>Meaningful automated unit tests written to encompass all functional code and to drive development in a TDD approach</li><li>HTML Templates written to be semantic and accessible, as verified by the WAVE Evaluation Tool for being WCAG 2.1 compliant.</li></ul>',
      'Assisted in developing the openAPI contract-first specifications for the Java API Service to provide user data to the React MFE, and updating the Java service and JUnit automated tests to follow the spec and deploy as an Azure Function.',
      'Operated in an Agile two-week sprint cadence, completing stories upon meeting the definition of done: approval in a code review, verification of functionality and absence of bugs in the QA environment, and demoed as working software to the stakeholders.',
    ],
    position: 'Digital Technology Engineer',
    subtitle: 'Pre-Sales Showcase Application',
    title: 'Launch by NTT Data',
  },
  {
    avatarIcon: 'launch',
    description:
      'Built a solid foundation as a professional developer within a six-person scrum team by planning, documenting, developing, testing, and releasing high quality AB-tested features in a large-scale, multi-domain, Fortune 500 eCommerce software suite.',
    skillIcons: [
      'vue',
      'javascript',
      'html5',
      'sass',
      'java',
      'github',
      'jira',
      'confluence',
    ],
    isIconGroupLabeled: true,
    isModalButtonEnabled: true,
    modalButtonText: 'Read More',
    modalDetails: [
      'Saw implementation of 7 A/B tested features through from estimation to release across 14 eCommerce sites in two international markets, inclusive of:<ul><li>Design and implementation of feature configurations with feature flags and post-launch A/B Testing options available for customization per-site.</li><li>Integration with in-house analytics reporting softarem through implementation of tracking events for all features.</li><li>100% automated jest unit test coverage on new feature code in Vue or VanillaJS. In addition to comprehensive Vue component testing via Playwright, Apache FTL integration testing, and Java-based Selenium End-to-End Testing.</li></ul',
      "Developed 3 of the features across 3 Vue MFE's with Vuex State Management and common Sass styling, providing style overrides on a per-site basis. Features touched critical site areas such as the global navigation, shop, and product pages.",
      'Developed 3 more features in a legacy Apache FTL/Java tech stack, with configuration options defined and served through Java Spring Boot beans. Features introduced further critical global navigation changes in legacy pages, as well as serving of location-specific trending products on the home page demonstrating interoperability with a recommendation API service to show related products via a flyout.',
      'Developed 1 last feature introducing navigation-based enhancements to a standalone web-component checkout service integrated into the main site, with intelligent style variable design for per-site customizability from outside the service.',
    ],
    position: 'Digital Technology: Engineer Associate → Engineer',
    subtitle: 'Client: Williams Sonoma, Inc.',
    title: 'Launch by NTT Data',
  },
];

export const projectExperienceCards: ExperienceCardModel[] = [
  {
    actionLinks: [
      'https://github.com/epsilon-beta-ot-developers/theta-tau-rent-portal',
    ],
    actionLinksText: ['REPO'],
    description:
      'A PayPal API-integrated application to onboard new tenants and provide an easy way for them to make rent payments and view their invoice history.',
    skillIcons: ['react', 'bootstrap', 'aws', 'golang'],
    isIconGroupLabeled: true,
    details: [
      'Leading efforts to build a Vite/React/Redux/RTK Query frontend with Sass and Bootstrap UI and a focus on creating a responsive and accesible user-facing experience.',
      'Supporting back-end mongoDB access via serverless GoLang Lambda Functions, in addition to user auth via AWS Cognito, handling of PayPal event hooks, and invoice scheduling via the Simple Queue Service.',
    ],
    subtitle: 'React Web App w/ AWS Serverless Backend',
    status: 'In Progress',
    title: 'Epsilon Beta Rent Portal',
  },
  {
    actionLinks: ['https://github.com/nbely/pokesandbox'],
    actionLinksText: ['REPO'],
    description:
      'A Node.js game engine and Discord.js bot, enabling server-specific creation and running of Pokémon fan-games. Accompanied by a web app for server/game discovery and cross-server user profile access.',
    skillIcons: ['nodejs', 'discord', 'nextjs', 'tailwindcss'],
    isIconGroupLabeled: true,
    details: [
      'Utilizing MongoDB for fan-game configuration and player data storage with schemas modeled via the Mongoose library. Includes game battling made possible through interfacing with I/O streams from a forked 3rd party simulator.',
      'Serving MongoDB data to a Next.js/redux web app with Express.js for displaying user profiles and interactable/customizable user adventure-logs and character blogging.',
    ],
    subtitle: 'Node.js Discord Bot & Next.js Web App',
    status: 'In Progress',
    title: 'PokeSandbox',
  },
  {
    actionLinks: ['https://github.com/nbely/nbely.github.io'],
    actionLinksText: ['REPO'],
    description:
      'The simple, yet classy site you see before you. Built with Angular, the framework I started my development career by learning.',
    skillIcons: ['angular', 'typescript', 'sass', 'accessibility'],
    isIconGroupLabeled: true,
    details: [
      'Demonstrates mobile-first, responsive Sass design for mobile, tablet, and destop devices, in addition to WCAG 2.1 Compliance for ADA accessibility.',
      'Implements and adapts UI components from the Angular Material.io Component library, leaning into best practices for component reusability.',
    ],
    subtitle: 'Angular Web App',
    status: 'Completed',
    title: 'Portfolio - v2',
  },
  {
    actionLinks: [
      'https://ng-course-recipe-book-53a1d.web.app/',
      'https://github.com/nbely/angular-proj-recipe-book',
    ],
    actionLinksText: ['LIVE', 'REPO'],
    description:
      'An Angular Recipe Book and Shopping List app built as part of a Udemy course project, and featuring user data authentication and fetching from Firebase.',
    skillIcons: ['angular', 'typescript', 'firebase', 'sass'],
    isIconGroupLabeled: true,
    details: [
      'Completed course project demonstrating fundamental and advanced knowledge and practice of Angular concepts, user interface design with Bootstrap CSS cklasses, and firebase deployment',
      'Gained understanding of and ability to create and utilize modules, components, directives, routing, observables, forms, pipes, https requests, and user authentication',
    ],
    subtitle: 'Angular Web App',
    status: 'Completed',
    title: 'Course Capstone: Recipe Book',
  },
];
