const NOTION_TOKEN = process.env.NOTION_TOKEN;

export const headers = {
  Authorization: `Bearer ${NOTION_TOKEN}`,
  'Notion-Version': '2022-06-28',
  'Content-Type': 'application/json',
};

console.log('fetch', NOTION_TOKEN);
