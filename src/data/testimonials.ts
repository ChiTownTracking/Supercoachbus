/**
 * Real customer testimonials, transcribed verbatim from the live site.
 *
 * These are real people's words about a real business. They may be truncated
 * for display, but they must never be paraphrased, "improved", or embellished —
 * unlike marketing copy, accuracy outranks originality here.
 *
 * Source: chicagosupercoachbus.com homepage, retrieved 2026-08-04.
 */

export interface Testimonial {
  name: string;
  /** Verbatim. Do not edit. */
  quote: string;
  /** What the trip was — inferred from the quote's own content, not invented. */
  context: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Lauren',
    quote:
      "Had the best experience for my brother's wedding! Our driver was so helpful, kind and easy to work with. He offered to help at every chance he could. Thankful for great service--would recommend using and plan to use again in the future.",
    context: 'Wedding',
  },
  {
    name: 'Grace',
    quote:
      'Igor was amazing from the start and was very eager to help me plan my party bus (super last minute!) this is the best price and hands down the best service in Chicago. Our bus driver Jim was very friendly and even offered to mail an earring to my address after I lost it on the bus. They dealt with 30+ college kids and they were amazing.',
    context: 'Last-minute group booking',
  },
  {
    name: 'Mike',
    quote:
      'Incredibly accommodating. Made a few changes within the week leading up to our event and they were more than happy to make things work to our benefit!',
    context: 'Event with changing plans',
  },
];
