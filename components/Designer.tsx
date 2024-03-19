'use client';

import React from 'react'
import DesignerSidebar from './DesignerSidebar'
import { useDndMonitor, useDroppable } from '@dnd-kit/core'
import { cn } from '@/lib/utils';
import { DividerHorizontalIcon } from '@radix-ui/react-icons';
import { FormElementInstance } from './FormElements';
import useDesigner from './hooks/useDesigner';

function Designer() {
    const { elements, addElement} = useDesigner();
    const droppable = useDroppable({
        id: "designer-drop-area",
        data: {
            isDesignerDropArea: true,
        },
    });
    useDndMonitor({
        
    })
    return (
        <div className='flex w-full h-full'>
            <div className="p-4 w-full">
                <div
                    ref={droppable.setNodeRef}
                    className={cn("bg-background max-w-[920px] h-full m-auto rounded-xl flex flex-col flex-grow items-cente justify-start flex-1 overflow-y-auto",
                        droppable.isOver && "ring-2 ring-primary/20"
                    )}>
                    {!droppable.isOver && (
                        <p className='text-3xl  text-muted-foreground flex flex-grow items-center justify-center font-bold'>
                            Drop Here
                        </p>
                    )}
                    {droppable.isOver && (
                        <div className='p-4 w-full'>
                            <div className='h-[120px] rounded-md bg-primary/20'>

                            </div>
                        </div>
                    )}
                </div>
            </div>
            <DesignerSidebar />
        </div>
    )
}

export default Designer