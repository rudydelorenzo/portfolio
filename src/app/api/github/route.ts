import { NextRequest } from "next/server";
import { GithubInfoRequestBody, GithubInfoResponseBody } from "@/types";

export async function POST(request: NextRequest) {
    const { owner, repo }: GithubInfoRequestBody = await request.json();

    console.log("github token: ", process.env.GH_TOKEN);

    const starsReq = fetch(
        `https://api.github.com/repos/${owner}/${repo}/stargazers`,
        {
            headers: { Authorization: `Bearer ${process.env.GH_TOKEN}` },
        },
    );

    const forksReq = fetch(
        `https://api.github.com/repos/${owner}/${repo}/forks`,
    );

    const [starsRes, forksRes] = await Promise.all([starsReq, forksReq]);

    const starsJSON: any[] = await starsRes.json();

    const forksJSON: any[] = await forksRes.json();

    const responseBody: GithubInfoResponseBody = {
        stars: starsJSON.length || 0,
        forks: forksJSON.length || 0,
    };

    console.log(starsJSON);

    return Response.json(responseBody);
}
