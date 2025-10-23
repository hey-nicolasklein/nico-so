# Strapi Data Migration Guide

This document contains all the existing content that needs to be entered into your Strapi CMS.

## Content Type: CV Entry

### Education Entries

#### Entry 1: Master of Science
```
Title: Master of Science
Category: education
Time From: 2020
Time To: 2022
Description: Consolidation of the knowledge gained in the Bachelor's degree. Topics such as machine learning, software development processes and data warehouses are covered.
Link: https://www.htwsaar.de/studium-und-lehre/studienangebot/studiengaenge/praktische-informatik_master
Order: 1
```

#### Entry 2: Bachelor of Science
```
Title: Bachelor of Science
Category: education
Time From: 2019
Time To: 2020
Description: Practically oriented study of computer science with a strong focus on application development. During my studies I gained an understanding of software architectures, web development and machine learning.
Link: https://www.htwsaar.de/studium-und-lehre/studienangebot/studiengaenge/praktische-informatik_bachelor
Order: 2
```

### Experience Entries

#### Entry 1: UX Engineer @ Ergosign
```
Title: UX Engineer @ Ergosign
Category: experience
Time From: 2021
Time To: now
Description: As a UX Engineer I work side by side with UX Designers creating tailormade solutions. Lately AI has been a big part of my work, particulary retrieval-augmented generation pipelines (RAG). Technologies utilized include Langchain, Nuxt, Gitlab-CI, Figma and OpenAI.
Link: https://www.ergosign.de/de/
Order: 1
```

#### Entry 2: Master Thesis @ Ergosign
```
Title: Master Thesis @ Ergosign
Category: experience
Time From: 2020
Time To: 2021
Description: Master Thesis in industry with focus on Flutter front-end development, real-time synchronization and user experience research. Technologies utilized included Flutter, Bloc, Bloc-Hydrated, Appwrite and Gitlab-CI.
Link: https://www.ergosign.de/de/
Order: 2
```

---

## Content Type: Skill

### Skill 1: Flutter
```
Title: Flutter
Icon Name: SiFlutter
Category: frontend
Order: 1
```

### Skill 2: React
```
Title: React
Icon Name: SiReact
Category: frontend
Order: 2
```

### Skill 3: NextJS
```
Title: NextJS
Icon Name: SiNextdotjs
Category: frontend
Order: 3
```

### Skill 4: Framework (Qt)
```
Title: Framework
Icon Name: SiQt
Category: framework
Order: 4
```

### Skill 5: Figma
```
Title: Figma
Icon Name: SiFigma
Category: design
Order: 5
```

### Skill 6: Microsoft (.NET)
```
Title: Microsoft
Icon Name: SiDotnet
Category: backend
Order: 6
```

### Skill 7: PostgreSQL
```
Title: Postgress
Icon Name: SiPostgresql
Category: backend
Order: 7
```

### Skill 8: LangChain
```
Title: LangChain
Icon Name: SiLangchain
Category: tools
Order: 8
```

**Note:** Icon names come from [React Icons](https://react-icons.github.io/react-icons/). The `Si` prefix is for Simple Icons. You can browse available icons at the link above.

---

## Content Type: Portfolio Item

### Item 1: Day 91
```
Title: Day 91
Subtitle: Made during my 100days of art challenge.
Image: Upload /public/assets/Day91.png
External Link: https://www.instagram.com/p/CPyES_kBhVQ/
Created With: Blender3D
Type: Artwork
Order: 1
```

### Item 2: Day 88
```
Title: Day 88
Subtitle: Made during my 100days of art challenge.
Image: Upload /public/assets/Day88.png
External Link: https://www.instagram.com/p/CPK9v2VhphV/
Created With: Blender3D
Type: Artwork
Order: 2
```

### Item 3: Nothing was the same
```
Title: Nothing was the same
Subtitle: One of my favorite records of all time. Drake at his peak.
Image: Upload /public/assets/drake.jpg
External Link: https://www.instagram.com/p/CR_G-qwsMhL/
Created With: Music
Type: Music
Order: 3
```

---

## Content Type: Page Content (Single Type)

```
Site Name: Nicolas
Site Title: Nicolas Klein - Frontend Developer
Tagline Desktop: Frontend developer by 🖤
Tagline Mobile: Developer by 🖤
Meta Description: 👋 Hey I'm Nicolas a UX-Engineer from south-west Germany.
Hero Greeting: Hey I'm
About Heading: About me
About Text: I am Nicolas, a {age} years old Software Engineer from Germany. Currently I am building AI solutions at Ergosign GmbH.
About Interests: Beyond programming, I have a passion for photography and digital art.
Cabinet Description: My personal cabinet of curiosities with both digital and physical items in it.
Email: hey@nico.so
Birthday: 1998-05-10
Profile Image: Upload /public/assets/nicolas-klein_2024_tiny.png (or nicolas-klein_picture_tiny.jpg)
Memoji Light: Upload /public/assets/memoji.png
Memoji Dark: Upload /public/assets/memoji_dark.png
```

**Note:** The `{age}` placeholder in About Text will be automatically calculated from the birthday field.

---

## Content Type: Section

### Section 1: Skills
```
Identifier: skills
Heading: Skills
Description: (leave empty)
Visible: true
Order: 1
```

### Section 2: Portfolio
```
Identifier: portfolio
Heading: Things I love
Description: My personal cabinet of curiosities with both digital and physical items in it.
Visible: true
Order: 2
```

### Section 3: Music
```
Identifier: music
Heading: Music I love
Description: My most listened to songs in the last week on Spotify.
Visible: true
Order: 3
```

### Section 4: Contact
```
Identifier: contact
Heading: Say hello 👋🏼
Description: Let's change the world together.
Visible: true
Order: 4
```

---

## Content Type: Social Link

### Link 1: LinkedIn
```
Platform: LinkedIn
URL: https://www.linkedin.com/in/heynicolas/
Icon Name: BsLinkedin
Order: 1
Visible: true
```

### Link 2: Behance
```
Platform: Behance
URL: https://www.behance.net/hey_nicolasklein
Icon Name: BsBehance
Order: 2
Visible: true
```

### Link 3: GitHub
```
Platform: GitHub
URL: https://github.com/hey-nicolasklein
Icon Name: BsGithub
Order: 3
Visible: true
```

### Link 4: Twitter
```
Platform: Twitter
URL: https://twitter.com/heynicolasklein
Icon Name: BsTwitter
Order: 4
Visible: true
```

### Link 5: Instagram (Personal)
```
Platform: Instagram
URL: https://www.instagram.com/hey.nicolasklein/
Icon Name: BsInstagram
Order: 5
Visible: true
```

### Link 6: Instagram (3D Art)
```
Platform: Instagram 3D
URL: https://www.instagram.com/3d.nicolasklein/
Icon Name: BsInstagram
Order: 6
Visible: true
```

### Link 7: Spotify
```
Platform: Spotify
URL: https://open.spotify.com/user/funforstarax
Icon Name: BsSpotify
Order: 7
Visible: true
```

**Note:** Icon names with `Bs` prefix come from Bootstrap Icons in React Icons.

---

## Content Type: Site Settings (Single Type)

```
Footer Text: created with
Footer Copyright: © {year} Nicolas Klein
Contact Heading: Say hello 👋🏼
Contact CTA: Let's change the world together.
Email Subject: Hey
Email Body: Let us talk :)
```

**Note:** The `{year}` placeholder in Footer Copyright will be automatically replaced with the current year.

---

## Images to Upload

Make sure to upload these images from the `/public/assets/` directory to Strapi's Media Library:

### Portfolio Items
- `Day91.png`
- `Day88.png`
- `drake.jpg`

### Profile Images
- `nicolas-klein_2024_tiny.png` (or `nicolas-klein_picture_tiny.jpg`)
- `memoji.png`
- `memoji_dark.png`

---

## Migration Steps

1. **Create all content types** in Strapi following the schemas in `STRAPI_SETUP.md`
2. **Upload images** to Strapi Media Library first
3. **Enter data** in this order:
   - Site Settings (single type)
   - Page Content (single type)
   - Skills (8 entries)
   - CV Entries (4 entries: 2 education, 2 experience)
   - Portfolio Items (3 entries)
   - Sections (4 entries)
   - Social Links (7 entries)
4. **Publish all content** (make sure to click "Publish" for each entry)
5. **Test the API** using the Strapi API documentation or tools like Postman
6. **Configure environment variables** in your Next.js project
7. **Run a local build** to test the integration
8. **Deploy to production** when ready

---

## Verification Checklist

After entering all data:

- [ ] All 4 CV entries are published
- [ ] All 8 skills are published
- [ ] All 3 portfolio items are published with images
- [ ] Page Content single type is published
- [ ] All 4 sections are published
- [ ] All 7 social links are published
- [ ] Site Settings single type is published
- [ ] Public role has read permissions for all content types
- [ ] API token is generated with correct permissions
- [ ] Environment variables are configured in `.env.local`
- [ ] Next.js image domains include Strapi URL in `next.config.js`
- [ ] Test build runs successfully (`npm run build`)

---

## Troubleshooting

### Content not appearing
- Check that content is published (not in draft state)
- Verify Public role permissions in Settings > Users & Permissions > Roles > Public
- Check browser console and Next.js terminal for errors

### Images not loading
- Verify image URLs in Strapi response
- Check `next.config.js` has correct remote image patterns
- Ensure images are published in Strapi

### Build fails
- Check all required fields have content
- Verify environment variables are set
- Check Strapi API is accessible from build environment
