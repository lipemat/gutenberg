/**
 * WordPress dependencies
 */
import { ToolbarButton, MenuItem } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { store as noticesStore } from '@wordpress/notices';

/**
 * Internal dependencies
 */
import { store as blockEditorStore } from '../store';
import { getModifyContentLockSnackbarId } from '../store/utils';
import { BlockControls, BlockSettingsMenuControls } from '../components';
import { unlock } from '../lock-unlock';

// The implementation of content locking is mainly in this file, although the mechanism
// to stop temporarily editing as blocks when an outside block is selected is on component StopEditingAsBlocksOnOutsideSelect
// at block-editor/src/components/block-list/index.js.
// Besides the components on this file and the file referenced above the implementation
// also includes artifacts on the store (actions, reducers, and selector).

function ContentLockControlsPure( { clientId, isSelected } ) {
	const { templateLock, isLockedByParent, isEditingAsBlocks } = useSelect(
		( select ) => {
			const {
				getContentLockingParent,
				getTemplateLock,
				getTemporarilyEditingAsBlocks,
			} = unlock( select( blockEditorStore ) );
			return {
				templateLock: getTemplateLock( clientId ),
				isLockedByParent: !! getContentLockingParent( clientId ),
				isEditingAsBlocks: getTemporarilyEditingAsBlocks() === clientId,
			};
		},
		[ clientId ]
	);

	const { stopEditingAsBlocks, modifyContentLockBlock, selectBlock } = unlock(
		useDispatch( blockEditorStore )
	);
	const { removeNotice } = useDispatch( noticesStore );
	const isContentLocked =
		! isLockedByParent && templateLock === 'contentOnly';

	const stopEditingAsBlockCallback = () => {
		stopEditingAsBlocks( clientId );
		removeNotice( getModifyContentLockSnackbarId( clientId ) );
		// Move focus back to the block to prevent focus-loss.
		selectBlock( clientId, -1 );
	};

	if ( ! isContentLocked && ! isEditingAsBlocks ) {
		return null;
	}

	const showStopEditingAsBlocks = isEditingAsBlocks && ! isContentLocked;
	const showStartEditingAsBlocks =
		! isEditingAsBlocks && isContentLocked && isSelected;

	return (
		<>
			{ showStopEditingAsBlocks && (
				<>
					<BlockControls group="other">
						<ToolbarButton onClick={ stopEditingAsBlockCallback }>
							{ __( 'Done' ) }
						</ToolbarButton>
					</BlockControls>
				</>
			) }
			{ showStartEditingAsBlocks && (
				<BlockSettingsMenuControls>
					{ ( { selectedClientIds, onClose } ) =>
						selectedClientIds.length === 1 &&
						selectedClientIds[ 0 ] === clientId && (
							<MenuItem
								onClick={ () => {
									modifyContentLockBlock( clientId );
									onClose();
								} }
							>
								{ __( 'Modify' ) }
							</MenuItem>
						)
					}
				</BlockSettingsMenuControls>
			) }
		</>
	);
}

export default {
	edit: ContentLockControlsPure,
	hasSupport() {
		return true;
	},
};
