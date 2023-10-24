import { INodeProperties } from 'n8n-workflow';

export const customerOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['customer'],
			},
		},
		options: [
			{
				name: 'List of customers',
				value: 'list',
				action: 'List of customers',
				routing: {
					request: {
						method: 'GET',
						url: '/customers',
						qs: {
							phone: '={{ $parameter.phone }}',
							email: '={{ $parameter.email }}',
						},
					},
				},
			},
			{
				name: 'Get customer',
				value: 'get',
				action: 'Get customer',
				routing: {
					request: {
						method: 'GET',
						url: '={{ "/customers/" + $parameter.customerId }}',
					},
				},
			},
			{
				name: 'Create customer',
				value: 'create',
				action: 'Create customer',
				routing: {
					request: {
						method: 'POST',
						url: '/customers',
						body: {
							firstName: '={{ $parameter.firstName }}',
							surname: '={{ $parameter.surname }}',
							phone: '={{ $parameter.phone }}',
							email: '={{ $parameter.email }}',
							gender: '={{ $parameter.gender }}',
							dateOfBirth: '={{ $parameter.dateOfBirth }}',
							externalUserId: '={{ $parameter.externalUserId }}',
						},
						json: true,
					},
				},
			},
		],
		default: 'list',
	},
];

const listOperation: INodeProperties[] = [
	{
		displayName: 'Phone',
		name: 'phone',
		default: '',
		description: 'Filter by phone',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['list'],
			},
		},
		type: 'string',
		required: false,
	},
	{
		displayName: 'Email',
		name: 'email',
		default: '',
		description: 'Filter by email',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['list'],
			},
		},
		type: 'string',
		required: false,
	},
];

const getOperation: INodeProperties[] = [
	{
		displayName: 'Customer Id',
		name: 'customerId',
		default: '',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['get'],
			},
		},
		type: 'string',
		required: true,
	},
];

const createOperation: INodeProperties[] = [
	{
		displayName: 'First Name',
		name: 'firstName',
		default: '',
		description: 'First Name',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
		type: 'string',
		required: true,
	},
	{
		displayName: 'Surname',
		name: 'surname',
		default: '',
		description: 'Surname',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
		type: 'string',
		required: false,
	},
	{
		displayName: 'Phone',
		name: 'phone',
		default: '',
		description: 'Phone',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
		type: 'string',
		required: true,
	},
	{
		displayName: 'Email',
		name: 'email',
		default: '',
		description: 'Email',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
		type: 'string',
		required: false,
	},
	{
		displayName: 'Gender',
		name: 'gender',
		default: '0',
		description: 'Gender',
		options: [
			{
				name: 'Unknown',
				value: '0',
			},
			{
				name: 'Male',
				value: '1',
			},
			{
				name: 'Female',
				value: '2',
			},
		],
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
		type: 'options',
		required: false,
	},
	{
		displayName: 'Date of Birth',
		name: 'dateOfBirth',
		default: '',
		description: 'Date of Birth',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
		type: 'dateTime',
		required: false,
	},
	{
		displayName: 'External User Id',
		name: 'externalUserId',
		default: '',
		description: 'External User Id',
		displayOptions: {
			show: {
				resource: ['customer'],
				operation: ['create'],
			},
		},
		type: 'string',
		required: false,
	},
];

export const customerFields: INodeProperties[] = [
	...listOperation,
	...getOperation,
	...createOperation,
];
