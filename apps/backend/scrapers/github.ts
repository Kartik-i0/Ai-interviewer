import axios from "axios";
import {HttpsProxyAgent} from 'https-proxy-agent';

const httpAgent = new HttpsProxyAgent("https://username:password@proxy.company.com:8080")


export async function ScrapeGithub(username: string){
    const userRepos = await axios.request({url:`https://api.github.com/users/${username}/repos`  , httpAgent})
    return userRepos.data.map((x:any)=>({
        description: x.description ,
        name : x.name,
        fullName : x.full_name,
        starCount : x.stargazers_count
    }))

} 

