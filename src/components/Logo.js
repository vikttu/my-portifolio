import React from 'react'


function Logo() {
    const iconTitle = 'VIKTOR NESPOLO PEIXOTO'
    const subtTitle = 'WEB DEVELOPER'
    const styles = {
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: '10px',
        position: 'fixed',
        backgroundColor: '#ffffff',
        top: '0',
        left: '20vw',
        bottom: '0',
        right: '20vw',
        padding: '1vw',
        textAlign: 'center',
        textJustify: 'interWord'
    }
    const titleStyle = {
        fontSize: '11vw',
        fontWeight: 'bold',
        margin: '1vw',
    }
    const subTitleStyle = {
        fontSize: '1.3vw',
        fontWeight: 'normal',
        margin: '1vw'
    }

    //    if () {

  //  }

    return (
    <div style={styles}>
        <p style={titleStyle}>{iconTitle}</p>
        <p style={subTitleStyle}>{subtTitle}</p>
    </div>
    )
}

export default Logo