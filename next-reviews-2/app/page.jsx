import Heading from "@/components/Heading";
import Link from "next/link";
import { getFeaturedReviews } from "@/lib/reviews";

export default async function HomePage() {
  const review = await getFeaturedReviews();
  return (
    <>
      <Heading>Epiq Gamer</Heading>
      <p className="pb-3">Reviewing only the best indie games!</p>
      <div className="border w-80 bg-blue-400 text-white rounded shadow hover:shadow-xl sm:w-full">
        <Link
          href={`/reviews/${review.slug}`}
          className="flex flex-col sm:flex-row"
        >
          <img
            src={review.image}
            alt=""
            width="320"
            height="180"
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2 className="py-1 text-center font-semibold font-orbitron sm:px-2">
            {review.title}
          </h2>
        </Link>
      </div>
    </>
  );
}
