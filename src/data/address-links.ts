import {
  APP_ID_GITHUB,
  APP_ID_LINKEDIN,
  APP_MAILTO_EMAIL,
  APP_PHONE_NUMBER,
} from 'astro:env/client';
import type { AddressLinkType } from '@t/address-link.type.ts';

export const addressLinks: AddressLinkType[] = [
  {
    ariaLabel: 'Appeler Victor Betsch par téléphone',
    href: `tel:${APP_PHONE_NUMBER}`,
    iconName: 'phone',
    label: APP_PHONE_NUMBER,
  },
  {
    ariaLabel: 'Envoyer un e-mail à Victor Betsch',
    href: `mailto:${APP_MAILTO_EMAIL}`,
    iconName: 'email',
    label: APP_MAILTO_EMAIL,
  },
  {
    ariaLabel: "Visiter le profil LinkedIn de Victor Betsch (s'ouvre dans un nouvel onglet)",
    href: `https://www.linkedin.com/in/${APP_ID_LINKEDIN}`,
    iconName: 'linkedin',
    label: APP_ID_LINKEDIN,
    openNewTab: true,
  },
  {
    ariaLabel: "Visiter le profil GitHub de Victor Betsch (s'ouvre dans un nouvel onglet)",
    href: `https://github.com/${APP_ID_GITHUB}`,
    iconName: 'github',
    label: APP_ID_GITHUB,
    openNewTab: true,
  },
];
