import { BlogPost, Testimonial, ServiceRegion } from '../types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    category: 'Land & Ranch',
    title: 'Navigating 1031 Tax-Deferred Land Exchanges in North & South Dakota',
    excerpt: 'Key timelines, qualified intermediary rules, and strategies for reinvesting agricultural proceeds into productive income-producing farmland or commercial real estate.',
    readTime: '6 min read',
    date: 'February 18, 2026',
    author: 'Chad Hanson',
    authorRole: 'Managing Broker',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    tags: ['1031 Exchange', 'Farmland', 'Tax Strategy', 'Agricultural Investment'],
    content: `
For farm families and agricultural investors across North Dakota, South Dakota, and Minnesota, a Section 1031 Exchange remains one of the most powerful wealth-preservation vehicles available under the Internal Revenue Code.

By deferring capital gains taxes and depreciation recapture on the sale of productive farm ground, pasture, or commercial real estate, sellers can roll 100% of their equity into higher-yielding replacement properties.

### The Critical Timelines You Must Know

1. **45-Day Identification Window**: From the date you close on your relinquished property, you have exactly 45 calendar days to formally identify potential replacement properties in writing to your Qualified Intermediary (QI).
2. **180-Day Purchase Window**: You must fully close on the acquisition of the designated replacement property within 180 days (or before your tax return due date, whichever is earlier).

### Three Strategic Rules for Like-Kind Farm Exchanges

* **Value Equality**: The replacement property must be of equal or greater fair market value than the relinquished property to achieve 100% tax deferral.
* **Equity Reinvestment**: All net cash proceeds must be reinvested; any cash taken out is treated as taxable "boot".
* **Debt Matching**: You must match or exceed the mortgage debt on the old property with new financing or added cash equity.

At Dakota Plains Realty, our specialized land brokers work directly alongside your CPA, tax attorney, and Qualified Intermediary to ensure a seamless transaction.
    `,
  },
  {
    id: 'post-2',
    category: 'Market Outlook',
    title: '2026 Red River Valley & Fargo Metro Real Estate Outlook',
    excerpt: 'An analysis of residential inventory trends, commercial expansion along the I-29 corridor, and interest rate impacts across the region.',
    readTime: '5 min read',
    date: 'February 10, 2026',
    author: 'Melissa Larson',
    authorRole: 'Lead Residential Specialist',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    tags: ['Market Report', 'Fargo Real Estate', 'Red River Valley', 'Home Values'],
    content: `
The Fargo-Moorhead metro area and the broader Red River Valley continue to demonstrate remarkable economic resilience compared to national coastal markets. Driven by steady job growth in healthcare, ag-tech, manufacturing, and higher education, buyer demand across all price brackets remains healthy.

### Key Market Observations

* **Executive Acreages in High Demand**: Properties offering 1 to 5 acres within a 20-minute radius of South Fargo or West Fargo are seeing rapid absorption times, particularly those with existing outbuildings or modern single-level floor plans.
* **Lakes Country Strong Spring Interest**: Early buyer inquiries for Pelican Lake, Detroit Lake, and Otter Tail County retreats are already pacing ahead of previous seasons as buyers lock in summer waterfront lifestyle assets.
* **Pricing Precision Matters**: While inventory is expanding moderately, homes priced accurately according to recent comparable sales continue to sell within 30 days.
    `,
  },
  {
    id: 'post-3',
    category: 'Land & Ranch',
    title: 'Evaluating Hunting Land & Recreational Acreage in the Dakotas',
    excerpt: 'What every sportsman and investor should check: water rights, food plot potential, thermal bedding cover, and CRP contract yields.',
    readTime: '7 min read',
    date: 'January 28, 2026',
    author: 'Travis Heitkamp',
    authorRole: 'Land & Recreational Specialist',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
    tags: ['Hunting Land', 'Pheasant Habitat', 'Recreational Acreage', 'CRP'],
    content: `
Buying recreational and hunting ground in the Dakotas is fundamentally different from buying standard real estate. A truly exceptional sporting property requires an optimal balance of four habitat pillars: food, water, thermal winter cover, and sanctuary.

### 1. Water Access & Riparian Corridors
Properties bordering rivers such as the James, Sheyenne, or Missouri river systems naturally concentrate migrating waterfowl and mature whitetail bucks. 

### 2. Income-Producing Conservation Programs
Many of our represented recreational tracts generate steady, passive annual income through the USDA Conservation Reserve Program (CRP) or agricultural cash rent on tillable food plot borders. This income can offset land taxes and maintenance costs.
    `,
  },
  {
    id: 'post-4',
    category: 'Selling Advice',
    title: 'Maximizing the Sale Price of Your Agricultural or Residential Estate',
    excerpt: 'From high-definition aerial drone mapping to professional staging and targeted regional syndication, how strategic marketing commands top dollar.',
    readTime: '4 min read',
    date: 'January 15, 2026',
    author: 'Derek Vangerud',
    authorRole: 'Commercial & Multi-Family Advisor',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80',
    tags: ['Selling Strategy', 'Property Valuation', 'Marketing', 'Drone Photography'],
    content: `
In today’s market, your property deserves far more than a simple MLS entry and a sign in the ditch. High-net-worth buyers, farmers expanding their base acreage, and relocating executives expect rich multimedia presentation.

At Dakota Plains Realty, our listing strategy incorporates 4K cinematic video walkthroughs, boundary-mapped aerial drone surveys, soil productivity index breakdowns, and targeted buyer outreach across our multi-state network.
    `,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Mark & Sarah Gunderson',
    role: 'Landowner',
    location: 'Cass County, ND',
    rating: 5,
    propertyType: '480-Acre Farmland Sale & 1031 Exchange',
    year: '2025',
    content: 'Chad and the Dakota Plains Realty team handled the sale of our generational farmland with remarkable professionalism and respect for our family’s history. They helped us coordinate a seamless 1031 exchange into top-tier commercial assets that have simplified our retirement. We couldn’t have asked for better advocates.',
  },
  {
    id: 'test-2',
    clientName: 'Dr. James & Elena Keller',
    role: 'Buyer',
    location: 'Fargo, ND',
    rating: 5,
    propertyType: 'Luxury Custom Home Purchase',
    year: '2025',
    content: 'Melissa Larson is hands-down the best realtor in the Fargo-Moorhead area. She understood exactly what our family wanted in terms of privacy, yard space, and architectural character. Her negotiation skills saved us thousands, and her local knowledge made our relocation stress-free.',
  },
  {
    id: 'test-3',
    clientName: 'David R. Olson',
    role: 'Landowner',
    location: 'Brown County, SD',
    rating: 5,
    propertyType: '640-Acre Cattle Ranch & Hunting Tract',
    year: '2024',
    content: 'Travis Heitkamp knows the land inside and out. He understood our soil types, pasture capacities, and hunting value better than anyone else. He brought qualified regional buyers to the table within two weeks and closed at full asking price. Truly first-class service.',
  },
  {
    id: 'test-4',
    clientName: 'Midwest Logistics Partners',
    role: 'Commercial Client',
    location: 'Grand Forks, ND',
    rating: 5,
    propertyType: '30,000 SF Industrial Facility Acquisition',
    year: '2025',
    content: 'Derek Vangerud provided comprehensive market analysis, zoning due diligence, and lease projections for our new regional distribution center. Dakota Plains Realty is our trusted brokerage for all commercial expansions across the Dakotas.',
  },
];

export const SERVICE_REGIONS: ServiceRegion[] = [
  {
    id: 'region-nd-east',
    name: 'Red River Valley & Eastern ND',
    state: 'ND',
    tagline: 'World-Class Farmland & Thriving Metro Hubs',
    description: 'The heart of our brokerage operations. Encompassing Fargo, West Fargo, Grand Forks, Cass County, and fertile Class I agricultural land with rich soils and booming economic development.',
    keyHubs: ['Fargo', 'West Fargo', 'Grand Forks', 'Wahpeton', 'Valley City'],
    propertyHighlights: ['Prime tillable farmland (PI 85-92)', 'Luxury residential estates', 'Commercial & distribution hubs'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'region-nd-central-west',
    name: 'Bismarck-Mandan & Missouri River Corridor',
    state: 'ND',
    tagline: 'Rolling Grasslands, State Capital, & River Bluffs',
    description: 'Serving Bismarck, Mandan, Dickinson, and the Missouri River basin. Ideal for cattle ranches, equestrian acreages, energy-corridor commercial real estate, and river-view homes.',
    keyHubs: ['Bismarck', 'Mandan', 'Dickinson', 'Minot', 'Jamestown'],
    propertyHighlights: ['Contiguous working ranches', 'Scenic river-view residences', 'Heavy commercial & industrial'],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'region-sd-east',
    name: 'Eastern South Dakota & Sioux Falls',
    state: 'SD',
    tagline: 'Dynamic Growth & Legendary Pheasant Hunting',
    description: 'Covering Sioux Falls, Aberdeen, Brookings, and the fertile James River Valley. Celebrated for high-producing grain ground, premier hunting retreats, and executive lifestyle acreages.',
    keyHubs: ['Sioux Falls', 'Aberdeen', 'Brookings', 'Watertown', 'Huron'],
    propertyHighlights: ['Recreational hunting tracts', 'Executive suburban acreages', 'Agricultural grain operations'],
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'region-mn-lakes',
    name: 'Minnesota Lakes Country & West Central MN',
    state: 'MN',
    tagline: 'Pristine Shorelines & Timbered Retreats',
    description: 'Specializing in Otter Tail, Becker, and Clay counties. From classic lakeside cottages and luxury waterfront estates on Pelican Lake and Detroit Lake to timbered hunting properties and rolling farms.',
    keyHubs: ['Pelican Rapids', 'Detroit Lakes', 'Moorhead', 'Fergus Falls', 'Perham'],
    propertyHighlights: ['Hard-sand waterfront homes', 'Lakefront building lots', 'Wooded recreational getaways'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
  },
];
