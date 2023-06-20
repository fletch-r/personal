import React from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';

import './styles.css';

export default function Tooltip({
    children,
    label
}: {
    children: React.ReactElement;
    label: string;
}) {
    return (
        <RadixTooltip.Provider delayDuration={200}>
            <RadixTooltip.Root>
                <RadixTooltip.Trigger asChild>
                    {children}
                </RadixTooltip.Trigger>
                <RadixTooltip.Portal>
                    <RadixTooltip.Content className="TooltipContent" sideOffset={10}>
                        {label}
                        <RadixTooltip.Arrow className="TooltipArrow" />
                    </RadixTooltip.Content>
                </RadixTooltip.Portal>
            </RadixTooltip.Root>
        </RadixTooltip.Provider>
    )
}
