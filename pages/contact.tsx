import * as React from 'react';
import type { NextPage } from 'next';
import { Container, Typography, Box } from '@mui/material';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { motion } from 'framer-motion';
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { server } from '../config/index';
import Layout from '../src/components/Layout';
import { encodeContact } from '../src/helpers/email';
import GridItem from '../src/components/Grid/GridItem';
import GridContainer from '../src/components/Grid/GridContainer';
import CardHeader from '../src/components/Form/CardHeader';
import CardBody from '../src/components/Form/CardBody';
import CardFooter from '../src/components/Form/CardFooter';
import Card from '../src/components/Form/Card';
import CustomInput from '../src/components/CustomInput/CustomInput';
import LoadingButton from '../src/components/Button/LoadingButton';
import formStyle from '../styles/jss/components/form';
import { cardVariants } from '../src/animations/cards';

const phoneRegExp = /^(1)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const schema = yup.object().shape({
	firstName: yup.string().required(),
	lastName: yup.string().required(),
	email: yup.string().email().required(),
	phoneNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
	description: yup.string().required(),
});

type FormValues = {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber?: string | undefined;
	description: string;
};

const Contact: NextPage = () => {
	const [loading, setLoading] = React.useState(false);
	const {
		handleSubmit,
		control,
		formState: { errors },
		reset,
	} = useForm<FormValues>({
		resolver: yupResolver(schema),
	});

	const router = useRouter();

	const onSubmitForm = async (values: FormValues) => {
		setLoading(true);
		const encodedContactInfo = encodeContact(values);
		const API_ENDPOINT = `${server}/api/email`;
		const config = {
			method: 'post',
			url: API_ENDPOINT,
			headers: {
				'Content-Type': 'application/json',
			},
			data: encodedContactInfo,
		};

		try {
			const response = await axios(config);
			if (response.status === 200) {
				setLoading(false);
				reset();
				router.push('/success');
			}
		} catch (err) {
			setLoading(false);
			console.log('ERROR: ', err);
		}
	};

	return (
		<Layout>
			<Container maxWidth="lg">
				<Box
					sx={{
						my: 4,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Box maxWidth="sm">
						<motion.div
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true, amount: 0.2 }}
						>
							<motion.div className="card" variants={cardVariants}>
								<Card
									sx={{
										...formStyle.card1,
										// add more elevation to card
										boxShadow: '0 0 34px 0 rgba(0, 0, 0, 0.2)',
									}}
								>
									<form onSubmit={handleSubmit(onSubmitForm)}>
										<CardHeader
											contact
											color="success"
											sx={{
												...formStyle.textCenter,
											}}
										>
											<Typography variant="h4" gutterBottom>
												Contact
											</Typography>
										</CardHeader>
										<CardBody>
											<GridContainer>
												<GridItem xs={12} sm={6} md={6}>
													<Controller
														name="firstName"
														control={control}
														defaultValue=""
														render={({ field }) => (
															<CustomInput
																inputProps={{
																	...field,
																	inputProps: {
																		role: 'text',
																		'aria-label': 'First Name',
																	},
																}}
																labelText="First Name"
																formControlProps={{
																	fullWidth: true,
																}}
																error={
																	errors?.firstName?.message &&
																	errors?.firstName?.message?.length > 0
																}
															/>
														)}
													/>
													<p>{errors?.firstName?.type}</p>
												</GridItem>
												<GridItem xs={12} sm={6} md={6}>
													<Controller
														name="lastName"
														control={control}
														defaultValue=""
														render={({ field }) => (
															<CustomInput
																inputProps={{
																	...field,
																	inputProps: {
																		role: 'text',
																		'aria-label': 'Last Name',
																	},
																}}
																labelText="Last Name"
																formControlProps={{
																	fullWidth: true,
																}}
																error={
																	errors?.lastName?.message &&
																	errors?.lastName?.message?.length > 0
																}
															/>
														)}
													/>
													{errors?.lastName?.type && (
														<p>{errors?.lastName?.type}</p>
													)}
												</GridItem>
											</GridContainer>
											<GridContainer>
												<GridItem xs={12} sm={6} md={6}>
													<Controller
														name="email"
														control={control}
														defaultValue=""
														render={({ field }) => (
															<CustomInput
																inputProps={{
																	...field,
																	inputProps: {
																		role: 'text',
																		'aria-label': 'Email',
																	},
																}}
																labelText="Email Address"
																error={
																	errors?.email?.message &&
																	errors?.email?.message?.length > 0
																}
																formControlProps={{
																	fullWidth: true,
																}}
															/>
														)}
													/>
													<p>{errors?.email?.message}</p>
												</GridItem>
												<GridItem xs={12} sm={6} md={6}>
													<Controller
														name="phoneNumber"
														control={control}
														defaultValue=""
														render={({ field }) => (
															<CustomInput
																inputProps={{
																	...field,
																	inputProps: {
																		role: 'text',
																		'aria-label': 'Phone Number',
																	},
																}}
																labelText="Phone Number"
																error={
																	errors?.phoneNumber?.message &&
																	errors?.phoneNumber?.message?.length > 0
																}
																formControlProps={{
																	fullWidth: true,
																}}
															/>
														)}
													/>
													<p>{errors?.phoneNumber?.message}</p>
												</GridItem>
											</GridContainer>
											<GridContainer>
												<GridItem xs={12} sm={12} md={12}>
													<Controller
														name="description"
														control={control}
														defaultValue=""
														render={({ field }) => (
															<CustomInput
																labelText="More info"
																error={
																	errors?.description?.message &&
																	errors?.description?.message?.length > 0
																}
																formControlProps={{
																	fullWidth: true,
																}}
																inputProps={{
																	multiline: true,
																	rows: 5,
																	...field,
																	required: true,
																	inputProps: {
																		role: 'textbox',
																		'aria-label': 'Description',
																	},
																}}
															/>
														)}
													/>
												</GridItem>
											</GridContainer>

											<p>{errors?.description?.message}</p>
										</CardBody>
										<CardFooter
											sx={{
												...formStyle.justifyContentBetween,
											}}
										>
											<Box>
												<LoadingButton
													onClick={handleSubmit(onSubmitForm)}
													disabled={loading}
													color="primary"
													loading={loading}
													sx={{ fontWeight: 'bold' }}
												>
													Send Message
												</LoadingButton>
											</Box>
										</CardFooter>
									</form>
								</Card>
							</motion.div>
						</motion.div>
					</Box>
				</Box>
			</Container>
		</Layout>
	);
};

export default Contact;
