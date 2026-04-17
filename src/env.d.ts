/// <reference types="astro/client" />
type ImportMetaEnv = {
  readonly ID_GITHUB: string;
  readonly ID_LINKEDIN: string;
  readonly MAILTO_EMAIL: string;
  readonly PHONE_NUMBER: string;
}

type ImportMeta = {
  readonly env: ImportMetaEnv;
}

declare module "*.astro" {
  type AstroComponentFactory = import('astro').AstroComponentFactory;
  const Component: AstroComponentFactory;
  export default Component;
}

declare module "astro:env/client" {
  export const PHONE_NUMBER: string;
  export const MAILTO_EMAIL: string;
  export const ID_LINKEDIN: string;
  export const ID_GITHUB: string;
}
