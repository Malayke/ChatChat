'use client';

import store from '@/hooks/store';
import { useAtomValue } from 'jotai';

import LandingHeader from '@/components/landing/header';
import FileMain from '@/components/landing/mode/file-main';

export default function FileModePage() {
    const isHiddenSide = useAtomValue(store.isHiddenSideAtom);

    return (
        <div className={`h-screen ${!isHiddenSide && 'md:ml-80'}`}>
            <LandingHeader />
            <FileMain />
        </div>
    );
}
