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
