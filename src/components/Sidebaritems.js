import { useState } from "react";

export default function SidebarItem({ item }) {
  const [open, setOpen] = useState(false);

  if (item.childrens) {
    return (
      <>
        <div className={open ? "sidebar_item open" : "sidebar_item"}>
          <div className="sidebar_title">
            <span>
              <i className="bi-list"></i>
              {item.title}
            </span>

            <i
              className="bi-chevron-down toggle-btn"
              onClick={() => setOpen(!open)}
            ></i>
          </div>

          <div className="sidebar_content">
            {item.childrens.map((child, index) => (
              <SidebarItem key={index} item={child} />
            ))}
          </div>
        </div>
      </>
    );
  } else {
    <a href={item.path || "#"} className="sidebar_item">
      <span>
        <i className="bi-list"></i>

        {item.title}
      </span>
    </a>;
  }
}
