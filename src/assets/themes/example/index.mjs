export const vars = {
  text: {
    dark: '#212121',
  },

  neutral: 'green',
}

export default (v = {}) => {
  v = { ...vars, ...v }

  return {
    '.hello': {
      color: vars.neutral,
    },
  }
}
