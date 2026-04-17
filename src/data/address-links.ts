import { ID_GITHUB, ID_LINKEDIN, MAILTO_EMAIL, PHONE_NUMBER } from 'astro:env/client';
import { type Props as AddressLinkProps } from '@components/body/footer/AddressLink.astro';

export const addressLinks: AddressLinkProps[] = [
  {
    href: `tel:${PHONE_NUMBER}`,
    iconName: 'phone',
    label: PHONE_NUMBER,
  },
  {
    href: `mailto:${MAILTO_EMAIL}`,
    iconName: 'email',
    label: MAILTO_EMAIL,
  },
  {
    href: `https://www.linkedin.com/in/${ID_LINKEDIN}`,
    iconName: 'linkedin',
    label: ID_LINKEDIN,
    openNewTab: true,
  },
  {
    href: `https://www.github.com/${ID_GITHUB}`,
    iconName: 'github',
    label: ID_GITHUB,
    openNewTab: true,
  },
];
