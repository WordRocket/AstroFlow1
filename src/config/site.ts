export const SITE = {
  title: 'Reliable Landscaping Niagara',
  description: 'Professional landscaping, hardscaping, tree removal, and snow removal services in Niagara and GTA. Reliable and experienced company dedicated to transforming your outdoor spaces.',
  url: 'https://reliablelandscapingniagara.com',
  author: 'Reliable Landscaping Niagara',
  phone: '905-993-0786',
  email: 'reliablelandscaping73@gmail.com',
  address: 'Serving Niagara Region and Greater Toronto Area',
  hours: {
    weekdays: '9:00 AM - 6:00 PM',
    saturday: '9:00 AM - 4:00 PM',
    sunday: 'Closed'
  }
} as const;

export const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/capabilities' },
  { name: 'Gallery', href: '/use-cases' },
  { name: 'About Us', href: '/facilities' },
  { name: 'Free Quote', href: '/rfq' },
  { name: 'Contact', href: '/documentation' },
] as const;

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/reliablelandscapingniagara',
  instagram: 'https://instagram.com/reliablelandscapingniagara',
  google: 'https://g.page/r/YOUR_GOOGLE_BUSINESS_ID'
} as const;

export const SERVICES = [
  {
    name: 'General Landscaping',
    description: 'Complete lawn care, garden design, planting, and maintenance services to keep your property looking pristine year-round.',
    icon: 'leaf'
  },
  {
    name: 'Hardscaping',
    description: 'Professional installation of patios, walkways, retaining walls, and outdoor living spaces with premium materials.',
    icon: 'brick'
  },
  {
    name: 'Tree Removal',
    description: 'Safe and efficient tree removal, trimming, and stump grinding services by certified arborists.',
    icon: 'tree'
  },
  {
    name: 'Snow Removal',
    description: 'Reliable residential and commercial snow clearing services to keep your property safe and accessible all winter.',
    icon: 'snowflake'
  }
] as const;

