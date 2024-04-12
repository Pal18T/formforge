'use client'

import React, { useEffect, useState } from 'react'
import { toast } from './ui/use-toast';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { ImShare } from 'react-icons/im';

function FormLinkShare({ sharedUrl }:{ sharedUrl: string}) {
    const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // 
  }

  const shareLink = `${window.location.origin}/submit/${sharedUrl}`;
  return (
    <div className="flex flex-grow gap-4 items-center">
      <Input value={shareLink} readOnly />
      <Button
        className="w-[250px]"
        onClick={() => {
          navigator.clipboard.writeText(shareLink);
          toast({
            title: "Copied!",
            description: "Link copied to clipboard",
          });
        }}
      >
        <ImShare className="mr-2 h-4 w-4" />
        Share link
      </Button>
    </div>
  )
}

export default FormLinkShare