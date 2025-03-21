import { ArrowIcon } from "./Icons";

// Breadcrumb Component
export const Breadcrumb = ({ dynamicPath }) => {
  return (
    <nav className="flex gap-2 items-center mb-10 text-base">
      <a href="/" className="text-black">
        Home
      </a>
      <div className="flex gap-2 items-center">
        <ArrowIcon />
        <a href={dynamicPath} className="text-black capitalize">
          {dynamicPath.split("/").pop().replace("-", " ")} {/* This will extract the last part and format it */}
        </a>
      </div>
    </nav>
  );
};
