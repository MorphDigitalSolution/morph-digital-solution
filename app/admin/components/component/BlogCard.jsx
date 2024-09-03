import Link from "next/link";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-slate-200 p-6 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
      <p className="text-neutral-600 mb-2 break-words">
        {blog.content.substring(0, 600)}...
      </p>
      <p className="text-[#6F4E37b1] text-sm">By {blog.author}</p>
      <Link href={`/admin/blog/${blog._id}`}>
        <div className="text-blue-500 hover:underline">Read more</div>
      </Link>
    </div>
  );
};

export default BlogCard;
