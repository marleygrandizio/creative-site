
import { motion } from "framer-motion";

const benefits = [
  {
    number: "01",
    title: "Effortless everyday style",
    description:
      "A subtle logo and an understated look that pairs easily with the pieces already in your wardrobe.",
  },
  {
    number: "02",
    title: "From campus to coast",
    description:
      "Style it with denim shorts, relaxed trousers, or your favorite sweats for everyday plans.",
  },
  {
    number: "03",
    title: "A little summer in every outfit",
    description:
      "A sunset-inspired pink color brings a soft, seasonal feel to a minimalist essential.",
  },
];

export default function SunsetProductContent() {
  const productImage = `${import.meta.env.BASE_URL}shirt%202.jpg`;

  
  
  const productUrl = 'https://shop.merch.google/product/apparel/google-island-sunset-womens-tee-ggoegxxx2346?itemListName=Search';

  return (
    <div className="w-full overflow-hidden bg-[#fffaf5] text-[#29251f]">
      {/* Hero */}
      <section
        id="the-design"
        className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:px-12 md:py-28 lg:grid-cols-2"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="order-2 md:order-1"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#a65e6e]">
            The Spring / Summer Edit
          </p>

          <h2 className="max-w-xl text-4xl font-medium leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">
            Your everyday tee.
            <span className="mt-2 block text-[#c77989]">
              Your summer state of mind.
            </span>
          </h2>

          <p className="mt-6 max-w-lg text-base leading-7 text-[#6d655d] md:text-lg">
            Meet the Google Sunset Pink Tee — a laid-back essential for
            beach afternoons, campus coffee runs, and spontaneous summer plans.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={productUrl}
              className="inline-flex items-center justify-center rounded-full bg-[#29251f] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#a65e6e]"
            >
              Shop the Tee <span className="ml-3">↗</span>
            </a>

            <a
              href="#the-details"
              className="inline-flex items-center justify-center rounded-full border border-[#d8c9bd] px-7 py-4 text-sm font-medium transition hover:bg-[#f4e6e3]"
            >
              Discover the Details
            </a>
          </div>

          <p className="mt-5 text-xs text-[#8a8178]">
            Your next everyday favorite, from campus to coast.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75 }}
          className="order-1 md:order-2"
        >
          <div className="relative overflow-hidden rounded-[2rem] bg-[#f1dadd] p-5 md:p-8">
            <div className="absolute left-7 top-7 z-10 rounded-full bg-[#fffaf5]/90 px-4 py-2 text-xs uppercase tracking-widest">
              Sunset essentials
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <img
                src={productImage}
                alt="Google Sunset Pink Tee, front detail from the supplied photo"
                className="aspect-[4/5] w-full rounded-2xl object-contain"
              />
              <img
                src={`${import.meta.env.BASE_URL}google-island-sunset-tee.webp`}
                alt="Google Island Sunset Tee product photo"
                className="aspect-[4/5] w-full rounded-2xl object-contain"
              />
            </div>

            <p className="px-2 pb-2 pt-4 text-center text-sm text-[#725c5d]">
              Simple style. Endless summer plans.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Brand statement */}
      <section className="bg-[#f2e9de] px-6 py-16 text-center md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a65e6e]">
          Made for the in-between moments
        </p>
        <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-medium leading-tight md:text-5xl">
          Coffee runs, coastal afternoons, and nowhere else to be.
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#6d655d]">
          Keep your look uncomplicated. Pair your tee with your favorite
          basics and take on whatever the day has planned.
        </p>
      </section>

      {/* Benefits */}
      <section
        id="the-details"
        className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28"
      >
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a65e6e]">
            The everyday essential
          </p>
          <h2 className="mt-4 text-4xl font-medium tracking-tight md:text-5xl">
            Less fuss. More summer.
          </h2>
          <p className="mt-5 leading-7 text-[#6d655d]">
            Not every outfit needs to make a statement. Sometimes, the
            best piece is the one that goes with everything.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.article
              key={benefit.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-3xl border border-[#eaded4] bg-white/70 p-7"
            >
              <p className="text-sm text-[#b46f7c]">{benefit.number}</p>
              <h3 className="mt-8 text-xl font-medium">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#6d655d]">
                {benefit.description}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Lifestyle campaign */}
      <section
        id="story"
        className="grid bg-[#dce7e4] md:grid-cols-2"
      >
        <div className="flex flex-col justify-center px-7 py-16 md:px-14 lg:px-20 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#58766d]">
            Your summer uniform
          </p>
          <h2 className="mt-5 text-4xl font-medium leading-tight md:text-5xl">
            From the first class to the last light.
          </h2>
          <p className="mt-6 leading-7 text-[#4e625c]">
            Built around the way you actually spend your days:
            casual campus mornings, beach-town afternoons, and
            plans that happen along the way.
          </p>
          <a
            href={productUrl}
            className="mt-8 inline-flex w-fit items-center rounded-full bg-[#29251f] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#58766d]"
          >
            Find Your Everyday Tee <span className="ml-3">↗</span>
          </a>
        </div>

        <div className="flex min-h-[320px] items-center justify-center bg-[#c7d8d2] p-8">
          <div className="max-w-sm text-center">
            <p className="text-6xl" aria-hidden="true">☀</p>
            <p className="mt-5 text-2xl font-medium">
              Somewhere between the shore and the everyday.
            </p>
            <p className="mt-3 text-sm leading-6 text-[#4e625c]">
              A laid-back approach to summer dressing.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 text-center md:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a65e6e]">
          The Sunset Edit
        </p>
        <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-medium md:text-6xl">
          Your wardrobe called. It wants summer.
        </h2>
        <p className="mx-auto mt-5 max-w-lg leading-7 text-[#6d655d]">
          Keep it simple with a laid-back tee made for your everyday rotation.
        </p>
        <a
          href={productUrl}
          className="mt-8 inline-flex items-center rounded-full bg-[#29251f] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#a65e6e]"
        >
          Shop the Sunset Pink Tee <span className="ml-3">↗</span>
        </a>
      </section>

      {/* Google social links */}
      <section className="border-t border-[#eaded4] px-6 py-10 text-center" aria-label="Google social links">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a65e6e]">Follow Google</p>
        <div className="mt-4 flex justify-center gap-6 text-sm">
          <a href="https://www.instagram.com/google/?hl=en" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-[#a65e6e]">Instagram ↗</a>
          <a href="https://www.linkedin.com/company/google/" target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-[#a65e6e]">LinkedIn ↗</a>
        </div>
      </section>
    </div>
  );
}
