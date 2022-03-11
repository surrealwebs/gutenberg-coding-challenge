/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import './style.scss';
import Edit from './edit';
import Save from './save';

registerBlockType( 'xwp/country-card', {
	edit: Edit,
	save: Save,
} );
