import { NextRequest } from "next/server";
import { GithubInfoRequestBody, GithubInfoResponseBody } from "@/types";

export async function POST(request: NextRequest) {
    const { owner, repo }: GithubInfoRequestBody = await request.json();

    const token = process.env.GH_TOKEN;

    console.log("TOKEN", token);
    console.log("CHECK1");
    console.log("TOKEN", token);

    const starsReq = fetch(
        `https://api.github.com/repos/${owner}/${repo}/stargazers?per_page=100`,
        {
            next: { revalidate: 3600 },
            headers: { Authorization: `Bearer ${token}` },
        },
    );

    const forksReq = fetch(
        `https://api.github.com/repos/${owner}/${repo}/forks?per_page=100`,
        {
            next: { revalidate: 3600 },
            headers: { Authorization: `Bearer ${token}` },
        },
    );

    console.log("CHECK2");

    const [starsRes, forksRes] = await Promise.all([starsReq, forksReq]);

    console.log("CHECK3");

    const starsJSON: any[] = await starsRes.json();

    const forksJSON: any[] = await forksRes.json();

    console.log("CHECK4");

    console.log(forksJSON, starsJSON);

    console.log("CHECK5");

    const responseBody: GithubInfoResponseBody = {
        stars: starsJSON.length || 0,
        forks: forksJSON.length || 0,
    };

    return Response.json(responseBody);
}

export const revalidate = 3600;
