import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-10 lg:py-36 text-center">
      <div className="container mx-auto py-10 flex flex-col items-center justify-center">
        <h1>Item post Not Found</h1>
        <p className="  mt-4">
          The product item you are looking for doesn't exist or has been
          removed.
        </p>
        <Link href="/store">
          <p className="mt-6 px-6 py-2 bg-black text-white rounded-lg ">
            Go Back to store
          </p>
        </Link>
      </div>
    </section>
  );
}
