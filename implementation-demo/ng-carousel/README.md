# Angular Carousel Playground

A small Angular 19 playground that compares multiple carousel approaches in one app.

It includes:

- a simple manual carousel built with Angular state and local SVG assets
- a pure CSS `scroll-snap` carousel
- several `ngx-slick-carousel` demos with custom controls and layouts
- live image loading from the Picsum API through a shared Angular service

## Tech Stack

- Angular 19
- `ngx-slick-carousel`
- `slick-carousel`
- `jquery`
- RxJS

## What The App Shows

The home page renders a series of standalone demo components:

1. `CarouselComponent`
   - Manual image carousel using local files from `public/`
   - Previous/next buttons
   - Clickable thumbnails

2. `SlickCarouselComponent`
   - Basic Slick carousel example
   - Autoplay enabled
   - Default Slick arrows
   - Responsive `slidesToShow` behavior

3. `SlickCustomArrowsComponent`
   - Slick slider with external previous/next buttons
   - Dots enabled
   - Navigation controlled with `slickPrev()` and `slickNext()`

4. `SlickCustomPaginationComponent`
   - Slick slider with external pagination controls
   - Tracks current slide position with `(afterChange)`
   - Responsive visible-slide calculation for the counter

5. `SlickCustomThumbnailGalleryComponent`
   - Main hero slider plus synced thumbnail strip
   - Thumbnail click navigation with `slickGoTo()`
   - Product-gallery style layout

6. `SlickCenterModeComponent`
   - Slick `centerMode` demo
   - Active slide emphasized with partial neighboring slides visible

7. `SlickAutoplayProgressComponent`
   - Full-width fading slider
   - Custom progress bar tied to autoplay timing
   - Play/pause, previous/next, and dot navigation

8. `SlickDynamicSlidesComponent`
   - Runtime add/remove slide behavior
   - Starts with a subset of images, then appends remaining or generated slides

9. `CssScrollSnapComponent`
   - No carousel library required
   - Uses CSS scroll snapping with Angular-managed active slide state
   - Includes button and dot navigation

## Data Source

Most demos load images from the shared [`ImageService`](./src/app/service/image.service.ts), which calls:

- `https://picsum.photos/v2/list?page=1&limit=8`

The service maps the response into a shared `Image` interface with:

- `id`
- `title`
- `author`
- `url`
- `thumbnailUrl`

The basic manual carousel uses local SVG files from `public/` instead of the API.

## Project Structure

```text
src/app/
  components/
    carousel/
    css-scroll-snap/
    slick-carousel/
    slick-custom/
      slick-autoplay-progress/
      slick-center-mode/
      slick-custom-arrows/
      slick-custom-pagination/
      slick-custom-thumbnail-gallery/
      slick-dynamic-slides/
  interface/
  service/
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open:

```text
http://localhost:4200/
```

## Available Scripts

Run the Angular dev server:

```bash
npm start
```

Create a production build:

```bash
npm run build
```

Build in watch mode:

```bash
npm run watch
```

Run unit tests:

```bash
npm test
```

## Notes

- The Slick-based demos initialize jQuery on `window` before using `ngx-slick-carousel`.
- An internet connection is required for the Picsum-powered examples.
- If the remote image request fails, the UI shows a fallback error message in each affected demo.

## Why This Repo Is Useful

This project is a good reference if you want to learn or compare:

- custom carousel controls in Angular
- thumbnail gallery patterns
- autoplay progress indicators
- center mode layouts
- dynamic slide management
- CSS `scroll-snap` as a library-free alternative to Slick
