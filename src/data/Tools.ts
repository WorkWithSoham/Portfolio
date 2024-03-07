import * as file_paths from "../utils/file_paths.ts"

export interface tool {
    name: string,
    pic: string,
    link: string
}

export const tools = {
    angular: {
        name: "Angular",
        pic: file_paths.angular,
        link: "https://angular.io/"
    },
    androidStudio: {
        name: "Android Studio",
        pic: file_paths.androidStudio,
        link: "https://developer.android.com/"
    },
    css: {
        name: "CSS",
        pic: file_paths.css,
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    dbeaver: {
        name: "DBeaver",
        pic: file_paths.dbeaver,
        link: "https://dbeaver.io/"
    },
    django: {
        name: "Django",
        pic: file_paths.django,
        link: "https://www.djangoproject.com/"
    },
    docker: {
        name: "Docker",
        pic: file_paths.docker,
        link: "https://www.docker.com/"
    },
    git: {
        name: "Git",
        pic: file_paths.git,
        link: "https://git-scm.com/"
    },
    graphql: {
        name: "GraphQL",
        pic: file_paths.graphql,
        link: "https://graphql.org/"
    },
    html: {
        name: "HTML",
        pic: file_paths.html,
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    java: {
        name: "Java",
        pic: file_paths.java,
        link: "https://java.com"
    },
    jira: {
        name: "Jira",
        pic: file_paths.jira,
        link: "https://www.atlassian.com/software/jira"
    },
    js: {
        name: "JavaScript",
        pic: file_paths.js,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    laravel: {
        name: "Laravel",
        pic: file_paths.laravel,
        link: "https://laravel.com/"
    },
    mongo: {
        name: "MongoDB",
        pic: file_paths.mongo,
        link: "https://www.mongodb.com/"
    },
    mysql: {
        name: "MySQL",
        pic: file_paths.mysql,
        link: "https://www.mysql.com/"
    },
    nodejs: {
        name: "Node.js",
        pic: file_paths.nodejs,
        link: "https://nodejs.org/"
    },
    oracledb: {
        name: "OracleDB",
        pic: file_paths.oracledb,
        link: "https://www.oracle.com/database/"
    },
    postman: {
        name: "Postman",
        pic: file_paths.postman,
        link: "https://www.postman.com/"
    },
    psql: {
        name: "PostgreSQL",
        pic: file_paths.psql,
        link: "https://www.postgresql.org/"
    },
    python: {
        name: "Python",
        pic: file_paths.python,
        link: "https://www.python.org/"
    },
    react: {
        name: "React",
        pic: file_paths.react,
        link: "https://react.dev/"
    },
    spring: {
        name: "Spring",
        pic: file_paths.spring,
        link: "https://spring.io/"
    },
    sql: {
        name: "SQL",
        pic: file_paths.sql,
        link: "https://en.wikipedia.org/wiki/SQL"
    },
    ts: {
        name: "TypeScript",
        pic: file_paths.ts,
        link: "https://www.typescriptlang.org/"
    },
    github: {
        name: "GitHub",
        pic: file_paths.github,
        link: "https://github.com/"
    }
};
