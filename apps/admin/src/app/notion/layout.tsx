//refer: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
export const metadata = {
  title: 'notion',
  description: 'notion page',
};

export default function NotionLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <h1>notion</h1>
      {children}
    </section>
  );
}
