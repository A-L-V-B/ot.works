import {baseLanguage} from './i18n'

export const localizePreview = (select) => {
  return {
    title: 'test',
  }
  return {
    ...(title && {title: `${select.title}.${baseLanguage.name}`}),
    ...(subtitle && {
      subtitle: `${select.subtitle}.${baseLanguage.name}`,
    }),
    ...(media && {media: `${select.media}.${baseLanguage.name}`}),
  }
  // if (!preview) return null;
  // const { select } = preview;
  // if (!select) return null;

  // return {
  //   select: {
  //     ...(select.title && { title: `${select.title}.${baseLanguage.name}` }),
  //     ...(select.subtitle && {
  //       subtitle: `${select.subtitle}.${baseLanguage.name}`
  //     }),
  //     ...(select.media && { media: `${select.media}.${baseLanguage.name}` })
  //   }
  // };
}
