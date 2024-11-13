const countryID = document.getElementById("country")

const changeCountry = (countryName) => {
    countryID.textContent = countryName
}

fetch('ne_110m_admin_0_countries.geojson').then(res => res.json()).then(countries =>
    {
      const world = Globe()
        .width(600)
        .height(600)
        .backgroundColor("#FFFFFF")
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
        .hexPolygonsData(countries.features)
        .hexPolygonResolution(4)
        .hexPolygonMargin(0)
        .hexPolygonUseDots(false)
        .hexPolygonColor(() => `#${Math.round(Math.random() * Math.pow(2, 24)).toString(16).padStart(6, '0')}`)
        .hexPolygonLabel(({ properties: d }) => `
          <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
        `)
        .onHexPolygonClick(({properties: d}) => {
            changeCountry(d.ADMIN)
        })
        (document.getElementById('globe-container'))
    });