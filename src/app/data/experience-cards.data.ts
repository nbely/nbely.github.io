import { ExperienceCardModel } from "../models/exerience-card.model";

export const workExperienceCards: ExperienceCardModel[] = [
    {
        avatarClass: "nexient-avatar",
        description: "Technical lead of rotating 2-3 person team for development of a React Micro Frontend (MFE), as part of a pre-sales showcase webapp. Built to demonstrate the integration of multiple MFE stacks representing best-in-house code practices.",
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
        modalButtonText: "See More",
        modalDetails: [
            "ABC",
            "DEF",
            "GHI",
        ],
        position: "Software Developer II",
        subtitle: "Pre-Sales Showcase Application",
        title: "Nexient",
    },
    {
        avatarClass: "nexient-avatar",
        description: "Developed a bunch of shit at Williams-Sonoma.",
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
        modalButtonText: "See More",
        modalDetails: [
            "ABC",
            "DEF",
            "GHI",
        ],
        position: "Software Developer II",
        subtitle: "Client: Williams-Sonoma, Inc",
        title: "Nexient",
    }
];

export const projectExperienceCards: ExperienceCardModel[] = [
    {
        actionLinks: ["https://github.com/nbely/turq-bot"],
        actionLinksText: ["REPO"],
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
            "https://nbely.github.io/",
            "https://github.com/nbely/nbely.github.io"
        ],
        actionLinksText: ["LIVE", "REPO"],
        details: [
            "What you're currently viewing!",
            "Practiced self-guided Angular web app concept design and implementation, along with employing responsiveness",
            "Learned how to implement and adapt UI components fro Material.io library and organize page layouts with fxFlex API"
        ],
        subtitle: "Angular Web App",
        status: "Completed",
        title: "Portfolio"
    },
    {
        actionLinks: [
            "https://ng-course-recipe-book-53a1d.web.app/",
            "https://github.com/nbely/angular-proj-recipe-book"
        ],
        actionLinksText: ["LIVE", "REPO"],
        details: [
            "Completed course project demonstration fundamental and advanced knowledge and practice of Angular concepts, user interface design with Bootstrap, and firebase deployment",
            "ained understanding of and ability to create and utilize modules, components, directives, routing, observables, forms, pipes, https requests, and user authentication"
        ],
        subtitle: "Angular Web App",
        status: "Completed",
        title: "Course Capstone: Recipe Book"
    }
];