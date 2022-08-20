import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      <p>This is an example for an article</p>
      <div>
        <Link href="/mdx-page">
          <a>See MDX page</a>
        </Link>
      </div>
      <div>
        <Link href="/embed">
          <a>See embedded MDX</a>
        </Link>
      </div>
      <div>
        <Link href="/swaped">
          <a>See MDX with swaped components</a>
        </Link>
      </div>
    </div>
  );
}
