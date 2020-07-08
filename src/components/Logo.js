import React from 'react'


function Logo() {
    const iconTitle = 'VIKTOR NESPOLO PEIXOTO'
    const subtTitle = 'WEB DEVELOPER'
    const divStyles = {
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: '10px',
        position: 'fixed',
        backgroundColor: '#ffffff',
        top: '1vw',
        left: '20vw',
        bottom: '1vw',
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

    return (
    <div style={divStyles} onClick={() => (console.log("ah lelek"))}>
        <p style={titleStyle}>{iconTitle}</p>
        <p style={subTitleStyle}>{subtTitle}</p>
    </div>
    )
}

export default Logo