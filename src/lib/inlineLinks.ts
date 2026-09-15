export interface InlineLink {
  phrase: string;
  href: string;
}

/** Split text into escaped text and real anchors; stale or overlapping phrases fail the build. */
export function withLinks(text: string, links: InlineLink[] = []): (string | InlineLink)[] {
  let parts: (string | InlineLink)[] = [text];
  for (const link of links) {
    if (!link.phrase || !/^(\/(?!\/)|https:\/\/|tel:)/.test(link.href)) {
      throw new Error(`Invalid inline link: ${link.phrase} -> ${link.href}`);
    }
    let placed = false;
    parts = parts.flatMap((part): (string | InlineLink)[] => {
      if (typeof part !== 'string' || placed) return [part];
      const at = part.indexOf(link.phrase);
      if (at === -1) return [part];
      placed = true;
      return [part.slice(0, at), link, part.slice(at + link.phrase.length)];
    });
    if (!placed) throw new Error(`Inline link phrase not found: "${link.phrase}" in "${text}"`);
  }
  return parts;
}
