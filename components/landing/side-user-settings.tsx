'use client';

import { useRouter } from 'next/navigation';

import { FiUser } from 'react-icons/fi';
import { IoLogInOutline } from 'react-icons/io5';

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';

const SideUserSettings = () => {
    const router = useRouter();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className='inline-flex items-center space-x-1 rounded p-1 px-1 transition duration-200 ease-in-out hover:bg-gray-200' aria-label='user-portal'>
                    <FiUser />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side='right' className='transition duration-200 ease-in-out'>
                <DropdownMenuItem onClick={() => router.push('login')} className='cursor-pointer space-x-1'>
                    <IoLogInOutline />
                    <span>Login</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default SideUserSettings;
