import React from 'react'

export default function Provider({ provider }) {
    return (
        <tr>
            <td>{provider.firstName}</td>
            <td>{provider.lastName}</td>
            <td>{provider.npiNumber}</td>
            <td>{provider.businessAddress}</td>
            <td>{provider.telephoneNumber}</td>
            <td>{provider.emailAddress}</td>
        </tr>
    )
}
