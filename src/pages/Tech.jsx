export default function Tech() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-neutral-950 dark:text-neutral-100">
        {/* Navbar */}
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 bg-white/80 dark:bg-neutral-900/80 border-b border-black/5 dark:border-white/5">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <a href="#home" className="font-semibold tracking-tight">{PROFILE.name}</a>
            <nav className="hidden md:flex gap-6 text-sm">
              <a href="#projects" className="hover:opacity-70">Projects</a>
              <a href="#skills" className="hover:opacity-70">Skills</a>
              <a href="#experience" className="hover:opacity-70">Experience</a>
              <a href="#contact" className="hover:opacity-70">Contact</a>
            </nav>
            <div className="flex items-center gap-2">
              <Button variant="secondary" onClick={() => setDark(d => !d)} aria-label="Toggle theme">
                {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <a href={PROFILE.resumeUrl} target="_blank" rel="noreferrer">
                <Button><FileText className="h-4 w-4 mr-2" />Resume</Button>
              </a>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section id="home" className="mx-auto max-w-6xl px-4 py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">{PROFILE.role}</h1>
            <p className="mt-4 text-lg max-w-2xl text-gray-600 dark:text-neutral-300">{PROFILE.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`mailto:${PROFILE.email}`}>
                <Button><Mail className="h-4 w-4 mr-2" />Email</Button>
              </a>
              <a href={PROFILE.github} target="_blank" rel="noreferrer">
                <Button variant="outline"><Github className="h-4 w-4 mr-2" />GitHub</Button>
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                <Button variant="outline"><Linkedin className="h-4 w-4 mr-2" />LinkedIn</Button>
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-500 dark:text-neutral-400">{PROFILE.location}</div>
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl font-bold">Featured Projects</h2>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-sm underline opacity-80 hover:opacity-100">
              See all
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <Card key={p.title} className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {p.title}
                    <a href={p.link} target="_blank" rel="noreferrer" className="opacity-70 hover:opacity-100">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-neutral-300">{p.blurb}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-neutral-800 border border-black/5 dark:border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mx-auto max-w-6xl px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(SKILLS).map(([group, items]) => (
              <Card key={group} className="rounded-2xl">
                <CardHeader>
                  <CardTitle>{group}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {items.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-neutral-800 border border-black/5 dark:border-white/10"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mx-auto max-w-6xl px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          <div className="space-y-4">
            {EXPERIENCE.map((e) => (
              <Card key={e.org} className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>
                      {e.role} — <span className="opacity-80">{e.org}</span>
                    </span>
                    <span className="text-sm opacity-70">{e.time}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-neutral-300">
                    {e.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="mt-16 border-t border-black/5 dark:border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-semibold">Portfolio & selected work</div>
              <div className="text-sm opacity-80">
                A snapshot of projects, skills, and experience in data and analytics.
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a href={`mailto:${PROFILE.email}`} className="opacity-90 hover:opacity-100">
                <Button variant="outline"><Mail className="h-4 w-4 mr-2" />Email</Button>
              </a>
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="opacity-90 hover:opacity-100">
                <Button variant="outline"><Github className="h-4 w-4 mr-2" />GitHub</Button>
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="opacity-90 hover:opacity-100">
                <Button variant="outline"><Linkedin className="h-4 w-4 mr-2" />LinkedIn</Button>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
