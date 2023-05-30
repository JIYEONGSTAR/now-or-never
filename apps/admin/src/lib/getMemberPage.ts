import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import { headers } from './headers';
export async function fetchData() {
  const res = await fetch(`https://api.notion.com/v1/databases/e7c9516055cd4c7aba5dbaf6f616db03/query`, {
    method: 'POST',
    headers,
    cache: 'force-cache',
  });

  const data = await res.json();

  return data as QueryDatabaseResponse;
}
