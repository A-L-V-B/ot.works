export default {
  widgets: [
    { name: 'structure-menu' },
    // {
    //   name: 'project-info',
    //   options: {
    //     __experimental_before: [
    //       {
    //         name: 'netlify',
    //         options: {
    //           description:
    //             'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
    //           sites: [
    //             {
    //               buildHookId: '5e54de9f6ed0ad0184ba5724',
    //               title: 'Sanity Studio',
    //               name: 'sanity-gatsby-blog-studio-4pqwtm97',
    //               apiId: '41b2ae17-ae4e-4546-b55d-ae9ac4059ce0'
    //             },
    //             {
    //               buildHookId: '5e54dea0f58417d157b66a3e',
    //               title: 'Blog Website',
    //               name: 'sanity-gatsby-blog-web-5de1n3ja',
    //               apiId: '994dde14-ab29-4ce3-87e1-af35eeb8a41f'
    //             }
    //           ]
    //         }
    //       }
    //     ],
    //     data: [
    //       {
    //         title: 'GitHub repo',
    //         value: 'https://github.com/ahmedghazi/sanity-gatsby-blog',
    //         category: 'Code'
    //       },
    //       { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-5de1n3ja.netlify.com', category: 'apps' }
    //     ]
    //   }
    // },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent projects', order: '_createdAt desc', types: ['project'] },
      layout: { width: 'medium' }
    }
  ]
}
