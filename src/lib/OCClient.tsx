'use client';
import { useEffect } from "react";

export default function OCClient() {

    useEffect(() => {
        // 1️⃣ Load OC client script on the browser
        const script = document.createElement('script');
        script.src = 'https://oc-component.onrender.com/oc-client/client.js';
        script.async = true;
    
        document.body.appendChild(script);
      }, []);


    return null;
}