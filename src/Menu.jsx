import React from "react";
import "./Menu.css";

function Menu() {
  return (
    <div>
      <div class="menu-container">
        <input type="checkbox" id="openmenu" class="hamburger-checkbox" />

        <div class="hamburger-icon">
          <label for="openmenu" id="hamburger-label">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="menu-pane">
          <nav>
            <ul class="menu-links">
              <li>
                <a href="###">Québec, QC</a>
                <span id="QC-info">
                  <p>+1 418-640-3300</p>
                </span>
              </li>

              <li>
                <a href="###">déjeuner</a>
              </li>
              <li>
                <a href="###">boulangerie</a>
              </li>
              <li>
                <a href="###">boissons</a>
              </li>
            </ul>
            <ul class="menu-links">
              <li>
                <a href="###">Washington, DC</a>
                <span id="DC-info">
                  <p>+1 202-472-3850</p>
                </span>
              </li>

              <li>
                <a href="###">breakfast</a>
              </li>
              <li>
                <a href="###">bakery</a>
              </li>
              <li>
                <a href="###">bar</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Menu;
