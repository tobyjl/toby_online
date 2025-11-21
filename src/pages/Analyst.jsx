import { FileText, Mail, ExternalLink } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PROFILE = {
  email: "your.work.email@company.com",
  github: "https://github.com/yourhandle",
  resumeUrl: "/analyst-one-pager.pdf",
};

export default function Analyst() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-neutral-950 dark:text-neutral-100">
      {/* CTA strip */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="rounded-2xl border border-black/5 dark:border-white/10 p-5 bg-white/60 dark:bg-neutral-900/60 backdrop-blur">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="text-sm uppercase tracking-wide opacity-70">Internal Application</div>
              <h3 className="text-xl font-semibold">Analyst — Evidence Pack</h3>
              <p className="text-sm opacity-80">Insight • Tooling • Process • Stakeholders • CI</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <a href={PROFILE.resumeUrl} target="_blank" rel="noreferrer">
                <Button><FileText className="h-4 w-4 mr-2" /> 1-pager</Button>
              </a>
              <a href={`mailto:${PROFILE.email}`}>
                <Button variant="outline"><Mail className="h-4 w-4 mr-2" /> Email</Button>
              </a>
              <a href={PROFILE.github} target="_blank" rel="noreferrer">
                <Button variant="outline"><ExternalLink className="h-4 w-4 mr-2" /> GitHub</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                PAYG Demand Handover — Ops Automation
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-neutral-800 border border-black/5 dark:border-white/10">
                  Tooling & Dashboards
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/payy-dashboard.png" alt="PAYG dashboard" className="rounded-lg border border-black/5 dark:border-white/10 mb-4" />
              <ul className="text-sm space-y-2">
                <li><b>Problem:</b> Manual, fragmented reporting slowed decisions.</li>
                <li><b>Action:</b> Pipeline (Athena SQL → Sheets → Tableau + Slack alerts) with QA checks.</li>
                <li><b>Impact:</b> ~70% manual effort reduction; faster ops visibility.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Disputes — Root Cause & Process Optimisation
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-neutral-800 border border-black/5 dark:border-white/10">
                  Process Mapping
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/process-map.png" alt="Process map" className="rounded-lg border border-black/5 dark:border-white/10 mb-4" />
              <ul className="text-sm space-y-2">
                <li><b>Problem:</b> High repeat demand due to unclear handoffs.</li>
                <li><b>Action:</b> As-is mapping (Miro), bottlenecks, streamlined steps + ownership.</li>
                <li><b>Impact:</b> Reduced rework; better time-to-resolution (pilot).</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Data Quality Visibility — Trust in Reporting
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-neutral-800 border border-black/5 dark:border-white/10">
                  Continuous Improvement
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/prov-workflow.png" alt="Provenance workflow" className="rounded-lg border border-black/5 dark:border-white/10 mb-4" />
              <ul className="text-sm space-y-2">
                <li><b>Problem:</b> Ad-hoc data issues undermined trust.</li>
                <li><b>Action:</b> Validation checks, issue log & owners, dashboard flagging.</li>
                <li><b>Impact:</b> Faster fixes; higher stakeholder confidence.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
