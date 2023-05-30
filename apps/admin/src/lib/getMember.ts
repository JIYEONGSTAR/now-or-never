import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { headers } from './headers';
export async function getMember(pageUrl: string) {
  const res = await fetch(` https://api.notion.com/v1/pages/${pageUrl}`, {
    method: 'GET',
    headers: headers,
    cache: 'force-cache',
  }).then(res => res.json());
  return res as PageObjectResponse;
}
