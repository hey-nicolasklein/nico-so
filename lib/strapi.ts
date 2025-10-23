/**
 * Strapi CMS API Client
 *
 * Fetches content from Strapi CMS at build time for static site generation.
 * All data is fetched during getStaticProps and cached until next build.
 */

// ============================================================================
// Strapi Response Types
// ============================================================================

interface StrapiImage {
  id: number;
  url: string;
  alternativeText?: string;
  width: number;
  height: number;
  formats?: {
    thumbnail?: { url: string };
    small?: { url: string };
    medium?: { url: string };
    large?: { url: string };
  };
}

interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Strapi v5 entity structure (direct properties, no attributes wrapper)
type StrapiEntity<T> = T & {
  id: number;
};

// ============================================================================
// Content Type Interfaces (Strapi Attributes)
// ============================================================================

export interface CvEntryAttributes {
  title: string;
  category: 'education' | 'experience';
  timeFrom: string;
  timeTo: string;
  description: string;
  link?: string;
  order: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface SkillAttributes {
  title: string;
  iconName: string;
  category?: 'frontend' | 'backend' | 'design' | 'tools' | 'framework';
  order: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface PortfolioItemAttributes {
  title: string;
  subtitle?: string;
  image: {
    data: StrapiEntity<StrapiImage>;
  };
  externalLink?: string;
  createdWith?: string;
  type: 'Artwork' | 'Music' | 'Movie' | 'Other';
  order: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface PageContentAttributes {
  siteName: string;
  siteTitle: string;
  taglineDesktop: string;
  taglineMobile: string;
  metaDescription: string;
  heroGreeting: string;
  aboutHeading: string;
  aboutText: string;
  aboutInterests?: string;
  cabinetDescription?: string;
  email: string;
  birthday: string;
  profileImage?: {
    data: StrapiEntity<StrapiImage>;
  };
  memojiLight?: {
    data: StrapiEntity<StrapiImage>;
  };
  memojiDark?: {
    data: StrapiEntity<StrapiImage>;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface SectionAttributes {
  identifier: string;
  heading: string;
  description?: string;
  visible: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface SocialLinkAttributes {
  platform: string;
  url: string;
  iconName: string;
  order: number;
  visible: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface SiteSettingsAttributes {
  footerText: string;
  footerCopyright: string;
  contactHeading: string;
  contactCta: string;
  emailSubject?: string;
  emailBody?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// ============================================================================
// Transformed/Simplified Types (for use in components)
// ============================================================================

export interface CvEntry {
  id: number;
  title: string;
  category: 'education' | 'experience';
  timeFrom: string;
  timeTo: string;
  description: string;
  link?: string;
  order: number;
}

export interface Skill {
  id: number;
  title: string;
  iconName: string;
  category?: string;
  order: number;
}

export interface PortfolioItem {
  id: number;
  title: string;
  subtitle?: string;
  imageUrl: string;
  imageAlt?: string;
  externalLink?: string;
  createdWith?: string;
  type: 'Artwork' | 'Music' | 'Movie' | 'Other';
  order: number;
}

export interface PageContent {
  siteName: string;
  siteTitle: string;
  taglineDesktop: string;
  taglineMobile: string;
  metaDescription: string;
  heroGreeting: string;
  aboutHeading: string;
  aboutText: string;
  aboutInterests?: string;
  cabinetDescription?: string;
  email: string;
  birthday: string;
  profileImageUrl?: string;
  memojiLightUrl?: string;
  memojiDarkUrl?: string;
}

export interface Section {
  id: number;
  identifier: string;
  heading: string;
  description?: string;
  visible: boolean;
  order: number;
}

export interface SocialLink {
  id: number;
  platform: string;
  url: string;
  iconName: string;
  order: number;
  visible: boolean;
}

export interface SiteSettings {
  footerText: string;
  footerCopyright: string;
  contactHeading: string;
  contactCta: string;
  emailSubject?: string;
  emailBody?: string;
}

// ============================================================================
// All Strapi Content (returned from fetchAllStrapiContent)
// ============================================================================

export interface StrapiContent {
  cvEntries: CvEntry[];
  skills: Skill[];
  portfolioItems: PortfolioItem[];
  pageContent: PageContent;
  sections: Section[];
  socialLinks: SocialLink[];
  siteSettings: SiteSettings;
}

// ============================================================================
// API Configuration
// ============================================================================

const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN || '';

/**
 * Fetches data from Strapi API
 */
async function fetchStrapi<T>(
  path: string,
  params: Record<string, any> = {},
  options: RequestInit = {}
): Promise<T> {
  const queryString = new URLSearchParams({
    populate: '*',
    ...params,
  }).toString();

  const url = `${STRAPI_API_URL}/api${path}?${queryString}`;

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...(STRAPI_API_TOKEN && { Authorization: `Bearer ${STRAPI_API_TOKEN}` }),
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    console.error(`Strapi API error: ${response.status} ${response.statusText} - ${url}`);
    throw new Error(
      `Strapi API error: ${response.status} ${response.statusText} - ${url}`
    );
  }

  return response.json();
}

// ============================================================================
// Content Fetchers
// ============================================================================

/**
 * Fetches all CV entries from Strapi
 */
export async function fetchCvEntries(): Promise<CvEntry[]> {
  try {
    const response = await fetchStrapi<StrapiResponse<StrapiEntity<CvEntryAttributes>[]>>(
      '/cv-entries',
      { 'sort[0]': 'order:asc' }
    );

    if (!response.data || !Array.isArray(response.data)) {
      return [];
    }

    return response.data.map((entity) => {
      return {
        id: entity.id,
        title: entity.title,
        category: entity.category,
        timeFrom: entity.timeFrom,
        timeTo: entity.timeTo,
        description: entity.description,
        link: entity.link,
        order: entity.order,
      };
    });
  } catch (error) {
    console.error('Error fetching CV entries:', error);
    return [];
  }
}

/**
 * Fetches all skills from Strapi
 */
export async function fetchSkills(): Promise<Skill[]> {
  try {
    const response = await fetchStrapi<StrapiResponse<StrapiEntity<SkillAttributes>[]>>(
      '/skills',
      { 'sort[0]': 'order:asc' }
    );

    if (!response.data || !Array.isArray(response.data)) {
      return [];
    }

    return response.data.map((entity) => {
      return {
        id: entity.id,
        title: entity.title,
        iconName: entity.iconName,
        category: entity.category,
        order: entity.order,
      };
    });
  } catch (error) {
    console.error('Error fetching skills:', error);
    return [];
  }
}

/**
 * Fetches all portfolio items from Strapi
 */
export async function fetchPortfolioItems(): Promise<PortfolioItem[]> {
  try {
    const response = await fetchStrapi<StrapiResponse<StrapiEntity<PortfolioItemAttributes>[]>>(
      '/portfolio-items',
      { 'sort[0]': 'order:asc', 'populate': 'image' }
    );

    if (!response.data || !Array.isArray(response.data)) {
      return [];
    }

    return response.data.map((entity) => {
      const imageData = entity.image;
      const imageUrl = imageData ? getStrapiMediaUrl((imageData as any).url) : '';

      return {
        id: entity.id,
        title: entity.title,
        subtitle: entity.subtitle,
        imageUrl,
        imageAlt: (imageData as any)?.alternativeText || null,
        externalLink: entity.externalLink || null,
        createdWith: entity.createdWith || null,
        type: entity.type,
        order: entity.order,
      };
    });
  } catch (error) {
    console.error('Error fetching portfolio items:', error);
    return [];
  }
}

/**
 * Fetches page content (single type) from Strapi
 */
export async function fetchPageContent(): Promise<PageContent | null> {
  try {
    const response = await fetchStrapi<StrapiResponse<StrapiEntity<PageContentAttributes>>>(
      '/page-content'
    );

    if (!response.data) {
      return null;
    }

    return {
      siteName: response.data.siteName,
      siteTitle: response.data.siteTitle,
      taglineDesktop: response.data.taglineDesktop,
      taglineMobile: response.data.taglineMobile,
      metaDescription: response.data.metaDescription,
      heroGreeting: response.data.heroGreeting,
      aboutHeading: response.data.aboutHeading,
      aboutText: response.data.aboutText,
      aboutInterests: response.data.aboutInterests,
      cabinetDescription: response.data.cabinetDescription,
      email: response.data.email,
      birthday: response.data.birthday,
      profileImageUrl: response.data.profileImage
        ? getStrapiMediaUrl((response.data.profileImage as any).url)
        : null,
      memojiLightUrl: response.data.memojiLight
        ? getStrapiMediaUrl((response.data.memojiLight as any).url)
        : null,
      memojiDarkUrl: response.data.memojiDark
        ? getStrapiMediaUrl((response.data.memojiDark as any).url)
        : null,
    };
  } catch (error) {
    console.error('Error fetching page content:', error);
    return null;
  }
}

/**
 * Fetches all sections from Strapi
 */
export async function fetchSections(): Promise<Section[]> {
  try {
    const response = await fetchStrapi<StrapiResponse<StrapiEntity<SectionAttributes>[]>>(
      '/sections',
      { 'sort[0]': 'order:asc' }
    );

    if (!response.data || !Array.isArray(response.data)) {
      return [];
    }

    return response.data.map((entity) => {
      return {
        id: entity.id,
        identifier: entity.identifier,
        heading: entity.heading,
        description: entity.description,
        visible: entity.visible,
        order: entity.order,
      };
    });
  } catch (error) {
    console.error('Error fetching sections:', error);
    return [];
  }
}

/**
 * Fetches all social links from Strapi
 */
export async function fetchSocialLinks(): Promise<SocialLink[]> {
  try {
    const response = await fetchStrapi<StrapiResponse<StrapiEntity<SocialLinkAttributes>[]>>(
      '/social-links',
      { 'sort[0]': 'order:asc' }
    );

    if (!response.data || !Array.isArray(response.data)) {
      return [];
    }

    return response.data.map((entity) => {
      return {
        id: entity.id,
        platform: entity.platform,
        url: entity.url,
        iconName: entity.iconName,
        order: entity.order,
        visible: entity.visible,
      };
    });
  } catch (error) {
    console.error('Error fetching social links:', error);
    return [];
  }
}

/**
 * Fetches site settings (single type) from Strapi
 */
export async function fetchSiteSettings(): Promise<SiteSettings | null> {
  try {
    const response = await fetchStrapi<StrapiResponse<StrapiEntity<SiteSettingsAttributes>>>(
      '/site-setting'
    );

    if (!response.data) {
      return null;
    }

    return {
      footerText: response.data.footerText,
      footerCopyright: response.data.footerCopyright,
      contactHeading: response.data.contactHeading,
      contactCta: response.data.contactCta,
      emailSubject: response.data.emailSubject || null,
      emailBody: response.data.emailBody || null,
    };
  } catch (error) {
    console.error('Error fetching site settings:', error);
    return null;
  }
}

// ============================================================================
// Main Function: Fetch All Content
// ============================================================================

/**
 * Fetches all content from Strapi CMS
 * This should be called in getStaticProps for static site generation
 */
export async function fetchAllStrapiContent(): Promise<Partial<StrapiContent>> {
  const [
    cvEntries,
    skills,
    portfolioItems,
    pageContent,
    sections,
    socialLinks,
    siteSettings,
  ] = await Promise.all([
    fetchCvEntries(),
    fetchSkills(),
    fetchPortfolioItems(),
    fetchPageContent(),
    fetchSections(),
    fetchSocialLinks(),
    fetchSiteSettings(),
  ]);

  return {
    cvEntries,
    skills,
    portfolioItems,
    ...(pageContent && { pageContent }),
    sections,
    socialLinks,
    ...(siteSettings && { siteSettings }),
  };
}

/**
 * Helper function to get full URL for Strapi media
 */
export function getStrapiMediaUrl(url: string): string {
  if (url.startsWith('http')) {
    return url;
  }
  return `${STRAPI_API_URL}${url}`;
}
