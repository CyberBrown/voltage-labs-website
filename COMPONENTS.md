# Voltage Labs Website Components

This document provides an overview of the core components built for the Voltage Labs website.

## Component Overview

All components follow these principles:

- **Qwik Framework**: Uses `component$()` pattern and signals for reactive state
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels and keyboard navigation
- **Responsive**: Mobile-first design with breakpoint at 768px
- **Design System**: Uses CSS variables from `global.css`
- **TypeScript**: Fully typed with proper interfaces
- **Professional Tone**: Authoritative design targeting 40-60 year old MBA executives

## Components

### 1. Logo Component

**Location**: `/src/components/logo/logo.tsx`

**Purpose**: Smart logo component that switches based on viewport size and theme.

**Features**:

- Desktop light mode: Full logo with text (`full_logo_white_background_transparent.png`)
- Desktop dark mode: Icon only (`voltage_labs_dark_background_logo_only.png`)
- Mobile (< 768px): Icon only all modes (`voltage_labs_logo_only_transparent.png`)
- Accessible with proper alt text
- CSS-based switching (no JavaScript flickering)

**Props**:

```tsx
interface LogoProps {
  class?: string; // Optional additional CSS classes
}
```

**Usage**:

```tsx
import { Logo } from "~/components/logo";

<Logo />
<Logo class="custom-class" />
```

**Logo Files Required**:
Place these files in `/public/logos/`:

1. `full_logo_white_background_transparent.png` - Full logo for desktop light mode
2. `voltage_labs_dark_background_logo_only.png` - Icon for desktop dark mode
3. `voltage_labs_logo_only_transparent.png` - Icon for mobile

See `/public/logos/README.md` for detailed specifications.

---

### 2. Header Component

**Location**: `/src/components/header/header.tsx`

**Purpose**: Site-wide navigation header with responsive menu and theme toggle.

**Features**:

- Logo on the left (using Logo component)
- Desktop navigation: Home | Services | About | Contact
- Dark mode toggle button (moon/sun icons)
- Mobile hamburger menu
- Sticky header with shadow on scroll
- Active link highlighting
- Full keyboard navigation support
- Minimum 44x44px touch targets

**State Management**:

- `theme`: Current theme (light/dark)
- `mobileMenuOpen`: Mobile menu visibility
- `isScrolled`: Scroll state for header shadow

**Usage**:

```tsx
import { Header } from "~/components/header";

<Header />;
```

**Navigation Links**:
To modify navigation links, edit the `navLinks` array in the component:

```tsx
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
```

**Accessibility**:

- ARIA labels on all interactive elements
- `aria-current="page"` on active links
- `aria-expanded` and `aria-controls` on mobile menu toggle
- Proper role attributes (`banner`, `navigation`)
- Skip-to-content link available

---

### 3. Footer Component

**Location**: `/src/components/footer/footer.tsx`

**Purpose**: Site-wide footer with company information and links.

**Features**:

- Three columns on desktop (768px+), stacked on mobile
- Column 1: Logo and company tagline
- Column 2: Quick navigation links
- Column 3: Contact information
- Copyright notice at bottom
- Professional, minimal design
- All links accessible with proper focus states

**Usage**:

```tsx
import { Footer } from "~/components/footer";

<Footer />;
```

**Customization**:
Edit the following in the component:

- `tagline`: Company description
- `quickLinks`: Footer navigation
- Contact information (email, phone, location)

**Contact Information**:
Current placeholders:

- Email: `info@voltagelabs.com`
- Phone: `(123) 456-7890`
- Location: `Metro Boston`

---

### 4. Layout Component

**Location**: `/src/components/layout/layout.tsx`

**Purpose**: Main layout wrapper combining Header, Footer, and page content.

**Features**:

- Flexbox layout ensuring footer stays at bottom
- Skip-to-content link for accessibility
- Uses Qwik's `Slot` for page content

**Usage**:

```tsx
import { Layout } from "~/components/layout";

export default component$(() => {
  return (
    <Layout>
      <h1>Page Title</h1>
      <p>Page content goes here</p>
    </Layout>
  );
});
```

---

## Design System

All components use CSS variables defined in `/src/global.css`:

### Colors

- `--primary`: Primary brand color
- `--secondary`: Secondary color
- `--accent`: Accent/hover color
- `--background`: Page background
- `--foreground`: Text color
- `--muted`: Muted backgrounds
- `--muted-foreground`: Muted text
- `--border`: Border color
- `--ring`: Focus ring color

### Spacing

- `--spacing-xs` to `--spacing-3xl`
- `--container-max-width`: 1200px
- `--container-padding`: 1.5rem

### Typography

- `--font-sans`: System font stack
- Fluid typography using `clamp()`

### Other

- `--radius`: Border radius (0.5rem)

---

## Accessibility Features

All components meet WCAG 2.1 AA standards:

1. **Keyboard Navigation**
   - All interactive elements are keyboard accessible
   - Visible focus indicators on all focusable elements
   - Logical tab order

2. **Screen Readers**
   - Proper semantic HTML
   - ARIA labels and landmarks
   - `role` attributes where appropriate
   - Alt text for images

3. **Touch Targets**
   - Minimum 44x44px on mobile
   - Adequate spacing between interactive elements

4. **Color Contrast**
   - Text meets minimum contrast ratios
   - Focus indicators are clearly visible
   - Works in both light and dark modes

5. **Motion**
   - Respects `prefers-reduced-motion`
   - Smooth transitions can be disabled

---

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet/Desktop**: >= 768px

Components use mobile-first approach with `min-width` media queries.

---

## Dark Mode

Dark mode is implemented using:

1. `.dark` class on `<html>` element
2. CSS variables that change based on `.dark` class
3. Theme state stored in localStorage
4. System preference detection on first visit

**Theme Toggle**:
The Header component includes a theme toggle button that:

- Shows moon icon in light mode
- Shows sun icon in dark mode
- Saves preference to localStorage
- Applies theme to entire document

---

## Testing Checklist

- [ ] All logo variants display correctly
- [ ] Logo switches appropriately on theme change
- [ ] Logo switches appropriately on viewport resize
- [ ] Header navigation links work
- [ ] Active link highlighting works correctly
- [ ] Mobile menu opens and closes
- [ ] Header shadow appears on scroll
- [ ] Dark mode toggle functions properly
- [ ] Dark mode persists on page reload
- [ ] Footer columns stack properly on mobile
- [ ] All links have proper focus states
- [ ] Keyboard navigation works throughout
- [ ] Skip-to-content link appears on tab
- [ ] Touch targets are adequate on mobile
- [ ] Color contrast meets WCAG standards

---

## Next Steps

1. **Add Logo Files**: Place the three logo files in `/public/logos/`
2. **Update Contact Info**: Edit Footer component with real contact details
3. **Customize Content**: Update tagline and other content as needed
4. **Add Routes**: Create page components for Services, About, and Contact
5. **Test Accessibility**: Run automated tests with tools like axe DevTools
6. **Test on Devices**: Verify on actual mobile devices and different browsers

---

## File Structure

```
src/
├── components/
│   ├── logo/
│   │   ├── logo.tsx
│   │   ├── logo.module.css
│   │   └── index.ts
│   ├── header/
│   │   ├── header.tsx
│   │   ├── header.module.css
│   │   └── index.ts
│   ├── footer/
│   │   ├── footer.tsx
│   │   ├── footer.module.css
│   │   └── index.ts
│   └── layout/
│       ├── layout.tsx
│       ├── layout.module.css
│       └── index.ts
├── utils/
│   └── theme.ts
└── global.css

public/
└── logos/
    ├── full_logo_white_background_transparent.png
    ├── voltage_labs_dark_background_logo_only.png
    ├── voltage_labs_logo_only_transparent.png
    └── README.md
```

---

## Support

For questions or issues with these components, please refer to:

- Qwik documentation: https://qwik.builder.io/
- WCAG 2.1 Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
- CSS Variables: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
