export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';

export const receivePhotos = (photos) => (
  {
    type: RECEIVE_PHOTOS,
    photos: photos
  }
)