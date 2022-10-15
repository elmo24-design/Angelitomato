function FeaturedArtsCard({art}) {
  const {
    title,
    slug,
    coverPhoto,
    datePublished
  } = art

  return (
    <div>
      {coverPhoto.url}
    </div>
  )
}

export default FeaturedArtsCard