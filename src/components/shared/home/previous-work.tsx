import Image from "next/image";

export function PreviousWork() {
  return (
    <section className="app_main__prev_work">
      <div className="app_main__prev_work__text_area">
        <h2>Previous Work</h2>

        <p>
          Maybe we can put a write-up here. Maybe just maybe. Writing here
          as an example of what it’ll look like. Please don’t judge me.
          Thank you
        </p>
      </div>

      <div className="app_main__prev_work__portfolio app_landing__mx">
        <div className="app_main__prev_work__portfolio__item app_main__prev_work__portfolio__item--3">
          <div className="app_main__prev_work__portfolio__item__img">
            <Image
              src="/media/landing/portfolio/Design8.png"
              alt="item 3"
              fill
            />
          </div>
        </div>

        <div className="app_main__prev_work__portfolio__item app_main__prev_work__portfolio__item--2">
          <div className="app_main__prev_work__portfolio__item__img">
            <Image
              src="/media/landing/portfolio/Design9.png"
              alt="item 2"
              fill
            />
          </div>
        </div>

        <div className="app_main__prev_work__portfolio__item app_main__prev_work__portfolio__item--1">
          <div className="app_main__prev_work__portfolio__item__img">
            <Image
              src="/media/landing/portfolio/d-10.png"
              alt="item 1"
              fill
            />
          </div>
        </div>

        <div className="app_main__prev_work__portfolio__item app_main__prev_work__portfolio__item--2">
          <div className="app_main__prev_work__portfolio__item__img">
            <Image
              src="/media/landing/portfolio/Design7.png"
              alt="item 2.1"
              fill
            />
          </div>
        </div>

        <div className="app_main__prev_work__portfolio__item app_main__prev_work__portfolio__item--3">
          <div className="app_main__prev_work__portfolio__item__img">
            <Image
              src="/media/landing/portfolio/Design6.png"
              alt="item 3.1"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
}
