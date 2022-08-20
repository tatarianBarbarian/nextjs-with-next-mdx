import { MDXProvider } from "@mdx-js/react";
import Link from "next/link";
import MdxPage from "../mdx-content/mdx-post.mdx";

const CustomH1 = (props) => (
  <p style={{ color: "red", fontStyle: "italic" }} {...props} />
);

export default function Swapped() {
  return (
    <MDXProvider components={{ h1: CustomH1 }}>
      <p>h1 tag here is custom</p>
      <MdxPage />
      <Link href="../">
        <a>Go back</a>
      </Link>
    </MDXProvider>
  );
}
