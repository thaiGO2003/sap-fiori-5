export type Guide = {
  id: string;
  title: string;
  group: 'fiori-elements' | 'fiori-freestyle' | 'tool-services';
  category: string;
  path: string; // path trong /public
};

export const guides: Guide[] = [
  // Fiori Elements
  {
    id: 'fe-create-app',
    title: 'FE: Tạo một ứng dụng SAP Fiori Elements',
    group: 'fiori-elements',
    category: 'Getting Started',
    path: '/guides/fiori-elements/getting-started/create-fe-app.html',
  },

  // Fiori Free Style
  {
    id: 'fs-app-structure',
    title: 'Free Style: Cấu trúc ứng dụng UI5',
    group: 'fiori-freestyle',
    category: 'UI5 Basics',
    path: '/guides/fiori-freestyle/ui5-basics/app-structure.html',
  },
  {
    id: 'fs-routing',
    title: 'Free Style: Routing & Navigation',
    group: 'fiori-freestyle',
    category: 'Routing',
    path: '/guides/fiori-freestyle/routing/routing-intro.html',
  },

  // Tool Services
  {
    id: 'tool-cds-dk',
    title: 'Tools: Cài đặt @sap/cds-dk',
    group: 'tool-services',
    category: 'CAP Tools',
    path: '/guides/tool-services/cap/cds-dk-install.html',
  },
  {
    id: 'tool-build-code-init',
    title: 'Tools: Khởi tạo SAP Build Code',
    group: 'tool-services',
    category: 'Build Code',
    path: '/guides/tool-services/build-code/init-build-code.html',
  },
  {
    id: 'tool-destination',
    title: 'Tools: BTP Destination cấu hình',
    group: 'tool-services',
    category: 'BTP',
    path: '/guides/tool-services/btp/destination-setup.html',
  },
];


