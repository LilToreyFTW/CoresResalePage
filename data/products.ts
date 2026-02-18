export type Product = {
  slug: string
  name: string
  imageUrl: string
  undetected?: boolean
  shortDescription: string
  longDescription: string
}

export const PRODUCTS: Product[] = [
  {
    slug: 'apex-legends',
    name: 'Apex Legends',
    imageUrl:
      'https://www.nintendo.com/eu/media/images/assets/nintendo_switch_games/apexlegends/16x9_ApexLegends_image1600w.jpg',
    undetected: true,
    shortDescription: 'Digital product page (add your description).',
    longDescription:
      'Add a full product description here: what it includes, requirements, how support works, FAQ, and refund policy.'
  },
  {
    slug: 'call-of-duty',
    name: 'Call of Duty',
    imageUrl:
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1938090/06107605348820087bb51ca89ed620c22fe559aa/header.jpg?t=1770663933',
    undetected: true,
    shortDescription: 'Digital product page (add your description).',
    longDescription:
      'Add a full product description here: what it includes, requirements, how support works, FAQ, and refund policy.'
  },
  {
    slug: 'hwid-spoofer',
    name: 'HWID Spoofer',
    imageUrl:
      'https://chamscheats.com/uploads/monthly_2025_09/Spoofer_HWID.webp.55d666d4bdf7032ce2037f7711a655d5.webp',
    undetected: true,
    shortDescription: 'Digital product page (add your description).',
    longDescription:
      'Add a full product description here: what it includes, requirements, how support works, FAQ, and refund policy.'
  },
  {
    slug: 'arc-raiders',
    name: 'Arc Raiders',
    imageUrl:
      'https://gameinformer.com/sites/default/files/styles/content_header_l/public/2025/11/11/1147728f/arc%2520raiders%2520review%2520game%2520informer.jpg.webp',
    undetected: true,
    shortDescription: 'Digital product page (add your description).',
    longDescription:
      'Add a full product description here: what it includes, requirements, how support works, FAQ, and refund policy.'
  },
  {
    slug: 'siege-x',
    name: 'Siege X',
    imageUrl:
      'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4IZecJyhvcIUxxu0Rd1vjX/99fe1a724d46a4d9ca70c76c7a78496f/r6s-homepage-meta__1_.jpg',
    undetected: true,
    shortDescription: 'Digital product page (add your description).',
    longDescription:
      'Add a full product description here: what it includes, requirements, how support works, FAQ, and refund policy.'
  },
  {
    slug: 'tarkov',
    name: 'Tarkov',
    imageUrl:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3932890/e1367f10d469137a2ced522b642a9b1ee10450da/header.jpg?t=1770112829',
    undetected: true,
    shortDescription: 'Digital product page (add your description).',
    longDescription:
      'Add a full product description here: what it includes, requirements, how support works, FAQ, and refund policy.'
  },
  {
    slug: 'rust',
    name: 'Rust',
    imageUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/252490/header.jpg',
    undetected: true,
    shortDescription: 'Digital product page (add your description).',
    longDescription:
      'Add a full product description here: what it includes, requirements, how support works, FAQ, and refund policy.'
  },
  {
    slug: 'fortnite',
    name: 'Fortnite',
    imageUrl: 'https://i.ytimg.com/vi/adGdyCdvKz4/maxresdefault.jpg',
    undetected: true,
    shortDescription: 'Digital product page (add your description).',
    longDescription:
      'Add a full product description here: what it includes, requirements, how support works, FAQ, and refund policy.'
  }
]

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug)
}

