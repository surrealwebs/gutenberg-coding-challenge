import { useBlockProps } from '@wordpress/block-editor';
import { useRef } from '@wordpress/element';
import Preview from './preview';

export default function Save( { attributes } ) {

	const ref = useRef();
	const blockProps = useBlockProps( { ref } );

	return (
		<div { ...blockProps }>
			<Preview { ...attributes } />
		</div>
	);
}
