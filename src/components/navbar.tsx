import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Contact } from '../interfaces/models';

export const Navbar = () => {

    const contacts_methods: Contact[] = [
        {
            name: "Email",
            link: "mailto:rfalcati@gmail.com",
            unformatted_link: "rfalcati@gmail.com",
            icon: faEnvelope
        },
        {
            name: "Téléphone",
            link: "tel:514-625-1355",
            unformatted_link: "514-625-1355",
            icon: faPhone
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/remifalcati/",
            unformatted_link: "www.linkedin.com/in/remifalcati",
            icon: faLinkedin
        }
    ]

    return (
        <>
            <div className='navbar py-4'>
                <div className='navbar-inner flex flex-row'>
                    {contacts_methods.map((contact, index) => {
                        return (
                            <a key={index} href={contact.link} target="_blank" rel="noreferrer" className='w-full button-primary mx-4'>
                                <div className='navbar-inner-item text-center md:w-fit md:flex md:flex-row md:items-center md:text-start md:m-auto md:py-4'>
                                    <FontAwesomeIcon icon={contact.icon} className='item-icon w-6 h-6 bg-gradient md:p-4 md:rounded-full md:mr-8 md:w-10 md:h-10'/>
                                    <div className='item-text flex flex-col'>
                                        <span className='item-label text-sm md:text-lg'>{contact.name}</span>
                                        <span className='item-data text-xs md:text-sm'>{contact.unformatted_link}</span>
                                    </div>
                                </div>
                            </a>
                        )
                    })
                    }
                </div>
            </div>
        </>
    )
}