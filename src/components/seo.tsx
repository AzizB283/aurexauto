import React, { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  pathname?: string;
  image?: string;
  canonical?: string;
}

const SITE_URL = "https://aurexauto.com";

function upsertMetaAttr(selector: string, attr: string, value: string) {
  const el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (el) {
    el.setAttribute(attr, value);
    return;
  }
  const meta = document.createElement("meta");
  const parts = selector.match(/\[([^=]+)=\"([^\"]+)\"\]/);
  if (parts) {
    const key = parts[1];
    const val = parts[2];
    meta.setAttribute(key, val);
    meta.setAttribute(attr, value);
    document.head.appendChild(meta);
  }
}

export default function Seo({ title, description, pathname = "/", image = "/og-image.png", canonical }: SeoProps) {
  useEffect(() => {
    const fullUrl = canonical || (SITE_URL + pathname);
    document.title = title;

    upsertMetaAttr('meta[name="description"]', 'content', description);
    upsertMetaAttr('meta[property="og:title"]', 'content', title);
    upsertMetaAttr('meta[property="og:description"]', 'content', description);
    upsertMetaAttr('meta[property="og:url"]', 'content', fullUrl);
    upsertMetaAttr('meta[property="og:image"]', 'content', SITE_URL + image);
    upsertMetaAttr('meta[property="og:type"]', 'content', 'website');

    upsertMetaAttr('meta[name="twitter:card"]', 'content', 'summary_large_image');
    upsertMetaAttr('meta[name="twitter:title"]', 'content', title);
    upsertMetaAttr('meta[name="twitter:description"]', 'content', description);
    upsertMetaAttr('meta[name="twitter:image"]', 'content', SITE_URL + image);

    // canonical link
    let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', fullUrl);

    // Inject page structured data (WebPage) including targeted keywords
    const ldId = 'seo-webpage-jsonld';
    let ld = document.getElementById(ldId) as HTMLScriptElement | null;
    const jsonld = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'url': fullUrl,
      'inLanguage': 'en-US',
      'name': title,
      'headline': title,
      'description': description,
      'keywords': ['salon automation','spa automation','restaurant reservation','booking automation','appointment scheduling','USA','small business automation']
    };
    if (!ld) {
      ld = document.createElement('script');
      ld.setAttribute('type', 'application/ld+json');
      ld.setAttribute('id', ldId);
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify(jsonld);
  }, [title, description, pathname, image, canonical]);

  return null;
}
