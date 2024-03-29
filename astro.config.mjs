import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  })],
  site: "https://christopherm99.github.io",
});