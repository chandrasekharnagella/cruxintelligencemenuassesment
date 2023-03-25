import SidebarItem from "./Sidebaritems";

import items from "./Lists.json";

export default function Sidebar() {
  return (
    <div>
      {items.map((item, index) => (
        <SidebarItem key={index} {...item} item={item} />
      ))}
    </div>
  );
}
