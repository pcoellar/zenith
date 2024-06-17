import Image from "next/image";
import { formatMonthYear } from "../../../lib/utils";
import { BlogProps } from "./blog.types";
import Link from "next/link";

export default async function Blog(props: BlogProps) {
  const blog = props.blog;
  return (
    <div key={blog.id} className="col-md-4 col-sm-6">
      <div className="single-blog-item">
        <div className="single-blog-item-img">
          <Image src={blog.coverImage} alt="blog image" width={360} height={243} />
        </div>
        <div className="single-blog-item-txt">
          <h2><Link href="#">{blog.title}</Link></h2>
          <h4>posted <span>by</span> <Link href="#">{blog.author}</Link> {formatMonthYear(blog.createdAt)}</h4>
          <p>
            {blog.text}
          </p>
        </div>
      </div>
    </div>
  );
}
