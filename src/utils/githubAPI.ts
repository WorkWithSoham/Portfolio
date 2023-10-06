import {Octokit} from "octokit";
import {OctokitResponse} from "@octokit/types";
import {UserResponse} from "../components/Contact";

export const githubAPI = async (content: UserResponse) => {

    const octokit = new Octokit({auth: `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`});
    const owner: string = "WorkWithSoham";
    const repo: string = "Portfolio";
    const path: string = "UserResponse.json"

    const getFileSHA: OctokitResponse<any> = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner: owner,
        repo: repo,
        path: path,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })

    const oldContent: UserResponse[] = JSON.parse(atob(getFileSHA.data.content))
    oldContent.push(content)

    await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
        owner: owner,
        repo: repo,
        path: path,
        message: 'Test response',
        content: btoa(JSON.stringify(oldContent, null, 4)),
        sha: getFileSHA.data.sha,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })
}