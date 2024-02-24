'use client'

import { SunIcon } from '@radix-ui/react-icons';

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';

function ThemeSwitcher() {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if(!mounted) return null;
  return (
    <Tabs defaultValue = {theme}>
        <TabsList className="border">
            <TabsTrigger
            value = "Light"
            onClick ={() => setTheme('Light')}>
                <SunIcon  className='h-[1.2 rem] w-[1.2 rem]'/>
            </TabsTrigger>
        </TabsList>
    </Tabs>
  )
}

export default ThemeSwitcher