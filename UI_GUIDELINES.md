# APPBAI HMS Frontend - UI & Design Guidelines

This document contains critical rules and patterns for any developers, agents, or AI assistants contributing to this codebase. **These rules must be adhered to strictly.**

## 🥇 The Number One Rule: UI Scaling & Density

**Always reduce the scale so it fits on all screens and does not look "zoomed in".**

The application dashboard uses a dense, compact design aesthetic. Default Tailwind sizes or standard web design sizing usually appear too large and "zoomed in" within the context of this application's layout. 

### Implementation Guidelines:
When implementing new pages or components from design assets, you must manually scale down the sizes:

1. **Typography:**
   - Avoid large font sizes. Use custom, smaller text classes.
   - Typical sizes range from `text-[8px]` for badges and micro-copy, up to `text-[12px]` or `text-xs` for standard content. 
   - Large headings should rarely exceed `text-2xl`.
   - Use `font-black` and `font-extrabold` alongside uppercase text and heavy tracking (`tracking-widest` or `tracking-[0.2em]`) to maintain legibility at small sizes.

2. **Components & Layout:**
   - **Buttons & Inputs:** Keep heights compact. Use `h-7` or `h-8` for standard buttons and inputs instead of default sizes like `h-10`.
   - **Avatars & Images:** Scale down dimensions (e.g., use `size-24` instead of `size-32` or larger).
   - **Padding & Margins:** Keep spacing tight. Prefer `gap-2`, `gap-3`, `gap-4` over larger spacing values to maximize screen real estate.
   - **Borders & Shadows:** Use thin, subtle borders (`border-gray-100`) and minimal shadows (`shadow-none` or `shadow-sm`).

**Reference Check:** Before committing a new UI component, always compare its scale and density side-by-side with the existing `app/dashboard/page.tsx` or `app/dashboard/residents/page.tsx` to ensure visual consistency.
