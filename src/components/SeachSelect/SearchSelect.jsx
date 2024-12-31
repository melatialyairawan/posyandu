import React, { useState, useEffect, useRef } from 'react';

const SearchableSelect = ({ options, label, placeholder, onSelect }) => {
    const [searchValue, setSearchValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    const dropdownRef = useRef(null);

    useEffect(() => {
        setFilteredOptions(
            options.filter((option) =>
                option.label.toLowerCase().includes(searchValue.toLowerCase())
            )
        );
    }, [searchValue, options]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (value, label) => {
        setSelectedValue(label);
        onSelect(value);
        setSearchValue('');
        setIsOpen(false);
    };

    return (
        <div className="relative w-full" ref={dropdownRef}>
            <label className="block text-gray-700 mb-2">{label}</label>
            <input
                required
                type="text"
                className="w-full rounded-xl bg-gray-100 px-3 py-2 text-md focus:border-none"
                placeholder={placeholder}
                value={searchValue || selectedValue}
                onFocus={() => setIsOpen(true)}
                onChange={(e) => {
                    setSearchValue(e.target.value);
                    setSelectedValue('');
                }}
            />
            {isOpen && (
                <ul className="absolute z-[999] w-full mt-2 bg-white border border-gray-300 rounded-xl shadow-lg max-h-40 overflow-y-auto">
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map((option) => (
                            <li
                                key={option.key}
                                className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                                onClick={() => handleSelect(option.key, option.label)}
                            >
                                {option.label}
                            </li>
                        ))
                    ) : (
                        <li className="px-4 py-2 text-gray-500">No results found</li>
                    )}
                </ul>
            )}
        </div>
    );
};

export default SearchableSelect;
