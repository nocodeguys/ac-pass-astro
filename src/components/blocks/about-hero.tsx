import { DashedLine } from "@/components/dashed-line";

const stats = [
  {
    value: "10K+",
    label: "Active Installations",
  },
  {
    value: "500K+",
    label: "Access Periods Granted",
  },
  {
    value: "99.9%",
    label: "Uptime Reliability",
  },
  {
    value: "4.9/5",
    label: "Customer Satisfaction",
  },
];

export function AboutHero() {
  return (
    <section className="">
      <div className="container flex max-w-5xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
        <div className="flex-[1.5]">
          <h1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Simplifying Digital Access Management
          </h1>

          <p className="text-muted-foreground mt-5 text-2xl md:text-3xl lg:text-4xl">
            We built Access Passes because subscription complexity was killing conversions.
          </p>

          <p className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-lg text-balance md:block lg:mt-12">
            At Access Passes, we believe selling digital access shouldn't require complex subscription systems, failed payment handling, and frustrated customers. Our mission is to give WooCommerce store owners a simpler way: one-time purchases that grant time-based access.
            <br />
            <br />
            Built on the principle that simplicity wins, Access Passes uses stackable access periods instead of recurring billing. Your customers buy time when they need it, and their access automatically extends. No payment failures, no subscription fatigue, no complexity — just straightforward access management that works.
          </p>
        </div>

        <div
          className={`relative flex flex-1 flex-col justify-center gap-3 pt-10 lg:pt-0 lg:pl-10`}
        >
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <div className="font-display text-4xl tracking-wide md:text-5xl">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
