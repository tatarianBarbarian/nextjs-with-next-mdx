import Link from "next/link";
import MdxPost, { meta } from "../mdx-content/mdx-post.mdx";

export default function Embed() {
  return (
    <>
      <p>
        This page is simple JS file placed in pages folder. <br /> It imports
        MDX file and metadata that we exported from <code>mdx-post.mdx</code>
      </p>
      <p>Imported metadata:</p>
      {JSON.stringify(meta)}
      <p>Imported MDX:</p>
      <MdxPost />
      <Link href="../">
        <a>Go back</a>
      </Link>
    </>
  );
}
