import data from './sample.json';

function getJson() {
  const streamingData = data.entries
    .filter(el => {
      return el.releaseYear >= 2010;
    })
    .sort((a, b) => {
      if (a.title < b.title) return -1;
      else if (a.title > b.title) return 1;
      else return 0;
    });
  return streamingData;
}

function getFilteredData(type) {
  const seriesData = getJson()
    .filter(el => {
      return el.programType === type;
    })
    .slice(0, 21);
  return seriesData;
}

export { getFilteredData };
