import React from 'react'

export default function Tag(props) {
    const {name} = props
    const styleTag={
       // flex: 1,
       width: 200,
       height: 50,
       justifyContent: 'center',
       //padding: "30px",
       backgroundColor: '#FFD700',
       marginTop: "10px",
       border: "solid 1px ", 
       borderRadius: '10px',
       cursor: "pointer",
    }
    const styleTagName={
        fontSize: 13,
        marginTop: '17px',
        marginLeft: "20px",
        fontFamily: 'Helvetica',
        fontWeight: '200',
        textAlign: "center",
    }
    return (
        <div style={styleTag}>
            <h5 style={styleTagName}>{name}</h5>
        </div>
    )
}
