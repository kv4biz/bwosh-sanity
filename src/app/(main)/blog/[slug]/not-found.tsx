import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-10 lg:py-36 text-center">
      <div className="container px-2 lg:px-0 mx-auto py-10 flex flex-col items-center justify-center">
        <h1>blog post Not Found</h1>
        <p className="  mt-4">
          The blog post you are looking for doesn't exist or has been removed.
        </p>
        <Link href="/blog">
          <p className="mt-6 px-6 py-2 bg-black text-white rounded-lg ">
            Go Back to blog
          </p>
        </Link>
      </div>
    </section>
  );
}
