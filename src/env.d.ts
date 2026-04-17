type ImportMetaEnv = {
  readonly MAILTO_EMAIL: string;
  readonly PHONE_NUMBER: string;
  readonly ID_LINKEDIN: string;
  readonly ID_GITHUB: string;
}

type ImportMeta = {
  readonly env: ImportMetaEnv;
}
