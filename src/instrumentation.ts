// instrumentation.ts (Next.js App Router)
// Runs once per runtime (nodejs / edge), registers OTel with Vercel.

import { registerOTel } from "@vercel/otel";

export function register() {
  registerOTel({
    serviceName: "github-effect-http-demo",
  });
}
