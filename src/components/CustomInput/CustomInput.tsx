import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Clear from '@mui/icons-material/Clear';
import Check from '@mui/icons-material/Check';

import styles from '../../../styles/jss/components/customInputStyle';

interface Props {
	formControlProps?: object;
	inputProps?: object;
	error?: boolean | string;
	success?: boolean;
	labelText: string;
	id?: string;
	inputRootCustomClasses?: string;
	white?: boolean;
	labelProps?: object;
	sx?: object;
}

export default function CustomInput(props: Props) {
	const {
		formControlProps,
		labelText,
		id,
		labelProps,
		inputProps,
		error,
		white,
		success,
		sx,
	} = props;
	return (
		<FormControl
			{...formControlProps}
			sx={{
				...styles.formControl,
				// ...(formControlProps && styles[formControlProps.className]),
				...(sx && sx),
			}}
		>
			{labelText !== undefined ? (
				<InputLabel
					sx={{
						...styles.labelRoot,
						...(error && styles.labelRootError),
						...(success && styles.labelRootSuccess),
					}}
					htmlFor={id}
					{...labelProps}
				>
					{labelText}
				</InputLabel>
			) : null}
			<Input
				sx={{
					...styles.input,
					...(white && styles.whiteInput),
					// ...(inputRootCustomClasses && styles[inputRootCustomClasses]),
				}}
				id={id}
				{...inputProps}
			/>
			{error ? (
				<Clear
					sx={{
						...styles.feedback,
						...(error && styles.labelRootError),
						...(success && styles.labelRootSuccess),
					}}
				/>
			) : success ? (
				<Check
					sx={{
						...styles.feedback,
						// ...(error && styles.labelRootError),
						...(success && styles.labelRootSuccess),
					}}
				/>
			) : null}
		</FormControl>
	);
}
