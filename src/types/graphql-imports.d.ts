
declare module '*/fragment.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const ClinicAttributes: DocumentNode;
export const ClinicDoctorAttributes: DocumentNode;
export const ClinicDoctorAvailabilityAttributes: DocumentNode;
export const ClinicOfficeAttributes: DocumentNode;
export const ClinicTableAttributes: DocumentNode;
export const CustomerAttributes: DocumentNode;
export const DoctorAttributes: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/fragments.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const DoctorTypeAttributes: DocumentNode;
export const PersonAttributes: DocumentNode;

  export default defaultDocument;
}
    