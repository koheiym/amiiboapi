export async function fetchImages(image) {
    const encodedImage = encodeURIComponent(image);
    const response = await fetch(
      `https://www.amiiboapi.com/api/amiibo/?name=`+encodedImage
  );
    const data = await response.json();
    console.log(data.amiibo[0].image);
    return data.amiibo[0].image;
}