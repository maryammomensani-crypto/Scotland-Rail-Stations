const CONFIG = {
  accessToken: 'pk.eyJ1IjoibWFyeWFtbW9tZW5zYW5pIiwiYSI6ImNtbHJyY2dhOTBkMzkzYnM0bGRnNGxwd24ifQ.4UBSpiJpvpGHm3gfp9x_-A',
  styleUrl: 'mapbox://styles/maryammomensani/cmlukrm5i003e01saa5bg8rsr',
  center: [-4.5, 56.5],
  zoom: 5,
  stationLayer: 'stations-proportional'
};

// Station data (passengers as numbers)

const STATIONS = [
  { name: '1. Glasgow Central', passengers: 25293930, rank: 17, lat: 55.8591, lon: -4.2581 },
  { name: '2. Edinburgh', passengers: 22755164, rank: 20, lat: 55.9520, lon: -3.1890 },
  { name: '3. Glasgow Queen Street', passengers: 14950752, rank: 30, lat: 55.8625, lon: -4.2510 },
  { name: '4. Haymarket', passengers: 3334408, rank: 163, lat: 55.9456, lon: -3.2182 },
  { name: '5. Paisley Gilmour Street', passengers: 3241120, rank: 165, lat: 55.8485, lon: -4.4255 },
  { name: '6. Partick', passengers: 3091680, rank: 174, lat: 55.8700, lon: -4.3105 },
  { name: '7. Stirling', passengers: 2527778, rank: 224, lat: 56.1191, lon: -3.9349 },
  { name: '8. Aberdeen', passengers: 2377660, rank: 242, lat: 57.1438, lon: -2.0988 },
  { name: '9. Exhibition Centre (Glasgow)', passengers: 2263738, rank: 256, lat: 55.8604, lon: -4.2852 },
  { name: '10. Dundee', passengers: 1858810, rank: 323, lat: 56.4572, lon: -2.9702 },
  { name: '11. Charing Cross (Glasgow)', passengers: 1775190, rank: 343, lat: 55.8653, lon: -4.2707 },
  { name: '12. Croy', passengers: 1556220, rank: 395, lat: 55.9557, lon: -4.0357 },
  { name: '13. Hyndland', passengers: 1496160, rank: 412, lat: 55.8798, lon: -4.3147 },
  { name: '14. Argyle Street', passengers: 1399886, rank: 450, lat: 55.8582, lon: -4.2531 },
  { name: '15. Mount Florida', passengers: 1399350, rank: 451, lat: 55.8269, lon: -4.2621 },
  { name: '16. Inverness', passengers: 1323310, rank: 470, lat: 57.4795, lon: -4.2235 },
  { name: '17. Johnstone (Renfrewshire)', passengers: 1263404, rank: 494, lat: 55.8348, lon: -4.5037 },
  { name: '18. Linlithgow', passengers: 1180670, rank: 512, lat: 55.9757, lon: -3.5960 },
  { name: '19. Motherwell', passengers: 1114834, rank: 536, lat: 55.7919, lon: -3.9952 },
  { name: '20. Livingston North', passengers: 1048510, rank: 560, lat: 55.9017, lon: -3.5434 },
  { name: '21. Anniesland', passengers: 1038642, rank: 562, lat: 55.8896, lon: -4.3217 },
  { name: '22. Inverkeithing', passengers: 1008612, rank: 569, lat: 56.0347, lon: -3.3962 },
  { name: '23. Bathgate', passengers: 997090, rank: 572, lat: 55.8987, lon: -3.6440 },
  { name: '24. Rutherglen', passengers: 967820, rank: 580, lat: 55.8304, lon: -4.2128 },
  { name: '25. Kirkcaldy', passengers: 964228, rank: 583, lat: 56.1126, lon: -3.1674 },
  { name: '26. Perth', passengers: 853236, rank: 613, lat: 56.3928, lon: -3.4401 },
  { name: '27. High Street (Glasgow)', passengers: 841292, rank: 623, lat: 55.8588, lon: -4.2401 },
  { name: '28. Cambuslang', passengers: 831150, rank: 631, lat: 55.8195, lon: -4.1738 },
  { name: '29. Larbert', passengers: 812100, rank: 642, lat: 56.0228, lon: -3.8306 },
  { name: '30. Airdrie', passengers: 809690, rank: 644, lat: 55.8640, lon: -3.9830 },
  { name: '31. Bridgeton', passengers: 802898, rank: 650, lat: 55.8500, lon: -4.2267 },
  { name: '32. Ayr', passengers: 795560, rank: 654, lat: 55.4582, lon: -4.6269 },
  { name: '33. Kilwinning', passengers: 781106, rank: 661, lat: 55.6560, lon: -4.7101 },
  { name: '34. Falkirk High', passengers: 773200, rank: 668, lat: 55.9919, lon: -3.7923 },
  { name: '35. Dalmuir', passengers: 767842, rank: 669, lat: 55.9118, lon: -4.4270 },
  { name: '36. Milngavie', passengers: 744534, rank: 678, lat: 55.9409, lon: -4.3152 },
  { name: '37. Bishopbriggs', passengers: 734510, rank: 686, lat: 55.9039, lon: -4.2250 },
  { name: '38. Bellgrove', passengers: 730954, rank: 688, lat: 55.8572, lon: -4.2255 },
  { name: '39. Queens Park (Glasgow)', passengers: 723284, rank: 694, lat: 55.8357, lon: -4.2674 },
  { name: '40. Lenzie', passengers: 718220, rank: 698, lat: 55.9214, lon: -4.1539 },
  { name: '41. Crossmyloof', passengers: 713056, rank: 704, lat: 55.8336, lon: -4.2848 },
  { name: '42. Uddingston', passengers: 711810, rank: 705, lat: 55.8237, lon: -4.0863 },
  { name: '43. Bishopton (Renfrewshire)', passengers: 709850, rank: 706, lat: 55.9022, lon: -4.5016 },
  { name: '44. Polmont', passengers: 708220, rank: 709, lat: 55.9849, lon: -3.7166 },
  { name: '45. Hamilton Central', passengers: 704654, rank: 712, lat: 55.7732, lon: -4.0389 },
  { name: '46. Irvine', passengers: 699112, rank: 719, lat: 55.6116, lon: -4.6750 },
  { name: '47. Hamilton West', passengers: 693892, rank: 723, lat: 55.7792, lon: -4.0568 },
  { name: '48. Westerton', passengers: 688414, rank: 727, lat: 55.9055, lon: -4.3354 },
  { name: '49. Helensburgh Central', passengers: 657110, rank: 747, lat: 56.0043, lon: -4.7328 },
  { name: '50. Shettleston', passengers: 651582, rank: 755, lat: 55.8536, lon: -4.1599 }
];

// Initialize map
mapboxgl.accessToken = CONFIG.accessToken;
const map = new mapboxgl.Map({
  container: 'map',
  style: CONFIG.styleUrl,
  center: CONFIG.center,
  zoom: CONFIG.zoom
});



//Build sidebar station list
 
function buildLocationList(stations) {
  const container = document.getElementById('listings');
  
  stations.forEach(station => {
    const item = document.createElement('div');
    item.className = 'item';

    const link = document.createElement('a');
    link.href = '#';
    link.className = 'title';
    link.textContent = station.name;

    const details = document.createElement('div');
    details.textContent = `Rank #${station.rank} | ${station.passengers.toLocaleString()} passengers`;

    link.addEventListener('click', (e) => {
      e.preventDefault();
      map.flyTo({
        center: [station.lon, station.lat],
        zoom: 14,
        essential: true
      });
      showStationPopup(station);
    });

    item.append(link, details);
    container.appendChild(item);
  });
}

 // Show station popup from sidebar
 
function showStationPopup(station) {
  // Remove existing popups
  document.querySelectorAll('.mapboxgl-popup').forEach(popup => popup.remove());

  new mapboxgl.Popup({ closeOnClick: true, closeButton: true })
    .setLngLat([station.lon, station.lat])
    .setHTML(`
      <h3>${station.name}</h3>
      <p><strong>Annual passengers:</strong> ${station.passengers.toLocaleString()}</p>
    `)
    .addTo(map);
}

 // Setup map click interactions

function setupMapInteractions() {
  map.on('click', CONFIG.stationLayer, (e) => {
    const feature = e.features[0];
    
    new mapboxgl.Popup({ offset: [0, -15] })
      .setLngLat(feature.geometry.coordinates)
      .setHTML(`
        <h3>${feature.properties.station_name}</h3>
        <p>${Number(feature.properties.annual_passengers).toLocaleString()} annual passengers</p>
      `)
      .addTo(map);
  });

  map.on('mouseenter', CONFIG.stationLayer, () => {
    map.getCanvas().style.cursor = 'pointer';
  });

  map.on('mouseleave', CONFIG.stationLayer, () => {
    map.getCanvas().style.cursor = '';
  });
}


 // Create proportional symbol legend
 
function buildLegend() {
  const legendValues = [651582, 5000000, 15000000, 25293930];
  const maxValue = 25293930;
  const maxRadius = 36;
  const container = document.getElementById('legendContent');

  legendValues.forEach(value => {
    const radius = Math.sqrt(value / maxValue) * maxRadius;
    const item = document.createElement('div');
    
    item.innerHTML = `
      <span style="
        display: inline-block;
        width: ${radius}px;
        height: ${radius}px;
        background: #08306b;
        border-radius: 50%;
        border: 2px solid #ddd;
        margin-right: 10px;
      "></span>
      ${value.toLocaleString()}
    `;
    
    container.appendChild(item);
  });
}

// Initialize when map loads
map.on('load', () => {
  buildLocationList(STATIONS);
  buildLegend();
  setupMapInteractions();
});