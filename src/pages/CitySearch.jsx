import React, { useState } from "react";

const cities = [
  {
    id: 1,
    name: "Paris",
    country: "France",
    region: "Europe",
    costIndex: 85,
    popularity: 98,
  },
  {
    id: 2,
    name: "Tokyo",
    country: "Japan",
    region: "Asia",
    costIndex: 90,
    popularity: 96,
  },
  {
    id: 3,
    name: "Dubai",
    country: "UAE",
    region: "Middle East",
    costIndex: 88,
    popularity: 94,
  },
  {
    id: 4,
    name: "London",
    country: "United Kingdom",
    region: "Europe",
    costIndex: 92,
    popularity: 97,
  },
  {
    id: 5,
    name: "Mumbai",
    country: "India",
    region: "Asia",
    costIndex: 55,
    popularity: 90,
  },
  {
    id: 6,
    name: "New York",
    country: "USA",
    region: "North America",
    costIndex: 95,
    popularity: 99,
  },
];

function CitySearch() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");

  const filteredCities = cities.filter((city) => {
    const matchesSearch =
      city.name.toLowerCase().includes(search.toLowerCase()) ||
      city.country.toLowerCase().includes(search.toLowerCase());

    const matchesRegion =
      region === "All" || city.region === region;

    return matchesSearch && matchesRegion;
  });

  const addToTrip = (city) => {
    alert(`${city.name} added to your trip!`);
  };

  return (
    <div style={({
          container: {
              minHeight: "100vh",
              padding: "40px",
              background: "#f5f7fb",
              fontFamily: "Arial, sans-serif",
          },

          header: {
              marginBottom: "30px",
          },

          header, h1: {
              marginBottom: "8px",
          },

          searchBox: {
              display: "flex",
              gap: "15px",
              marginBottom: "30px",
              flexWrap: "wrap",
          },

          input: {
              padding: "14px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              width: "350px",
              fontSize: "16px",
          },

          select: {
              padding: "14px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              fontSize: "16px",
              background: "white",
          },

          grid: {
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "25px",
          },

          card: {
              background: "white",
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
          },

          image: {
              height: "140px",
              background: "#e9eef5",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "60px",
          },

          cardBody: {
              padding: "20px",
          },

          country: {
              color: "#666",
          },

          info: {
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              margin: "15px 0",
              fontSize: "14px",
          },

          button: {
              width: "100%",
              padding: "12px",
              border: "none",
              borderRadius: "8px",
              background: "#2563eb",
              color: "white",
              fontSize: "15px",
              cursor: "pointer",
          },

          noResults: {
              textAlign: "center",
              padding: "50px",
              width: "100%",
          },
      }).container}>
      <div style={({
              container: {
                  minHeight: "100vh",
                  padding: "40px",
                  background: "#f5f7fb",
                  fontFamily: "Arial, sans-serif",
              },

              header: {
                  marginBottom: "30px",
              },

              header, h1: {
                  marginBottom: "8px",
              },

              searchBox: {
                  display: "flex",
                  gap: "15px",
                  marginBottom: "30px",
                  flexWrap: "wrap",
              },

              input: {
                  padding: "14px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  width: "350px",
                  fontSize: "16px",
              },

              select: {
                  padding: "14px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "16px",
                  background: "white",
              },

              grid: {
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "25px",
              },

              card: {
                  background: "white",
                  borderRadius: "14px",
                  overflow: "hidden",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              },

              image: {
                  height: "140px",
                  background: "#e9eef5",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "60px",
              },

              cardBody: {
                  padding: "20px",
              },

              country: {
                  color: "#666",
              },

              info: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  margin: "15px 0",
                  fontSize: "14px",
              },

              button: {
                  width: "100%",
                  padding: "12px",
                  border: "none",
                  borderRadius: "8px",
                  background: "#2563eb",
                  color: "white",
                  fontSize: "15px",
                  cursor: "pointer",
              },

              noResults: {
                  textAlign: "center",
                  padding: "50px",
                  width: "100%",
              },
          }).header}>
        <h1>🌍 Explore Cities</h1>
        <p>Find destinations and add them to your GlobeTrotter itinerary.</p>
      </div>

      <div style={({
              container: {
                  minHeight: "100vh",
                  padding: "40px",
                  background: "#f5f7fb",
                  fontFamily: "Arial, sans-serif",
              },

              header: {
                  marginBottom: "30px",
              },

              header, h1: {
                  marginBottom: "8px",
              },

              searchBox: {
                  display: "flex",
                  gap: "15px",
                  marginBottom: "30px",
                  flexWrap: "wrap",
              },

              input: {
                  padding: "14px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  width: "350px",
                  fontSize: "16px",
              },

              select: {
                  padding: "14px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "16px",
                  background: "white",
              },

              grid: {
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "25px",
              },

              card: {
                  background: "white",
                  borderRadius: "14px",
                  overflow: "hidden",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              },

              image: {
                  height: "140px",
                  background: "#e9eef5",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "60px",
              },

              cardBody: {
                  padding: "20px",
              },

              country: {
                  color: "#666",
              },

              info: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  margin: "15px 0",
                  fontSize: "14px",
              },

              button: {
                  width: "100%",
                  padding: "12px",
                  border: "none",
                  borderRadius: "8px",
                  background: "#2563eb",
                  color: "white",
                  fontSize: "15px",
                  cursor: "pointer",
              },

              noResults: {
                  textAlign: "center",
                  padding: "50px",
                  width: "100%",
              },
          }).searchBox}>
        <input
          type="text"
          placeholder="Search city or country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={({
              container: {
                  minHeight: "100vh",
                  padding: "40px",
                  background: "#f5f7fb",
                  fontFamily: "Arial, sans-serif",
              },

              header: {
                  marginBottom: "30px",
              },

              header, h1: {
                  marginBottom: "8px",
              },

              searchBox: {
                  display: "flex",
                  gap: "15px",
                  marginBottom: "30px",
                  flexWrap: "wrap",
              },

              input: {
                  padding: "14px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  width: "350px",
                  fontSize: "16px",
              },

              select: {
                  padding: "14px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "16px",
                  background: "white",
              },

              grid: {
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "25px",
              },

              card: {
                  background: "white",
                  borderRadius: "14px",
                  overflow: "hidden",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              },

              image: {
                  height: "140px",
                  background: "#e9eef5",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "60px",
              },

              cardBody: {
                  padding: "20px",
              },

              country: {
                  color: "#666",
              },

              info: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  margin: "15px 0",
                  fontSize: "14px",
              },

              button: {
                  width: "100%",
                  padding: "12px",
                  border: "none",
                  borderRadius: "8px",
                  background: "#2563eb",
                  color: "white",
                  fontSize: "15px",
                  cursor: "pointer",
              },

              noResults: {
                  textAlign: "center",
                  padding: "50px",
                  width: "100%",
              },
          }).input}
        />

        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          style={({
              container: {
                  minHeight: "100vh",
                  padding: "40px",
                  background: "#f5f7fb",
                  fontFamily: "Arial, sans-serif",
              },

              header: {
                  marginBottom: "30px",
              },

              header, h1: {
                  marginBottom: "8px",
              },

              searchBox: {
                  display: "flex",
                  gap: "15px",
                  marginBottom: "30px",
                  flexWrap: "wrap",
              },

              input: {
                  padding: "14px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  width: "350px",
                  fontSize: "16px",
              },

              select: {
                  padding: "14px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "16px",
                  background: "white",
              },

              grid: {
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "25px",
              },

              card: {
                  background: "white",
                  borderRadius: "14px",
                  overflow: "hidden",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              },

              image: {
                  height: "140px",
                  background: "#e9eef5",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "60px",
              },

              cardBody: {
                  padding: "20px",
              },

              country: {
                  color: "#666",
              },

              info: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  margin: "15px 0",
                  fontSize: "14px",
              },

              button: {
                  width: "100%",
                  padding: "12px",
                  border: "none",
                  borderRadius: "8px",
                  background: "#2563eb",
                  color: "white",
                  fontSize: "15px",
                  cursor: "pointer",
              },

              noResults: {
                  textAlign: "center",
                  padding: "50px",
                  width: "100%",
              },
          }).select}
        >
          <option value="All">All Regions</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Middle East">Middle East</option>
          <option value="North America">North America</option>
        </select>
      </div>

      <div style={({
              container: {
                  minHeight: "100vh",
                  padding: "40px",
                  background: "#f5f7fb",
                  fontFamily: "Arial, sans-serif",
              },

              header: {
                  marginBottom: "30px",
              },

              header, h1: {
                  marginBottom: "8px",
              },

              searchBox: {
                  display: "flex",
                  gap: "15px",
                  marginBottom: "30px",
                  flexWrap: "wrap",
              },

              input: {
                  padding: "14px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  width: "350px",
                  fontSize: "16px",
              },

              select: {
                  padding: "14px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "16px",
                  background: "white",
              },

              grid: {
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "25px",
              },

              card: {
                  background: "white",
                  borderRadius: "14px",
                  overflow: "hidden",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              },

              image: {
                  height: "140px",
                  background: "#e9eef5",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "60px",
              },

              cardBody: {
                  padding: "20px",
              },

              country: {
                  color: "#666",
              },

              info: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  margin: "15px 0",
                  fontSize: "14px",
              },

              button: {
                  width: "100%",
                  padding: "12px",
                  border: "none",
                  borderRadius: "8px",
                  background: "#2563eb",
                  color: "white",
                  fontSize: "15px",
                  cursor: "pointer",
              },

              noResults: {
                  textAlign: "center",
                  padding: "50px",
                  width: "100%",
              },
          }).grid}>
        {filteredCities.length > 0 ? (
          filteredCities.map((city) => (
            <div key={city.id} style={({
                  container: {
                      minHeight: "100vh",
                      padding: "40px",
                      background: "#f5f7fb",
                      fontFamily: "Arial, sans-serif",
                  },

                  header: {
                      marginBottom: "30px",
                  },

                  header, h1: {
                      marginBottom: "8px",
                  },

                  searchBox: {
                      display: "flex",
                      gap: "15px",
                      marginBottom: "30px",
                      flexWrap: "wrap",
                  },

                  input: {
                      padding: "14px",
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      width: "350px",
                      fontSize: "16px",
                  },

                  select: {
                      padding: "14px",
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      fontSize: "16px",
                      background: "white",
                  },

                  grid: {
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                      gap: "25px",
                  },

                  card: {
                      background: "white",
                      borderRadius: "14px",
                      overflow: "hidden",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                  },

                  image: {
                      height: "140px",
                      background: "#e9eef5",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "60px",
                  },

                  cardBody: {
                      padding: "20px",
                  },

                  country: {
                      color: "#666",
                  },

                  info: {
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      margin: "15px 0",
                      fontSize: "14px",
                  },

                  button: {
                      width: "100%",
                      padding: "12px",
                      border: "none",
                      borderRadius: "8px",
                      background: "#2563eb",
                      color: "white",
                      fontSize: "15px",
                      cursor: "pointer",
                  },

                  noResults: {
                      textAlign: "center",
                      padding: "50px",
                      width: "100%",
                  },
              }).card}>
              <div style={({
                      container: {
                          minHeight: "100vh",
                          padding: "40px",
                          background: "#f5f7fb",
                          fontFamily: "Arial, sans-serif",
                      },

                      header: {
                          marginBottom: "30px",
                      },

                      header, h1: {
                          marginBottom: "8px",
                      },

                      searchBox: {
                          display: "flex",
                          gap: "15px",
                          marginBottom: "30px",
                          flexWrap: "wrap",
                      },

                      input: {
                          padding: "14px",
                          border: "1px solid #ddd",
                          borderRadius: "8px",
                          width: "350px",
                          fontSize: "16px",
                      },

                      select: {
                          padding: "14px",
                          border: "1px solid #ddd",
                          borderRadius: "8px",
                          fontSize: "16px",
                          background: "white",
                      },

                      grid: {
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                          gap: "25px",
                      },

                      card: {
                          background: "white",
                          borderRadius: "14px",
                          overflow: "hidden",
                          boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                      },

                      image: {
                          height: "140px",
                          background: "#e9eef5",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: "60px",
                      },

                      cardBody: {
                          padding: "20px",
                      },

                      country: {
                          color: "#666",
                      },

                      info: {
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
                          margin: "15px 0",
                          fontSize: "14px",
                      },

                      button: {
                          width: "100%",
                          padding: "12px",
                          border: "none",
                          borderRadius: "8px",
                          background: "#2563eb",
                          color: "white",
                          fontSize: "15px",
                          cursor: "pointer",
                      },

                      noResults: {
                          textAlign: "center",
                          padding: "50px",
                          width: "100%",
                      },
                  }).image}>
                🌆
              </div>

              <div style={({
                      container: {
                          minHeight: "100vh",
                          padding: "40px",
                          background: "#f5f7fb",
                          fontFamily: "Arial, sans-serif",
                      },

                      header: {
                          marginBottom: "30px",
                      },

                      header, h1: {
                          marginBottom: "8px",
                      },

                      searchBox: {
                          display: "flex",
                          gap: "15px",
                          marginBottom: "30px",
                          flexWrap: "wrap",
                      },

                      input: {
                          padding: "14px",
                          border: "1px solid #ddd",
                          borderRadius: "8px",
                          width: "350px",
                          fontSize: "16px",
                      },

                      select: {
                          padding: "14px",
                          border: "1px solid #ddd",
                          borderRadius: "8px",
                          fontSize: "16px",
                          background: "white",
                      },

                      grid: {
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                          gap: "25px",
                      },

                      card: {
                          background: "white",
                          borderRadius: "14px",
                          overflow: "hidden",
                          boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                      },

                      image: {
                          height: "140px",
                          background: "#e9eef5",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: "60px",
                      },

                      cardBody: {
                          padding: "20px",
                      },

                      country: {
                          color: "#666",
                      },

                      info: {
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
                          margin: "15px 0",
                          fontSize: "14px",
                      },

                      button: {
                          width: "100%",
                          padding: "12px",
                          border: "none",
                          borderRadius: "8px",
                          background: "#2563eb",
                          color: "white",
                          fontSize: "15px",
                          cursor: "pointer",
                      },

                      noResults: {
                          textAlign: "center",
                          padding: "50px",
                          width: "100%",
                      },
                  }).cardBody}>
                <h2>{city.name}</h2>

                <p style={({
                          container: {
                              minHeight: "100vh",
                              padding: "40px",
                              background: "#f5f7fb",
                              fontFamily: "Arial, sans-serif",
                          },

                          header: {
                              marginBottom: "30px",
                          },

                          header, h1: {
                              marginBottom: "8px",
                          },

                          searchBox: {
                              display: "flex",
                              gap: "15px",
                              marginBottom: "30px",
                              flexWrap: "wrap",
                          },

                          input: {
                              padding: "14px",
                              border: "1px solid #ddd",
                              borderRadius: "8px",
                              width: "350px",
                              fontSize: "16px",
                          },

                          select: {
                              padding: "14px",
                              border: "1px solid #ddd",
                              borderRadius: "8px",
                              fontSize: "16px",
                              background: "white",
                          },

                          grid: {
                              display: "grid",
                              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                              gap: "25px",
                          },

                          card: {
                              background: "white",
                              borderRadius: "14px",
                              overflow: "hidden",
                              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                          },

                          image: {
                              height: "140px",
                              background: "#e9eef5",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              fontSize: "60px",
                          },

                          cardBody: {
                              padding: "20px",
                          },

                          country: {
                              color: "#666",
                          },

                          info: {
                              display: "flex",
                              flexDirection: "column",
                              gap: "8px",
                              margin: "15px 0",
                              fontSize: "14px",
                          },

                          button: {
                              width: "100%",
                              padding: "12px",
                              border: "none",
                              borderRadius: "8px",
                              background: "#2563eb",
                              color: "white",
                              fontSize: "15px",
                              cursor: "pointer",
                          },

                          noResults: {
                              textAlign: "center",
                              padding: "50px",
                              width: "100%",
                          },
                      }).country}>
                  📍 {city.country}
                </p>

                <div style={({
                          container: {
                              minHeight: "100vh",
                              padding: "40px",
                              background: "#f5f7fb",
                              fontFamily: "Arial, sans-serif",
                          },

                          header: {
                              marginBottom: "30px",
                          },

                          header, h1: {
                              marginBottom: "8px",
                          },

                          searchBox: {
                              display: "flex",
                              gap: "15px",
                              marginBottom: "30px",
                              flexWrap: "wrap",
                          },

                          input: {
                              padding: "14px",
                              border: "1px solid #ddd",
                              borderRadius: "8px",
                              width: "350px",
                              fontSize: "16px",
                          },

                          select: {
                              padding: "14px",
                              border: "1px solid #ddd",
                              borderRadius: "8px",
                              fontSize: "16px",
                              background: "white",
                          },

                          grid: {
                              display: "grid",
                              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                              gap: "25px",
                          },

                          card: {
                              background: "white",
                              borderRadius: "14px",
                              overflow: "hidden",
                              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                          },

                          image: {
                              height: "140px",
                              background: "#e9eef5",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              fontSize: "60px",
                          },

                          cardBody: {
                              padding: "20px",
                          },

                          country: {
                              color: "#666",
                          },

                          info: {
                              display: "flex",
                              flexDirection: "column",
                              gap: "8px",
                              margin: "15px 0",
                              fontSize: "14px",
                          },

                          button: {
                              width: "100%",
                              padding: "12px",
                              border: "none",
                              borderRadius: "8px",
                              background: "#2563eb",
                              color: "white",
                              fontSize: "15px",
                              cursor: "pointer",
                          },

                          noResults: {
                              textAlign: "center",
                              padding: "50px",
                              width: "100%",
                          },
                      }).info}>
                  <span>
                    💰 Cost Index: <strong>{city.costIndex}</strong>
                  </span>

                  <span>
                    ⭐ Popularity: <strong>{city.popularity}%</strong>
                  </span>
                </div>

                <button
                  onClick={() => addToTrip(city)}
                  style={({
                      container: {
                          minHeight: "100vh",
                          padding: "40px",
                          background: "#f5f7fb",
                          fontFamily: "Arial, sans-serif",
                      },

                      header: {
                          marginBottom: "30px",
                      },

                      header, h1: {
                          marginBottom: "8px",
                      },

                      searchBox: {
                          display: "flex",
                          gap: "15px",
                          marginBottom: "30px",
                          flexWrap: "wrap",
                      },

                      input: {
                          padding: "14px",
                          border: "1px solid #ddd",
                          borderRadius: "8px",
                          width: "350px",
                          fontSize: "16px",
                      },

                      select: {
                          padding: "14px",
                          border: "1px solid #ddd",
                          borderRadius: "8px",
                          fontSize: "16px",
                          background: "white",
                      },

                      grid: {
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                          gap: "25px",
                      },

                      card: {
                          background: "white",
                          borderRadius: "14px",
                          overflow: "hidden",
                          boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                      },

                      image: {
                          height: "140px",
                          background: "#e9eef5",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: "60px",
                      },

                      cardBody: {
                          padding: "20px",
                      },

                      country: {
                          color: "#666",
                      },

                      info: {
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
                          margin: "15px 0",
                          fontSize: "14px",
                      },

                      button: {
                          width: "100%",
                          padding: "12px",
                          border: "none",
                          borderRadius: "8px",
                          background: "#2563eb",
                          color: "white",
                          fontSize: "15px",
                          cursor: "pointer",
                      },

                      noResults: {
                          textAlign: "center",
                          padding: "50px",
                          width: "100%",
                      },
                  }).button}
                >
                  + Add to Trip
                </button>
              </div>
            </div>
          ))
        ) : (
          <div style={({
                          container: {
                              minHeight: "100vh",
                              padding: "40px",
                              background: "#f5f7fb",
                              fontFamily: "Arial, sans-serif",
                          },

                          header: {
                              marginBottom: "30px",
                          },

                          header, h1: {
                              marginBottom: "8px",
                          },

                          searchBox: {
                              display: "flex",
                              gap: "15px",
                              marginBottom: "30px",
                              flexWrap: "wrap",
                          },

                          input: {
                              padding: "14px",
                              border: "1px solid #ddd",
                              borderRadius: "8px",
                              width: "350px",
                              fontSize: "16px",
                          },

                          select: {
                              padding: "14px",
                              border: "1px solid #ddd",
                              borderRadius: "8px",
                              fontSize: "16px",
                              background: "white",
                          },

                          grid: {
                              display: "grid",
                              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                              gap: "25px",
                          },

                          card: {
                              background: "white",
                              borderRadius: "14px",
                              overflow: "hidden",
                              boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                          },

                          image: {
                              height: "140px",
                              background: "#e9eef5",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              fontSize: "60px",
                          },

                          cardBody: {
                              padding: "20px",
                          },

                          country: {
                              color: "#666",
                          },

                          info: {
                              display: "flex",
                              flexDirection: "column",
                              gap: "8px",
                              margin: "15px 0",
                              fontSize: "14px",
                          },

                          button: {
                              width: "100%",
                              padding: "12px",
                              border: "none",
                              borderRadius: "8px",
                              background: "#2563eb",
                              color: "white",
                              fontSize: "15px",
                              cursor: "pointer",
                          },

                          noResults: {
                              textAlign: "center",
                              padding: "50px",
                              width: "100%",
                          },
                      }).noResults}>
            <h2>No cities found</h2>
            <p>Try another city or country.</p>
          </div>
        )}
      </div>
    </div>
  );
}


export default CitySearch;