import { Button } from "@/components/ui/button";
import { ArrowIcon } from "@/components/shared/icons";
export function WorkWithUs() {
  return (
   <section className="work_wrapper flex justify-center px-4 sm:px-6 md:px-8 py-8">
  <div className="relative flex work_container items-center justify-center w-full p-4 sm:p-6 md:p-8">
    <div className="items-center w-full md:w-[80%] flex flex-col gap-[24px]">
      <section className="relative z-10 text-center flex flex-col w-full items-center gap-[24px]">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">Work With Us</h1>
        <p className="mt-2 text-sm sm:text-base md:text-lg text-black w-full sm:w-[75%] md:w-[50%]">
          Maybe we can put a write-up here. Maybe just maybe. Writing
          here as an example of what it’ll look like. Please don’t judge
          me. Thank you
        </p>
      </section>
      <section className="work_btns flex flex-row flex-wrap justify-center gap-[1rem]">
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
