'use client'

import { MdTextFields } from "react-icons/md";
import { ElementsType, FormElement, FormElementInstance } from "../FormElements";

const type: ElementsType = "TextField";

export const TextFieldFormElement: FormElement = {
    type,
    construct: (id: string) => ({
        id,
        type,
        extraAttributes: {
            label: "Text Field",
            helperText: "Helper text",
            required: false,
            placeHolder: "Value here...",
        },
    }),
    designerBtnElement: {
        icon: MdTextFields,
        label: "Text Field",
    },
    designerComponent: DesignerComponent,
    formComponent: () => <div>Form Component</div>,
    propertiesComponent: () => <div>Properties Component</div>
};
function DesignerComponent({elementInstance}: {elementInstance: FormElementInstance}) {
    return (
        <div className="text-white">{elementInstance.extraAttributes?.label}</div>
    )
}