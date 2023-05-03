const pages = [
  { title: 'Get started', link: '/' },
  { title: 'Accordion', link: '/docs/accordion' },
  { title: 'Buttons', link: '/docs/buttons' },
  { title: 'Icons', link: '/docs/icons' },
  { title: 'Cookie policy', link: '/docs/cookie-policy' },
  { title: 'Notification', link: '/docs/notification' },
];

const sidebar = document.querySelector('.l-full-width__sidebar');

const content = `
    <v-side-navigation>
      <v-side-navigation-section section-title="Welcome">
        ${pages
          .map(page => {
            return `<v-side-navigation-item link="${page.link}" item-title="${page.title}"></v-side-navigation-item>`;
          })
          .join('')}
      </v-side-navigation-section>
    </v-side-navigation>
`;

sidebar.innerHTML = content;
