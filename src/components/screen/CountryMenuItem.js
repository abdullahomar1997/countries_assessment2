import React from 'react';

export const CountryMenuItem  = ({ country }) => {
  const {
    name = 'Kuwait',
    flag = 'https://flagcdn.com/w320/kw.png',
  } = country;

  return (
    <div style={Item}>
      <img style={ItemImage} src={flag} alt="Flag" />
      <p style={ItemText}>{name}</p>
    </div>
  );
};

const Item = {
  flex: "1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "110px",
  borderRadius: "8px",
  padding: "20px",
  flexDirection: "column",
}

const ItemImage = {
  width: "80%",
  height: "80%",
  borderRadius: "10px",
  marginTop: "5px",
  border: "1px solid black",
  objectFit: "contain",
}

const ItemText = {
  fontSize: "20px",
  fontWeight: "bold",
  height: "20%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width:"100%",
  color: "black",
}
