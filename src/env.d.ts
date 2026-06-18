type ImportMetaEnv = {
  readonly APP_CV_PDF_NAME_FILE: string;
  readonly APP_ID_GITHUB: string;
  readonly APP_ID_LINKEDIN: string;
  readonly APP_MAILTO_EMAIL: string;
  readonly APP_PHONE_NUMBER: string;
}

type ImportMeta = {
  readonly env: ImportMetaEnv;
}
