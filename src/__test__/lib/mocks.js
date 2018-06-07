import Color from '../../model/color';

mocks.color = {};
mocks.color.createOne = () => {
  let result = {};

  return new Color({
    hex: '#00D3FF',
    rgb: '0 211 255',
    colorRange: 'blue',
  }).save()
    .then(color => {
      result.color = color;
      return result;
    });
};

mocks.color.removeAll = () => {
  Promise.all([Color.remove()]);
};
