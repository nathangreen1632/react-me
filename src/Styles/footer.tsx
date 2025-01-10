export const footer = {
  footer: {
    display: 'flex-box',
    flexDirection: 'flex-column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '10vh',
    backgroundColor: '#282c34',
    color: 'lightblue',
    padding: '10px',

    button: {
      backgroundColor: '#61dafb',
      border: 'none',
      borderRadius: '5px',
      color: '#282c34',
      padding: '10px 20px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#21a1f1',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#20232a',
      color: 'white',
      fontSize: '24px',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      color: '#ffffff',
    },
    textCenter: {
      textAlign: 'center',
    },
  },
  logo: {
    height: '10px',
    pointerEvents: 'true',
  },
  link: {
    color: '#61dafb',
  },
}

export default footer;