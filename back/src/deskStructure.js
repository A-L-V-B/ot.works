import {
  FiFolder,
  FiSettings,
  FiDatabase,
  FiArrowUp,
  FiArrowDown,
  FiGlobe,
  FiUsers,
} from 'react-icons/fi'

export default (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .schemaType('pageModulaire')
        .icon(FiFolder)
        .child(
          S.documentTypeList('pageModulaire')
            .title('Pages')
            .child((documentId) => S.document().documentId(documentId).schemaType('pageModulaire'))
        ),

      S.listItem()
        .title('Projects')
        .schemaType('project')
        .icon(FiDatabase)
        .child(S.documentTypeList('project').title('Projects')),

      S.listItem()
        .title('Collaborations')
        .schemaType('collaboration')
        .icon(FiUsers)
        .child(S.documentTypeList('collaboration').title('Collaborations')),

      S.divider(),

      S.listItem()
        .title('Settings')
        .icon(FiSettings)
        .child(
          S.list()
            .id('settings-level')
            .title('Settings')
            .items([
              S.listItem()
                .title('Global content')
                .icon(FiGlobe)
                .child(S.editor().id('settings').schemaType('settings').documentId('settings')),
              S.listItem()
                .title('Header')
                .icon(FiArrowUp)
                .child(S.editor().id('header').schemaType('header').documentId('header')),
              S.listItem()
                .title('Footer')
                .icon(FiArrowDown)
                .child(S.editor().id('footer').schemaType('footer').documentId('footer')),
            ])
        ),
      S.divider(),
    ])
