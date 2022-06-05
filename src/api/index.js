import axios from 'axios';

const url = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary';

const options = {
  params: {
    bl_latitude: '11.847676',
    bl_longitude: '108.473209',
    tr_longitude: '109.149359',
    tr_latitude: '12.838442',
  },
  headers: {
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    'X-RapidAPI-Key': '430a86491amshec4f915cb279c0bp146250jsnd6746e935359',
  },
};

export const getPlacesData = async () => {
  try {
    //request
    const {
      data: { data },
    } = await axios.get(url);

    return data;
  } catch (error) {
    console.log(error);
  }
};
