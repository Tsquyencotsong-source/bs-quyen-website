import { clsx } from "clsx";
import type { Publication } from "@/data/content";

const TAG_CLASSES = {
  isi:  "border-[1.5px] border-green-700 text-green-700",
  main: "border-[1.5px] border-navy text-navy",
  vn:   "border-[1.5px] border-gray-400 text-gray-500",
};

export function PubItem({ pub }: { pub: Publication }) {
  return (
    <div className="pub-item hover:-mx-3 hover:px-3">
      {/* Year */}
      <div className="font-serif-brand text-[13px] italic text-gray-400 pt-0.5">
        {pub.year}
      </div>
      {/* Body */}
      <div>
        <p className="font-serif-brand text-[16px] font-normal text-gray-900 leading-snug mb-1">
          {pub.title}
        </p>
        <p className="text-[13px] text-gray-400 leading-relaxed">
          <em>{pub.journal}</em> · {pub.ref}
        </p>
        <div className="flex gap-1.5 flex-wrap mt-2">
          {pub.tags.map((tag) => (
            <span
              key={tag.label}
              className={clsx(
                "text-[10.5px] font-semibold tracking-wide uppercase px-2 py-0.5",
                TAG_CLASSES[tag.type]
              )}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
