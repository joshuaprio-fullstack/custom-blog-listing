/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(metadata.name, {
    /**
     * @see ./edit.js
     */
    edit: Edit,
});


registerBlockType('search-input/search-container', {
    title: 'Search Container',
    icon: 'search',
    category: 'layout',
    edit: () => {
        return (
            <div id="search-container">
                <form className="search-form">
                    <input type="text" id="search-input" name="search" placeholder="Search" />
                    <button type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <path d="M17.5 18.2515L12.5001 13.2515M14.1667 9.0848C14.1667 12.3065 11.555 14.9181 8.33333 14.9181C5.11167 14.9181 2.5 12.3065 2.5 9.0848C2.5 5.86314 5.11167 3.25146 8.33333 3.25146C11.555 3.25146 14.1667 5.86314 14.1667 9.0848Z" stroke="#11233A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </form>
            </div>
        );
    },
    save: () => {
        return (
            <div id="search-container">
                <form className="search-form">
                    <input type="text" id="search-input" name="search" placeholder="Search" />
                    <button type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <path d="M17.5 18.2515L12.5001 13.2515M14.1667 9.0848C14.1667 12.3065 11.555 14.9181 8.33333 14.9181C5.11167 14.9181 2.5 12.3065 2.5 9.0848C2.5 5.86314 5.11167 3.25146 8.33333 3.25146C11.555 3.25146 14.1667 5.86314 14.1667 9.0848Z" stroke="#11233A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </form>
            </div>
        );
    },
});


registerBlockType('search-icon-mobile/search-icon-mobile', {
    title: 'Search Icon mobile',
    icon: 'search',
    category: 'layout',
    edit: () => {
        return (
            <form class="search-form search-mobile">
                <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path d="M17.5 18.2515L12.5001 13.2515M14.1667 9.0848C14.1667 12.3065 11.555 14.9181 8.33333 14.9181C5.11167 14.9181 2.5 12.3065 2.5 9.0848C2.5 5.86314 5.11167 3.25146 8.33333 3.25146C11.555 3.25146 14.1667 5.86314 14.1667 9.0848Z" stroke="#11233A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </button>
            </form>
        );
    },
    save: () => {
        return (
            <form class="search-form search-mobile">
                <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path d="M17.5 18.2515L12.5001 13.2515M14.1667 9.0848C14.1667 12.3065 11.555 14.9181 8.33333 14.9181C5.11167 14.9181 2.5 12.3065 2.5 9.0848C2.5 5.86314 5.11167 3.25146 8.33333 3.25146C11.555 3.25146 14.1667 5.86314 14.1667 9.0848Z" stroke="#11233A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </button>
            </form>
        );
    },
});


registerBlockType('search-result/search-result', {
    title: 'Search Result',
    icon: 'badge',
    category: 'layout',
    edit: () => {
        return (
            <div class="search-info-container">
            </div>
        );
    },
    save: () => {
        return (
            <div class="search-info-container">
            </div>
        );
    },
});
