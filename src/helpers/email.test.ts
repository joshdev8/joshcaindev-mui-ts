import { encodeContact } from './email';

describe('encodeContact', () => {
	it('should encode the contact', () => {
		const contact = {
			firstName: 'John',
			lastName: 'Doe',
			email: '',
			phoneNumber: '1234567890',
			description: 'This is a test',
		};
		const encodedContact = encodeContact(contact);
		expect(encodedContact).toEqual({
			firstName: 'John',
			lastName: 'Doe',
			email: '',
			phoneNumber: '1234567890',
			description: 'This%20is%20a%20test',
		});
	});
});
