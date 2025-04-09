import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-10 lg:py-36 text-center">
      <div className="container mx-auto py-10 flex flex-col items-center justify-center">
        <h1>Project Not Found</h1>
        <p className="  mt-4">
          The project you are looking for doesn't exist or has been removed.
        </p>
        <Link href="/bwosh-residential">
          <p className="mt-6 px-6 py-2 bg-black text-white rounded-lg ">
            Go Back to home
          </p>
        </Link>
      </div>
    </section>
  );
}
