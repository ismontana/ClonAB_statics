'use client'

import useSearchModal, { SearchQuery } from "@/app/hooks/useSearchModal"
import Modal from "./Modal"
import { useState } from "react"
import { Range } from "react-date-range"
import DatePicker from "../forms/Calendar"
import CustomButton from "../forms/CustomButton"
import SelectCountry, { SelectCountryValue } from "../forms/SelectCountry"

const initialDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
}

const SearchModal = () => {
    let content = (<></>)
    const SearchModal = useSearchModal()
    const [numGuests, setNumGuests] = useState<string>('1')
    const [numBedrooms, setNumBedrooms] = useState<string>('0')
    const [country, setCountry] = useState<SelectCountryValue>()
    const [numBathrooms, setNumBathrooms] = useState<string>('0')
    const [dateRange, setDateRange] = useState<Range>(initialDateRange)

    const closeAndSearch = () => {
        const newSearchQuery: SearchQuery ={
            country: country?.label,
            checkIn: dateRange.startDate,
            checkOut: dateRange.endDate,
            guests: parseInt(numGuests),
            bedrooms: parseInt(numBedrooms),
            bathrooms: parseInt(numBathrooms),
            category: ''
        }

        SearchModal.setQuery(newSearchQuery)
        SearchModal.close()
    }

    const _setDateRange = (selection: Range) => {
        if (SearchModal.step === 'checkin') {
            SearchModal.open('checkout')
        } else if (SearchModal.step === 'checkout') {
            SearchModal.open('details')
        }

        setDateRange(selection)
    }

    const contentLocation = (
        <>
            <h2 className="mb-6 text-2xl">Where do you want to go?</h2>

            <SelectCountry
                value={country}
                onChange={(value) => setCountry(value as SelectCountryValue)}
            />

            <div className="mt-6 flex flex-row gap-4">
                <CustomButton
                    label="Check in date ->"
                    onClick={() => SearchModal.open('checkin')}
                    className=""
                />
            </div>
        </>
    )

    const contentCheckIn = (
        <>
            <h2 className="mb-6 text-2xl">Check in date?</h2>

            <DatePicker
                value={dateRange}
                onChange={(value) => _setDateRange(value.selection)}
            />

            <div className="mt-6 flex flex-row gap-4">
                <CustomButton
                    label="<- Location"
                    onClick={() => SearchModal.open('location')}
                    className=""
                />
                <CustomButton
                    label="Check out date ->"
                    onClick={() => SearchModal.open('checkout')}
                    className=""
                />
            </div>
        </>
    )

    const contentCheckOut = (
        <>
            <h2 className="mb-6 text-2xl">Check out date?</h2>

            <DatePicker
                value={dateRange}
                onChange={(value) => _setDateRange(value.selection)}
            />

            <div className="mt-6 flex flex-row gap-4">
                <CustomButton
                    label="<- Location"
                    onClick={() => SearchModal.open('checkin')}
                    className=""
                />
                <CustomButton
                    label="Details ->"
                    onClick={() => SearchModal.open('details')}
                    className=""
                />
            </div>
        </>
    )

    const contentDetails = (
        <>
            <h2 className="mb-6 text-2xl">Details</h2>

            <div className="space-y-4">

                <div className="space-y-4">
                    <label>Number of guests:</label>
                    <input
                        type="number"
                        min='1'
                        placeholder="Number of guests..."
                        value={numGuests}
                        onChange={(e) => setNumGuests(e.target.value)}
                        className="w-full h-14 px-4 border border-gray-400 rounded-xl"
                    />
                </div>

                <div className="space-y-4">
                    <label>Number of bedrooms:</label>
                    <input
                        type="number"
                        min='1'
                        placeholder="Number of guests..."
                        value={numBedrooms}
                        onChange={(e) => setNumBedrooms(e.target.value)}
                        className="w-full h-14 px-4 border border-gray-400 rounded-xl"
                    />
                </div>

                <div className="space-y-4">
                    <label>Number of bathrooms:</label>
                    <input
                        type="number"
                        min='1'
                        placeholder="Number of bathrooms..."
                        value={numBathrooms}
                        onChange={(e) => setNumBathrooms(e.target.value)}
                        className="w-full h-14 px-4 border border-gray-400 rounded-xl"
                    />
                </div>

            </div>


            <div className="mt-6 flex flex-row gap-4">
                <CustomButton
                    label="<- Check out date"
                    onClick={() => SearchModal.open('checkout')}
                    className=""
                />
                <CustomButton
                    label="Search"
                    onClick={closeAndSearch}
                    className=""
                />
            </div>
        </>
    )

    if (SearchModal.step === 'location') {
        content = contentLocation
    } else if (SearchModal.step == 'checkin') {
        content = contentCheckIn
    } else if (SearchModal.step == 'checkout') {
        content = contentCheckOut
    } else if (SearchModal.step == 'details') {
        content = contentDetails
    }

    return (
        <Modal
            label="Search"
            content={content}
            close={SearchModal.close}
            isOpen={SearchModal.isOpen}
        />
    )
}

export default SearchModal;