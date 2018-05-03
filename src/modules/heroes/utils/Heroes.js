export const formatHeroData = hero => ({
    id: hero.id,
    name: hero.name,
    description: hero.description === '' ? 'N/A' : hero.description,
    thumbnail: `${hero.thumbnail.path}.${hero.thumbnail.extension}`,
    comics: hero.comics.items
})
