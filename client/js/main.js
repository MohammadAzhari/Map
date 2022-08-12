window.addEventListener("load", async () => {
  const res = {};
  Promise.all([
    fetch("/api/db1")
      .then((res) => res.json())
      .then((data) => (res.DB1 = data)),
    fetch("/api/db2")
      .then((res) => res.json())
      .then((data) => (res.DB2 = data)),
  ]).then(() => {
    const { DB1, DB2 } = res;
    // DB1 = {
    //   lists: [
    //     ["Item A", "Item B", "Item C", "Item A", "Item A"],
    //     ["Item B", "Item A", "Item A", "Item B", "Item C"],
    //     ["Item C", "Item C", "Item B", "Item C", "Item A"],
    //   ],
    //   makes: [2, 1, 1, 0, 1],
    // };
    setTimeout(() => {
      let info = document.getElementById("info");
      let listcontainer = document.getElementById("listcontainer");
      let listData = [
        ["list 1", ["item A", "item B", "item C", "item B", "item A"]],
        ["list 2", ["item A", "item B", "item C", "item B", "item A"]],
        ["list 3", ["item A", "item B", "item C", "item B", "item A"]],
      ];

      function infoDataAndColor(
        makeColor,
        continent,
        continentCountries,
        transX,
        transY,
        warehousesCount,
        vehiclesCount,
        distributorsCount,
        make1,
        make2,
        make3,
        make4,
        make5
      ) {
        continent.addEventListener("mouseenter", (e) => {
          for (i = 0; i < continentCountries.length; i++) {
            continentCountries[i].classList.add("active");
          }
          info.style.transform = `translate(${transX}px,${transY}px)`;
          info.style.opacity = "1";
          document.getElementById("warehousesCount").textContent =
            warehousesCount;
          document.getElementById("vehiclesCount").textContent = vehiclesCount;
          document.getElementById("distributorsCount").textContent =
            distributorsCount;
          if (transX === 300) {
            listcontainer.style.display = "inline-block";
            listcontainer.style.right = "auto";
            listcontainer.style.left = "25px";
            listcontainer.style.top = "70px";
          } else if (transX === 400) {
            listcontainer.style.display = "inline-block";
            listcontainer.style.right = "0";
            listcontainer.style.left = "auto";
            listcontainer.style.top = "90px";
          }
          // cars info
          let carInfo = document.getElementById("carInfo");
          carInfo.style.opacity = "1";
          document.getElementById("make1").textContent = make1;
          document.getElementById("make2").textContent = make2;
          document.getElementById("make3").textContent = make3;
          document.getElementById("make4").textContent = make4;
          document.getElementById("make5").textContent = make5;

          let makeImage = document.querySelectorAll(".car-info .images");
          for (let i = 0; i < makeImage.length; i++) {
            makeImage[i].classList.add(makeColor);
          }

          listcontainer.addEventListener("mouseenter", (e) => {
            info.style.opacity = "1";
            carInfo.style.opacity = "1";
            listcontainer.style.display = "inline-block";
            if (listcontainer.style.left === "auto") {
              for (i = 0; i < asiaCountries.length; i++) {
                asiaCountries[i].classList.add("active");
              }
              console.log("good");
            }
            if (listcontainer.style.left === "25px") {
              for (i = 0; i < americaCountries.length; i++) {
                americaCountries[i].classList.add("active");
              }
            }
          });
        });
        continent.addEventListener("mouseleave", (e) => {
          for (i = 0; i < continentCountries.length; i++) {
            continentCountries[i].classList.remove("active");
          }
          let makeImage = document.querySelectorAll(".car-info .images");
          for (let i = 0; i < makeImage.length; i++) {
            makeImage[i].classList.remove(makeColor);
          }
          info.style.opacity = "0";
          carInfo.style.opacity = ".7";
          listcontainer.style.display = "none";
        });
      }
      listcontainer.addEventListener("mouseleave", () => {
        listcontainer.style.display = "none";
        carInfo.style.opacity = ".7";
        info.style.opacity = "0";
        for (i = 0; i < allCountries.length; i++) {
          allCountries[i].classList.remove("active");
        }
      });

      function listAndItem(listData) {
        let backgroundColor = ["#6cfffff1", "#5dff5def", "#ffaeae"];
        for (i = 0; i < listData.length; i++) {
          let row = document.createElement("div");
          row.className = "row";
          let listTitle = document.createElement("h2");
          let myTitle = document.createTextNode(listData[i][0]);
          listTitle.appendChild(myTitle);
          row.appendChild(listTitle);
          listcontainer.appendChild(row);
          let ul = document.createElement("ul");
          for (j = 0; j < listData[i][1].length; j++) {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(listData[i][1][j]));
            ul.appendChild(li);
          }
          row.appendChild(ul);
          row.style.backgroundColor = `${backgroundColor[i]}`;
          // create the show button
          let button = document.createElement("button");
          button.setAttribute("class", "but");
          let icon = document.createElement("i");
          icon.setAttribute("class", "fa-solid fa-angle-down");
          button.appendChild(icon);
          row.appendChild(button);
          button.onclick = function () {
            this.parentElement.classList.toggle("show");
          };
        }
      }

      listAndItem(listData);

      let countriseArray = document.getElementsByTagName("path");
      // all countries arond the worlk
      let allCountries = [];
      for (i = 1; i < 241; i++) {
        allCountries.push(countriseArray[i]);
      }

      // all countries in Africa
      let africaCountries = [
        allCountries[136],
        allCountries[63],
        allCountries[123],
        allCountries[218],
        allCountries[61],
        allCountries[133],
        allCountries[184],
        allCountries[148],
        allCountries[141],
        allCountries[186],
        allCountries[155],
        allCountries[157],
        allCountries[188],
        allCountries[80],
        allCountries[81],
        allCountries[79],
        allCountries[193],
        allCountries[122],
        allCountries[41],
        allCountries[20],
        allCountries[78],
        allCountries[211],
        allCountries[19],
        allCountries[64],
        allCountries[67],
        allCountries[196],
        allCountries[57],
        allCountries[197],
        allCountries[112],
        allCountries[222],
        allCountries[187],
        allCountries[43],
        allCountries[36],
        allCountries[210],
        allCountries[42],
        allCountries[44],
        allCountries[74],
        allCountries[82],
        allCountries[221],
        allCountries[17],
        allCountries[183],
        allCountries[147],
        allCountries[151],
        allCountries[238],
        allCountries[239],
        allCountries[35],
        allCountries[153],
        allCountries[1],
        allCountries[237],
        allCountries[127],
        allCountries[205],
      ];
      let africaColor = ["green1", "green2", "green3", "green4", "green5"];
      for (i = 0; i < africaCountries.length; i++) {
        let randomNumber = Math.floor(Math.random() * africaColor.length);
        africaCountries[i].classList.add(`${africaColor[randomNumber]}`);
      }
      africaCountries.forEach((africaCountry) => {
        infoDataAndColor(
          "green",
          africaCountry,
          africaCountries,
          340,
          260,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        );
      });

      // south and north America countres
      let americaCountries = [
        allCountries[31],
        allCountries[201],
        allCountries[88],
        allCountries[229],
        allCountries[46],
        allCountries[62],
        allCountries[169],
        allCountries[7],
        allCountries[177],
        allCountries[30],
        allCountries[39],
        allCountries[224],
        allCountries[60],
        allCountries[174],
        allCountries[93],
        allCountries[50],
        allCountries[24],
        allCountries[167],
        allCountries[49],
        allCountries[158],
        allCountries[91],
        allCountries[194],
        allCountries[86],
        allCountries[28],
        allCountries[138],
        allCountries[106],
        allCountries[225],
        allCountries[37],
      ];
      let americaColor = [
        "purple1",
        "purple2",
        "purple3",
        "purple4",
        "purple5",
      ];
      for (i = 0; i < americaCountries.length; i++) {
        let randomNumber = Math.floor(Math.random() * americaColor.length);
        americaCountries[i].classList.add(`${americaColor[randomNumber]}`);
      }
      americaCountries.forEach((americaCountry) => {
        infoDataAndColor(
          "purple",
          americaCountry,
          americaCountries,
          300,
          130,
          4,
          11,
          15,
          2,
          1,
          1,
          0,
          1
        );
      });

      // all countries in Asia
      let asiaCountries = [
        allCountries[182],
        allCountries[175],
        allCountries[117],
        allCountries[111],
        allCountries[6],
        allCountries[165],
        allCountries[236],
        allCountries[185],
        allCountries[102],
        allCountries[108],
        allCountries[208],
        allCountries[104],
        allCountries[178],
        allCountries[121],
        allCountries[119],
        allCountries[219],
        allCountries[76],
        allCountries[16],
        allCountries[8],
        allCountries[101],
        allCountries[214],
        allCountries[226],
        allCountries[166],
        allCountries[0],
        allCountries[213],
        allCountries[113],
        allCountries[220],
        allCountries[180],
      ];
      let asiaColor = [
        "yellow1",
        "yellow2",
        "yellow3",
        "yellow4",
        "yellow5",
        "yellow6",
      ];
      for (i = 0; i < asiaCountries.length; i++) {
        let randomNumber = Math.floor(Math.random() * asiaColor.length);
        asiaCountries[i].classList.add(`${asiaColor[randomNumber]}`);
      }
      asiaCountries.forEach((asiaCountry) => {
        infoDataAndColor(
          "yellow",
          asiaCountry,
          asiaCountries,
          400,
          130,
          5,
          7,
          5,
          2,
          2,
          2,
          2,
          1
        );
      });

      // all countries in Europe
      let europeCountries = [
        allCountries[161],
        allCountries[68],
        allCountries[204],
        allCountries[66],
        allCountries[130],
        allCountries[128],
        allCountries[27],
        allCountries[223],
        allCountries[135],
        allCountries[181],
        allCountries[22],
        allCountries[83],
        allCountries[140],
        allCountries[3],
        allCountries[118],
        allCountries[199],
        allCountries[144],
        allCountries[25],
        allCountries[92],
        allCountries[94],
        allCountries[202],
        allCountries[173],
        allCountries[55],
        allCountries[56],
        allCountries[15],
        allCountries[203],
        allCountries[105],
        allCountries[38],
        allCountries[71],
        allCountries[65],
        allCountries[176],
        allCountries[18],
        allCountries[160],
        allCountries[129],
        allCountries[75],
        allCountries[100],
        allCountries[59],
        allCountries[103],
        allCountries[85],
      ];
      let europeColor = ["cyan1", "cyan2", "cyan3", "cyan4", "cyan5"];
      for (i = 0; i < europeCountries.length; i++) {
        let randomNumber = Math.floor(Math.random() * europeColor.length);
        europeCountries[i].classList.add(`${europeColor[randomNumber]}`);
      }
      europeCountries.forEach((europeCountry) => {
        infoDataAndColor(
          "cyan",
          europeCountry,
          europeCountries,
          285,
          90,
          8,
          5,
          11,
          0,
          0,
          0,
          0,
          0
        );
      });

      // all red countries
      let china = [
        allCountries[14],
        allCountries[172],
        allCountries[40],
        allCountries[97],
        allCountries[145],
        allCountries[109],
        allCountries[143],
        allCountries[21],
        allCountries[34],
        allCountries[162],
        allCountries[212],
        allCountries[120],
        allCountries[232],
        allCountries[114],
        allCountries[152],
        allCountries[95],
        allCountries[170],
        allCountries[126],
      ];
      let chinaColor = ["red1", "red2", "red3", "red4", "red5"];
      for (i = 0; i < china.length; i++) {
        let randomNumber = Math.floor(Math.random() * chinaColor.length);
        china[i].classList.add(`${chinaColor[randomNumber]}`);
      }
      china.forEach((europeCountry) => {
        infoDataAndColor(
          "red",
          europeCountry,
          china,
          550,
          206,
          5,
          7,
          7,
          0,
          0,
          0,
          0,
          0
        );
      });

      // all hidden countries
      let nd = [
        allCountries[10],
        allCountries[154],
        allCountries[164],
        allCountries[192],
        allCountries[233],
        allCountries[69],
        allCountries[215],
      ];
      for (i = 0; i < nd.length; i++) {
        nd[i].style.display = "none";
      }
    }, 500);
  });
});
