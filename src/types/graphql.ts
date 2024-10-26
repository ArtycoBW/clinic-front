export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  Byte: { input: any; output: any; }
  Char: { input: any; output: any; }
  Long: { input: any; output: any; }
  Short: { input: any; output: any; }
  _ByteArray: { input: any; output: any; }
  _Date: { input: any; output: any; }
  _DateTime: { input: any; output: any; }
  _Float4: { input: any; output: any; }
  _OffsetDateTime: { input: any; output: any; }
  _Time: { input: any; output: any; }
};

export type Clinic = {
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  chgCnt?: Maybe<Scalars['Long']['output']>;
  classOfficeList: _Ec_ClinicOffice;
  clinicDoctorList: _Ec_ClinicDoctor;
  clinicTableList: _Ec_ClinicTable;
  id: Scalars['ID']['output'];
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};


export type ClinicClassOfficeListArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  elemAlias?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type ClinicClinicDoctorListArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  elemAlias?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type ClinicClinicTableListArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  elemAlias?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type ClinicDoctor = {
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  aggregateRoot?: Maybe<Clinic>;
  chgCnt?: Maybe<Scalars['Long']['output']>;
  clinic: Clinic;
  clinicDoctorAvailabilityList: _Ec_ClinicDoctorAvailability;
  doctor: _G_DoctorReference;
  id: Scalars['ID']['output'];
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};


export type ClinicDoctorAggregateRootArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type ClinicDoctorClinicArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type ClinicDoctorClinicDoctorAvailabilityListArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  elemAlias?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type ClinicDoctorAvailability = {
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  aggregateRoot?: Maybe<Clinic>;
  beginDate: Scalars['_DateTime']['output'];
  chgCnt?: Maybe<Scalars['Long']['output']>;
  clinicDoctor: ClinicDoctor;
  clinicOffice: ClinicOffice;
  endDate: Scalars['_DateTime']['output'];
  id: Scalars['ID']['output'];
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};


export type ClinicDoctorAvailabilityAggregateRootArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type ClinicDoctorAvailabilityClinicDoctorArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type ClinicDoctorAvailabilityClinicOfficeArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type ClinicOffice = {
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  aggregateRoot?: Maybe<Clinic>;
  chgCnt?: Maybe<Scalars['Long']['output']>;
  clinic: Clinic;
  id: Scalars['ID']['output'];
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  officeNumber?: Maybe<Scalars['String']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};


export type ClinicOfficeAggregateRootArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type ClinicOfficeClinicArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type ClinicTable = {
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  aggregateRoot?: Maybe<Clinic>;
  beginDate: Scalars['_DateTime']['output'];
  chgCnt?: Maybe<Scalars['Long']['output']>;
  clinic: Clinic;
  clinicDoctor: ClinicDoctor;
  clinicOffice: ClinicOffice;
  comment?: Maybe<Scalars['String']['output']>;
  customer: _G_CustomerReference;
  endDate: Scalars['_DateTime']['output'];
  id: Scalars['ID']['output'];
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};


export type ClinicTableAggregateRootArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type ClinicTableClinicArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type ClinicTableClinicDoctorArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type ClinicTableClinicOfficeArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type Customer = {
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  chgCnt?: Maybe<Scalars['Long']['output']>;
  id: Scalars['ID']['output'];
  insurancePolicyNumber: Scalars['String']['output'];
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  person: _G_PersonReference;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Doctor = {
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  chgCnt?: Maybe<Scalars['Long']['output']>;
  doctorType: DoctorType;
  id: Scalars['ID']['output'];
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  person: _G_PersonReference;
  type: Scalars['String']['output'];
};


export type DoctorDoctorTypeArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type DoctorType = {
  _calc: _Calculation;
  aggregateRoot?: Maybe<RootDictionary>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isDel: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};


export type DoctorTypeAggregateRootArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type Person = {
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  birthDate?: Maybe<Scalars['_Date']['output']>;
  chgCnt?: Maybe<Scalars['Long']['output']>;
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  inn?: Maybe<Scalars['String']['output']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  lastName: Scalars['String']['output'];
  ownerId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type RootDictionary = {
  _calc: _Calculation;
  id: Scalars['ID']['output'];
  type: Scalars['String']['output'];
};

export type Stakeholder = {
  _calc: _Calculation;
  aggregateRoot?: Maybe<RootDictionary>;
  chgCnt?: Maybe<Scalars['Long']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};


export type StakeholderAggregateRootArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type Status = {
  _calc: _Calculation;
  aggregateRoot?: Maybe<RootDictionary>;
  chgCnt?: Maybe<Scalars['Long']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  initial?: Maybe<Scalars['Boolean']['output']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  stakeholder?: Maybe<Stakeholder>;
  statusType?: Maybe<Scalars['String']['output']>;
};


export type StatusAggregateRootArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type StatusStakeholderArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type StatusGraph = {
  _calc: _Calculation;
  aggregateRoot?: Maybe<RootDictionary>;
  chgCnt?: Maybe<Scalars['Long']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  statusFrom?: Maybe<Status>;
  statusTo?: Maybe<Status>;
};


export type StatusGraphAggregateRootArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type StatusGraphStatusFromArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type StatusGraphStatusToArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type SysAdminSettings = {
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  aggregateRoot?: Maybe<SysRootSecurity>;
  chgCnt?: Maybe<Scalars['Long']['output']>;
  id: Scalars['ID']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  rootSecurity: SysRootSecurity;
  value?: Maybe<Scalars['String']['output']>;
};


export type SysAdminSettingsAggregateRootArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type SysAdminSettingsRootSecurityArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type SysCheckSelect = {
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  aggregateRoot?: Maybe<SysRootSecurity>;
  beforeCommitEnable?: Maybe<Scalars['Boolean']['output']>;
  beforeOperationDisable?: Maybe<Scalars['Boolean']['output']>;
  chgCnt?: Maybe<Scalars['Long']['output']>;
  conditionValue?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  operation: SysOperation;
  orderValue?: Maybe<Scalars['Int']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  typeName?: Maybe<Scalars['String']['output']>;
};


export type SysCheckSelectAggregateRootArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type SysCheckSelectOperationArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type SysOperation = {
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  aggregateRoot?: Maybe<SysRootSecurity>;
  allowEmptyChecks?: Maybe<Scalars['Boolean']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  checkSelects: _Ec_SysCheckSelect;
  chgCnt?: Maybe<Scalars['Long']['output']>;
  disableJwtVerification?: Maybe<Scalars['Boolean']['output']>;
  hashValue?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  paramAdditions: _Ec_SysParamAddition;
  rootSecurity: SysRootSecurity;
};


export type SysOperationAggregateRootArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type SysOperationCheckSelectsArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  elemAlias?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type SysOperationParamAdditionsArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  elemAlias?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type SysOperationRootSecurityArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type SysParamAddition = {
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  aggregateRoot?: Maybe<SysRootSecurity>;
  chgCnt?: Maybe<Scalars['Long']['output']>;
  id: Scalars['ID']['output'];
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  operation: SysOperation;
  ownerId?: Maybe<Scalars['String']['output']>;
  paramAddition?: Maybe<Scalars['String']['output']>;
  paramName?: Maybe<Scalars['String']['output']>;
};


export type SysParamAdditionAggregateRootArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type SysParamAdditionOperationArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type SysRootSecurity = {
  _calc: _Calculation;
  adminSettings: _Ec_SysAdminSettings;
  aggVersion: Scalars['Long']['output'];
  chgCnt?: Maybe<Scalars['Long']['output']>;
  id: Scalars['ID']['output'];
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  operations: _Ec_SysOperation;
  ownerId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};


export type SysRootSecurityAdminSettingsArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  elemAlias?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type SysRootSecurityOperationsArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  elemAlias?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _Calculation = {
  __typename?: '_Calculation';
  bigDecimal?: Maybe<Scalars['BigDecimal']['output']>;
  boolean?: Maybe<Scalars['Boolean']['output']>;
  byte?: Maybe<Scalars['Byte']['output']>;
  byteArray?: Maybe<Scalars['_ByteArray']['output']>;
  char?: Maybe<Scalars['Char']['output']>;
  date?: Maybe<Scalars['_Date']['output']>;
  dateTime?: Maybe<Scalars['_DateTime']['output']>;
  double?: Maybe<Scalars['Float']['output']>;
  float?: Maybe<Scalars['_Float4']['output']>;
  int?: Maybe<Scalars['Int']['output']>;
  long?: Maybe<Scalars['Long']['output']>;
  offsetDateTime?: Maybe<Scalars['_OffsetDateTime']['output']>;
  short?: Maybe<Scalars['Short']['output']>;
  string?: Maybe<Scalars['String']['output']>;
  time?: Maybe<Scalars['_Time']['output']>;
};


export type _CalculationBigDecimalArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationBooleanArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationByteArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationByteArrayArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationCharArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationDateArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationDateTimeArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationDoubleArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationFloatArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationIntArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationLongArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationOffsetDateTimeArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationShortArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationStringArgs = {
  expr: Scalars['String']['input'];
};


export type _CalculationTimeArgs = {
  expr: Scalars['String']['input'];
};

export type _CompareClinicDoctorAvailabilityInput = {
  beginDate?: InputMaybe<Scalars['_DateTime']['input']>;
  endDate?: InputMaybe<Scalars['_DateTime']['input']>;
};

export type _CompareClinicInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type _CompareClinicOfficeInput = {
  officeNumber?: InputMaybe<Scalars['String']['input']>;
};

export type _CompareClinicTableInput = {
  beginDate?: InputMaybe<Scalars['_DateTime']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['_DateTime']['input']>;
};

export type _CompareCustomerInput = {
  insurancePolicyNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type _CompareDoctorTypeInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type _ComparePersonInput = {
  birthDate?: InputMaybe<Scalars['_Date']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  inn?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type _CreateClinicDoctorAvailabilityInput = {
  beginDate: Scalars['_DateTime']['input'];
  clinicDoctor: Scalars['ID']['input'];
  clinicOffice: Scalars['ID']['input'];
  endDate: Scalars['_DateTime']['input'];
};

export type _CreateClinicDoctorInput = {
  clinic: Scalars['ID']['input'];
  doctor: _SingleReferenceInput;
};

export type _CreateClinicInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type _CreateClinicOfficeInput = {
  clinic: Scalars['ID']['input'];
  officeNumber?: InputMaybe<Scalars['String']['input']>;
};

export type _CreateClinicTableInput = {
  beginDate: Scalars['_DateTime']['input'];
  clinic: Scalars['ID']['input'];
  clinicDoctor: Scalars['ID']['input'];
  clinicOffice: Scalars['ID']['input'];
  comment?: InputMaybe<Scalars['String']['input']>;
  customer: _SingleReferenceInput;
  endDate: Scalars['_DateTime']['input'];
};

export type _CreateCustomerInput = {
  insurancePolicyNumber: Scalars['String']['input'];
  person: _SingleReferenceInput;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type _CreateDoctorInput = {
  doctorType: Scalars['ID']['input'];
  person: _SingleReferenceInput;
};

export type _CreateDoctorTypeInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isDel: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type _CreatePersonInput = {
  birthDate?: InputMaybe<Scalars['_Date']['input']>;
  firstName: Scalars['String']['input'];
  inn?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
};

export type _DeleteManyClinicDoctorAvailabilityInput = {
  compare?: InputMaybe<_CompareClinicDoctorAvailabilityInput>;
  id: Scalars['ID']['input'];
};

export type _DeleteManyClinicInput = {
  compare?: InputMaybe<_CompareClinicInput>;
  id: Scalars['ID']['input'];
};

export type _DeleteManyClinicOfficeInput = {
  compare?: InputMaybe<_CompareClinicOfficeInput>;
  id: Scalars['ID']['input'];
};

export type _DeleteManyClinicTableInput = {
  compare?: InputMaybe<_CompareClinicTableInput>;
  id: Scalars['ID']['input'];
};

export type _DeleteManyCustomerInput = {
  compare?: InputMaybe<_CompareCustomerInput>;
  id: Scalars['ID']['input'];
};

export type _DeleteManyPersonInput = {
  compare?: InputMaybe<_ComparePersonInput>;
  id: Scalars['ID']['input'];
};

export enum _DependsOnDependencyByGet {
  Exists = 'EXISTS',
  NotExists = 'NOT_EXISTS'
}

export enum _DependsOnDependencyByUpdateOrCreate {
  Created = 'CREATED',
  NotCreated = 'NOT_CREATED'
}

export type _DictionaryPacket = {
  __typename?: '_DictionaryPacket';
  getDoctorType?: Maybe<DoctorType>;
  updateOrCreateDoctorType?: Maybe<_UpdateOrCreateDoctorTypeResponse>;
  updateOrCreateManyDoctorType?: Maybe<Array<Maybe<_UpdateOrCreateManyResponse>>>;
};


export type _DictionaryPacketGetDoctorTypeArgs = {
  failOnEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  lock?: InputMaybe<_GetLockMode>;
};


export type _DictionaryPacketUpdateOrCreateDoctorTypeArgs = {
  exist?: InputMaybe<_ExistDoctorTypeInput>;
  input: _CreateDoctorTypeInput;
};


export type _DictionaryPacketUpdateOrCreateManyDoctorTypeArgs = {
  input: Array<InputMaybe<_UpdateOrCreateManyDoctorTypeInput>>;
};

export type _Ec_Clinic = {
  __typename?: '_EC_Clinic';
  count: Scalars['Int']['output'];
  elems: Array<Clinic>;
};

export type _Ec_ClinicDoctor = {
  __typename?: '_EC_ClinicDoctor';
  count: Scalars['Int']['output'];
  elems: Array<ClinicDoctor>;
};

export type _Ec_ClinicDoctorAvailability = {
  __typename?: '_EC_ClinicDoctorAvailability';
  count: Scalars['Int']['output'];
  elems: Array<ClinicDoctorAvailability>;
};

export type _Ec_ClinicOffice = {
  __typename?: '_EC_ClinicOffice';
  count: Scalars['Int']['output'];
  elems: Array<ClinicOffice>;
};

export type _Ec_ClinicTable = {
  __typename?: '_EC_ClinicTable';
  count: Scalars['Int']['output'];
  elems: Array<ClinicTable>;
};

export type _Ec_Customer = {
  __typename?: '_EC_Customer';
  count: Scalars['Int']['output'];
  elems: Array<Customer>;
};

export type _Ec_Doctor = {
  __typename?: '_EC_Doctor';
  count: Scalars['Int']['output'];
  elems: Array<Doctor>;
};

export type _Ec_DoctorType = {
  __typename?: '_EC_DoctorType';
  count: Scalars['Int']['output'];
  elems: Array<DoctorType>;
};

export type _Ec_Person = {
  __typename?: '_EC_Person';
  count: Scalars['Int']['output'];
  elems: Array<Person>;
};

export type _Ec_RootDictionary = {
  __typename?: '_EC_RootDictionary';
  count: Scalars['Int']['output'];
  elems: Array<RootDictionary>;
};

export type _Ec_Stakeholder = {
  __typename?: '_EC_Stakeholder';
  count: Scalars['Int']['output'];
  elems: Array<Stakeholder>;
};

export type _Ec_Status = {
  __typename?: '_EC_Status';
  count: Scalars['Int']['output'];
  elems: Array<Status>;
};

export type _Ec_StatusGraph = {
  __typename?: '_EC_StatusGraph';
  count: Scalars['Int']['output'];
  elems: Array<StatusGraph>;
};

export type _Ec_SysAdminSettings = {
  __typename?: '_EC_SysAdminSettings';
  count: Scalars['Int']['output'];
  elems: Array<SysAdminSettings>;
};

export type _Ec_SysCheckSelect = {
  __typename?: '_EC_SysCheckSelect';
  count: Scalars['Int']['output'];
  elems: Array<SysCheckSelect>;
};

export type _Ec_SysOperation = {
  __typename?: '_EC_SysOperation';
  count: Scalars['Int']['output'];
  elems: Array<SysOperation>;
};

export type _Ec_SysParamAddition = {
  __typename?: '_EC_SysParamAddition';
  count: Scalars['Int']['output'];
  elems: Array<SysParamAddition>;
};

export type _Ec_SysRootSecurity = {
  __typename?: '_EC_SysRootSecurity';
  count: Scalars['Int']['output'];
  elems: Array<SysRootSecurity>;
};

export type _E_Clinic = Clinic & _Entity & {
  __typename?: '_E_Clinic';
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  chgCnt?: Maybe<Scalars['Long']['output']>;
  classOfficeList: _Ec_ClinicOffice;
  clinicDoctorList: _Ec_ClinicDoctor;
  clinicTableList: _Ec_ClinicTable;
  id: Scalars['ID']['output'];
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};


export type _E_ClinicClassOfficeListArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  elemAlias?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _E_ClinicClinicDoctorListArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  elemAlias?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _E_ClinicClinicTableListArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  elemAlias?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _E_ClinicDoctor = ClinicDoctor & _Entity & {
  __typename?: '_E_ClinicDoctor';
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  aggregateRoot?: Maybe<Clinic>;
  chgCnt?: Maybe<Scalars['Long']['output']>;
  clinic: Clinic;
  clinicDoctorAvailabilityList: _Ec_ClinicDoctorAvailability;
  doctor: _G_DoctorReference;
  id: Scalars['ID']['output'];
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};


export type _E_ClinicDoctorAggregateRootArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type _E_ClinicDoctorClinicArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type _E_ClinicDoctorClinicDoctorAvailabilityListArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  elemAlias?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _E_ClinicDoctorAvailability = ClinicDoctorAvailability & _Entity & {
  __typename?: '_E_ClinicDoctorAvailability';
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  aggregateRoot?: Maybe<Clinic>;
  beginDate: Scalars['_DateTime']['output'];
  chgCnt?: Maybe<Scalars['Long']['output']>;
  clinicDoctor: ClinicDoctor;
  clinicOffice: ClinicOffice;
  endDate: Scalars['_DateTime']['output'];
  id: Scalars['ID']['output'];
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};


export type _E_ClinicDoctorAvailabilityAggregateRootArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type _E_ClinicDoctorAvailabilityClinicDoctorArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type _E_ClinicDoctorAvailabilityClinicOfficeArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type _E_ClinicOffice = ClinicOffice & _Entity & {
  __typename?: '_E_ClinicOffice';
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  aggregateRoot?: Maybe<Clinic>;
  chgCnt?: Maybe<Scalars['Long']['output']>;
  clinic: Clinic;
  id: Scalars['ID']['output'];
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  officeNumber?: Maybe<Scalars['String']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};


export type _E_ClinicOfficeAggregateRootArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type _E_ClinicOfficeClinicArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type _E_ClinicTable = ClinicTable & _Entity & {
  __typename?: '_E_ClinicTable';
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  aggregateRoot?: Maybe<Clinic>;
  beginDate: Scalars['_DateTime']['output'];
  chgCnt?: Maybe<Scalars['Long']['output']>;
  clinic: Clinic;
  clinicDoctor: ClinicDoctor;
  clinicOffice: ClinicOffice;
  comment?: Maybe<Scalars['String']['output']>;
  customer: _G_CustomerReference;
  endDate: Scalars['_DateTime']['output'];
  id: Scalars['ID']['output'];
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};


export type _E_ClinicTableAggregateRootArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type _E_ClinicTableClinicArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type _E_ClinicTableClinicDoctorArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type _E_ClinicTableClinicOfficeArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type _E_Customer = Customer & _Entity & {
  __typename?: '_E_Customer';
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  chgCnt?: Maybe<Scalars['Long']['output']>;
  id: Scalars['ID']['output'];
  insurancePolicyNumber: Scalars['String']['output'];
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  person: _G_PersonReference;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type _E_Doctor = Doctor & _Entity & {
  __typename?: '_E_Doctor';
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  chgCnt?: Maybe<Scalars['Long']['output']>;
  doctorType: DoctorType;
  id: Scalars['ID']['output'];
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  person: _G_PersonReference;
  type: Scalars['String']['output'];
};


export type _E_DoctorDoctorTypeArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type _E_DoctorType = DoctorType & _Entity & {
  __typename?: '_E_DoctorType';
  _calc: _Calculation;
  aggregateRoot?: Maybe<RootDictionary>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isDel: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};


export type _E_DoctorTypeAggregateRootArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type _E_Person = Person & _Entity & {
  __typename?: '_E_Person';
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  birthDate?: Maybe<Scalars['_Date']['output']>;
  chgCnt?: Maybe<Scalars['Long']['output']>;
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  inn?: Maybe<Scalars['String']['output']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  lastName: Scalars['String']['output'];
  ownerId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type _E_RootDictionary = RootDictionary & _Entity & {
  __typename?: '_E_RootDictionary';
  _calc: _Calculation;
  id: Scalars['ID']['output'];
  type: Scalars['String']['output'];
};

export type _E_Stakeholder = Stakeholder & _Entity & {
  __typename?: '_E_Stakeholder';
  _calc: _Calculation;
  aggregateRoot?: Maybe<RootDictionary>;
  chgCnt?: Maybe<Scalars['Long']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};


export type _E_StakeholderAggregateRootArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type _E_Status = Status & _Entity & {
  __typename?: '_E_Status';
  _calc: _Calculation;
  aggregateRoot?: Maybe<RootDictionary>;
  chgCnt?: Maybe<Scalars['Long']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  initial?: Maybe<Scalars['Boolean']['output']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  stakeholder?: Maybe<Stakeholder>;
  statusType?: Maybe<Scalars['String']['output']>;
};


export type _E_StatusAggregateRootArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type _E_StatusStakeholderArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type _E_StatusGraph = StatusGraph & _Entity & {
  __typename?: '_E_StatusGraph';
  _calc: _Calculation;
  aggregateRoot?: Maybe<RootDictionary>;
  chgCnt?: Maybe<Scalars['Long']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  statusFrom?: Maybe<Status>;
  statusTo?: Maybe<Status>;
};


export type _E_StatusGraphAggregateRootArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type _E_StatusGraphStatusFromArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type _E_StatusGraphStatusToArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type _E_SysAdminSettings = SysAdminSettings & _Entity & {
  __typename?: '_E_SysAdminSettings';
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  aggregateRoot?: Maybe<SysRootSecurity>;
  chgCnt?: Maybe<Scalars['Long']['output']>;
  id: Scalars['ID']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  rootSecurity: SysRootSecurity;
  value?: Maybe<Scalars['String']['output']>;
};


export type _E_SysAdminSettingsAggregateRootArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type _E_SysAdminSettingsRootSecurityArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type _E_SysCheckSelect = SysCheckSelect & _Entity & {
  __typename?: '_E_SysCheckSelect';
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  aggregateRoot?: Maybe<SysRootSecurity>;
  beforeCommitEnable?: Maybe<Scalars['Boolean']['output']>;
  beforeOperationDisable?: Maybe<Scalars['Boolean']['output']>;
  chgCnt?: Maybe<Scalars['Long']['output']>;
  conditionValue?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  operation: SysOperation;
  orderValue?: Maybe<Scalars['Int']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  typeName?: Maybe<Scalars['String']['output']>;
};


export type _E_SysCheckSelectAggregateRootArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type _E_SysCheckSelectOperationArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type _E_SysOperation = SysOperation & _Entity & {
  __typename?: '_E_SysOperation';
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  aggregateRoot?: Maybe<SysRootSecurity>;
  allowEmptyChecks?: Maybe<Scalars['Boolean']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  checkSelects: _Ec_SysCheckSelect;
  chgCnt?: Maybe<Scalars['Long']['output']>;
  disableJwtVerification?: Maybe<Scalars['Boolean']['output']>;
  hashValue?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  paramAdditions: _Ec_SysParamAddition;
  rootSecurity: SysRootSecurity;
};


export type _E_SysOperationAggregateRootArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type _E_SysOperationCheckSelectsArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  elemAlias?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _E_SysOperationParamAdditionsArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  elemAlias?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _E_SysOperationRootSecurityArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type _E_SysParamAddition = SysParamAddition & _Entity & {
  __typename?: '_E_SysParamAddition';
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  aggregateRoot?: Maybe<SysRootSecurity>;
  chgCnt?: Maybe<Scalars['Long']['output']>;
  id: Scalars['ID']['output'];
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  operation: SysOperation;
  ownerId?: Maybe<Scalars['String']['output']>;
  paramAddition?: Maybe<Scalars['String']['output']>;
  paramName?: Maybe<Scalars['String']['output']>;
};


export type _E_SysParamAdditionAggregateRootArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};


export type _E_SysParamAdditionOperationArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type _E_SysRootSecurity = SysRootSecurity & _Entity & {
  __typename?: '_E_SysRootSecurity';
  _calc: _Calculation;
  adminSettings: _Ec_SysAdminSettings;
  aggVersion: Scalars['Long']['output'];
  chgCnt?: Maybe<Scalars['Long']['output']>;
  id: Scalars['ID']['output'];
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  operations: _Ec_SysOperation;
  ownerId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};


export type _E_SysRootSecurityAdminSettingsArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  elemAlias?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _E_SysRootSecurityOperationsArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  elemAlias?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _Entity = {
  id: Scalars['ID']['output'];
};

export type _ExistDoctorTypeInput = {
  compare?: InputMaybe<_CompareDoctorTypeInput>;
  update?: InputMaybe<_ExistUpdateDoctorTypeInput>;
};

export type _ExistUpdateDoctorTypeInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  isDel?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type _G_CustomerReference = {
  __typename?: '_G_CustomerReference';
  entity?: Maybe<Customer>;
  entityId?: Maybe<Scalars['String']['output']>;
};


export type _G_CustomerReferenceEntityArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type _G_DoctorReference = {
  __typename?: '_G_DoctorReference';
  entity?: Maybe<Doctor>;
  entityId?: Maybe<Scalars['String']['output']>;
};


export type _G_DoctorReferenceEntityArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export type _G_PersonReference = {
  __typename?: '_G_PersonReference';
  entity?: Maybe<Person>;
  entityId?: Maybe<Scalars['String']['output']>;
};


export type _G_PersonReferenceEntityArgs = {
  alias?: InputMaybe<Scalars['String']['input']>;
};

export enum _GetLockMode {
  NotUse = 'NOT_USE',
  Nowait = 'NOWAIT',
  Wait = 'WAIT'
}

export type _MergedEntitiesCollection = {
  __typename?: '_MergedEntitiesCollection';
  count: Scalars['Int']['output'];
  elems: Array<_Entity>;
};

export type _Mutation = {
  __typename?: '_Mutation';
  dictionaryPacket?: Maybe<_DictionaryPacket>;
  packet?: Maybe<_Packet>;
};


export type _MutationPacketArgs = {
  aggregateVersion?: InputMaybe<Scalars['Long']['input']>;
  enableBuffering?: InputMaybe<Scalars['Boolean']['input']>;
  idempotencePacketId?: InputMaybe<Scalars['String']['input']>;
};

export type _Packet = {
  __typename?: '_Packet';
  aggregateVersion?: Maybe<Scalars['Long']['output']>;
  createClinic?: Maybe<Clinic>;
  createClinicDoctor?: Maybe<ClinicDoctor>;
  createClinicDoctorAvailability?: Maybe<ClinicDoctorAvailability>;
  createClinicOffice?: Maybe<ClinicOffice>;
  createClinicTable?: Maybe<ClinicTable>;
  createCustomer?: Maybe<Customer>;
  createDoctor?: Maybe<Doctor>;
  createManyClinic?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  createManyClinicDoctor?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  createManyClinicDoctorAvailability?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  createManyClinicOffice?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  createManyClinicTable?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  createManyCustomer?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  createManyDoctor?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  createManyPerson?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  createPerson?: Maybe<Person>;
  deleteClinic?: Maybe<Scalars['String']['output']>;
  deleteClinicDoctor?: Maybe<Scalars['String']['output']>;
  deleteClinicDoctorAvailability?: Maybe<Scalars['String']['output']>;
  deleteClinicOffice?: Maybe<Scalars['String']['output']>;
  deleteClinicTable?: Maybe<Scalars['String']['output']>;
  deleteCustomer?: Maybe<Scalars['String']['output']>;
  deleteDoctor?: Maybe<Scalars['String']['output']>;
  deleteManyClinic?: Maybe<Scalars['String']['output']>;
  deleteManyClinicDoctor?: Maybe<Scalars['String']['output']>;
  deleteManyClinicDoctorAvailability?: Maybe<Scalars['String']['output']>;
  deleteManyClinicOffice?: Maybe<Scalars['String']['output']>;
  deleteManyClinicTable?: Maybe<Scalars['String']['output']>;
  deleteManyCustomer?: Maybe<Scalars['String']['output']>;
  deleteManyDoctor?: Maybe<Scalars['String']['output']>;
  deleteManyPerson?: Maybe<Scalars['String']['output']>;
  deletePerson?: Maybe<Scalars['String']['output']>;
  getClinic?: Maybe<Clinic>;
  getClinicDoctor?: Maybe<ClinicDoctor>;
  getClinicDoctorAvailability?: Maybe<ClinicDoctorAvailability>;
  getClinicOffice?: Maybe<ClinicOffice>;
  getClinicTable?: Maybe<ClinicTable>;
  getCustomer?: Maybe<Customer>;
  getDoctor?: Maybe<Doctor>;
  getDoctorType?: Maybe<DoctorType>;
  getPerson?: Maybe<Person>;
  getStakeholder?: Maybe<Stakeholder>;
  getStatus?: Maybe<Status>;
  getStatusGraph?: Maybe<StatusGraph>;
  isIdempotenceResponse?: Maybe<Scalars['Boolean']['output']>;
  updateClinic?: Maybe<Clinic>;
  updateClinicDoctor?: Maybe<ClinicDoctor>;
  updateClinicDoctorAvailability?: Maybe<ClinicDoctorAvailability>;
  updateClinicOffice?: Maybe<ClinicOffice>;
  updateClinicTable?: Maybe<ClinicTable>;
  updateCustomer?: Maybe<Customer>;
  updateDoctor?: Maybe<Doctor>;
  updateManyClinic?: Maybe<Scalars['String']['output']>;
  updateManyClinicDoctor?: Maybe<Scalars['String']['output']>;
  updateManyClinicDoctorAvailability?: Maybe<Scalars['String']['output']>;
  updateManyClinicOffice?: Maybe<Scalars['String']['output']>;
  updateManyClinicTable?: Maybe<Scalars['String']['output']>;
  updateManyCustomer?: Maybe<Scalars['String']['output']>;
  updateManyDoctor?: Maybe<Scalars['String']['output']>;
  updateManyPerson?: Maybe<Scalars['String']['output']>;
  updatePerson?: Maybe<Person>;
};


export type _PacketCreateClinicArgs = {
  input: _CreateClinicInput;
};


export type _PacketCreateClinicDoctorArgs = {
  input: _CreateClinicDoctorInput;
};


export type _PacketCreateClinicDoctorAvailabilityArgs = {
  input: _CreateClinicDoctorAvailabilityInput;
};


export type _PacketCreateClinicOfficeArgs = {
  input: _CreateClinicOfficeInput;
};


export type _PacketCreateClinicTableArgs = {
  input: _CreateClinicTableInput;
};


export type _PacketCreateCustomerArgs = {
  input: _CreateCustomerInput;
};


export type _PacketCreateDoctorArgs = {
  input: _CreateDoctorInput;
};


export type _PacketCreateManyClinicArgs = {
  input: Array<_CreateClinicInput>;
};


export type _PacketCreateManyClinicDoctorArgs = {
  input: Array<_CreateClinicDoctorInput>;
};


export type _PacketCreateManyClinicDoctorAvailabilityArgs = {
  input: Array<_CreateClinicDoctorAvailabilityInput>;
};


export type _PacketCreateManyClinicOfficeArgs = {
  input: Array<_CreateClinicOfficeInput>;
};


export type _PacketCreateManyClinicTableArgs = {
  input: Array<_CreateClinicTableInput>;
};


export type _PacketCreateManyCustomerArgs = {
  input: Array<_CreateCustomerInput>;
};


export type _PacketCreateManyDoctorArgs = {
  input: Array<_CreateDoctorInput>;
};


export type _PacketCreateManyPersonArgs = {
  input: Array<_CreatePersonInput>;
};


export type _PacketCreatePersonArgs = {
  input: _CreatePersonInput;
};


export type _PacketDeleteClinicArgs = {
  compare?: InputMaybe<_CompareClinicInput>;
  id: Scalars['ID']['input'];
};


export type _PacketDeleteClinicDoctorArgs = {
  id: Scalars['ID']['input'];
};


export type _PacketDeleteClinicDoctorAvailabilityArgs = {
  compare?: InputMaybe<_CompareClinicDoctorAvailabilityInput>;
  id: Scalars['ID']['input'];
};


export type _PacketDeleteClinicOfficeArgs = {
  compare?: InputMaybe<_CompareClinicOfficeInput>;
  id: Scalars['ID']['input'];
};


export type _PacketDeleteClinicTableArgs = {
  compare?: InputMaybe<_CompareClinicTableInput>;
  id: Scalars['ID']['input'];
};


export type _PacketDeleteCustomerArgs = {
  compare?: InputMaybe<_CompareCustomerInput>;
  id: Scalars['ID']['input'];
};


export type _PacketDeleteDoctorArgs = {
  id: Scalars['ID']['input'];
};


export type _PacketDeleteManyClinicArgs = {
  input: Array<InputMaybe<_DeleteManyClinicInput>>;
};


export type _PacketDeleteManyClinicDoctorArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type _PacketDeleteManyClinicDoctorAvailabilityArgs = {
  input: Array<InputMaybe<_DeleteManyClinicDoctorAvailabilityInput>>;
};


export type _PacketDeleteManyClinicOfficeArgs = {
  input: Array<InputMaybe<_DeleteManyClinicOfficeInput>>;
};


export type _PacketDeleteManyClinicTableArgs = {
  input: Array<InputMaybe<_DeleteManyClinicTableInput>>;
};


export type _PacketDeleteManyCustomerArgs = {
  input: Array<InputMaybe<_DeleteManyCustomerInput>>;
};


export type _PacketDeleteManyDoctorArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type _PacketDeleteManyPersonArgs = {
  input: Array<InputMaybe<_DeleteManyPersonInput>>;
};


export type _PacketDeletePersonArgs = {
  compare?: InputMaybe<_ComparePersonInput>;
  id: Scalars['ID']['input'];
};


export type _PacketGetClinicArgs = {
  failOnEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  lock?: InputMaybe<_GetLockMode>;
};


export type _PacketGetClinicDoctorArgs = {
  failOnEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  lock?: InputMaybe<_GetLockMode>;
};


export type _PacketGetClinicDoctorAvailabilityArgs = {
  failOnEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  lock?: InputMaybe<_GetLockMode>;
};


export type _PacketGetClinicOfficeArgs = {
  failOnEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  lock?: InputMaybe<_GetLockMode>;
};


export type _PacketGetClinicTableArgs = {
  failOnEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  lock?: InputMaybe<_GetLockMode>;
};


export type _PacketGetCustomerArgs = {
  failOnEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  lock?: InputMaybe<_GetLockMode>;
};


export type _PacketGetDoctorArgs = {
  failOnEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  lock?: InputMaybe<_GetLockMode>;
};


export type _PacketGetDoctorTypeArgs = {
  failOnEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  lock?: InputMaybe<_GetLockMode>;
};


export type _PacketGetPersonArgs = {
  failOnEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  lock?: InputMaybe<_GetLockMode>;
};


export type _PacketGetStakeholderArgs = {
  failOnEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  lock?: InputMaybe<_GetLockMode>;
};


export type _PacketGetStatusArgs = {
  failOnEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  lock?: InputMaybe<_GetLockMode>;
};


export type _PacketGetStatusGraphArgs = {
  failOnEmpty?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  lock?: InputMaybe<_GetLockMode>;
};


export type _PacketUpdateClinicArgs = {
  compare?: InputMaybe<_CompareClinicInput>;
  input: _UpdateClinicInput;
};


export type _PacketUpdateClinicDoctorArgs = {
  input: _UpdateClinicDoctorInput;
};


export type _PacketUpdateClinicDoctorAvailabilityArgs = {
  compare?: InputMaybe<_CompareClinicDoctorAvailabilityInput>;
  input: _UpdateClinicDoctorAvailabilityInput;
};


export type _PacketUpdateClinicOfficeArgs = {
  compare?: InputMaybe<_CompareClinicOfficeInput>;
  input: _UpdateClinicOfficeInput;
};


export type _PacketUpdateClinicTableArgs = {
  compare?: InputMaybe<_CompareClinicTableInput>;
  input: _UpdateClinicTableInput;
};


export type _PacketUpdateCustomerArgs = {
  compare?: InputMaybe<_CompareCustomerInput>;
  input: _UpdateCustomerInput;
};


export type _PacketUpdateDoctorArgs = {
  input: _UpdateDoctorInput;
};


export type _PacketUpdateManyClinicArgs = {
  input: Array<InputMaybe<_UpdateManyClinicInput>>;
};


export type _PacketUpdateManyClinicDoctorArgs = {
  input: Array<_UpdateClinicDoctorInput>;
};


export type _PacketUpdateManyClinicDoctorAvailabilityArgs = {
  input: Array<InputMaybe<_UpdateManyClinicDoctorAvailabilityInput>>;
};


export type _PacketUpdateManyClinicOfficeArgs = {
  input: Array<InputMaybe<_UpdateManyClinicOfficeInput>>;
};


export type _PacketUpdateManyClinicTableArgs = {
  input: Array<InputMaybe<_UpdateManyClinicTableInput>>;
};


export type _PacketUpdateManyCustomerArgs = {
  input: Array<InputMaybe<_UpdateManyCustomerInput>>;
};


export type _PacketUpdateManyDoctorArgs = {
  input: Array<_UpdateDoctorInput>;
};


export type _PacketUpdateManyPersonArgs = {
  input: Array<InputMaybe<_UpdateManyPersonInput>>;
};


export type _PacketUpdatePersonArgs = {
  compare?: InputMaybe<_ComparePersonInput>;
  input: _UpdatePersonInput;
};

export type _Query = {
  __typename?: '_Query';
  merge: _MergedEntitiesCollection;
  resolveReferences: Array<_Reference>;
  searchClinic: _Ec_Clinic;
  searchClinicDoctor: _Ec_ClinicDoctor;
  searchClinicDoctorAvailability: _Ec_ClinicDoctorAvailability;
  searchClinicOffice: _Ec_ClinicOffice;
  searchClinicTable: _Ec_ClinicTable;
  searchCustomer: _Ec_Customer;
  searchDoctor: _Ec_Doctor;
  searchDoctorType: _Ec_DoctorType;
  searchPerson: _Ec_Person;
  searchRootDictionary: _Ec_RootDictionary;
  searchStakeholder: _Ec_Stakeholder;
  searchStatus: _Ec_Status;
  searchStatusGraph: _Ec_StatusGraph;
  searchSysAdminSettings: _Ec_SysAdminSettings;
  searchSysCheckSelect: _Ec_SysCheckSelect;
  searchSysOperation: _Ec_SysOperation;
  searchSysParamAddition: _Ec_SysParamAddition;
  searchSysRootSecurity: _Ec_SysRootSecurity;
  selectionByClinic: _Sec_Clinic;
  selectionByClinicDoctor: _Sec_ClinicDoctor;
  selectionByClinicDoctorAvailability: _Sec_ClinicDoctorAvailability;
  selectionByClinicOffice: _Sec_ClinicOffice;
  selectionByClinicTable: _Sec_ClinicTable;
  selectionByCustomer: _Sec_Customer;
  selectionByDoctor: _Sec_Doctor;
  selectionByDoctorType: _Sec_DoctorType;
  selectionByPerson: _Sec_Person;
  selectionByRootDictionary: _Sec_RootDictionary;
  selectionByStakeholder: _Sec_Stakeholder;
  selectionByStatus: _Sec_Status;
  selectionByStatusGraph: _Sec_StatusGraph;
  selectionBySysAdminSettings: _Sec_SysAdminSettings;
  selectionBySysCheckSelect: _Sec_SysCheckSelect;
  selectionBySysOperation: _Sec_SysOperation;
  selectionBySysParamAddition: _Sec_SysParamAddition;
  selectionBySysRootSecurity: _Sec_SysRootSecurity;
};


export type _QueryMergeArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QueryResolveReferencesArgs = {
  ids: Array<Scalars['ID']['input']>;
  referenceType: Scalars['String']['input'];
};


export type _QuerySearchClinicArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchClinicDoctorArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchClinicDoctorAvailabilityArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchClinicOfficeArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchClinicTableArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchCustomerArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchDoctorArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchDoctorTypeArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchPersonArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchRootDictionaryArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchStakeholderArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchStatusArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchStatusGraphArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchSysAdminSettingsArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchSysCheckSelectArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchSysOperationArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchSysParamAdditionArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySearchSysRootSecurityArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySelectionByClinicArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<Scalars['String']['input']>>;
  groupCond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySelectionByClinicDoctorArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<Scalars['String']['input']>>;
  groupCond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySelectionByClinicDoctorAvailabilityArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<Scalars['String']['input']>>;
  groupCond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySelectionByClinicOfficeArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<Scalars['String']['input']>>;
  groupCond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySelectionByClinicTableArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<Scalars['String']['input']>>;
  groupCond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySelectionByCustomerArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<Scalars['String']['input']>>;
  groupCond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySelectionByDoctorArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<Scalars['String']['input']>>;
  groupCond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySelectionByDoctorTypeArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<Scalars['String']['input']>>;
  groupCond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySelectionByPersonArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<Scalars['String']['input']>>;
  groupCond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySelectionByRootDictionaryArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<Scalars['String']['input']>>;
  groupCond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySelectionByStakeholderArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<Scalars['String']['input']>>;
  groupCond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySelectionByStatusArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<Scalars['String']['input']>>;
  groupCond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySelectionByStatusGraphArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<Scalars['String']['input']>>;
  groupCond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySelectionBySysAdminSettingsArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<Scalars['String']['input']>>;
  groupCond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySelectionBySysCheckSelectArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<Scalars['String']['input']>>;
  groupCond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySelectionBySysOperationArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<Scalars['String']['input']>>;
  groupCond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySelectionBySysParamAdditionArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<Scalars['String']['input']>>;
  groupCond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};


export type _QuerySelectionBySysRootSecurityArgs = {
  cond?: InputMaybe<Scalars['String']['input']>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  group?: InputMaybe<Array<Scalars['String']['input']>>;
  groupCond?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<_SortCriterionSpecification>>;
};

export type _R_Clinic = _Reference & {
  __typename?: '_R_Clinic';
  entity?: Maybe<Clinic>;
  entityId?: Maybe<Scalars['String']['output']>;
};

export type _R_ClinicDoctor = _Reference & {
  __typename?: '_R_ClinicDoctor';
  entity?: Maybe<ClinicDoctor>;
  entityId?: Maybe<Scalars['String']['output']>;
};

export type _R_ClinicDoctorAvailability = _Reference & {
  __typename?: '_R_ClinicDoctorAvailability';
  entity?: Maybe<ClinicDoctorAvailability>;
  entityId?: Maybe<Scalars['String']['output']>;
};

export type _R_ClinicOffice = _Reference & {
  __typename?: '_R_ClinicOffice';
  entity?: Maybe<ClinicOffice>;
  entityId?: Maybe<Scalars['String']['output']>;
};

export type _R_ClinicTable = _Reference & {
  __typename?: '_R_ClinicTable';
  entity?: Maybe<ClinicTable>;
  entityId?: Maybe<Scalars['String']['output']>;
};

export type _R_Customer = _Reference & {
  __typename?: '_R_Customer';
  entity?: Maybe<Customer>;
  entityId?: Maybe<Scalars['String']['output']>;
};

export type _R_Doctor = _Reference & {
  __typename?: '_R_Doctor';
  entity?: Maybe<Doctor>;
  entityId?: Maybe<Scalars['String']['output']>;
};

export type _R_DoctorType = _Reference & {
  __typename?: '_R_DoctorType';
  entity?: Maybe<DoctorType>;
  entityId?: Maybe<Scalars['String']['output']>;
};

export type _R_Person = _Reference & {
  __typename?: '_R_Person';
  entity?: Maybe<Person>;
  entityId?: Maybe<Scalars['String']['output']>;
};

export type _R_RootDictionary = _Reference & {
  __typename?: '_R_RootDictionary';
  entity?: Maybe<RootDictionary>;
  entityId?: Maybe<Scalars['String']['output']>;
};

export type _R_Stakeholder = _Reference & {
  __typename?: '_R_Stakeholder';
  entity?: Maybe<Stakeholder>;
  entityId?: Maybe<Scalars['String']['output']>;
};

export type _R_Status = _Reference & {
  __typename?: '_R_Status';
  entity?: Maybe<Status>;
  entityId?: Maybe<Scalars['String']['output']>;
};

export type _R_StatusGraph = _Reference & {
  __typename?: '_R_StatusGraph';
  entity?: Maybe<StatusGraph>;
  entityId?: Maybe<Scalars['String']['output']>;
};

export type _R_SysAdminSettings = _Reference & {
  __typename?: '_R_SysAdminSettings';
  entity?: Maybe<SysAdminSettings>;
  entityId?: Maybe<Scalars['String']['output']>;
};

export type _R_SysCheckSelect = _Reference & {
  __typename?: '_R_SysCheckSelect';
  entity?: Maybe<SysCheckSelect>;
  entityId?: Maybe<Scalars['String']['output']>;
};

export type _R_SysOperation = _Reference & {
  __typename?: '_R_SysOperation';
  entity?: Maybe<SysOperation>;
  entityId?: Maybe<Scalars['String']['output']>;
};

export type _R_SysParamAddition = _Reference & {
  __typename?: '_R_SysParamAddition';
  entity?: Maybe<SysParamAddition>;
  entityId?: Maybe<Scalars['String']['output']>;
};

export type _R_SysRootSecurity = _Reference & {
  __typename?: '_R_SysRootSecurity';
  entity?: Maybe<SysRootSecurity>;
  entityId?: Maybe<Scalars['String']['output']>;
};

export type _Reference = {
  entityId?: Maybe<Scalars['String']['output']>;
};

export type _Sec_Clinic = {
  __typename?: '_SEC_Clinic';
  count: Scalars['Int']['output'];
  elems: Array<_Se_Clinic>;
};

export type _Sec_ClinicDoctor = {
  __typename?: '_SEC_ClinicDoctor';
  count: Scalars['Int']['output'];
  elems: Array<_Se_ClinicDoctor>;
};

export type _Sec_ClinicDoctorAvailability = {
  __typename?: '_SEC_ClinicDoctorAvailability';
  count: Scalars['Int']['output'];
  elems: Array<_Se_ClinicDoctorAvailability>;
};

export type _Sec_ClinicOffice = {
  __typename?: '_SEC_ClinicOffice';
  count: Scalars['Int']['output'];
  elems: Array<_Se_ClinicOffice>;
};

export type _Sec_ClinicTable = {
  __typename?: '_SEC_ClinicTable';
  count: Scalars['Int']['output'];
  elems: Array<_Se_ClinicTable>;
};

export type _Sec_Customer = {
  __typename?: '_SEC_Customer';
  count: Scalars['Int']['output'];
  elems: Array<_Se_Customer>;
};

export type _Sec_Doctor = {
  __typename?: '_SEC_Doctor';
  count: Scalars['Int']['output'];
  elems: Array<_Se_Doctor>;
};

export type _Sec_DoctorType = {
  __typename?: '_SEC_DoctorType';
  count: Scalars['Int']['output'];
  elems: Array<_Se_DoctorType>;
};

export type _Sec_Person = {
  __typename?: '_SEC_Person';
  count: Scalars['Int']['output'];
  elems: Array<_Se_Person>;
};

export type _Sec_RootDictionary = {
  __typename?: '_SEC_RootDictionary';
  count: Scalars['Int']['output'];
  elems: Array<_Se_RootDictionary>;
};

export type _Sec_Stakeholder = {
  __typename?: '_SEC_Stakeholder';
  count: Scalars['Int']['output'];
  elems: Array<_Se_Stakeholder>;
};

export type _Sec_Status = {
  __typename?: '_SEC_Status';
  count: Scalars['Int']['output'];
  elems: Array<_Se_Status>;
};

export type _Sec_StatusGraph = {
  __typename?: '_SEC_StatusGraph';
  count: Scalars['Int']['output'];
  elems: Array<_Se_StatusGraph>;
};

export type _Sec_SysAdminSettings = {
  __typename?: '_SEC_SysAdminSettings';
  count: Scalars['Int']['output'];
  elems: Array<_Se_SysAdminSettings>;
};

export type _Sec_SysCheckSelect = {
  __typename?: '_SEC_SysCheckSelect';
  count: Scalars['Int']['output'];
  elems: Array<_Se_SysCheckSelect>;
};

export type _Sec_SysOperation = {
  __typename?: '_SEC_SysOperation';
  count: Scalars['Int']['output'];
  elems: Array<_Se_SysOperation>;
};

export type _Sec_SysParamAddition = {
  __typename?: '_SEC_SysParamAddition';
  count: Scalars['Int']['output'];
  elems: Array<_Se_SysParamAddition>;
};

export type _Sec_SysRootSecurity = {
  __typename?: '_SEC_SysRootSecurity';
  count: Scalars['Int']['output'];
  elems: Array<_Se_SysRootSecurity>;
};

export type _Se_Clinic = {
  __typename?: '_SE_Clinic';
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  chgCnt?: Maybe<Scalars['Long']['output']>;
  id: Scalars['ID']['output'];
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type _Se_ClinicDoctor = {
  __typename?: '_SE_ClinicDoctor';
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  chgCnt?: Maybe<Scalars['Long']['output']>;
  id: Scalars['ID']['output'];
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type _Se_ClinicDoctorAvailability = {
  __typename?: '_SE_ClinicDoctorAvailability';
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  beginDate: Scalars['_DateTime']['output'];
  chgCnt?: Maybe<Scalars['Long']['output']>;
  endDate: Scalars['_DateTime']['output'];
  id: Scalars['ID']['output'];
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type _Se_ClinicOffice = {
  __typename?: '_SE_ClinicOffice';
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  chgCnt?: Maybe<Scalars['Long']['output']>;
  id: Scalars['ID']['output'];
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  officeNumber?: Maybe<Scalars['String']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type _Se_ClinicTable = {
  __typename?: '_SE_ClinicTable';
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  beginDate: Scalars['_DateTime']['output'];
  chgCnt?: Maybe<Scalars['Long']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  endDate: Scalars['_DateTime']['output'];
  id: Scalars['ID']['output'];
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type _Se_Customer = {
  __typename?: '_SE_Customer';
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  chgCnt?: Maybe<Scalars['Long']['output']>;
  id: Scalars['ID']['output'];
  insurancePolicyNumber: Scalars['String']['output'];
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type _Se_Doctor = {
  __typename?: '_SE_Doctor';
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  chgCnt?: Maybe<Scalars['Long']['output']>;
  id: Scalars['ID']['output'];
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type _Se_DoctorType = {
  __typename?: '_SE_DoctorType';
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isDel: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type _Se_Person = {
  __typename?: '_SE_Person';
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  birthDate?: Maybe<Scalars['_Date']['output']>;
  chgCnt?: Maybe<Scalars['Long']['output']>;
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  inn?: Maybe<Scalars['String']['output']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  lastName: Scalars['String']['output'];
  ownerId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type _Se_RootDictionary = {
  __typename?: '_SE_RootDictionary';
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  id: Scalars['ID']['output'];
  type: Scalars['String']['output'];
};

export type _Se_Stakeholder = {
  __typename?: '_SE_Stakeholder';
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  chgCnt?: Maybe<Scalars['Long']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type _Se_Status = {
  __typename?: '_SE_Status';
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  chgCnt?: Maybe<Scalars['Long']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  initial?: Maybe<Scalars['Boolean']['output']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  statusType?: Maybe<Scalars['String']['output']>;
};

export type _Se_StatusGraph = {
  __typename?: '_SE_StatusGraph';
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  chgCnt?: Maybe<Scalars['Long']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label?: Maybe<Scalars['String']['output']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type _Se_SysAdminSettings = {
  __typename?: '_SE_SysAdminSettings';
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  chgCnt?: Maybe<Scalars['Long']['output']>;
  id: Scalars['ID']['output'];
  key?: Maybe<Scalars['String']['output']>;
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type _Se_SysCheckSelect = {
  __typename?: '_SE_SysCheckSelect';
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  beforeCommitEnable?: Maybe<Scalars['Boolean']['output']>;
  beforeOperationDisable?: Maybe<Scalars['Boolean']['output']>;
  chgCnt?: Maybe<Scalars['Long']['output']>;
  conditionValue?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  orderValue?: Maybe<Scalars['Int']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  typeName?: Maybe<Scalars['String']['output']>;
};

export type _Se_SysOperation = {
  __typename?: '_SE_SysOperation';
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  allowEmptyChecks?: Maybe<Scalars['Boolean']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  chgCnt?: Maybe<Scalars['Long']['output']>;
  disableJwtVerification?: Maybe<Scalars['Boolean']['output']>;
  hashValue?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
};

export type _Se_SysParamAddition = {
  __typename?: '_SE_SysParamAddition';
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  chgCnt?: Maybe<Scalars['Long']['output']>;
  id: Scalars['ID']['output'];
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  paramAddition?: Maybe<Scalars['String']['output']>;
  paramName?: Maybe<Scalars['String']['output']>;
};

export type _Se_SysRootSecurity = {
  __typename?: '_SE_SysRootSecurity';
  _calc: _Calculation;
  aggVersion: Scalars['Long']['output'];
  chgCnt?: Maybe<Scalars['Long']['output']>;
  id: Scalars['ID']['output'];
  lastChangeDate?: Maybe<Scalars['_DateTime']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type _SingleReferenceInput = {
  entityId: Scalars['String']['input'];
};

export type _SortCriterionSpecification = {
  crit: Scalars['String']['input'];
  nullsLast?: InputMaybe<Scalars['Boolean']['input']>;
  order?: _SortOrder;
};

export enum _SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type _UpdateClinicDoctorAvailabilityInput = {
  beginDate?: InputMaybe<Scalars['_DateTime']['input']>;
  clinicDoctor?: InputMaybe<Scalars['ID']['input']>;
  clinicOffice?: InputMaybe<Scalars['ID']['input']>;
  endDate?: InputMaybe<Scalars['_DateTime']['input']>;
  id: Scalars['ID']['input'];
};

export type _UpdateClinicDoctorInput = {
  clinic?: InputMaybe<Scalars['ID']['input']>;
  doctor?: InputMaybe<_SingleReferenceInput>;
  id: Scalars['ID']['input'];
};

export type _UpdateClinicInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type _UpdateClinicOfficeInput = {
  clinic?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  officeNumber?: InputMaybe<Scalars['String']['input']>;
};

export type _UpdateClinicTableInput = {
  beginDate?: InputMaybe<Scalars['_DateTime']['input']>;
  clinic?: InputMaybe<Scalars['ID']['input']>;
  clinicDoctor?: InputMaybe<Scalars['ID']['input']>;
  clinicOffice?: InputMaybe<Scalars['ID']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  customer?: InputMaybe<_SingleReferenceInput>;
  endDate?: InputMaybe<Scalars['_DateTime']['input']>;
  id: Scalars['ID']['input'];
};

export type _UpdateCustomerInput = {
  id: Scalars['ID']['input'];
  insurancePolicyNumber?: InputMaybe<Scalars['String']['input']>;
  person?: InputMaybe<_SingleReferenceInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type _UpdateDoctorInput = {
  doctorType?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  person?: InputMaybe<_SingleReferenceInput>;
};

export type _UpdateManyClinicDoctorAvailabilityInput = {
  compare?: InputMaybe<_CompareClinicDoctorAvailabilityInput>;
  param: _UpdateClinicDoctorAvailabilityInput;
};

export type _UpdateManyClinicInput = {
  compare?: InputMaybe<_CompareClinicInput>;
  param: _UpdateClinicInput;
};

export type _UpdateManyClinicOfficeInput = {
  compare?: InputMaybe<_CompareClinicOfficeInput>;
  param: _UpdateClinicOfficeInput;
};

export type _UpdateManyClinicTableInput = {
  compare?: InputMaybe<_CompareClinicTableInput>;
  param: _UpdateClinicTableInput;
};

export type _UpdateManyCustomerInput = {
  compare?: InputMaybe<_CompareCustomerInput>;
  param: _UpdateCustomerInput;
};

export type _UpdateManyPersonInput = {
  compare?: InputMaybe<_ComparePersonInput>;
  param: _UpdatePersonInput;
};

export type _UpdateOrCreateDoctorTypeResponse = {
  __typename?: '_UpdateOrCreateDoctorTypeResponse';
  created?: Maybe<Scalars['Boolean']['output']>;
  returning?: Maybe<DoctorType>;
};

export type _UpdateOrCreateManyDoctorTypeInput = {
  exist?: InputMaybe<_ExistDoctorTypeInput>;
  param: _CreateDoctorTypeInput;
};

export type _UpdateOrCreateManyResponse = {
  __typename?: '_UpdateOrCreateManyResponse';
  created?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type _UpdatePersonInput = {
  birthDate?: InputMaybe<Scalars['_Date']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  inn?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type DoctorTypeAttributesFragment = { __typename: '_E_DoctorType', id: string, name: string, description?: string | null };
