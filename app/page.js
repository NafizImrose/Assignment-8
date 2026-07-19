import Banner from "@/components/Banner";
import Marquee from "@/components/Marquee";
import FeaturedBooks from "@/components/FeaturedBooks";
import ReadingBenefits from "@/components/ReadingBenefits";
import Newsletter from "@/components/Newsletter";
import books from "@/data/books.json";

export default function HomePage() {
  const featured = books.slice(0, 4);

  return (
    <>
      <Banner />
      <Marquee />
      <FeaturedBooks books={featured} />
      <ReadingBenefits />
      <Newsletter />
    </>
  );
}
