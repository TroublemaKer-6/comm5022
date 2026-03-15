export default function NestleAssessmentPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-stone-200">
      {/* Nav */}
      <div className="sticky top-0 z-20 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3 md:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/10 text-lg ring-1 ring-amber-500/20">
              ☕
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Nestlé Australia</p>
              <p className="text-xs text-stone-500">Assessment 1A</p>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm text-stone-400 md:flex">
            {["About", "Purpose", "Culture", "Practice"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition hover:text-amber-400"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-10 md:px-10">
        {/* Hero */}
        <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#13131a] to-[#1a1a24] ring-1 ring-white/8">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(251,191,36,0.08)_0%,_transparent_60%)]" />
          <div className="grid md:grid-cols-[1.15fr_0.85fr]">
            <div className="relative p-8 md:p-12">
              <span className="inline-block rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-400 ring-1 ring-amber-500/20">
                Assessment 1A
              </span>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
                Nestlé{" "}
                <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                  Australia
                </span>
              </h1>
              <p className="mt-3 max-w-lg text-base leading-7 text-stone-400 md:text-lg">
                A look at Nestlé's purpose, workplace culture, and how these
                shape responsible business practices.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs text-stone-400">
                {["Student: Olivia Fang", "Placement: Data Analytics", "Nestlé Australia"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/8"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="min-h-[260px] overflow-hidden rounded-r-3xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80"
                alt="Groceries"
                className="h-full w-full object-cover opacity-70"
              />
            </div>
          </div>
        </header>

        {/* Cards row */}
        <section className="mt-5 grid gap-5 md:grid-cols-2">
          <Card id="about" icon="🏢" title="About the company" intro="Quick overview">
            <p>
              Nestlé is one of the biggest food and beverage companies in the
              world, selling products in more than 180 countries.
            </p>
            <p>
              In Australia, Nestlé has been operating for over 100 years. Popular
              brands include KitKat, Nescafé, and Milo.
            </p>
            <p>
              The company is part of the consumer packaged goods industry where
              companies must respond to health trends, sustainability
              expectations, and changing customer preferences.
            </p>
          </Card>

          <Card id="purpose" icon="🎯" title="Company purpose" intro="What Nestlé aims to do">
            <div className="rounded-2xl border-l-4 border-amber-500 bg-amber-500/8 px-4 py-4 ring-1 ring-amber-500/15">
              <p className="text-base font-medium text-amber-200">
                "Enhancing quality of life and contributing to a healthier future."
              </p>
            </div>
            <p>
              This purpose shows that Nestlé is not only focused on profit. It
              also aims to improve wellbeing and support long-term sustainability.
            </p>
            <p>
              Through its "Creating Shared Value" strategy, the company connects
              business success with social goals like better nutrition,
              responsible sourcing, and environmental protection.
            </p>
          </Card>
        </section>

        <SectionDivider label="From overview to culture" />

        {/* Culture */}
        <section
          id="culture"
          className="mt-5 rounded-3xl bg-[#13131a] p-8 ring-1 ring-white/8"
        >
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500/10 text-xl ring-1 ring-amber-500/20">
              🧩
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Workplace culture</h2>
              <p className="mt-1 text-sm text-stone-500">How work is usually done</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <MiniCard
              icon="📊"
              heading="Artifacts"
              items={[
                "Dashboards and reports used daily",
                "Data discussed during meetings",
                "Teams sharing insights",
              ]}
            />
            <MiniCard
              icon="🤝"
              heading="Values"
              items={["Collaboration", "Integrity", "Innovation", "Sustainability"]}
            />
            <MiniCard
              icon="💡"
              heading="Assumptions"
              items={[
                "Data helps decision making",
                "Responsible practice matters",
                "Teams work better together",
              ]}
            />
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-[1fr_0.9fr]">
            <div className="space-y-4 text-stone-400">
              <p>
                During my placement in the data analytics team, I noticed that
                data plays an important role in everyday work. Dashboards and
                reports are frequently used to track performance and guide
                discussions.
              </p>
              <p>
                This suggests a workplace culture that values evidence,
                collaboration, and continuous improvement rather than relying
                only on intuition.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                alt="analytics"
                className="h-full w-full object-cover opacity-60"
              />
            </div>
          </div>
        </section>

        <SectionDivider label="Why culture matters in practice" />

        {/* Practice */}
        <section
          id="practice"
          className="mt-5 rounded-3xl bg-[#13131a] p-8 ring-1 ring-white/8"
        >
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500/10 text-xl ring-1 ring-amber-500/20">
              🌱
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">
                Responsible business practice
              </h2>
              <p className="mt-1 text-sm text-stone-500">
                How purpose and culture influence actions
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <SimplePoint
              title="Purpose sets direction"
              text="Because Nestlé focuses on improving quality of life, it invests in nutrition, responsible sourcing, and sustainability initiatives."
            />
            <SimplePoint
              title="Culture supports decisions"
              text="A data-driven culture helps teams measure performance and improve decisions using real evidence."
            />
            <SimplePoint
              title="Sustainability becomes practical"
              text="This can be seen in initiatives such as recyclable packaging and reducing environmental impact."
            />
            <SimplePoint
              title="Teams connect the goals"
              text="Departments such as analytics, supply chain and operations work together to turn values into actions."
            />
          </div>

          <div className="mt-6 rounded-2xl bg-amber-500/6 p-5 ring-1 ring-amber-500/15">
            <p className="text-stone-300">
              Overall, Nestlé's purpose provides the direction, while its
              workplace culture helps the company act on it. Together they
              encourage long-term thinking, collaboration, and responsible
              business decisions.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-5 rounded-3xl bg-[#13131a] p-8 ring-1 ring-white/8">
          <h2 className="text-xl font-bold text-white">Sources</h2>
          <ul className="mt-4 space-y-2 text-sm text-stone-500">
            <li>• Nestlé Global Website</li>
            <li>• Nestlé Creating Shared Value / Sustainability pages</li>
            <li>• Unsplash images</li>
          </ul>
        </footer>
      </div>
    </main>
  );
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="mt-5 flex items-center gap-4 px-1">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      <span className="rounded-full bg-amber-500/8 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-amber-500 ring-1 ring-amber-500/20">
        {label}
      </span>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
    </div>
  );
}

function Card({
  id,
  icon,
  title,
  intro,
  children,
}: {
  id: string;
  icon: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="rounded-3xl bg-[#13131a] p-8 ring-1 ring-white/8"
    >
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500/10 text-xl ring-1 ring-amber-500/20">
          {icon}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <p className="mt-1 text-sm text-stone-500">{intro}</p>
        </div>
      </div>
      <div className="mt-5 space-y-4 leading-7 text-stone-400">{children}</div>
    </section>
  );
}

function MiniCard({
  heading,
  icon,
  items,
}: {
  heading: string;
  icon: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl bg-white/3 p-5 ring-1 ring-white/8">
      <div className="flex items-center gap-2">
        <span className="text-lg">{icon}</span>
        <h3 className="text-base font-semibold text-white">{heading}</h3>
      </div>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-stone-400">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

function SimplePoint({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-white/3 p-5 ring-1 ring-white/8">
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-stone-400">{text}</p>
    </div>
  );
}
