import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface Pages {
    name: string;
    link: string;
}

export interface MyProfile {
    photo: string;
    name: string;
    job_title: string;
}

export interface Contact {
    name: string;
    link: string;
    unformatted_link: string;
    icon: IconProp;
}