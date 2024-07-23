import nodemailer from 'nodemailer';

interface Request {
	method: string;
	body: {
		firstName: string;
		lastName: string;
		email: string;
		description: string;
		phoneNumber: string;
		message?: string;
	};
}

interface Response {
	status: (arg0: number) => {
		(): unknown;
		new (): unknown;
		json: {
			(arg0: { message?: string; body: string | object }): unknown;
			new (): unknown;
		};
		end: { (): unknown; new (): unknown };
	};
	setHeader: (arg0: string, arg1: string | boolean) => void;
}

interface Handler {
	(req: Request, res: Response): void;
}

const allowCors = (fn: Handler) => async (req: Request, res: Response) => {
	res.setHeader('Access-Control-Allow-Credentials', true);
	res.setHeader('Access-Control-Allow-Origin', '*');
	// another common pattern
	// res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET,OPTIONS,PATCH,DELETE,POST,PUT',
	);
	res.setHeader(
		'Access-Control-Allow-Headers',
		'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
	);
	if (req.method === 'OPTIONS') {
		res.status(200).end();
		return;
	}
	return await fn(req, res);
};

const handler = async (req: Request, res: Response) => {
	if (req.method === 'POST') {
		const { firstName, lastName, phoneNumber, description, email } = req.body;

		const decodedContact = {
			firstName: decodeURI(firstName),
			lastName: decodeURI(lastName),
			phoneNumber: decodeURI(phoneNumber),
			description: decodeURI(description),
			email: decodeURI(email),
		};

		const dest = 'joshcain8@gmail.com';

		const transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 465,
			secure: true,
			auth: {
				user: process.env.GMAIL_USERNAME,
				pass: process.env.GMAIL_APP_PASSWORD,
			},
		});

		const mailOptions = {
			from: 'Josh Cain Dev Portfolio <joshcaindev@gmail.com>',
			to: `${dest}`,
			subject: 'New Contact Form Submission', // email subject
			html: `
			<h5>New Form Submission!</h5>
			<ul>
				<li>Name: ${decodedContact.firstName} ${decodedContact.lastName}</li>
				<li>Email: ${decodedContact.email} <a href="mailto:${decodedContact.email}">Send Email</a></li>
				<li>Phone: ${decodedContact.phoneNumber} <a href="tel:${decodedContact.phoneNumber}">Click To Call</a></li>
				<li>Description: ${decodedContact.description}</li>
			</ul>
			`, // email content in HTML
		};

		if (decodedContact.email && decodedContact.email.length > 0) {
			try {
				const emailResponse = await transporter.sendMail(mailOptions);
				res.status(200).json({ message: 'Email sent!', body: emailResponse });
			} catch (err) {
				console.log(err);
			}
		}
	}

	//Preflight CORS handler
	if (req.method === 'OPTIONS') {
		return res.status(200).json({
			body: 'OK',
		});
	}
};

export default allowCors(handler);
