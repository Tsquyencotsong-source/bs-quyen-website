import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Post } from "@/data/content";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block bg-white p-7 border-r border-gray-200 last:border-r-0 hover:bg-navy-pale transition-colors group"
    >
      <p className="text-[10.5px] font-semibold tracking-[0.15em] uppercase text-navy mb-3 pb-3 border-b border-gray-200">
        {post.audience}
      </p>
      <h3 className="font-serif-brand text-[17px] font-bold text-gray-900 leading-snug mb-3 group-hover:text-navy transition-colors">
        {post.title}
      </h3>
      <p className="text-[13.5px] font-light leading-relaxed text-gray-400 mb-5">
        {post.excerpt}
      </p>
      <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy group-hover:gap-3 transition-all">
        Đọc bài <ArrowRight size={14} />
      </span>
    </Link>
  );
}
