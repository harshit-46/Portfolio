import React from 'react';
import { FloatingDock } from "../ui/dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconBrandGmail,
    IconBrandLinkedin,
} from '@tabler/icons-react';

export default function FloatingDockDemo() {
    const links = [
        {
            title: 'Mail',
            icon: (
                <IconBrandGmail className="h-full w-full text-neutral-300" />
            ),
            href: '#',
        },
        {
            title: 'Linkedin',
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-300" />
            ),
            href: 'https://www.linkedin.com/in/harshithere/',
        },
        {
            title: 'Twitter',
            icon: (
                <IconBrandX className="h-full w-full text-neutral-300" />
            ),
            href: 'https://x.com/harshit__25',
        },
        {
            title: 'GitHub',
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-300" />
            ),
            href: 'https://github.com/harshit-46',
        },
    ];

    return (
        <div className="flex items-center justify-center h-[35rem] w-full">
            <FloatingDock
                mobileClassName="translate-y-20" // only for demo, remove for production
                items={links}
            />
        </div>
    );
}
