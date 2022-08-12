(function (d3, topojson) {
  "use strict";

  const svg = d3.select("svg");

  const projection = d3.geoNaturalEarth1().scale(180);
  const pathGenerator = d3.geoPath().projection(projection);

  const g = svg.append("g");

  g.append("path")
    .attr("class", "sphere")
    .attr("d", pathGenerator({ type: "Sphere" }));

  Promise.all([
    d3.tsv("https://unpkg.com/world-atlas@1.1.4/world/50m.tsv"),
    d3.json("https://unpkg.com/world-atlas@1.1.4/world/50m.json"),
  ]).then(([tsvData, topoJSONdata]) => {
    const countryName = tsvData.reduce((accumulator, d) => {
      accumulator[d.iso_n3] = d.name;
      return accumulator;
    }, {});

    const countries = topojson.feature(
      topoJSONdata,
      topoJSONdata.objects.countries
    );
    g.selectAll("path")
      .data(countries.features)
      .enter()
      .append("path")
      .attr("class", "country")
      .attr("id", (d) => countryName[d.id])
      .attr("d", pathGenerator);
  });
})(d3, topojson);
