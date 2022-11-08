interface EmailProps {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	description: string;
}

export const encodeContact = (contact: EmailProps) => {
	if (contact) {
		const { firstName, lastName, email, phoneNumber, description } = contact;

		const encodedContact = {
			firstName: encodeURI(firstName),
			lastName: encodeURI(lastName),
			email: encodeURI(email),
			phoneNumber: encodeURI(phoneNumber),
			description: encodeURI(description),
		};
		return encodedContact;
	}
};
