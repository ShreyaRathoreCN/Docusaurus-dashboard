import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Docusaurus-dashboard/blog',
    component: ComponentCreator('/Docusaurus-dashboard/blog', '231'),
    exact: true
  },
  {
    path: '/Docusaurus-dashboard/blog/archive',
    component: ComponentCreator('/Docusaurus-dashboard/blog/archive', '3d8'),
    exact: true
  },
  {
    path: '/Docusaurus-dashboard/blog/authors',
    component: ComponentCreator('/Docusaurus-dashboard/blog/authors', '2b8'),
    exact: true
  },
  {
    path: '/Docusaurus-dashboard/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/Docusaurus-dashboard/blog/authors/all-sebastien-lorber-articles', '46c'),
    exact: true
  },
  {
    path: '/Docusaurus-dashboard/blog/authors/yangshun',
    component: ComponentCreator('/Docusaurus-dashboard/blog/authors/yangshun', '28e'),
    exact: true
  },
  {
    path: '/Docusaurus-dashboard/blog/first-blog-post',
    component: ComponentCreator('/Docusaurus-dashboard/blog/first-blog-post', 'e10'),
    exact: true
  },
  {
    path: '/Docusaurus-dashboard/blog/long-blog-post',
    component: ComponentCreator('/Docusaurus-dashboard/blog/long-blog-post', '2d9'),
    exact: true
  },
  {
    path: '/Docusaurus-dashboard/blog/mdx-blog-post',
    component: ComponentCreator('/Docusaurus-dashboard/blog/mdx-blog-post', 'a1c'),
    exact: true
  },
  {
    path: '/Docusaurus-dashboard/blog/tags',
    component: ComponentCreator('/Docusaurus-dashboard/blog/tags', '2bb'),
    exact: true
  },
  {
    path: '/Docusaurus-dashboard/blog/tags/docusaurus',
    component: ComponentCreator('/Docusaurus-dashboard/blog/tags/docusaurus', 'ceb'),
    exact: true
  },
  {
    path: '/Docusaurus-dashboard/blog/tags/facebook',
    component: ComponentCreator('/Docusaurus-dashboard/blog/tags/facebook', '54a'),
    exact: true
  },
  {
    path: '/Docusaurus-dashboard/blog/tags/hello',
    component: ComponentCreator('/Docusaurus-dashboard/blog/tags/hello', '9e0'),
    exact: true
  },
  {
    path: '/Docusaurus-dashboard/blog/tags/hola',
    component: ComponentCreator('/Docusaurus-dashboard/blog/tags/hola', 'f78'),
    exact: true
  },
  {
    path: '/Docusaurus-dashboard/blog/welcome',
    component: ComponentCreator('/Docusaurus-dashboard/blog/welcome', 'f41'),
    exact: true
  },
  {
    path: '/Docusaurus-dashboard/markdown-page',
    component: ComponentCreator('/Docusaurus-dashboard/markdown-page', 'cd4'),
    exact: true
  },
  {
    path: '/Docusaurus-dashboard/docs',
    component: ComponentCreator('/Docusaurus-dashboard/docs', '304'),
    routes: [
      {
        path: '/Docusaurus-dashboard/docs',
        component: ComponentCreator('/Docusaurus-dashboard/docs', '1f1'),
        routes: [
          {
            path: '/Docusaurus-dashboard/docs',
            component: ComponentCreator('/Docusaurus-dashboard/docs', 'a6c'),
            routes: [
              {
                path: '/Docusaurus-dashboard/docs/category/tutorial---basics',
                component: ComponentCreator('/Docusaurus-dashboard/docs/category/tutorial---basics', 'c0d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-dashboard/docs/category/tutorial---extras',
                component: ComponentCreator('/Docusaurus-dashboard/docs/category/tutorial---extras', '3f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-dashboard/docs/intro',
                component: ComponentCreator('/Docusaurus-dashboard/docs/intro', 'f19'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-dashboard/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/Docusaurus-dashboard/docs/tutorial-basics/congratulations', '8c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-dashboard/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/Docusaurus-dashboard/docs/tutorial-basics/create-a-blog-post', '701'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-dashboard/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/Docusaurus-dashboard/docs/tutorial-basics/create-a-document', '586'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-dashboard/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/Docusaurus-dashboard/docs/tutorial-basics/create-a-page', '3df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-dashboard/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/Docusaurus-dashboard/docs/tutorial-basics/deploy-your-site', '86d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-dashboard/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/Docusaurus-dashboard/docs/tutorial-basics/markdown-features', 'def'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-dashboard/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/Docusaurus-dashboard/docs/tutorial-extras/manage-docs-versions', '910'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Docusaurus-dashboard/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/Docusaurus-dashboard/docs/tutorial-extras/translate-your-site', '6d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Docusaurus-dashboard/',
    component: ComponentCreator('/Docusaurus-dashboard/', 'ab0'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
