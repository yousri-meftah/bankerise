import React, { useState, ChangeEvent, FormEvent } from 'react';

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
    onFilter: (filterState: { [key: string]: string }) => void;
};

const SharedFilter: React.FC<SharedFilterProps> = ({ fields, onFilter }) => {
    const [formState, setFormState] = useState<{ [key: string]: string }>(
        fields.reduce((acc, field) => {
            acc[field.name] = '';
            return acc;
        }, {} as { [key: string]: string })
    );

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onFilter(formState);
    };

    const renderInput = (field: FieldProps) => {
        switch (field.type) {
            case 'select':
                return (
                    <select
                        id={field.name}
                        name={field.name}
                        value={formState[field.name]}
                        onChange={handleChange}
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
                        value={formState[field.name]}
                        min={field.min}
                        max={field.max}
                        onChange={handleChange}
                        className="block w-full rounded-md border bg-white/10 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                    />
                );
            case 'checkbox':
            case 'radio':
                return field.options?.map((option) => (
                    <label key={option.value} className="inline-flex items-center space-x-2">
                        <input
                            type={field.type}
                            name={field.name}
                            value={option.value}
                            checked={formState[field.name] === option.value}
                            onChange={handleChange}
                            className="text-indigo-600 rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                        <span>{option.label}</span>
                    </label>
                ));
            default:
                return null;
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap items-start gap-y-3">
                {fields.map((field, index) => (
                    <div key={index} className="relative w-1/2 flex justify-center items-center gap-4 mb-6">
                        <label htmlFor={field.name} className="block text-sm font-semibold leading-6 text-gray-900">
                            {field.label}:
                        </label>
                        <div className="mt-2 sm:col-span-2 sm:mt-0">
                            {renderInput(field)}
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full flex justify-end mt-4">
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
                >
                    Apply Filters
                </button>
            </div>
        </form>
    );
};

export default SharedFilter;
