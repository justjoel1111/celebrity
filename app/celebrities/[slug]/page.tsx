import { Metadata } from 'next';
import ClientCelebrityProfile from './client-component';

// This generates the static paths for all celebrity slugs at build time
export function generateStaticParams() {
  // In a real app, this would come from your data source (API, database, etc.)
  // For demo, we'll use hardcoded celebrity slugs
  return [
    { slug: 'taylor-swift' },
    { slug: 'dwayne-johnson' },
    { slug: 'ed-sheeran' },
    { slug: 'emma-stone' },
    { slug: 'oprah-winfrey' },
    { slug: 'john-legend' }
  ];
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // In a real app, you would fetch the celebrity data based on the slug
  return {
    title: `${params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} | Celebrity Booking`,
    description: `Book ${params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} for your next event. Exclusive celebrity booking platform.`,
  };
}

export default function CelebrityProfilePage({ params }: { params: { slug: string } }) {
  return <ClientCelebrityProfile slug={params.slug} />;
}