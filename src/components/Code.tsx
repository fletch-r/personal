import React from 'react';

type CodeProps = {
    children: React.ReactNode
}

function Code({ children }: CodeProps) {
    return (
        <code className="border rounded px-2 border-steal-500 py-1 text-sm text-white">
            {children}
        </code>
    )
}

export default Code
