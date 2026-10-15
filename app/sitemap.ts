import type { MetadataRoute } from "next";
import { useCases } from "./use-cases/cases";

export const dynamic = "force-static";

const publishedUrl = "https://worker-host.dreamlabs.co.kr/";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: publishedUrl },
    { url: `${publishedUrl}why-workerops/` },
    { url: `${publishedUrl}workerops-in-action/` },
    ...useCases.map(({ slug }) => ({ url: `${publishedUrl}use-cases/${slug}/` })),
  ];
}
