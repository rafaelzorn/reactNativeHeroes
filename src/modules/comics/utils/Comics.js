export const formatComicData = comic => ({
    id: comic.id,
    thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`
})
