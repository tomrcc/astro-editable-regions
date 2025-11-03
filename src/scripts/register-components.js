import { registerAstroComponent } from "@cloudcannon/editable-regions/astro";
import PostHero from "../components/blog/post-hero/post-hero.astro";
// TODO: Can I use an alias for an import here?

// Register your components
registerAstroComponent("PostHero", PostHero);
