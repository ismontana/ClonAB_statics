'use client'

import Image from "next/image";
import useSearchModal, { SearchQuery } from "../hooks/useSearchModal";
import { useState } from "react";

const Categories = () => {
    const searchModal = useSearchModal()
    const [category, setCategory] = useState('')

    const _setCategory = (_category: string) => {
        setCategory(_category)
        
            const query: SearchQuery = {
                country: searchModal.query.country,
                checkIn: searchModal.query.checkIn,
                checkOut: searchModal.query.checkOut,
                guests: searchModal.query.guests,
                bedrooms: searchModal.query.bedrooms,
                bathrooms: searchModal.query.bathrooms,
                category: _category
        }

        searchModal.setQuery(query)
    }

    return (
        <div className="pt-3 pb-6 flex items-center space-x-12">

            <div
            onClick={() => _setCategory('')}
            className={`pb-4 flex flex-col items-center space-y-2 border-b-2 cursor-pointer ${category == '' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
            >
                <Image
                    src='/icn_category_beach.jpeg'
                    alt='Category - beach'
                    width={20}
                    height={20}
                />
                <span className="text-xs">All</span>
            </div>

            <div
            onClick={() => _setCategory('beach')}
            className={`pb-4 flex flex-col items-center space-y-2 border-b-2 cursor-pointer ${category == 'beach' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
            >
                <Image
                    src='/icn_category_beach.jpeg'
                    alt='Category - Beach'
                    width={20}
                    height={20}
                />
                <span className="text-xs">Beach</span>
            </div>

            <div
            onClick={() => _setCategory('villas')}
            className={`pb-4 flex flex-col items-center space-y-2 border-b-2 cursor-pointer ${category == 'villas' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
            >
                <Image
                    src='/icn_category_beach.jpeg'
                    alt='Category - Villas'
                    width={20}
                    height={20}
                />
                <span className="text-xs">Villas</span>
            </div>

            <div
            onClick={() => _setCategory('cabins')}
            className={`pb-4 flex flex-col items-center space-y-2 border-b-2 cursor-pointer ${category == 'cabins' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
            >
                <Image
                    src='/icn_category_beach.jpeg'
                    alt='Category - Cabins'
                    width={20}
                    height={20}
                />
                <span className="text-xs">Cabins</span>
            </div>

            <div
            onClick={() => _setCategory('tiny_homes')}
            className={`pb-4 flex flex-col items-center space-y-2 border-b-2 cursor-pointer ${category == 'tiny_homes' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
            >
                <Image
                    src='/icn_category_beach.jpeg'
                    alt='Category - Tiny homes'
                    width={20}
                    height={20}
                />
                <span className="text-xs">Tiny homes</span>
            </div>

        </div>
    )
}

export default Categories;