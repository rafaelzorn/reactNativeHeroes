export const formatHeroData = hero => ({
    id: hero.id,
    name: hero.name,
    description: hero.description,
    thumbnail: `${hero.thumbnail.path}.${hero.thumbnail.extension}`
})
