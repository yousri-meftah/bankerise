import React from 'react';

type Option = {
    value: string | number;
    label: string;
};

type FieldProps = {
    type: 'select' | 'text' | 'date' | 'range' | 'checkbox' | 'radio';
    name: string;
    label: string;
    options?: Option[];
    min?: number;
    max?: number;
};

type SharedFilterProps = {
    fields: FieldProps[];
};

const SharedFilter: React.FC<SharedFilterProps> = ({ fields }) => {
    const renderInput = (field: FieldProps) => {
        switch (field.type) {
            case 'select':
                return (
                    <select
                        id={field.name}
                        name={field.name}
                        className="block w-full text-gray-900 rounded-md border bg-white/10 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                    >
                        {field.options?.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                );
            case 'text':
            case 'date':
            case 'range':
                return (
                    <input
                        type={field.type}
                        name={field.name}
                        id={field.name}
                        min={field.min}
                        max={field.max}
                        className="block w-full rounded-md border bg-white/10 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                    />
                );
            case 'checkbox':
            case 'radio':
                return (
                    field.options?.map(option => (
                        <label key={option.value} className="inline-flex items-center space-x-2">
                            <input
                                type={field.type}
                                name={field.name}
                                value={option.value}
                                className="text-indigo-600 rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                            <span>{option.label}</span>
                        </label>
                    ))
                );
            default:
                return null;
        }
    };

    return (
        <>
            {fields.map((field, index) => (
                <div key={index} className="flex justify-center items-center mb-4">
                    <div className="flex justify-center items-center flex-1">
                        <div className="relative flex justify-center items-center gap-4">
                            <label htmlFor={field.name} className="block text-sm font-semibold leading-6 text-gray-900">
                                {field.label}:
                            </label>
                            <div className="mt-2 sm:col-span-2 sm:mt-0">
                                {renderInput(field)}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
       </>
    );
};

export default SharedFilter;
