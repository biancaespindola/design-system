import { Meta, StoryObj } from '@storybook/react';
import {
	TextInput,
	TextInputInputProps,
	TextInputRootProps,
} from './TextInput';

export default {
	title: 'Components/TextInput',
	component: TextInput.Root,

	args: {
		children: (
			<>
				<TextInput.Icon></TextInput.Icon>
				<TextInput.Input placeholder="Type you email address" />
			</>
		),
	},

	argTypes: {
		children: {
			table: {
				disable: true,
			},
		},
	},
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};
