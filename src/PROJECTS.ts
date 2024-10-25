import { ProjectType } from "@/types";

const PROJECTS: ProjectType[] = [
    {
        name: "Pantonify",
        description:
            "A fun webapp that adds a mat with text to a photo, " +
            "in a style similar to that of Pantone color swatches",
        image: "",
        languages: ["ts"],
        technologies: ["nextjs", "svg", "react", "wysiwyg"],
        github: "https://github.com/rudydelorenzo/pantonify",
        url: "https://pantonify.rudydelorenzo.ca",
    },
    {
        name: "TuneSplit",
        description:
            "A webapp that splits audio files into separate vocal and instrumental tracks using a hybrid neural " +
            "+ transformer model. Published on Docker Hub.",
        image: "/tunesplit-fill.png",
        languages: ["ts", "py"],
        technologies: ["nodeJS", "ML", "docker", "WebSockets"],
        github: "https://github.com/rudydelorenzo/tunesplit",
        url: "https://tunesplit.rudydelorenzo.ca",
    },
    {
        name: "Wordle Solver",
        description:
            "A nodeJS CLI app that calculates & suggests the mathematically optimal next guess.",
        image: "/wordle.png",
        languages: ["js"],
        technologies: ["nodeJS", "Algorithms", "searching"],
        github: "https://github.com/rudydelorenzo/wordle-solver",
    },
    {
        name: "Maxgage",
        description: "Mortgage visualization tool built with React and MUI",
        image: "/maxgage-pvw.png",
        languages: ["ts"],
        technologies: ["react", "chart.js", "docker"],
        github: "https://github.com/rudydelorenzo/maxgage",
        url: "https://maxgage.rudydelorenzo.ca/",
    },
    {
        name: "WS2811B Controller PCB",
        description:
            "A PCB design for a WS2811B LED controller. Uses an ESP32/8266 microprocessor for computation",
        image: "/pcb.png",
        languages: ["other"],
        technologies: ["pcb design", "electronics", "esp32"],
        github: "https://github.com/rudydelorenzo/WS2811B_PCB",
    },
    {
        name: "Hangman AI",
        description:
            "A fun Java CLI program that lets you play hangman against a rudimentary AI",
        image: "/hangman_search2.png",
        languages: ["java"],
        technologies: ["algorithms", "game ai", "searching"],
        github: "https://github.com/rudydelorenzo/java-hangman-ai",
    },
    {
        name: "Roadtest Finder",
        description:
            "In 2018-19 the Alberta Road Test program switched to a FCFS model, resulting in months-long waits. " +
            "This tool checks for openings (due to cancellations) and sends emails when it finds them.",
        image: "/art.png",
        languages: ["java"],
        technologies: ["javafx", "json", "selenium", "ant"],
        github: "https://github.com/rudydelorenzo/alberta-test-finder",
    },
    {
        name: "ELMo",
        description:
            "ELMo is an Arduino library that simplifies communication between ELM327 devices (like your OBD-II reader) and ESP32 microprocessors.",
        image: "/elmo.png",
        languages: ["cpp"],
        technologies: ["arduino", "esp32", "library", "io"],
        github: "https://github.com/rudydelorenzo/ELMo",
        url: "https://www.arduino.cc/reference/en/libraries/elmo/",
    },
    {
        name: "FTDI Driver Patch",
        description:
            "A web service that performs on-the-fly patching to the official FTDI driver package to allow installation on new versions of Windows",
        image: "/ftdi.png",
        languages: ["js", "c", "html", "css"],
        technologies: ["drivers", "patching", "expressjs", "ci"],
        github: "https://github.com/rudydelorenzo/ftdi-driver-server",
        url: "https://drivers.rudydelorenzo.ca/",
    },
    {
        name: "Stage3",
        description:
            'Stage3 was a webapp that interpreted the COVID vaccination numbers in alberta and made predictions on when the province would hit key milestones. \nStage3 correctly predicted Alberta\'s "Open for Summer" opening date!',
        image: "/stage3.png",
        languages: ["js", "css", "html"],
        technologies: ["rest", "statistics", "expressjs"],
        github: "https://github.com/rudydelorenzo/stage3",
        url: "https://stage3.rudydelorenzo.ca",
    },
    {
        name: "Tree",
        description:
            "Tree recursively pretty-prints a file tree starting from a given directory. Created as a part of a speed coding challenge.",
        image: "/tree.png",
        languages: ["js"],
        technologies: ["recursion", "speed programming"],
        github: "https://github.com/rudydelorenzo/tree",
    },
    {
        name: "StatsTool",
        description:
            "StatsTool is a nodeJS app that pulls team statistics from the internet and prepares them for use in our broadcast graphics.",
        image: "/statstool.png",
        languages: ["js"],
        technologies: ["scraping", "data parsing", "cli", "native"],
        github: "https://github.com/rudydelorenzo/statstool",
        url: "https://github.com/rudydelorenzo/statstool/releases/tag/1.0.1",
    },
    {
        name: "GameTime",
        description:
            "GameTime is an electron app that generates the JSON files that drive our broadcast's graphics system.",
        image: "/gametime.png",
        languages: ["js", "css", "html"],
        technologies: ["electron", "native", "json"],
        github: "https://github.com/rudydelorenzo/gametime",
        url: "https://github.com/rudydelorenzo/gametime/releases/tag/2.0",
    },
    {
        name: "martinBMW",
        description:
            "martinBMW is a fascinating Java app that will look for any specific BMW part in scrapyards around you. It cross references BMW's internal parts catalog with vehicle inventories to build a full picture of parts availability.",
        image: "/mbmw.png",
        languages: ["java", "py"],
        technologies: ["scraping", "inventory", "aggregation"],
        github: "https://github.com/rudydelorenzo/martinBMW",
        url: "https://github.com/rudydelorenzo/martinBMW/releases/tag/1.4.0",
    },
    {
        name: "martinServer",
        description:
            "A Tomcat webapp companion to the martinBMW project. Provides a friendly UI to search for parts, etc.",
        image: "/mserver.png",
        languages: ["java", "js", "css", "html"],
        technologies: ["tomcat", "rest"],
        github: "https://github.com/rudydelorenzo/martinServer",
    },
    {
        name: "beelicious",
        description:
            "An implementation of the TikTok meme where you send your buddies the entirety of the Bee Movie script.",
        image: "/bee.png",
        languages: ["py"],
        technologies: ["pynput", "memes"],
        github: "https://github.com/rudydelorenzo/beelicious",
    },
    {
        name: "HyperActive",
        description:
            "Utility for synchronized control of Blackmagic's HyperDeck playback devices. It will allow you to connect to many HyperDeck devices over the network, and can control all of them simultaneously.",
        image: "/ha.png",
        languages: ["java"],
        technologies: ["javafx", "telnet", "async", "auth"],
        github: "https://github.com/rudydelorenzo/HyperActive",
    },
] as const;

export default PROJECTS;
