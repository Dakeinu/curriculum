import { Pages } from '../interfaces/models';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export const Pagination = ({ pages, currentPage }: { pages: Pages[], currentPage: Pages }) => {

    const setNextPage = (currentPage: Pages): Pages => {
        const index = pages.findIndex(page => page.name === currentPage.name);
        if (index === pages.length - 1) {
            return pages[0];
        }
        return pages[index + 1];
    }

    const setPreviousPage = (currentPage: Pages): Pages => {
        const index = pages.findIndex(page => page.name === currentPage.name);
        if (index === 0) {
            return pages[pages.length - 1];
        }
        return pages[index - 1];
    }

    return (
        <div className='pagination flex flex-row justify-center py-4 px-8'>
            <a href={setPreviousPage(currentPage).link} className='pagination-button'>
                <div className='pagination-inner flex flex-row justify-start'>
                    <span className='text-sm'><FontAwesomeIcon icon={faChevronLeft} /></span>
                </div>
            </a>
            <a href={setNextPage(currentPage).link} className='pagination-button'>
                <div className='pagination-inner flex flex-row justify-end'>
                    <span className='text-sm'><FontAwesomeIcon icon={faChevronRight} /></span>
                </div>
            </a>
        </div>
    )
}