import React from "react";
import Provider from "./Provider";

export default function ProviderList({providers}) {
    return (
      providers.map(provider => {
        return <Provider key={provider.emailAddress} provider={provider} />
      })
    )
}