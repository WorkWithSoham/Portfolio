import {Octokit} from "octokit";
import {OctokitResponse} from "@octokit/types";
import {FormData} from "../components/Contact";

export const githubAPI = async (content: FormData) => {

    const octokit = new Octokit({auth: `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`});
    const owner: string = "WorkWithSoham";
    const repo: string = "Portfolio";
    const path: string = "UserResponse.json";

    const getFileSHA: OctokitResponse<any> = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner: owner,
        repo: repo,
        path: path,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })

    const oldContent: FormData[] = JSON.parse(atob(getFileSHA.data.content))
    oldContent.push(content)


    await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
        owner: owner,
        repo: repo,
        path: path,
        message: 'Updated User Response at ' + new Date().toISOString(),
        content: btoa(JSON.stringify(oldContent, null, 4)),
        sha: getFileSHA.data.sha,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })
}