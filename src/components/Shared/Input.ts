import * as React from 'react';
import { createComponent } from '@lit/react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { AppInput } from "@aqulionnn/artique-ui-lib"

export const ReactAppInput = createComponent({
    tagName: 'app-input',
    elementClass: AppInput,
    react: React,
    events: {
        onChange: 'change',
    },
}) as React.ComponentType<{
    type?: string;
    label?: string;
    value?: string;
    onChange?: (event: CustomEvent<string>) => void;
}>;