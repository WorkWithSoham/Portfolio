import {si, uta} from "../utils/file_paths.ts";


export interface University {
    logo: string,
    name: string,
    degree: string,
    subjects: string[]
    link: string
}

export const EducationData: Array<University> = [
    {
        logo: uta,
        name: "The University of Texas at Arlington",
        degree: "Master of Science in Computer Science",
        subjects: [
            "Design and Analysis of Algorithms",
            "Big Data and Cloud Computing",
            "Advanced Software Engineering",
            "Web Data Management"
        ],
        link: "https://uta.edu"
    },
    {
        logo: si,
        name: "S.K.N College of Engineering",
        degree: "B.E in Electronics and Telecommunication",
        subjects: [
            "Advanced Mathematics",
            "Computer Network",
            "Object Oriented Programming",
            "Data Structures and Algorithms"
        ],
        link: "https://sinhgad.edu"
    }
]



