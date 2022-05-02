export default function getAddressByCoords(coords: any) {
 return new Promise(async (resolve, reject) => {
  const data = await fetch(
   `https://geocode-maps.yandex.ru/1.x?geocode=${[...coords]
    .reverse()
    .join(',')}&apikey=${process.env.VUE_APP_YANDEX_TOKEN}&format=json`
  );
  const json = await data.json();
  resolve(
   json.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty
    .GeocoderMetaData.text
  );
 });
}
