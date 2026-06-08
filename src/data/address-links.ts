import { ID_GITHUB, ID_LINKEDIN, MAILTO_EMAIL, PHONE_NUMBER } from 'astro:env/client';
import type { AddressLinkType } from '@t/address-link.type.ts';

export const addressLinks: AddressLinkType[] = [
  {
    ariaLabel: 'Appeler Victor Betsch par téléphone',
    href: `tel:${PHONE_NUMBER}`,
    iconName: 'phone',
    label: PHONE_NUMBER,
  },
  {
    ariaLabel: 'Envoyer un e-mail à Victor Betsch',
    href: `mailto:${MAILTO_EMAIL}`,
    iconName: 'email',
    label: MAILTO_EMAIL,
  },
  {
    ariaLabel: "Visiter le profil LinkedIn de Victor Betsch (s'ouvre dans un nouvel onglet)",
    href: `https://www.linkedin.com/in/${ID_LINKEDIN}`,
    iconName: 'linkedin',
    label: ID_LINKEDIN,
    openNewTab: true,
  },
  {
    ariaLabel: "Visiter le profil GitHub de Victor Betsch (s'ouvre dans un nouvel onglet)",
    href: `https://github.com/${ID_GITHUB}`,
    iconName: 'github',
    label: ID_GITHUB,
    openNewTab: true,
  },
];
