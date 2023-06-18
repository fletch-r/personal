import React from 'react'

type ComponentCardProps = {
    label: string;
    selected: boolean;
    onClick: () => void;
    children: React.ReactElement;
}

function ComponentCard({ onClick, selected, label, children }: ComponentCardProps) {
    return (
        <button
            type="button"
            onClick={() => onClick()}
            className={`
            w-1/4 h-[180px]
            bg-neutral-700
            border-2 ${selected ? 'border-neutral-300' : 'border-transparent hover:border-neutral-500'}
            rounded-lg
            p-2
            flex flex-col items-center justify-evenly
            cursor-pointer
        `}
        >
            <div className='w-full h-3/4 flex items-center justify-center'>
                {children}
            </div>
            <div className="w-full h-1/4 flex items-center justify-center">
                <p>{label}</p>
            </div>
        </button>
    )
}

export default ComponentCard