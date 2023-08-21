/* eslint-disable import/no-anonymous-default-export */
export default {
    commands: {
        about: {
            description: 'About Me',
            fn: () => {
                return "About Me\n---\nMy name is Jocelin Darma. I am a Full Stack Developer and DevOps Enthusiast. I am currently based in Jakarta, Indonesia. My work experience includes building scalable and reliable web applications, slackbots, microservices, as well as automating and supporting to ensure CI/CD in product development. I am a good communicator and self-motivator, able to work as part of a team but also under my own initiative."
            }
        },
        education: {
            description: 'My Education',
            fn: () => {
                return "About Me.\n---\nmale\n18\nstudent\nsolodev\nmelophile\nweeb\ndumb\napathetic\n---\n"
            }
        },
        skills: {
            description: 'My Tech Skills',
            fn: () => {
                return `
                    these are the skills I have.\n---\n
                    python           - 90%
                    java             - 70% 
                    javascript       - 90%
                    typescript       - 90%
                    html5            - 100%
                    css3             - 100%
                    go-lang          - 40% [learning]\n---\n
                `
            }
        },
        projects: {
            description: 'My Tech Projects',
            fn: () => {
                return `
                    Cool projects I have worked on.\n---\n
                    'jocelindarma'  | 'terminal portfolio'   | 'javascript'\n---\n
                `
            }
        },
        email: {
            description: 'Shoot me an email',
            fn: () => {
                window.open('mailto:jocelindarma13@gmail.com', '_blank')
                return "opening mail..."
            }
        },
        linkedin: {
            description: 'Visit my LinkedIn profile',
            fn: () => {
                window.open('https://www.linkedin.com/in/jocelindarma/', '_blank')
                return "opening linkedin profile..."
            }
        },
        github: {
            description: 'Visit my GitHub Profile',
            fn: () => {
                window.open('https://github.com/jocelindarma', '_blank')
                return "opening github account..."
            }
        },
        gui: {
            description: 'Visit my normal website',
            fn: () => {
                window.open('https://jocelindarma.github.io/', '_blank')
                return "opening website GUI..."
            }
        },
    },
    overwrites:{
        help: {
            description: 'List all available commands',
        },
        clear: {
            description: 'Clear terminal',
        },
    }
}
