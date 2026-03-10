import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const articles: Record<
  string,
  { date: string; title: string; subtitle: string; body: string[]; image: string }
> = {
  'sea-expo-2026-bahrain': {
    date: '15 APR 2026',
    title: 'eDrive at Sea Expo 2026, Bahrain',
    subtitle: 'Strengthening Presence in the Gulf Region',
    body: [
      'eDrive took part in Sea Expo 2026 in Bahrain, one of the region\'s key events for the marine and watersports industry.',
      'The team presented its vision for premium JetCar experiences, manufacturing capabilities, and partnership models to an audience of industry professionals, government representatives, and potential investors from across the Gulf region.',
    ],
    image: '/fdd492a6-8a7a-43d6-9295-0fe67c08c43d.JPG',
  },
  'boat-show-2025-abu-dhabi': {
    date: '22 NOV 2025',
    title: 'eDrive at International Boat Show 2025, Abu Dhabi',
    subtitle: 'Showcasing Innovation and Manufacturing Excellence',
    body: [
      'eDrive connected with industry professionals, investors, and watersports operators at the Abu Dhabi International Boat Show 2025.',
      'The event provided an opportunity to showcase the latest developments in JetCar manufacturing, design innovation, and commercial deployment strategies.',
    ],
    image: '/e8ccc440-9767-4a1f-bd8d-d3ee5d628b19.JPG',
  },
  'dubai-boat-show-2025': {
    date: '03 MAR 2025',
    title: 'eDrive at Dubai International Boat Show 2025',
    subtitle: "One of the World's Leading Marine Exhibitions",
    body: [
      'eDrive engaged with global partners at the Dubai International Boat Show, one of the world\'s most prestigious marine exhibitions.',
      'The team presented the JetCar concept and shared its expansion vision with attendees from across Europe, Middle East, Asia, and the Americas.',
    ],
    image: '/f85ae746-83f1-4da0-bf56-84ebfa06a312.JPG',
  },
  'updated-model-r': {
    date: '10 JAN 2025',
    title: 'Introducing the Updated Model R',
    subtitle: 'Next-Generation Performance and Design',
    body: [
      'The updated Model R delivers improvements in build quality, refined detailing, and optimized performance characteristics.',
      'Enhancements include upgraded interior materials, revised exterior lines for greater visual authority, and tuned ride dynamics for improved passenger comfort at all speeds.',
    ],
    image: '/885286b6-b226-40e0-a0ec-6e0b5d06bba7.JPG',
  },
  'updated-model-f': {
    date: '10 JAN 2025',
    title: 'Introducing the Updated Model F',
    subtitle: 'Enhanced Luxury and Guest Experience',
    body: [
      'The latest Model F features upgraded finishes, improved ergonomics, and refined visual elements that elevate its Italian-inspired design language.',
      'The update focuses on enhancing the guest experience while maintaining the aggressive, performance-oriented character that defines the Model F.',
    ],
    image: '/ccb714ff-8c62-4f4f-ba91-ef29913fb0eb.JPG',
  },
  'continuous-product-evolution': {
    date: '08 DEC 2024',
    title: 'Continuous Product Evolution',
    subtitle: 'Why eDrive Invests in Model Updates',
    body: [
      'eDrive maintains a policy of continuous product improvement, incorporating operational feedback into each iteration of its vehicles.',
      'Regular upgrades ensure that every JetCar in active operation reflects the latest standards in quality, safety, and performance.',
    ],
    image: '/f37fd3e3-f6cb-4a96-85bf-178c57dbb449.JPG',
  },
  'designed-for-resorts': {
    date: '15 NOV 2024',
    title: 'Designed for Resorts and Investors',
    subtitle: 'A Proven Business Asset',
    body: [
      'eDrive JetCars serve as revenue-generating assets that combine rental efficiency with long-term durability.',
      'Designed for premium resort environments, each vehicle is engineered for daily commercial operation while maintaining the visual and experiential quality expected by high-net-worth guests.',
    ],
    image: '/0b577594-f9ca-4d62-a007-00599336147a.JPG',
  },
  'whats-next': {
    date: '01 OCT 2024',
    title: "What's Next for eDrive",
    subtitle: 'Global Expansion and New Markets',
    body: [
      'eDrive continues its international expansion with ongoing discussions across multiple regions worldwide.',
      'New market entries, strategic partnerships, and an expanding product lineup position eDrive for significant growth in the global premium watersports segment.',
    ],
    image: '/3d613cb5-4edf-4fe3-ae21-622b5a92e989.JPG',
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  return (
    <div className="bg-black text-white min-h-screen">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </section>

        {/* Content */}
        <section className="px-[var(--page-padding)] -mt-20 relative z-10 pb-28">
          <div className="max-w-[800px] mx-auto">
            <p className="text-tiffany text-xs font-bold tracking-[0.3em] uppercase mb-4">
              {article.date}
            </p>
            <h1 className="text-4xl lg:text-5xl font-black uppercase tracking-[-0.02em] mb-3">
              {article.title}
            </h1>
            <p className="text-white/50 text-lg mb-10">{article.subtitle}</p>
            <div className="space-y-6">
              {article.body.map((paragraph, i) => (
                <p key={i} className="text-white/60 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-white/[0.06]">
              <Link
                href="/news"
                className="inline-flex items-center gap-3 text-tiffany text-xs font-bold tracking-[0.2em] uppercase hover:gap-5 transition-all duration-300"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to News
              </Link>
            </div>
          </div>
        </section>
    </div>
  );
}
