import React from 'react';
import './style.less';
const Index = ({ list, active, setActive }) => {
  return (
    <div className="easy-tabs">
      {
        list.map((item) => {
          const isActice = active === item.value;
          return (
            <div 
              style={{ 
                color: isActice ? '#fff' : '',
                background: isActice? '#364F59': '',
                width: `calc(100% / ${list.length})`,
                boxShadow: isActice ? '0px 2px 6px #89c4dc': '',
              }}
              key={item.label}
              onClick={() => { setActive(item.value) }}>
              {item.label}
            </div>
          )
        })
      }
    </div>
  )
}

export default Index