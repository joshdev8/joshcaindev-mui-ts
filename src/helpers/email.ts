interface EmailProps {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber?: string | undefined;
	description: string;
}

export const encodeContact = (contact: EmailProps) => {
	const { firstName, lastName, email, phoneNumber, description } = contact;

	const encodedContact = {
		firstName: encodeURI(firstName),
		lastName: encodeURI(lastName),
		email: encodeURI(email),
		phoneNumber: phoneNumber && encodeURI(phoneNumber),
		description: encodeURI(description),
	};
	return encodedContact;
};
