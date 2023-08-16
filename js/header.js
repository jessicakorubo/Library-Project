window.customElements.define(
  "header-tag",
  class extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="header">
            <div class="logo">
                <img
                data-aos="fade-in"
                data-aos-duration="4000"
                src="../resources/images/L-removebg-preview.png"
                alt=""
                />
                <h4 data-aos="fade-in" data-aos-duration="4000">SSCN'S <span>LIBRARY</span></h4>
            </div>
            <div class="header-content">
              <div class="events">
                <a href="#">Upcoming Events</a>
              </div>
              <a href="../dashboard.html">
                <div class="admin">
                  <div class="admin-pic">
                    <i class="fa-solid fa-user"></i>
                  </div>
                </div>
              </a>
              </div>
        </div>
          `;
    }
  }
);
