'use client'

import React, { useEffect, useState } from "react";
 
import { usePathname } from 'next/navigation'
export default function Custom404() {
  const pathname = usePathname()
    useEffect(() => {
     window.location.assign(`https://animalnews29.xyz/${pathname}`)
     console.log("change")
  }, []);
return <div/>
}
