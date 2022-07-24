import React from 'react';



export default function Project({ name, image, deployedApp, repo }) {
  const styles = {
    container: {

    },
    overlay: {

    },
    text: {

    }
  }

  return (

    <div className={styles.container}>
      <img src={image} />

      <div className={styles.overlay}>

        <div className={styles.text}>

          <a href={deployedApp}>{name}</a>

          <br />

          <a href={repo}>GitHub Repository</a>

        </div>
      </div>
    </div>

  );
}

// maybe use a css file to enable a hover effect? Or maybe use a style sheet from the beginning?
// all parameters/arguments/whatever-they-are don't seem to be in the styles at all