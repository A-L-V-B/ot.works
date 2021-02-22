import * as Structure from 'sanity-plugin-intl-input/lib/structure';

// simpy re-exporting
export const getDefaultDocumentNode = Structure.getDefaultDocumentNode;
export default Structure.default;

//or manual implementation
// export const getDefaultDocumentNode = (props) => {
//     if (props.schemaType === 'zone') {
//         return Structure.document().views(Structure.getDocumentNodeViewsForSchemaType(props.schemaType));
//     }
//     return Structure.document();
// };

// export default () => {
//   const items = Structure.getFilteredDocumentTypeListItems();
//   return Structure.list()
//       .id('__root__')
//       .title('Content')
//       .items(items);
// };