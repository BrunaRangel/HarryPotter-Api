import React, { useState, useEffect} from "react";
import { api }  from "../../services/api"

export function Main() {

    const [list, setList] = useState([])

    useEffect(() => {
        api.get()
            .then(response => setList(response.data))
        console.log(api.get())
    },[])

  return (
    <div>
        {list.map((item,index) => <p key={index}>{item.name}</p>)}
    </div>
  )
}

