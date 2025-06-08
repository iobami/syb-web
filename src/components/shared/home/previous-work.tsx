import Image from "next/image";
import 'swiper/css';
import 'swiper/css/pagination';

export function PreviousWork() {
  return (
    <section className="app_main__prev_work">
      <div className="app_main__prev_work__text_area app_landing__mx">
        <h2>Previous Work</h2>

        <p>
          Maybe we can put a write-up here. Maybe just maybe. Writing here
          as an example of what it’ll look like. Please don’t judge me.
          Thank you
        </p>
      </div>

      <div className="relative overflow-hidden w-full py-2">
        <div className="whitespace-nowrap animate-scroll flex gap-4">
          {/* <!-- Repeat your items here --> */}
          <Image src="/media/landing/portfolio/work1.png" width={400} height={400} alt="Client 1" />
          <Image src="/media/landing/portfolio/work2.png" width={400} height={400} alt="Client 2" />
          <Image src="/media/landing/portfolio/work1.png" width={400} height={400} alt="Client 1" />
          <Image src="/media/landing/portfolio/work2.png" width={400} height={400} alt="Client 2" />
          {/* <!-- Duplicate the logos to make loop seamless --> */}
          <Image src="/media/landing/portfolio/work1.png" width={400} height={400} alt="Client 1" />
          <Image src="/media/landing/portfolio/work2.png" width={400} height={400} alt="Client 2" />
          <Image src="/media/landing/portfolio/work1.png" width={400} height={400} alt="Client 1" />
          <Image src="/media/landing/portfolio/work2.png" width={400} height={400} alt="Client 2" />
        </div>
      </div>
    </section>
  );
}
