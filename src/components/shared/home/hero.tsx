import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowIcon } from "@/components/shared/icons";

export function Hero() {
  return (
    <section className="app_main__hero bg-[url('/media/landing/hero-2x.png')]">
      <div className="app_main__hero__text_area">
        <nav className="navbar-component">
          <section className="nav_brand">
            <Image src="/media/landing/logo.png" alt="" width={100} height={100} />
          </section>
          <section className="nav_links_wrapper">
            <ul className="nav_links">
              <li>Service</li>
              <li>Portfolio</li>
              <li>Pricing</li>
              <li>Blog</li>
              <li>About</li>
            </ul>
          </section>
        </nav>
        <div
          className="flex flex-col gap-[16px] main_text-wrapper items-center"
          style={{ fontWeight: "500" }}
        >
          <h1>Built to Speak. Made to Last</h1>

          <p className="w-[81%]">
            SYB Studios turns bold ideas into unforgettable brand
            experiences. From strategy to design, we help you connect,
            engage, and grow.
          </p>
        </div>

        <Button>
          Work With Us
          <ArrowIcon />
        </Button>
      </div>
    </section>
  );
}
