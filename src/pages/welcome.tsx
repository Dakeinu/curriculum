import { Navbar } from '../components/navbar';
import {  MyProfile } from '../interfaces/models';

export const Welcome = () => {

    const profile: MyProfile = {
        photo: 'https://avatars.githubusercontent.com/u/73825697?v=4',
        name: 'Falcati Rémi',
        job_title: 'Développeur Web'
    }

    return (
        <>  
            <Navbar />
            <div className="container">
                <div className='welcome-content w-2/3 md:w-1/3 translate-y-1/4 flex flex-col m-auto'>
                    <div className='welcome-content-photo'>
                        <img src={profile.photo} alt="Photo de Rémi Falcati" className='w-full h-full m-auto md:w-1/2'/>
                    </div>
                    <div className='welcome-content-name my-4 bg-tertiary'>
                        <h1 className='text-3xl text-center md:text-5xl'>{profile.name}</h1>
                    </div>
                    <div className='welcome-content-job'>
                        <h2 className='text-xl text-center md:text-3xl'>{profile.job_title}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}