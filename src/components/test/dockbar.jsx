// NOTE: Have to make links target set to be blank on welcome dockbar.
// NOTE: Have to check mail link of a dockbar.

import React from 'react';
import { FloatingDock } from "../ui/dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconBrandInstagram,
    IconBrandGmail,
    IconBrandLinkedin,
    IconNotes
} from '@tabler/icons-react';

export default function FloatingDockDemo() {
    const links = [
        {
            title: 'GitHub',
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-300"/>
            ),
            href: 'https://github.com/harshit-46'
        },
        {
            title: 'Linkedin',
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-300"/>
            ),
            href: 'https://www.linkedin.com/in/harshithere/'
        },
        {
            title: 'Resume',
            icon: (
                <IconNotes className="h-full w-full text-neutral-300"/>
            ),
            href: 'https://drive.google.com/file/d/1_6PuQCpMIhatcA7hvkGFp-wTSXBNbBO0/view?usp=sharing'
        },
        {
            title: 'Instagram',
            icon: (
                <IconBrandInstagram className="h-full w-full text-neutral-300"/>
            ),
            href: 'https://www.instagram.com/_harshit.25/'
        },
        {
            title: 'Twitter',
            icon: (
                <IconBrandX className="h-full w-full text-neutral-300"/>
            ),
            href: 'https://x.com/harshit__25'
        },
        {
            title: 'Email',
            icon: (
                <IconBrandGmail className="h-full w-full text-neutral-300"/>
            ),
            href: 'https://mail.google.com/mail/u/0/#inbox?compose=new'
        }
    ];

    return (
        <div className="flex items-center justify-center h-[35rem] w-full">
            <FloatingDock
                items={links}
            />
        </div>
    );
}
