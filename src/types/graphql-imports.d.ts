
declare module '*/fragments.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const DoctorTypeAttributes: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/queries.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const searchDoctorType: DocumentNode;

  export default defaultDocument;
}
    