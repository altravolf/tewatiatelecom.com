class cusServFlot extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="services">
      <div class="container">

        <div class="row">
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up">
            <div class="icon-box icon-box-pink">
              <div class="icon"><i class="bx bxl-dribbble"></i></div>
              <h4 class="title"><a href="">Fun Fact</a></h4>
              <p class="description">Towers can be found atop water towers, churches, windmills, silos, industry smoke
                stacks, schools, other buildings and even artificial trees.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div class="icon-box icon-box-cyan">
              <div class="icon"><i class="bx bx-file"></i></div>
              <h4 class="title"><a href="">Achievement</a></h4>
              <p class="description">We create the technology to connect the world. We are a large network company and
                not restricted to just the telecom space.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <div class="icon-box icon-box-green">
              <div class="icon"><i class="bx bx-tachometer"></i></div>
              <h4 class="title"><a href="">High Speed Internet</a></h4>
              <p class="description">To create a truly digital India will require a foundation of high-speed,
                high-quality broadband, both wired and wireless.</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <div class="icon-box icon-box-blue">
              <div class="icon"><i class="bx bx-world"></i></div>
              <h4 class="title"><a href="">24x7 Service</a></h4>
              <p class="description">To give real service you must add something which cannot be bought or measured with
                money, and that is sincerity and integrity.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
        `
    }
}

customElements.define("cus-servflot", cusServFlot);