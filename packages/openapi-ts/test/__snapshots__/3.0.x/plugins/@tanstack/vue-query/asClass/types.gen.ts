// This file is auto-generated by @hey-api/openapi-ts

/**
 * Model with number-only name
 */
export type _400 = string;

/**
 * Testing multiline comments in string: First line
 * Second line
 *
 * Fourth line
 */
export type camelCaseCommentWithBreaks = number;

/**
 * Testing multiline comments in string: First line
 * Second line
 *
 * Fourth line
 */
export type CommentWithBreaks = number;

/**
 * Testing backticks in string: `backticks` and ```multiple backticks``` should work
 */
export type CommentWithBackticks = number;

/**
 * Testing backticks and quotes in string: `backticks`, 'quotes', "double quotes" and ```multiple backticks``` should work
 */
export type CommentWithBackticksAndQuotes = number;

/**
 * Testing slashes in string: \backwards\\\ and /forwards/// should work
 */
export type CommentWithSlashes = number;

/**
 * Testing expression placeholders in string: ${expression} should work
 */
export type CommentWithExpressionPlaceholders = number;

/**
 * Testing quotes in string: 'single quote''' and "double quotes""" should work
 */
export type CommentWithQuotes = number;

/**
 * Testing reserved characters in string: * inline * and ** inline ** should work
 */
export type CommentWithReservedCharacters = number;

/**
 * This is a simple number
 */
export type SimpleInteger = number;

/**
 * This is a simple boolean
 */
export type SimpleBoolean = boolean;

/**
 * This is a simple string
 */
export type SimpleString = string;

/**
 * A string with non-ascii (unicode) characters valid in typescript identifiers (æøåÆØÅöÔèÈ字符串)
 */
export type NonAsciiStringæøåÆØÅöôêÊ字符串 = string;

/**
 * This is a simple file
 */
export type SimpleFile = Blob | File;

/**
 * This is a simple reference
 */
export type SimpleReference = ModelWithString;

/**
 * This is a simple string
 */
export type SimpleStringWithPattern = string | null;

/**
 * This is a simple enum with strings
 */
export type EnumWithStrings = 'Success' | 'Warning' | 'Error' | "'Single Quote'" | '"Double Quotes"' | 'Non-ascii: øæåôöØÆÅÔÖ字符串';

export type EnumWithReplacedCharacters = "'Single Quote'" | '"Double Quotes"' | 'øæåôöØÆÅÔÖ字符串' | 3.1 | '';

/**
 * This is a simple enum with numbers
 */
export type EnumWithNumbers = 1 | 2 | 3 | 1.1 | 1.2 | 1.3 | 100 | 200 | 300 | -100 | -200 | -300 | -1.1 | -1.2 | -1.3;

/**
 * Success=1,Warning=2,Error=3
 */
export type EnumFromDescription = number;

/**
 * This is a simple enum with numbers
 */
export type EnumWithExtensions = 200 | 400 | 500;

export type EnumWithXEnumNames = 0 | 1 | 2;

/**
 * This is a simple array with numbers
 */
export type ArrayWithNumbers = Array<number>;

/**
 * This is a simple array with booleans
 */
export type ArrayWithBooleans = Array<boolean>;

/**
 * This is a simple array with strings
 */
export type ArrayWithStrings = Array<string>;

/**
 * This is a simple array with references
 */
export type ArrayWithReferences = Array<ModelWithString>;

/**
 * This is a simple array containing an array
 */
export type ArrayWithArray = Array<Array<ModelWithString>>;

/**
 * This is a simple array with properties
 */
export type ArrayWithProperties = Array<{
    '16x16'?: camelCaseCommentWithBreaks;
    bar?: string;
}>;

/**
 * This is a simple array with any of properties
 */
export type ArrayWithAnyOfProperties = Array<{
    foo?: string;
} | {
    bar?: string;
}>;

export type AnyOfAnyAndNull = {
    data?: unknown | null;
};

/**
 * This is a simple array with any of properties
 */
export type AnyOfArrays = {
    results?: Array<{
        foo?: string;
    } | {
        bar?: string;
    }>;
};

/**
 * This is a string dictionary
 */
export type DictionaryWithString = {
    [key: string]: string;
};

export type DictionaryWithPropertiesAndAdditionalProperties = {
    foo?: number;
    bar?: boolean;
    [key: string]: string | number | boolean | undefined;
};

/**
 * This is a string reference
 */
export type DictionaryWithReference = {
    [key: string]: ModelWithString;
};

/**
 * This is a complex dictionary
 */
export type DictionaryWithArray = {
    [key: string]: Array<ModelWithString>;
};

/**
 * This is a string dictionary
 */
export type DictionaryWithDictionary = {
    [key: string]: {
        [key: string]: string;
    };
};

/**
 * This is a complex dictionary
 */
export type DictionaryWithProperties = {
    [key: string]: {
        foo?: string;
        bar?: string;
    };
};

/**
 * This is a model with one number property
 */
export type ModelWithInteger = {
    /**
     * This is a simple number property
     */
    prop?: number;
};

/**
 * This is a model with one boolean property
 */
export type ModelWithBoolean = {
    /**
     * This is a simple boolean property
     */
    prop?: boolean;
};

/**
 * This is a model with one string property
 */
export type ModelWithString = {
    /**
     * This is a simple string property
     */
    prop?: string;
};

/**
 * This is a model with one string property
 */
export type ModelWithStringError = {
    /**
     * This is a simple string property
     */
    prop?: string;
};

/**
 * `Comment` or `VoiceComment`. The JSON object for adding voice comments to tickets is different. See [Adding voice comments to tickets](/documentation/ticketing/managing-tickets/adding-voice-comments-to-tickets)
 */
export type Model_From_Zendesk = string;

/**
 * This is a model with one string property
 */
export type ModelWithNullableString = {
    /**
     * This is a simple string property
     */
    nullableProp1?: string | null;
    /**
     * This is a simple string property
     */
    nullableRequiredProp1: string | null;
    /**
     * This is a simple string property
     */
    nullableProp2?: string | null;
    /**
     * This is a simple string property
     */
    nullableRequiredProp2: string | null;
    /**
     * This is a simple enum with strings
     */
    'foo_bar-enum'?: 'Success' | 'Warning' | 'Error' | 'ØÆÅ字符串';
};

/**
 * This is a model with one enum
 */
export type ModelWithEnum = {
    /**
     * This is a simple enum with strings
     */
    'foo_bar-enum'?: 'Success' | 'Warning' | 'Error' | 'ØÆÅ字符串';
    /**
     * These are the HTTP error code enums
     */
    statusCode?: '100' | '200 FOO' | '300 FOO_BAR' | '400 foo-bar' | '500 foo.bar' | '600 foo&bar';
    /**
     * Simple boolean enum
     */
    bool?: true;
};

/**
 * This is a model with one enum with escaped name
 */
export type ModelWithEnumWithHyphen = {
    'foo-bar-baz-qux'?: '3.0';
};

/**
 * This is a model with one enum
 */
export type ModelWithEnumFromDescription = {
    /**
     * Success=1,Warning=2,Error=3
     */
    test?: number;
};

/**
 * This is a model with nested enums
 */
export type ModelWithNestedEnums = {
    dictionaryWithEnum?: {
        [key: string]: 'Success' | 'Warning' | 'Error';
    };
    dictionaryWithEnumFromDescription?: {
        [key: string]: number;
    };
    arrayWithEnum?: Array<'Success' | 'Warning' | 'Error'>;
    arrayWithDescription?: Array<number>;
    /**
     * This is a simple enum with strings
     */
    'foo_bar-enum'?: 'Success' | 'Warning' | 'Error' | 'ØÆÅ字符串';
};

/**
 * This is a model with one property containing a reference
 */
export type ModelWithReference = {
    prop?: ModelWithProperties;
};

/**
 * This is a model with one property containing an array
 */
export type ModelWithArrayReadOnlyAndWriteOnly = {
    prop?: Array<ModelWithReadOnlyAndWriteOnly>;
    propWithFile?: Array<Blob | File>;
    propWithNumber?: Array<number>;
};

/**
 * This is a model with one property containing an array
 */
export type ModelWithArray = {
    prop?: Array<ModelWithString>;
    propWithFile?: Array<Blob | File>;
    propWithNumber?: Array<number>;
};

/**
 * This is a model with one property containing a dictionary
 */
export type ModelWithDictionary = {
    prop?: {
        [key: string]: string;
    };
};

/**
 * This is a deprecated model with a deprecated property
 * @deprecated
 */
export type DeprecatedModel = {
    /**
     * This is a deprecated property
     * @deprecated
     */
    prop?: string;
};

/**
 * This is a model with one property containing a circular reference
 */
export type ModelWithCircularReference = {
    prop?: ModelWithCircularReference;
};

/**
 * This is a model with one property with a 'one of' relationship
 */
export type CompositionWithOneOf = {
    propA?: ModelWithString | ModelWithEnum | ModelWithArray | ModelWithDictionary;
};

/**
 * This is a model with one property with a 'one of' relationship where the options are not $ref
 */
export type CompositionWithOneOfAnonymous = {
    propA?: {
        propA?: string;
    } | string | number;
};

/**
 * Circle
 */
export type ModelCircle = {
    kind: string;
    radius?: number;
};

/**
 * Square
 */
export type ModelSquare = {
    kind: string;
    sideLength?: number;
};

/**
 * This is a model with one property with a 'one of' relationship where the options are not $ref
 */
export type CompositionWithOneOfDiscriminator = ModelCircle | ModelSquare;

/**
 * This is a model with one property with a 'any of' relationship
 */
export type CompositionWithAnyOf = {
    propA?: ModelWithString | ModelWithEnum | ModelWithArray | ModelWithDictionary;
};

/**
 * This is a model with one property with a 'any of' relationship where the options are not $ref
 */
export type CompositionWithAnyOfAnonymous = {
    propA?: {
        propA?: string;
    } | string | number;
};

/**
 * This is a model with nested 'any of' property with a type null
 */
export type CompositionWithNestedAnyAndTypeNull = {
    propA?: Array<ModelWithDictionary | null> | Array<ModelWithArray | null>;
};

export type _3e_num_1Период = 'Bird' | 'Dog';

export type ConstValue = 'ConstValue';

/**
 * This is a model with one property with a 'any of' relationship where the options are not $ref
 */
export type CompositionWithNestedAnyOfAndNull = {
    propA?: Array<_3e_num_1Период | ConstValue> | null;
};

/**
 * This is a model with one property with a 'one of' relationship
 */
export type CompositionWithOneOfAndNullable = {
    propA?: {
        boolean?: boolean;
    } | ModelWithEnum | ModelWithArray | ModelWithDictionary | null;
};

/**
 * This is a model that contains a simple dictionary within composition
 */
export type CompositionWithOneOfAndSimpleDictionary = {
    propA?: boolean | {
        [key: string]: number;
    };
};

/**
 * This is a model that contains a dictionary of simple arrays within composition
 */
export type CompositionWithOneOfAndSimpleArrayDictionary = {
    propA?: boolean | {
        [key: string]: Array<boolean>;
    };
};

/**
 * This is a model that contains a dictionary of complex arrays (composited) within composition
 */
export type CompositionWithOneOfAndComplexArrayDictionary = {
    propA?: boolean | {
        [key: string]: Array<number | string>;
    };
};

/**
 * This is a model with one property with a 'all of' relationship
 */
export type CompositionWithAllOfAndNullable = {
    propA?: ({
        boolean?: boolean;
    } & ModelWithEnum & ModelWithArray & ModelWithDictionary) | null;
};

/**
 * This is a model with one property with a 'any of' relationship
 */
export type CompositionWithAnyOfAndNullable = {
    propA?: {
        boolean?: boolean;
    } | ModelWithEnum | ModelWithArray | ModelWithDictionary | null;
};

/**
 * This is a base model with two simple optional properties
 */
export type CompositionBaseModel = {
    firstName?: string;
    lastname?: string;
};

/**
 * This is a model that extends the base model
 */
export type CompositionExtendedModel = CompositionBaseModel & {
    age: number;
    firstName: string;
    lastname: string;
};

/**
 * This is a model with one nested property
 */
export type ModelWithProperties = {
    required: string;
    readonly requiredAndReadOnly: string;
    requiredAndNullable: string | null;
    string?: string;
    number?: number;
    boolean?: boolean;
    reference?: ModelWithString;
    'property with space'?: string;
    default?: string;
    try?: string;
    readonly '@namespace.string'?: string;
    readonly '@namespace.integer'?: number;
};

/**
 * This is a model with one nested property
 */
export type ModelWithNestedProperties = {
    readonly first: {
        readonly second: {
            readonly third: string | null;
        } | null;
    } | null;
};

/**
 * This is a model with duplicated properties
 */
export type ModelWithDuplicateProperties = {
    prop?: ModelWithString;
};

/**
 * This is a model with ordered properties
 */
export type ModelWithOrderedProperties = {
    zebra?: string;
    apple?: string;
    hawaii?: string;
};

/**
 * This is a model with duplicated imports
 */
export type ModelWithDuplicateImports = {
    propA?: ModelWithString;
    propB?: ModelWithString;
    propC?: ModelWithString;
};

/**
 * This is a model that extends another model
 */
export type ModelThatExtends = ModelWithString & {
    propExtendsA?: string;
    propExtendsB?: ModelWithString;
};

/**
 * This is a model that extends another model
 */
export type ModelThatExtendsExtends = ModelWithString & ModelThatExtends & {
    propExtendsC?: string;
    propExtendsD?: ModelWithString;
};

/**
 * This is a model that contains a some patterns
 */
export type ModelWithPattern = {
    key: string;
    name: string;
    readonly enabled?: boolean;
    readonly modified?: string;
    id?: string;
    text?: string;
    patternWithSingleQuotes?: string;
    patternWithNewline?: string;
    patternWithBacktick?: string;
};

export type File = {
    readonly id?: string;
    readonly updated_at?: string;
    readonly created_at?: string;
    mime: string;
    readonly file?: string;
};

export type _default = {
    name?: string;
};

export type Pageable = {
    page?: number;
    size?: number;
    sort?: Array<string>;
};

/**
 * This is a free-form object without additionalProperties.
 */
export type FreeFormObjectWithoutAdditionalProperties = {};

/**
 * This is a free-form object with additionalProperties: true.
 */
export type FreeFormObjectWithAdditionalPropertiesEqTrue = {
    [key: string]: unknown;
};

/**
 * This is a free-form object with additionalProperties: {}.
 */
export type FreeFormObjectWithAdditionalPropertiesEqEmptyObject = {};

export type ModelWithConst = {
    String?: 'String';
    number?: 0;
    null?: null;
    withType?: 'Some string';
};

/**
 * This is a model with one property and additionalProperties: true
 */
export type ModelWithAdditionalPropertiesEqTrue = {
    /**
     * This is a simple string property
     */
    prop?: string;
    [key: string]: unknown | string | undefined;
};

export type NestedAnyOfArraysNullable = {
    nullableArray?: Array<string | boolean> | null;
};

export type CompositionWithOneOfAndProperties = ({
    foo: SimpleParameter;
} | {
    bar: NonAsciiStringæøåÆØÅöôêÊ字符串;
}) & {
    baz: number | null;
    qux: number;
};

/**
 * An object that can be null
 */
export type NullableObject = {
    foo?: string;
} | null;

/**
 * Some % character
 */
export type CharactersInDescription = string;

export type ModelWithNullableObject = {
    data?: NullableObject;
};

export type ModelWithOneOfEnum = {
    foo: 'Bar';
} | {
    foo: 'Baz';
} | {
    foo: 'Qux';
} | {
    content: string;
    foo: 'Quux';
} | {
    content: [
        string,
        string
    ];
    foo: 'Corge';
};

export type ModelWithNestedArrayEnumsDataFoo = 'foo' | 'bar';

export type ModelWithNestedArrayEnumsDataBar = 'baz' | 'qux';

export type ModelWithNestedArrayEnumsData = {
    foo?: Array<ModelWithNestedArrayEnumsDataFoo>;
    bar?: Array<ModelWithNestedArrayEnumsDataBar>;
};

export type ModelWithNestedArrayEnums = {
    array_strings?: Array<string>;
    data?: ModelWithNestedArrayEnumsData;
};

export type ModelWithNestedCompositionEnums = {
    foo?: ModelWithNestedArrayEnumsDataFoo;
};

export type ModelWithReadOnlyAndWriteOnly = {
    foo: string;
    readonly bar: string;
    baz: string;
};

export type ModelWithConstantSizeArray = [
    number,
    number
];

export type ModelWithAnyOfConstantSizeArray = [
    number | string,
    number | string,
    number | string
];

export type ModelWithPrefixItemsConstantSizeArray = [
    ModelWithInteger,
    number | string,
    string
];

export type ModelWithAnyOfConstantSizeArrayNullable = [
    number | null | string,
    number | null | string,
    number | null | string
];

export type ModelWithAnyOfConstantSizeArrayWithNSizeAndOptions = [
    number | _import,
    number | _import
];

export type ModelWithAnyOfConstantSizeArrayAndIntersect = [
    number & string,
    number & string
];

export type ModelWithNumericEnumUnion = {
    /**
     * Период
     */
    value?: -10 | -1 | 0 | 1 | 3 | 6 | 12;
};

/**
 * Some description with `back ticks`
 */
export type ModelWithBackticksInDescription = {
    /**
     * The template `that` should be used for parsing and importing the contents of the CSV file.
     *
     * <br/><p>There is one placeholder currently supported:<ul>     <li><b>${x}</b> - refers to the n-th column in the CSV file, e.g. ${1}, ${2}, ...)</li></ul><p>Example of a correct JSON template:</p>
     * <pre>
     * [
     * {
     * "resourceType": "Asset",
     * "identifier": {
     * "name": "${1}",
     * "domain": {
     * "name": "${2}",
     * "community": {
     * "name": "Some Community"
     * }
     * }
     * },
     * "attributes" : {
     * "00000000-0000-0000-0000-000000003115" : [ {
     * "value" : "${3}"
     * } ],
     * "00000000-0000-0000-0000-000000000222" : [ {
     * "value" : "${4}"
     * } ]
     * }
     * }
     * ]
     * </pre>
     */
    template?: string;
};

export type ModelWithOneOfAndProperties = (SimpleParameter | NonAsciiStringæøåÆØÅöôêÊ字符串) & {
    baz: number | null;
    qux: number;
};

/**
 * Model used to test deduplication strategy (unused)
 */
export type ParameterSimpleParameterUnused = string;

/**
 * Model used to test deduplication strategy
 */
export type PostServiceWithEmptyTagResponse = string;

/**
 * Model used to test deduplication strategy
 */
export type PostServiceWithEmptyTagResponse2 = string;

/**
 * Model used to test deduplication strategy
 */
export type DeleteFooData = string;

/**
 * Model used to test deduplication strategy
 */
export type DeleteFooData2 = string;

/**
 * Model with restricted keyword name
 */
export type _import = string;

export type SchemaWithFormRestrictedKeys = {
    description?: string;
    'x-enum-descriptions'?: string;
    'x-enum-varnames'?: string;
    'x-enumNames'?: string;
    title?: string;
    object?: {
        description?: string;
        'x-enum-descriptions'?: string;
        'x-enum-varnames'?: string;
        'x-enumNames'?: string;
        title?: string;
    };
    array?: Array<{
        description?: string;
        'x-enum-descriptions'?: string;
        'x-enum-varnames'?: string;
        'x-enumNames'?: string;
        title?: string;
    }>;
};

/**
 * This schema was giving PascalCase transformations a hard time
 */
export type io_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptions = {
    /**
     * Must be fulfilled before a deletion is carried out. If not possible, a 409 Conflict status will be returned.
     */
    preconditions?: io_k8s_apimachinery_pkg_apis_meta_v1_Preconditions;
};

/**
 * This schema was giving PascalCase transformations a hard time
 */
export type io_k8s_apimachinery_pkg_apis_meta_v1_Preconditions = {
    /**
     * Specifies the target ResourceVersion
     */
    resourceVersion?: string;
    /**
     * Specifies the target UID.
     */
    uid?: string;
};

export type AdditionalPropertiesUnknownIssue = {
    [key: string]: string | number;
};

export type AdditionalPropertiesUnknownIssue2 = {
    [key: string]: string | number;
};

export type AdditionalPropertiesUnknownIssue3 = string & {
    entries: {
        [key: string]: AdditionalPropertiesUnknownIssue;
    };
};

export type AdditionalPropertiesIntegerIssue = {
    value: number;
    [key: string]: number;
};

export type OneOfAllOfIssue = ((ConstValue | Generic_Schema_Duplicate_Issue_1_System_Boolean_) & _3e_num_1Период) | Generic_Schema_Duplicate_Issue_1_System_String_;

export type Generic_Schema_Duplicate_Issue_1_System_Boolean_ = {
    item?: boolean;
    error?: string | null;
    readonly hasError?: boolean;
    data?: {
        [key: string]: never;
    };
};

export type Generic_Schema_Duplicate_Issue_1_System_String_ = {
    item?: string | null;
    error?: string | null;
    readonly hasError?: boolean;
};

/**
 * This is a reusable parameter
 */
export type SimpleParameter = string;

/**
 * Parameter with illegal characters
 */
export type x_Foo_Bar = ModelWithString;

export type ImportData = {
    body: ModelWithReadOnlyAndWriteOnly | ModelWithArrayReadOnlyAndWriteOnly;
};

export type ImportResponse = Model_From_Zendesk | ModelWithReadOnlyAndWriteOnly;

export type ApiVversionOdataControllerCountResponse = Model_From_Zendesk;

export type GetApiVbyApiVersionSimpleOperationData = {
    body?: never;
    path: {
        /**
         * foo in method
         */
        foo_param: string;
    };
    query?: never;
};

export type GetApiVbyApiVersionSimpleOperationError = ModelWithBoolean;

export type GetApiVbyApiVersionSimpleOperationResponse = number;

export type DeleteFooData3 = {
    body?: never;
    headers: {
        /**
         * Parameter with illegal characters
         */
        'x-Foo-Bar': ModelWithString;
    };
    path: {
        /**
         * foo in method
         */
        foo_param: string;
        /**
         * bar in method
         */
        BarParam: string;
    };
    query?: never;
};

export type CallWithDescriptionsData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Testing multiline comments in string: First line
         * Second line
         *
         * Fourth line
         */
        parameterWithBreaks?: string;
        /**
         * Testing backticks in string: `backticks` and ```multiple backticks``` should work
         */
        parameterWithBackticks?: string;
        /**
         * Testing slashes in string: \backwards\\\ and /forwards/// should work
         */
        parameterWithSlashes?: string;
        /**
         * Testing expression placeholders in string: ${expression} should work
         */
        parameterWithExpressionPlaceholders?: string;
        /**
         * Testing quotes in string: 'single quote''' and "double quotes""" should work
         */
        parameterWithQuotes?: string;
        /**
         * Testing reserved characters in string: * inline * and ** inline ** should work
         */
        parameterWithReservedCharacters?: string;
    };
};

export type DeprecatedCallData = {
    body?: never;
    headers: {
        /**
         * This parameter is deprecated
         * @deprecated
         */
        parameter: DeprecatedModel | null;
    };
    path?: never;
    query?: never;
};

export type CallWithParametersData = {
    /**
     * This is the parameter that goes into the body
     */
    body: {} | null;
    headers: {
        /**
         * This is the parameter that goes into the header
         */
        parameterHeader: string | null;
    };
    path: {
        /**
         * This is the parameter that goes into the path
         */
        parameterPath: string | null;
        /**
         * api-version should be required in standalone clients
         */
        'api-version': string | null;
    };
    query: {
        foo_ref_enum?: ModelWithNestedArrayEnumsDataFoo;
        foo_all_of_enum: ModelWithNestedArrayEnumsDataFoo;
        /**
         * This is the parameter that goes into the query params
         */
        cursor: string | null;
    };
};

export type CallWithWeirdParameterNamesData = {
    /**
     * This is the parameter that goes into the body
     */
    body: ModelWithString | null;
    headers: {
        /**
         * This is the parameter that goes into the request header
         */
        'parameter.header': string | null;
    };
    path: {
        /**
         * This is the parameter that goes into the path
         */
        'parameter.path.1'?: string;
        /**
         * This is the parameter that goes into the path
         */
        'parameter-path-2'?: string;
        /**
         * This is the parameter that goes into the path
         */
        'PARAMETER-PATH-3'?: string;
        /**
         * api-version should be required in standalone clients
         */
        'api-version': string | null;
    };
    query: {
        /**
         * This is the parameter with a reserved keyword
         */
        default?: string;
        /**
         * This is the parameter that goes into the request query params
         */
        'parameter-query': string | null;
    };
};

export type GetCallWithOptionalParamData = {
    /**
     * This is a required parameter
     */
    body: ModelWithOneOfEnum;
    path?: never;
    query?: {
        /**
         * This is an optional parameter
         */
        page?: number;
    };
};

export type PostCallWithOptionalParamData = {
    /**
     * This is an optional parameter
     */
    body?: {
        offset?: number | null;
    };
    path?: never;
    query: {
        /**
         * This is a required parameter
         */
        parameter: Pageable;
    };
};

export type PostCallWithOptionalParamResponse = number | void;

export type PostApiVbyApiVersionRequestBodyData = {
    /**
     * A reusable request body
     */
    body?: ModelWithString;
    path?: never;
    query?: {
        /**
         * This is a reusable parameter
         */
        parameter?: string;
    };
};

export type PostApiVbyApiVersionFormDataData = {
    /**
     * A reusable request body
     */
    body?: ModelWithString;
    path?: never;
    query?: {
        /**
         * This is a reusable parameter
         */
        parameter?: string;
    };
};

export type CallWithDefaultParametersData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * This is a simple string with default value
         */
        parameterString?: string | null;
        /**
         * This is a simple number with default value
         */
        parameterNumber?: number | null;
        /**
         * This is a simple boolean with default value
         */
        parameterBoolean?: boolean | null;
        /**
         * This is a simple enum with default value
         */
        parameterEnum?: 'Success' | 'Warning' | 'Error';
        /**
         * This is a simple model with default value
         */
        parameterModel?: ModelWithString | null;
    };
};

export type CallWithDefaultOptionalParametersData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * This is a simple string that is optional with default value
         */
        parameterString?: string;
        /**
         * This is a simple number that is optional with default value
         */
        parameterNumber?: number;
        /**
         * This is a simple boolean that is optional with default value
         */
        parameterBoolean?: boolean;
        /**
         * This is a simple enum that is optional with default value
         */
        parameterEnum?: 'Success' | 'Warning' | 'Error';
        /**
         * This is a simple model that is optional with default value
         */
        parameterModel?: ModelWithString;
    };
};

export type CallToTestOrderOfParamsData = {
    body?: never;
    path?: never;
    query: {
        /**
         * This is a optional string with default
         */
        parameterOptionalStringWithDefault?: string;
        /**
         * This is a optional string with empty default
         */
        parameterOptionalStringWithEmptyDefault?: string;
        /**
         * This is a optional string with no default
         */
        parameterOptionalStringWithNoDefault?: string;
        /**
         * This is a string with default
         */
        parameterStringWithDefault: string;
        /**
         * This is a string with empty default
         */
        parameterStringWithEmptyDefault: string;
        /**
         * This is a string with no default
         */
        parameterStringWithNoDefault: string;
        /**
         * This is a string that can be null with no default
         */
        parameterStringNullableWithNoDefault?: string | null;
        /**
         * This is a string that can be null with default
         */
        parameterStringNullableWithDefault?: string | null;
    };
};

export type CallWithNoContentResponseResponse = void;

export type CallWithResponseAndNoContentResponseResponse = number | void;

export type DummyAResponse = _400;

export type DummyBResponse = void;

export type CallWithResponseResponse = _import;

export type CallWithDuplicateResponsesError = ModelWithStringError | DictionaryWithArray | ModelWithBoolean;

export type CallWithDuplicateResponsesResponse = (ModelWithBoolean & ModelWithInteger) | ModelWithString;

export type CallWithResponsesError = ModelWithStringError;

export type CallWithResponsesResponse = {
    readonly '@namespace.string'?: string;
    readonly '@namespace.integer'?: number;
    readonly value?: Array<ModelWithString>;
} | ModelThatExtends | ModelThatExtendsExtends;

export type CollectionFormatData = {
    body?: never;
    path?: never;
    query: {
        /**
         * This is an array parameter that is sent as csv format (comma-separated values)
         */
        parameterArrayCSV: Array<string> | null;
        /**
         * This is an array parameter that is sent as ssv format (space-separated values)
         */
        parameterArraySSV: Array<string> | null;
        /**
         * This is an array parameter that is sent as tsv format (tab-separated values)
         */
        parameterArrayTSV: Array<string> | null;
        /**
         * This is an array parameter that is sent as pipes format (pipe-separated values)
         */
        parameterArrayPipes: Array<string> | null;
        /**
         * This is an array parameter that is sent as multi format (multiple parameter instances)
         */
        parameterArrayMulti: Array<string> | null;
    };
};

export type TypesData = {
    body?: never;
    path?: {
        /**
         * This is a number parameter
         */
        id?: number;
    };
    query: {
        /**
         * This is a number parameter
         */
        parameterNumber: number;
        /**
         * This is a string parameter
         */
        parameterString: string | null;
        /**
         * This is a boolean parameter
         */
        parameterBoolean: boolean | null;
        /**
         * This is an object parameter
         */
        parameterObject: {} | null;
        /**
         * This is an array parameter
         */
        parameterArray: Array<string> | null;
        /**
         * This is a dictionary parameter
         */
        parameterDictionary: {} | null;
        /**
         * This is an enum parameter
         */
        parameterEnum: 'Success' | 'Warning' | 'Error' | null;
    };
};

export type TypesResponse = number | string | boolean | {};

export type UploadFileData = {
    body: Blob | File;
    path: {
        /**
         * api-version should be required in standalone clients
         */
        'api-version': string | null;
    };
    query?: never;
};

export type UploadFileResponse = boolean;

export type FileResponseData = {
    body?: never;
    path: {
        id: string;
        /**
         * api-version should be required in standalone clients
         */
        'api-version': string;
    };
    query?: never;
};

export type FileResponseResponse = Blob | File;

export type ComplexTypesData = {
    body?: never;
    path?: never;
    query: {
        /**
         * Parameter containing object
         */
        parameterObject: {
            first?: {
                second?: {
                    third?: string;
                };
            };
        };
        /**
         * Parameter containing reference
         */
        parameterReference: ModelWithString;
    };
};

export type ComplexTypesResponse = Array<ModelWithString>;

export type MultipartResponseResponse = {
    file?: Blob | File;
    metadata?: {
        foo?: string;
        bar?: string;
    };
};

export type MultipartRequestData = {
    body?: {
        content?: Blob | File;
        data?: ModelWithString | null;
    };
};

export type ComplexParamsData = {
    body?: {
        readonly key: string | null;
        name: string | null;
        enabled?: boolean;
        type: 'Monkey' | 'Horse' | 'Bird';
        listOfModels?: Array<ModelWithString> | null;
        listOfStrings?: Array<string> | null;
        parameters: ModelWithString | ModelWithEnum | ModelWithArray | ModelWithDictionary;
        readonly user?: {
            readonly id?: number;
            readonly name?: string | null;
        };
    };
    path: {
        id: number;
        /**
         * api-version should be required in standalone clients
         */
        'api-version': string;
    };
    query?: never;
};

export type ComplexParamsResponse = ModelWithString;

export type TestErrorCodeData = {
    body?: never;
    path?: never;
    query: {
        /**
         * Status code to return
         */
        status: number;
    };
};

export type NonAsciiæøåÆøÅöôêÊ字符串Data = {
    body?: never;
    path?: never;
    query: {
        /**
         * Dummy input param
         */
        nonAsciiParamæøåÆØÅöôêÊ: number;
    };
};

export type NonAsciiæøåÆøÅöôêÊ字符串Response = Array<NonAsciiStringæøåÆØÅöôêÊ字符串>;

export type PutWithFormUrlEncodedData = {
    body: ArrayWithStrings;
};