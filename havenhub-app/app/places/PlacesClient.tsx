
import React from 'react'
import Container from '../components/Container'
import Search from '../components/Search/Search'
import Categories from '../components/categories/Categories'
import ListingCard from '../components/listings/ListingCard'

interface Image {
  id: number,
  image: string
}

const PlacesClient = (params) => {
  const places = params.places;
  const images = params.images;
  
  return <Container>
  <div className='fixed z-10 bg-white pt-16 w-full'>
    <div className='px-20'>
      <Search></Search>
    </div>
    <Categories />
  </div>

  <div className="grid pt-64 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-4 gap-8">
    {places.map((place) => {
      {const image = images.find(item => item.property === place.id);
        return (
          <ListingCard
            key={place.id}
            data={place}
            image={image.image}
          />)
      }
    })}
  </div>

</Container>

}

export default PlacesClient