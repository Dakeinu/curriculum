import { Pages } from '../interfaces/models';

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
        <div className='pagination flex flex-row justify-between py-4 px-8'>
            <a href={setPreviousPage(currentPage).link} className='button-primary w-1/2'>
                <div className='pagination-inner flex flex-row justify-start'>
                    <span className='text-sm'>Précédent</span>
                </div>
            </a>
            <a href={setNextPage(currentPage).link} className='button-primary w-1/2'>
                <div className='pagination-inner flex flex-row justify-end'>
                    <span className='text-sm'>Suivant</span>
                </div>
            </a>
        </div>
    )
}