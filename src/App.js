import { AiFillCaretDown } from "react-icons/ai";

import { useState } from "react";

import Sidebar from "./components/Sidebar";

function App() {
  const [profileOpen, setProfileOpen] = useState(false);
  return (
    <div className="main">
      <div className="logo">
        <ul className="logo_design">
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <h3>Cuddle</h3>
      </div>

      <div className="sidebar">
        <Sidebar />

        <button
          className="admit_btn"
          onClick={() => setProfileOpen((prev) => !prev)}
        >
          {" "}
          <span> A </span> Admit{" "}
          {!profileOpen ? <AiFillCaretDown /> : <AiFillCaretDown />}{" "}
        </button>

        {profileOpen && (
          <div className="admit_right">
            <button> My Account </button> <br />
            <button> Switch to Admin </button>
            <br />
            <button> Logout </button>
          </div>
        )}
      </div>

      <div>
        <div className="container">
          <header className="header_title">
            <input type="text" placeholder="write do you want" className="" />

            <button> Ask </button>
          </header>

          <div className="section_info">
            <p className="info">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tristique sollicitudin nibh sit amet. Interdum consectetur libero
              id faucibus nisl tincidunt eget nullam non. Euismod quis viverra
              nibh cras pulvinar mattis nunc sed blandit. Amet venenatis urna
              cursus eget nunc scelerisque. Integer feugiat scelerisque varius
              morbi enim nunc faucibus a. Viverra maecenas accumsan lacus vel
              facilisis volutpat est velit. Risus at ultrices mi tempus
              imperdiet nulla malesuada pellentesque elit. Ullamcorper a lacus
              vestibulum sed arcu non odio euismod. Tellus at urna condimentum
              mattis pellentesque id nibh tortor id. Felis donec et odio
              pellentesque diam. Tortor dignissim convallis aenean et tortor at
              risus viverra adipiscing. Elit ut aliquam purus sit amet luctus.
              Sed cras ornare arcu dui vivamus arcu felis bibendum ut. Morbi non
              arcu risus quis varius quam quisque. Curabitur gravida arcu ac
              tortor dignissim convallis aenean et. Enim blandit volutpat
              maecenas volutpat blandit aliquam etiam erat. Auctor urna nunc id
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tristique sollicitudin nibh sit amet. Interdum consectetur libero
              id faucibus nisl tincidunt eget nullam non. Euismod quis viverra
              nibh cras pulvinar mattis nunc sed blandit. Amet venenatis urna
              cursus eget nunc scelerisque. Integer feugiat scelerisque varius
              morbi enim nunc faucibus a. Viverra maecenas accumsan lacus vel
              facilisis volutpat est velit. Risus at ultrices mi tempus
              imperdiet nulla malesuada pellentesque elit. Ullamcorper a lacus
              vestibulum sed arcu non odio euismod. Tellus at urna condimentum
              mattis pellentesque id nibh tortor id. Felis donec et odio
              pellentesque diam. Tortor dignissim convallis aenean et tortor at
              risus viverra adipiscing. Elit ut aliquam purus sit amet luctus.
              Sed cras ornare arcu dui vivamus arcu felis bibendum ut. Morbi non
              arcu risus quis varius quam quisque. Curabitur gravida arcu ac
              tortor dignissim convallis aenean et. Enim blandit volutpat
              maecenas volutpat blandit aliquam etiam erat. Auctor urna nunc id
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tristique sollicitudin nibh sit amet. Interdum consectetur libero
              id faucibus nisl tincidunt eget nullam non. Euismod quis viverra
              nibh cras pulvinar mattis nunc sed blandit. Amet venenatis urna
              cursus eget nunc scelerisque. Integer feugiat scelerisque varius
              morbi enim nunc faucibus a. Viverra maecenas accumsan lacus vel
              facilisis volutpat est velit. Risus at ultrices mi tempus
              imperdiet nulla malesuada pellentesque elit. Ullamcorper a lacus
              vestibulum sed arcu non odio euismod. Tellus at urna condimentum
              mattis pellentesque id nibh tortor id. Felis donec et odio
              pellentesque diam. Tortor dignissim convallis aenean et tortor at
              risus viverra adipiscing. Elit ut aliquam purus sit amet luctus.
              Sed cras ornare arcu dui vivamus arcu felis bibendum ut. Morbi non
              arcu risus quis varius quam quisque. Curabitur gravida arcu ac
              tortor dignissim convallis aenean et. Enim blandit volutpat
              maecenas volutpat blandit aliquam etiam erat. Auctor urna nunc id
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tristique sollicitudin nibh sit amet. Interdum consectetur libero
              id faucibus nisl tincidunt eget nullam non. Euismod quis viverra
              nibh cras pulvinar mattis nunc sed blandit. Amet venenatis urna
              cursus eget nunc scelerisque. Integer feugiat scelerisque varius
              morbi enim nunc faucibus a. Viverra maecenas accumsan lacus vel
              facilisis volutpat est velit. Risus at ultrices mi tempus
              imperdiet nulla malesuada pellentesque elit. Ullamcorper a lacus
              vestibulum sed arcu non odio euismod. Tellus at urna condimentum
              mattis pellentesque id nibh tortor id. Felis donec et odio
              pellentesque diam. Tortor dignissim convallis aenean et tortor at
              risus viverra adipiscing. Elit ut aliquam purus sit amet luctus.
              Sed cras ornare arcu dui vivamus arcu felis bibendum ut. Morbi non
              arcu risus quis varius quam quisque. Curabitur gravida arcu ac
              tortor dignissim convallis aenean et. Enim blandit volutpat
              maecenas volutpat blandit aliquam etiam erat. Auctor urna nunc id
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tristique sollicitudin nibh sit amet. Interdum consectetur libero
              id faucibus nisl tincidunt eget nullam non. Euismod quis viverra
              nibh cras pulvinar mattis nunc sed blandit. Amet venenatis urna
              cursus eget nunc scelerisque. Integer feugiat scelerisque varius
              morbi enim nunc faucibus a. Viverra maecenas accumsan lacus vel
              facilisis volutpat est velit. Risus at ultrices mi tempus
              imperdiet nulla malesuada pellentesque elit. Ullamcorper a lacus
              vestibulum sed arcu non odio euismod. Tellus at urna condimentum
              mattis pellentesque id nibh tortor id. Felis donec et odio
              pellentesque diam. Tortor dignissim convallis aenean et tortor at
              risus viverra adipiscing. Elit ut aliquam purus sit amet luctus.
              Sed cras ornare arcu dui vivamus arcu felis bibendum ut. Morbi non
              arcu risus quis varius quam quisque. Curabitur gravida arcu ac
              tortor dignissim convallis aenean et. Enim blandit volutpat
              maecenas volutpat blandit aliquam etiam erat. Auctor urna nunc id
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tristique sollicitudin nibh sit amet. Interdum consectetur libero
              id faucibus nisl tincidunt eget nullam non. Euismod quis viverra
              nibh cras pulvinar mattis nunc sed blandit. Amet venenatis urna
              cursus eget nunc scelerisque. Integer feugiat scelerisque varius
              morbi enim nunc faucibus a. Viverra maecenas accumsan lacus vel
              facilisis volutpat est velit. Risus at ultrices mi tempus
              imperdiet nulla malesuada pellentesque elit. Ullamcorper a lacus
              vestibulum sed arcu non odio euismod. Tellus at urna condimentum
              mattis pellentesque id nibh tortor id. Felis donec et odio
              pellentesque diam. Tortor dignissim convallis aenean et tortor at
              risus viverra adipiscing. Elit ut aliquam purus sit amet luctus.
              Sed cras ornare arcu dui vivamus arcu felis bibendum ut. Morbi non
              arcu risus quis varius quam quisque. Curabitur gravida arcu ac
              tortor dignissim convallis aenean et. Enim blandit volutpat
              maecenas volutpat blandit aliquam etiam erat. Auctor urna nunc id
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tristique sollicitudin nibh sit amet. Interdum consectetur libero
              id faucibus nisl tincidunt eget nullam non. Euismod quis viverra
              nibh cras pulvinar mattis nunc sed blandit. Amet venenatis urna
              cursus eget nunc scelerisque. Integer feugiat scelerisque varius
              morbi enim nunc faucibus a. Viverra maecenas accumsan lacus vel
              facilisis volutpat est velit. Risus at ultrices mi tempus
              imperdiet nulla malesuada pellentesque elit. Ullamcorper a lacus
              vestibulum sed arcu non odio euismod. Tellus at urna condimentum
              mattis pellentesque id nibh tortor id. Felis donec et odio
              pellentesque diam. Tortor dignissim convallis aenean et tortor at
              risus viverra adipiscing. Elit ut aliquam purus sit amet luctus.
              Sed cras ornare arcu dui vivamus arcu felis bibendum ut. Morbi non
              arcu risus quis varius quam quisque. Curabitur gravida arcu ac
              tortor dignissim convallis aenean et. Enim blandit volutpat
              maecenas volutpat blandit aliquam etiam erat. Auctor urna nunc id
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tristique sollicitudin nibh sit amet. Interdum consectetur libero
              id faucibus nisl tincidunt eget nullam non. Euismod quis viverra
              nibh cras pulvinar mattis nunc sed blandit. Amet venenatis urna
              cursus eget nunc scelerisque. Integer feugiat scelerisque varius
              morbi enim nunc faucibus a. Viverra maecenas accumsan lacus vel
              facilisis volutpat est velit. Risus at ultrices mi tempus
              imperdiet nulla malesuada pellentesque elit. Ullamcorper a lacus
              vestibulum sed arcu non odio euismod. Tellus at urna condimentum
              mattis pellentesque id nibh tortor id. Felis donec et odio
              pellentesque diam. Tortor dignissim convallis aenean et tortor at
              risus viverra adipiscing. Elit ut aliquam purus sit amet luctus.
              Sed cras ornare arcu dui vivamus arcu felis bibendum ut. Morbi non
              arcu risus quis varius quam quisque. Curabitur gravida arcu ac
              tortor dignissim convallis aenean et. Enim blandit volutpat
              maecenas volutpat blandit aliquam etiam erat. Auctor urna nunc id
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
