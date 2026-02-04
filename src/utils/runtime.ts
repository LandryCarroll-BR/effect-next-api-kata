import * as OtelResource from "@effect/opentelemetry/Resource";
import * as Tracer from "@effect/opentelemetry/Tracer";
import { Layer, ManagedRuntime } from "effect";

export const TracingLive = Tracer.layerGlobalTracer.pipe(
  Layer.provide(OtelResource.layer({ serviceName: "github-effect-http-demo" })),
);

export const AppRuntime = ManagedRuntime.make(TracingLive);
