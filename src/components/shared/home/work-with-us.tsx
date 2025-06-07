import { Button } from "@/components/ui/button";
import { ArrowIcon } from "@/components/shared/icons";
export function WorkWithUs() {
  return (
    <section className="work_wrapper flex justify-center bg-[url('/media/landing/smoke.png')]">
      <div className="relative flex work_container items-center justify-center p-8">
        {/* <Image
              src={smoke}
              alt="Smoke"
              className="absolute inset-0 m-auto w-64 max-w-full opacity-30 pointer-events-none"
            /> */}
        <div className="items-center w-[80%] flex flex-col gap-[24px]">
          <section className="relative z-10 text-center flex flex-col w-[100%] items-center gap-[24px]">
            <h1 className="text-4xl font-bold text-white">Work With Us</h1>
            <p className="mt-2 text-lg text-white w-[68%]">
              Maybe we can put a write-up here. Maybe just maybe. Writing
              here as an example of what it’ll look like. Please don’t judge
              me. Thank you
            </p>
          </section>
          <section className="work_btns flex gap-[1rem]">
            <Button>
              Email Us
              <ArrowIcon />
            </Button>
            <Button>
              Book a Call
              <ArrowIcon />
            </Button>
            <Button>
              SYB Socials
              <ArrowIcon />
            </Button>
          </section>
        </div>
      </div>
    </section>
  );
}
