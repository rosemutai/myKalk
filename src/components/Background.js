import React from 'react'

const Background = ({ children }) => {
  return (
    <body className="bg-slate-100 dark:bg-blackish transition-all">
            {children}
    </body>
  )
}

export default Background