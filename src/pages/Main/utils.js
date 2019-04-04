import React from "react";

export const columns = [
    {
      Header: 'Nome',
      accessor: 'tname', // String-based value accessors!
      maxWidth: 300
    },
    {
      Header: 'Tipo',
      accessor: 'tgroup', // String-based value accessors!
      maxWidth: 200
    },
    {
      Header: 'Período',
      accessor: 'tdate', // String-based value accessors!
      style: { textAlign: "center" },
      maxWidth: 200
    },
    {
      Header: 'Status',
      accessor: 'done_flag', // String-based value accessors!
      Cell: row => (
        <input 
          type="checkbox" 
          onclick="this.form.submit();"
          style={{
          }}
          ></input>
            
      ),
      maxWidth: 100
    },
    {
      Header: 'Editar',
      accessor: 'task_id',
      // accessor: 'done_flag', // String-based value accessors!
      maxWidth: 100
    },
  ]

  export const tam = 5