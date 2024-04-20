import React from 'react'
import SidebarBtnElement from './SidebarBtnElement'
import { FormElements } from './FormElements'
import { Separator } from './ui/separator'

function FormElementsSidebar() {
  return (
    <div>
      <p className='text-sm text-foreground/70'>Drag and Drop elements</p>
      <Separator className='my-2'/>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center'>
        <p className='text-sm text-muted-foreground col-span-1 md:col-span-2 my-2 place-self-start'>Layout Elements</p>
      </div>
        
        <SidebarBtnElement formElement={FormElements.TextField}/>
        <SidebarBtnElement formElement={FormElements.TitleField}/>
        <SidebarBtnElement formElement={FormElements.SubTitleField}/>
        <SidebarBtnElement formElement={FormElements.ParagraphField}/>
        <SidebarBtnElement formElement={FormElements.TextAreaField}/>
    </div>
  )
}

export default FormElementsSidebar