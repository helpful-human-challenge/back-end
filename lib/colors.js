const Color = require('../model/color');
const server = require('../lib/server');

const colors = [
  {
    hex: '#ff3380',
    colorRange: 'red',
  },
  {
    hex: '#ff3333',
    colorRange: 'red',
  },
  {
    hex: '#ffa233',
    colorRange: 'orange',
  },
  {
    hex: '#f5b261',
    colorRange: 'orange',
  },
  {
    hex: '#fff933',
    colorRange: 'yellow',
  },
  {
    hex: '#ffffc7',
    colorRange: 'yellow',
  },
  {
    hex: '#3fff33',
    colorRange: 'green',
  },
  {
    hex: '#cfffc7',
    colorRange: 'green',
  },
  {
    hex: '#33ffff',
    colorRange: 'blue',
  },
  {
    hex: '#3333ff',
    colorRange: 'blue',
  },
  {
    hex: '#9333ff',
    colorRange: 'purple',
  },
  {
    hex: '#f333ff',
    colorRange: 'purple',
  },
  {
    hex: '#9b7b5e',
    colorRange: 'brown',
  },
  {
    hex: '#4d3b2a',
    colorRange: 'brown',
  },
  {
    hex: '#f6f6f6',
    colorRange: 'gray',
  },
  {
    hex: '#676767',
    colorRange: 'gray',
  },
  // red values
  {
    hex: '#ff0000',
    colorRange: 'red',
  },
  {
    hex: '#ff1a1a',
    colorRange: 'red',
  },
  {
    hex: '#ff4d4d',
    colorRange: 'red',
  },
  {
    hex: '#ff6666',
    colorRange: 'red',
  },
  {
    hex: '#ff8080',
    colorRange: 'red',
  },
  {
    hex: '#ff9a9a',
    colorRange: 'red',
  },
  {
    hex: '#ffcdcd',
    colorRange: 'red',
  },
  {
    hex: '#ffe6e6',
    colorRange: 'red',
  },
  {
    hex: '#e60000',
    colorRange: 'red',
  },
  {
    hex: '#cd0000',
    colorRange: 'red',
  },
  {
    hex: '#b30000',
    colorRange: 'red',
  },
  {
    hex: '#800000',
    colorRange: 'red',
  },
  {
    hex: '#660000',
    colorRange: 'red',
  },
  {
    hex: '#4d0000',
    colorRange: 'red',
  },
  {
    hex: '#330000',
    colorRange: 'red',
  },
  {
    hex: '#1a0000',
    colorRange: 'red',
  },
  // orange values
  {
    hex: '#ff8000',
    colorRange: 'orange',
  },
  {
    hex: '#ff8d1a',
    colorRange: 'orange',
  },
  {
    hex: '#ff9a33',
    colorRange: 'orange',
  },
  {
    hex: '#ffa64d',
    colorRange: 'orange',
  },
  {
    hex: '#ffc080',
    colorRange: 'orange',
  },
  {
    hex: '#ffcd9a',
    colorRange: 'orange',
  },
  {
    hex: '#ffdab3',
    colorRange: 'orange',
  },
  {
    hex: '#ffe6cd',
    colorRange: 'orange',
  },
  {
    hex: '#fff3e6',
    colorRange: 'orange',
  },
  {
    hex: '#e67300',
    colorRange: 'orange',
  },
  {
    hex: '#cd6600',
    colorRange: 'orange',
  },
  {
    hex: '#b35a00',
    colorRange: 'orange',
  },
  {
    hex: '#9a4d00',
    colorRange: 'orange',
  },
  {
    hex: '#804000',
    colorRange: 'orange',
  },
  {
    hex: '#663300',
    colorRange: 'orange',
  },
  {
    hex: '#4d2600',
    colorRange: 'orange',
  },
  {
    hex: '#331a00',
    colorRange: 'orange',
  },
  {
    hex: '#1a0d00',
    colorRange: 'orange',
  },
  // yellow values
  {
    hex: '#ffff00',
    colorRange: 'yellow',
  },
  {
    hex: '#ffff1a',
    colorRange: 'yellow',
  },
  {
    hex: '#ffff33',
    colorRange: 'yellow',
  },
  {
    hex: '#ffff4d',
    colorRange: 'yellow',
  },
  {
    hex: '#ffff66',
    colorRange: 'yellow',
  },
  {
    hex: '#ffff80',
    colorRange: 'yellow',
  },
  {
    hex: '#ffff9a',
    colorRange: 'yellow',
  },
  {
    hex: '#ffffb3',
    colorRange: 'yellow',
  },
  {
    hex: '#ffffcd',
    colorRange: 'yellow',
  },
  {
    hex: '#ffffe6',
    colorRange: 'yellow',
  },
  {
    hex: '#e6e600',
    colorRange: 'yellow',
  },
  {
    hex: '#cdcd00',
    colorRange: 'yellow',
  },
  {
    hex: '#b3b300',
    colorRange: 'yellow',
  },
  {
    hex: '#808000',
    colorRange: 'yellow',
  },
  {
    hex: '#666600',
    colorRange: 'yellow',
  },
  {
    hex: '#4d4d00',
    colorRange: 'yellow',
  },
  {
    hex: '#333300',
    colorRange: 'yellow',
  },
  {
    hex: '#1a1a00',
    colorRange: 'yellow',
  },
  // green values
  {
    hex: '#00ff00',
    colorRange: 'green',
  },
  {
    hex: '#1aff1a',
    colorRange: 'green',
  },
  {
    hex: '#33ff33',
    colorRange: 'green',
  },
  {
    hex: '#4dff4d',
    colorRange: 'green',
  },
  {
    hex: '#66ff66',
    colorRange: 'green',
  },
  {
    hex: '#80ff80',
    colorRange: 'green',
  },
  {
    hex: '#9aff9a',
    colorRange: 'green',
  },
  {
    hex: '#b3ffb3',
    colorRange: 'green',
  },
  {
    hex: '#cdffcd',
    colorRange: 'green',
  },
  {
    hex: '#e6ffe6',
    colorRange: 'green',
  },
  {
    hex: '#00e600',
    colorRange: 'green',
  },
  {
    hex: '#00cd00',
    colorRange: 'green',
  },
  {
    hex: '#00b300',
    colorRange: 'green',
  },
  {
    hex: '#009a00',
    colorRange: 'green',
  },
  {
    hex: '#006600',
    colorRange: 'green',
  },
  {
    hex: '#004d00',
    colorRange: 'green',
  },
  {
    hex: '#003300',
    colorRange: 'green',
  },
  {
    hex: '#001a00',
    colorRange: 'green',
  },
  // blue values
  {
    hex: '#0080ff',
    colorRange: 'blue',
  },
  {
    hex: '#1a8dff',
    colorRange: 'blue',
  },
  {
    hex: '#339aff',
    colorRange: 'blue',
  },
  {
    hex: '#4da6ff',
    colorRange: 'blue',
  },
  {
    hex: '#66b3ff',
    colorRange: 'blue',
  },
  {
    hex: '#80c0ff',
    colorRange: 'blue',
  },
  {
    hex: '#9acdff',
    colorRange: 'blue',
  },
  {
    hex: '#cde6ff',
    colorRange: 'blue',
  },
  {
    hex: '#e6f3ff',
    colorRange: 'blue',
  },
  {
    hex: '#0073e6',
    colorRange: 'blue',
  },
  {
    hex: '#0066cd',
    colorRange: 'blue',
  },
  {
    hex: '#004d9a',
    colorRange: 'blue',
  },
  {
    hex: '#004080',
    colorRange: 'blue',
  },
  {
    hex: '#003366',
    colorRange: 'blue',
  },
  {
    hex: '#000d1a',
    colorRange: 'blue',
  },
  // purple values
  {
    hex: '#8000ff',
    colorRange: 'purple',
  },
  {
    hex: '#8d1aff',
    colorRange: 'purple',
  },
  {
    hex: '#9a33ff',
    colorRange: 'purple',
  },
  {
    hex: '#a64dff',
    colorRange: 'purple',
  },
  {
    hex: '#b366ff',
    colorRange: 'purple',
  },
  {
    hex: '#c080ff',
    colorRange: 'purple',
  },
  {
    hex: '#cd9aff',
    colorRange: 'purple',
  },
  {
    hex: '#dab3ff',
    colorRange: 'purple',
  },
  {
    hex: '#e6cdff',
    colorRange: 'purple',
  },
  {
    hex: '#f3e6ff',
    colorRange: 'purple',
  },
  {
    hex: '#7300e6',
    colorRange: 'purple',
  },
  {
    hex: '#6600cd',
    colorRange: 'purple',
  },
  {
    hex: '#5a00b3',
    colorRange: 'purple',
  },
  {
    hex: '#4d009a',
    colorRange: 'purple',
  },
  {
    hex: '#400080',
    colorRange: 'purple',
  },
  {
    hex: '#330066',
    colorRange: 'purple',
  },
  {
    hex: '#26004d',
    colorRange: 'purple',
  },
  {
    hex: '#1a0033',
    colorRange: 'purple',
  },
  {
    hex: '#0d001a',
    colorRange: 'purple',
  },
  // brown values
  {
    hex: '#804d1a',
    colorRange: 'brown',
  },
  {
    hex: '#805a33',
    colorRange: 'brown',
  },
  {
    hex: '#807366',
    colorRange: 'brown',
  },
  {
    hex: '#4d2e0f',
    colorRange: 'brown',
  },
  {
    hex: '#4d361f',
    colorRange: 'brown',
  },
  {
    hex: '#4d3d2e',
    colorRange: 'brown',
  },
  {
    hex: '#4d453d',
    colorRange: 'brown',
  },
  // gray values
  {
    hex: '#ffffff',
    colorRange: 'gray',
  },
  {
    hex: '#e6e6e6',
    colorRange: 'gray',
  },
  {
    hex: '#cdcdcd',
    colorRange: 'gray',
  },
  {
    hex: '#b3b3b3',
    colorRange: 'gray',
  },
  {
    hex: '#9a9a9a',
    colorRange: 'gray',
  },
  {
    hex: '#808080',
    colorRange: 'gray',
  },
  {
    hex: '#666666',
    colorRange: 'gray',
  },
  {
    hex: '#4d4d4d',
    colorRange: 'gray',
  },
  {
    hex: '#333333',
    colorRange: 'gray',
  },
  {
    hex: '#1a1a1a',
    colorRange: 'gray',
  },
  {
    hex: '#000000',
    colorRange: 'gray',
  },
];


const insertColors = (colors) => {
  colors.map(color => {
    return new Color(color).save()
      .then(console.log('insert many complete'))
      .catch(error => console.log(error));
  });
};

// insertColors(colors);
