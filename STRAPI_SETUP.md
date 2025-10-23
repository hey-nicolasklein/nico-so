# Strapi CMS Setup Guide

This document describes the Strapi content types needed for this portfolio website and how to set them up.

## Overview

The website uses Strapi CMS (hosted on strapi.cloud) to manage content while maintaining static site generation (SSG) at build time. Content is fetched during `getStaticProps` and cached until the next build.

## Content Types to Create in Strapi

### 1. CV Entry (Collection Type)

**API ID:** `cv-entry`

Fields:
- `title` - Text (Short text, Required)
- `category` - Enumeration (Required)
  - Values: `education`, `experience`
- `timeFrom` - Text (Short text, Required)
- `timeTo` - Text (Short text, Required)
- `description` - Rich Text (Required)
- `link` - Text (URL)
- `order` - Number (Integer, Required, Default: 0)

**Example Data:**
```json
{
  "title": "Master of Science",
  "category": "education",
  "timeFrom": "2020",
  "timeTo": "2022",
  "description": "Master of Science in Computer Science at University of Applied Sciences Saarland",
  "link": "https://www.htwsaar.de/",
  "order": 1
}
```

---

### 2. Skill (Collection Type)

**API ID:** `skill`

Fields:
- `title` - Text (Short text, Required)
- `iconName` - Text (Short text, Required)
  - Description: Name of the React Icon to use (e.g., "SiFlutter", "SiReact")
- `category` - Enumeration
  - Values: `frontend`, `backend`, `design`, `tools`, `framework`
- `order` - Number (Integer, Required, Default: 0)

**Example Data:**
```json
{
  "title": "React",
  "iconName": "SiReact",
  "category": "frontend",
  "order": 2
}
```

---

### 3. Portfolio Item (Collection Type)

**API ID:** `portfolio-item`

Fields:
- `title` - Text (Short text, Required)
- `subtitle` - Text (Short text)
- `image` - Media (Single image, Required)
- `externalLink` - Text (URL)
- `createdWith` - Text (Short text)
  - Description: Tool used (e.g., "Blender3D", "Music")
- `type` - Enumeration (Required)
  - Values: `Artwork`, `Music`, `Movie`, `Other`
- `order` - Number (Integer, Required, Default: 0)

**Example Data:**
```json
{
  "title": "Day 91",
  "subtitle": "Made during my 100days of art challenge.",
  "image": { ... },
  "externalLink": "https://www.instagram.com/p/CPyES_kBhVQ/",
  "createdWith": "Blender3D",
  "type": "Artwork",
  "order": 1
}
```

---

### 4. Page Content (Single Type)

**API ID:** `page-content`

Fields:
- `siteName` - Text (Short text, Required, Default: "Nicolas")
- `siteTitle` - Text (Short text, Required)
- `taglineDesktop` - Text (Short text, Required)
- `taglineMobile` - Text (Short text, Required)
- `metaDescription` - Text (Long text, Required)
- `heroGreeting` - Text (Short text, Required, Default: "Hey I'm")
- `aboutHeading` - Text (Short text, Required, Default: "About me")
- `aboutText` - Rich Text (Required)
- `aboutInterests` - Text (Long text)
- `cabinetDescription` - Text (Long text)
- `email` - Email (Required)
- `birthday` - Date (Required)
- `profileImage` - Media (Single image)
- `memojiLight` - Media (Single image)
- `memojiDark` - Media (Single image)

**Example Data:**
```json
{
  "siteName": "Nicolas",
  "siteTitle": "Nicolas Klein - Frontend Developer",
  "taglineDesktop": "Frontend developer by 🖤",
  "taglineMobile": "Developer by 🖤",
  "metaDescription": "👋 Hey I'm Nicolas a UX-Engineer from south-west Germany.",
  "heroGreeting": "Hey I'm",
  "aboutHeading": "About me",
  "aboutText": "I am Nicolas, a {age} years old Software Engineer from Germany...",
  "aboutInterests": "Beyond programming, I have a passion for photography and digital art.",
  "cabinetDescription": "My personal cabinet of curiosities...",
  "email": "hey@nico.so",
  "birthday": "1998-05-10"
}
```

---

### 5. Section (Collection Type)

**API ID:** `section`

Fields:
- `identifier` - UID (Required)
  - Values: `skills`, `portfolio`, `music`, `contact`
- `heading` - Text (Short text, Required)
- `description` - Text (Long text)
- `visible` - Boolean (Required, Default: true)
- `order` - Number (Integer, Required, Default: 0)

**Example Data:**
```json
{
  "identifier": "skills",
  "heading": "Skills",
  "description": "",
  "visible": true,
  "order": 1
}
```

---

### 6. Social Link (Collection Type)

**API ID:** `social-link`

Fields:
- `platform` - Text (Short text, Required)
  - Examples: "LinkedIn", "GitHub", "Instagram", "Behance"
- `url` - Text (URL, Required)
- `iconName` - Text (Short text, Required)
  - React Icon name (e.g., "FaLinkedin", "FaGithub")
- `order` - Number (Integer, Required, Default: 0)
- `visible` - Boolean (Required, Default: true)

**Example Data:**
```json
{
  "platform": "LinkedIn",
  "url": "https://www.linkedin.com/in/heynicolas/",
  "iconName": "FaLinkedin",
  "order": 1,
  "visible": true
}
```

---

### 7. Site Settings (Single Type)

**API ID:** `site-settings`

Fields:
- `footerText` - Text (Short text, Required, Default: "created with")
- `footerCopyright` - Text (Short text, Required, Default: "© {year} Nicolas Klein")
- `contactHeading` - Text (Short text, Required, Default: "Say hello 👋🏼")
- `contactCta` - Text (Short text, Required, Default: "Let's change the world together.")
- `emailSubject` - Text (Short text, Default: "Hey")
- `emailBody` - Text (Long text, Default: "Let us talk :)")

**Example Data:**
```json
{
  "footerText": "created with",
  "footerCopyright": "© {year} Nicolas Klein",
  "contactHeading": "Say hello 👋🏼",
  "contactCta": "Let's change the world together.",
  "emailSubject": "Hey",
  "emailBody": "Let us talk :)"
}
```

---

## Strapi Configuration Steps

### 1. Create a Strapi Project on strapi.cloud

1. Go to https://cloud.strapi.io/
2. Create a new project (or use existing)
3. Note your project URL (e.g., `https://your-project.strapiapp.com`)

### 2. Create Content Types

For each content type listed above:
1. Go to Content-Type Builder
2. Create Collection Type or Single Type as specified
3. Add all fields with the exact API IDs mentioned
4. Save and wait for server restart

### 3. Generate API Token

1. Go to Settings → API Tokens
2. Click "Create new API Token"
3. Name: "Portfolio Website"
4. Token type: Read-only
5. Token duration: Unlimited
6. Permissions: Select all `find` and `findOne` permissions for all content types
7. Copy the generated token

### 4. Configure Environment Variables

Create `.env.local` in your project root:

```env
# Strapi CMS Configuration
NEXT_PUBLIC_STRAPI_API_URL=https://your-project.strapiapp.com
STRAPI_API_TOKEN=your_api_token_here

# Existing Spotify Configuration
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_REFRESH_TOKEN=your_spotify_refresh_token
```

### 5. Populate Content

#### CV Entries (4 items)

**Education:**
1. Master of Science (2020-2022, education)
2. Bachelor of Science (timeFrom-timeTo, education)

**Experience:**
1. UX Engineer @ Ergosign (2021-now, experience)
2. Master Thesis @ Ergosign (2020-2021, experience)

#### Skills (8 items)

1. Flutter - `SiFlutter`
2. React - `SiReact`
3. NextJS - `SiNextdotjs`
4. Qt Framework - `SiQt`
5. Figma - `SiFigma`
6. Microsoft .NET - `SiDotnet`
7. PostgreSQL - `SiPostgresql`
8. LangChain - `SiChainlink` (or custom)

#### Portfolio Items (3 items)

1. Day 91 (Artwork, Blender3D)
2. Day 88 (Artwork, Blender3D)
3. Nothing was the same (Music, Drake album)

Upload corresponding images from `/public/assets/`

#### Sections (4 items)

1. Skills - "Skills" - order: 1
2. Portfolio - "Things I love" - "My personal cabinet of curiosities..." - order: 2
3. Music - "Music I love" - "My most listened to songs..." - order: 3
4. Contact - "Say hello 👋🏼" - "Let's change the world together." - order: 4

#### Social Links (7+ items)

1. LinkedIn - https://www.linkedin.com/in/heynicolas/
2. GitHub - https://github.com/hey-nicolasklein
3. Behance - https://www.behance.net/hey_nicolasklein
4. Instagram - https://www.instagram.com/hey.nicolasklein/
5. Instagram (3D) - https://www.instagram.com/3d.nicolasklein/
6. Twitter - https://twitter.com/heynicolasklein
7. Spotify - https://open.spotify.com/user/funforstarax

### 6. Make Content Public

For each content type:
1. Go to Settings → Users & Permissions → Roles → Public
2. Enable `find` and `findOne` permissions for all content types
3. Save

---

## Development Workflow

### Static Site Generation (SSG)

Content is fetched at build time using `getStaticProps`:

```typescript
export async function getStaticProps() {
  const strapiData = await fetchAllStrapiContent();

  return {
    props: {
      ...strapiData,
    },
    // Optional: Incremental Static Regeneration (ISR)
    // revalidate: 3600, // Revalidate every hour
  };
}
```

### Content Updates

1. Edit content in Strapi CMS
2. Trigger a new build in Vercel (or your deployment platform)
3. New static pages are generated with updated content

### Optional: Incremental Static Regeneration (ISR)

If you want more frequent updates without full rebuilds, uncomment the `revalidate` option in `getStaticProps`. This will regenerate pages in the background after the specified time.

---

## Image Handling

Strapi provides image URLs via its Media Library:

```typescript
const imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item.image.url}`;
```

For optimization, use Next.js `<Image>` component with Strapi URLs as remote patterns in `next.config.js`.

---

## Troubleshooting

### API Returns Empty Data
- Check that content is published in Strapi (draft vs published)
- Verify Public role permissions are set correctly
- Check API token has correct permissions

### Build Fails
- Ensure all required fields have content in Strapi
- Check environment variables are set correctly
- Verify Strapi API URL is accessible

### Images Not Loading
- Add Strapi domain to `next.config.js` image domains
- Check image field type is correct (single media)
- Verify images are published in Strapi

---

## Migration Checklist

- [ ] Strapi project created on strapi.cloud
- [ ] All 7 content types created with correct fields
- [ ] API token generated with read permissions
- [ ] Environment variables configured
- [ ] All content types populated with existing data
- [ ] Images uploaded to Strapi Media Library
- [ ] Public permissions enabled for all content types
- [ ] API tested with Postman/curl
- [ ] Development environment tested locally
- [ ] Production build tested
- [ ] Vercel environment variables configured
