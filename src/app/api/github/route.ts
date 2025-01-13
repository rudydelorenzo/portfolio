import { NextRequest } from "next/server";
import { GithubInfoRequestBody, GithubInfoResponseBody } from "@/types";

export async function POST(request: NextRequest) {
    const { owner, repo }: GithubInfoRequestBody = await request.json();

    const token = process.env.GH_TOKEN;

    const starsReq = fetch(
        `https://api.github.com/repos/${owner}/${repo}/stargazers`,
        {
            next: { revalidate: 3600 },
            headers: { Authorization: `Bearer ${token}` },
        },
    );

    const forksReq = fetch(
        `https://api.github.com/repos/${owner}/${repo}/forks`,
        {
            next: { revalidate: 3600 },
            headers: { Authorization: `Bearer ${token}` },
        },
    );

    const [starsRes, forksRes] = await Promise.all([starsReq, forksReq]);

    const starsJSON: any[] = await starsRes.json();

    const forksJSON: any[] = await forksRes.json();

    const responseBody: GithubInfoResponseBody = {
        stars: starsJSON.length || 0,
        forks: forksJSON.length || 0,
    };

    return Response.json(responseBody);
}

export const revalidate = 0;
